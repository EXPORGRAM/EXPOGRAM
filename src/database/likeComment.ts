import { db, firebase } from "../firebaseconfig/firebase";

export const likeComment = (singleComment: any, tagetedIndex: number, allcomments: any, user_email: string, post_id: string,currentUserEmail: string): Promise<object[] | string | any>=> {
    return new Promise(async (resolve, reject): Promise<void> =>{
        try {
            const currentLikesStatus = singleComment.likes_by_users.includes(
                currentUserEmail
            )

            let updatedValues = allcomments

            if(currentLikesStatus === true){
                updatedValues[tagetedIndex].likes_by_users = updatedValues[
                    tagetedIndex
                ].likes_by_users.replace(currentUserEmail+ ',', '')
            }else{
                updatedValues[tagetedIndex].likes_by_users += currentUserEmail + ','
            }

            await db
                    .collection('users')
                    .doc(user_email)
                    .collection('Post')
                    .doc(post_id)
                    .update({
                        comments: updatedValues
                    })

            resolve(updatedValues)
        } catch (error) {
            reject(error)
        }
    })
}