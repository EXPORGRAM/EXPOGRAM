import { firebase } from "../firebaseconfig/firebase";  
import { storeUserDetails } from "../database/database";

export const onRegister = (email: string,username: string, password: string, country: string): Promise<boolean> => {
    return new Promise(async (resolve, reject): Promise<void>=> {  
        try {
            const authUsers = await firebase.auth().createUserWithEmailAndPassword(email, password);
            if(authUsers.user?.uid && authUsers.user.email){
                const create = await storeUserDetails(authUsers.user.uid,authUsers.user.email, username, country);
                if(create){
                    resolve(true);
                }
            }
        } catch (error) {
            reject(error);
        }
    })
}

// Function to log in to an existing user account
export const onLogin = (email: string, password: string): Promise<boolean| any> => {
    return new Promise(async (resolve, reject): Promise<void> => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
            resolve(true);
        } catch (error) {
            //console.log(error)
            reject(error);
        }
    })
}