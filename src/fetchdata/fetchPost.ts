import { limit } from "firebase/firestore"
import { db, firebase, getFirestore, collection, getDocs, query, orderBy } from "../firebaseconfig/firebase"

type post = {
    username: string,
    user_id: string,
    email: string,
    profile_picture: string,
    imageUrl: string,
    caption: string,
    Hastag: string[],
    created_at: string,
    likes_by_users: string[],
    new_likes: string[],
    comments: string[]
}

export const fetchAllPost = (): Promise<post[]> =>{
    return new Promise(async (resolve, reject) =>{
        try {
            const usercollectionref = collection(db,"users")
            const allusersSnapshot = await getDocs(usercollectionref)
            let allPost: post[] = []
            for(const userDoc of allusersSnapshot.docs){
                const email = userDoc.id
                const postsCollectionRef = collection(db, `users/${email}/Post`)
                const postsQuery = query(postsCollectionRef, orderBy('created_at', 'desc'), limit(2))
                const allpostSnapshot = await getDocs(postsQuery)
                allpostSnapshot.forEach((postDoc) =>{
                    const postData = postDoc.data() as post; // Explicitly type the data as 'post'
                    allPost.push({  ...postData });
                })
            } 
            resolve(allPost)
        } catch (error) {
            reject(error)
        }
    })
}

// async function test() {
//     await fetchAllPost().then((succ) =>{
//         console.log(succ)
//     }).catch((fail) =>{
//         console.log(fail)
//     })
// }
// test()
