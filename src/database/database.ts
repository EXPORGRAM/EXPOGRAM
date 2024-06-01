import { db,firebase } from "../firebaseconfig/firebase";

export const storeUserDetails = (uid: string, email: string, username: string, country: string) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.collection("users").add({
                user_id: uid,
                email: email,
                username: username,
                profifile_picture: "",
                bio: "",
                linkk: "",
                gender: ["prefer not say", ""],
                followers: [],
                following: [],
                followersRequset: [],
                followingRequest: [],
                events_notification: [],
                chat_notification: [],
                saved_posts: [],
                close_friends: [],
                favorite_users: [],
                muted_users: [],
                created_at: firebase.firestore.FieldValue.serverTimestamp(),
                country: country
            });
            resolve(true);
        } catch (error) {
            reject(error);
        }
    });
}