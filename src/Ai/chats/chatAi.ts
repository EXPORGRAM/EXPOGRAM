import { model,chatSession } from "../AiConfig/config";

export const useChat = (text: string, image?: string) =>{
    return new Promise( async(resolve, reject) =>{
        try {
            if(text && image){
              if(image){
                const results = await model.generateContent([
                    text,
                    {inlineData: {data:image, mimeType: 'image/png'}}
                ])
                resolve(results.response.text())
              }
            }else{
                const result = await chatSession.sendMessage(text)
                resolve(result.response.text())
            }
        } catch (error) {
            reject(error)
        }
    })
}

// async function test(){
//     await useChat('Hello').then((succ) =>{ 
//         console.log(succ)
//     }).catch((fail) =>{
//         console.log(fail)
//     })
    
// }
// test()