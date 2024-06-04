import { db,firebase } from "../firebaseconfig/firebase"

export const uploadPost = ( username: string, user_id: string, email: string, profile_picture: string, imageUrl: string[] ,caption: string, Hastag: string[] ): Promise<any> =>{
    return new Promise(async (resolve,reject): Promise<void> =>{
       try {
        const newPost = {
            username: username,
            user_id: user_id,
            email: email,
            profile_picture: profile_picture,
            imageUrl: imageUrl,
            caption: caption,
            Hastag: Hastag,
            created_at: firebase.firestore.FieldValue.serverTimestamp(),
            likes_by_users: [],
            new_likes: [],
            comments: []
        }
        await db
        .collection("users")
        .doc(email)
        .collection("Post")
        .add(newPost)
        resolve(true)
       } catch (error) {
        reject(error)
       }
    })
}
