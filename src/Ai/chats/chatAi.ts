import { format } from "path";
import { uploadToGemini,chatSession } from "../AiConfig/config";
// import { saveChat } from '../History/chatAiDb'
// import { db, firebase } from '../../firebaseconfig/firebase'
import { imageToBlob } from "../urtils/utils";
let url = 'https://gemini.google.com'

const useChat = (text: string, imageUrl?: string) =>{
    return new Promise( async(resolve, reject) =>{
        try {
            let reply
            if(text && imageUrl){
                const image: Blob | undefined = await imageToBlob(imageUrl)
                const formatData = new FormData()
                if(image){
                    formatData.append('image', image)
                    formatData.append('text', text)
                }
                const response = await fetch(url, {
                    method: 'POST',
                    body: formatData
                })
                console.log(response)
                if(!response.ok){
                    reject('error')
                }
                const data = await response.json()
                resolve(data)
                // const file = await uploadToGemini(imageUrl, "image/jpeg")
                // reply = await chatSession.sendMessage(text, {files: [file]})
                // resolve(reply.response.text())
            }
            reply = await chatSession.sendMessage(text)
            resolve(reply.response.text())
        } catch (error) {
            reject(error)
        }
    })
}

async function test(){
    await useChat('explain what is on the picture', 'https://cff2.earth.com/uploads/2022/12/16142438/Black-bears-2-scaled.jpg').then((succ) =>{ 
        console.log(succ)
    }).catch((fail) =>{
        console.log(fail)
    })
    
}

test()