import {db, firebase} from '../../firebaseconfig/firebase'

export const initiateChat = (curreUserEmail: string, chatId: string, text: string, aiReply: string, imageUrl?: string): Promise<string> =>{
    return new Promise(async (resolve, reject): Promise<void> =>{
        try {
            const newChat = {
                user: text,
                imageUrl: imageUrl,
                Ai: aiReply,
                created_at: firebase.firestore.FieldValue.serverTimestamp()
            }
            const store = await db
               .collection('users')
               .doc(curreUserEmail)
               .collection('chat with ai')
               .add(newChat)
        resolve(store.id)  
        } catch (error) {
            reject(error as string)
        }
    })
}

export const updateChatWithAi = (currentUserEmail: string, chatId: string, text: string, aiReply: string, imageUrl?: string) => {
    return new Promise(async (resolve, reject) =>{
        try {
            const snapshot = await db
                .collection('users')
                .doc(currentUserEmail)
                .collection('chat with ai')
                .doc(chatId)
                .get()

            if(snapshot.exists){
                const chatRef = snapshot.ref
                const newChat = {
                    user: text,
                    imageUrl: imageUrl,
                    Ai: aiReply,
                    created_at: firebase.firestore.FieldValue.serverTimestamp()
                }
                await chatRef.update({
                    chat: firebase.firestore.FieldValue.arrayUnion(newChat)
                })
                resolve('Chat updated')
            }
        } catch (error) {
            
        }
    })
}