import { db, firebase} from '../firebaseconfig/firebase'

type user ={
    user_id: string,
    email: string,  
    username: string,
    profile_picture: string,
    bio: string,
    link: string
    gender: string[],
    followers: string[],
    following: string[],
    followersRequset: string[],
    followingRequest: string[],
    events_notification: string[],
    chat_notification: string[],
    saved_posts: string[],
    close_friends: string[],
    favorite_users: string[],
    muted_users: string[],
    created_at: string,
    country: string
}

export const addUser = (user: user, currentUserEmail: string) =>{
    return new Promise(async (resolve, reject) =>{
        try {
            const newUser = {
                email: user.email,
                username: user.username,
                name: user.username,
                profile_picture: user.profile_picture,
                status: 'seen'
            }
            await db
                .collection('users')
                .doc(currentUserEmail)
                .collection('chat')
                .doc(user.email)
                .set(newUser)
        } catch (error) {
            reject(error)
        }
    })
}