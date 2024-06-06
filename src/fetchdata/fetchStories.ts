import { db, firebase } from "../firebaseconfig/firebase";

export const fetchstories = () => {
    return new Promise(async (resolve, reject) => {
        try {
            firebase
            .firestore()
            .collectionGroup('stories')
            .onSnapshot((snapshot) => {
                const stories = snapshot.docs.map((doc) =>{
                    return ( { id: doc.id, ...doc.data() })
                })
                resolve(stories)
            })
        } catch (error) {
            reject(error)
        }
    })
}