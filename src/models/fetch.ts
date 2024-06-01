import { db } from "../firebaseconfig/firebase";

// fetching user details
export const getUserDetails = (email: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.collection("users").doc(email).get();
            if(user.exists){
                resolve(user.data());
            }
        } catch (error) {
            reject(error);
        }
    });
}
