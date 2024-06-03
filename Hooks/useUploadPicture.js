  import { useState } from "react";
  import firebase from "firebase/compat";
  import "firebase/compat/storage";
import { storage } from "../dist/firebaseconfig/firebase";
import { ref, uploadBytesResumable } from "firebase/storage";

const useUploadPicture = () => {
    const [uploading, setUploading] = useState(false);

    const uploadPicture = async (uri, folder, name) => {
        if (!uploading) {
          setUploading(true);
          try { 
            const response = await fetch(uri);
            const blob = await response.blob();
            const storageRef = ref(storage, `${folder}/${name}`+Date.now()+'.jpg')

            const uploadTask = uploadBytesResumable(storageRef, blob)

            uploadTask.on("state_changed", (snapshot) => {
              const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              console.log("Upload is " + progress + "% done");
            });

            await uploadTask;
    
            const downloadUrl = await storageRef.getDownloadURL();
            return downloadUrl;

          } catch (error) {
            console.error(error);
          } finally {
            setUploading(false);
          }
        }
      };

      return {
        uploadPicture,
        uploading
      }
  }

export default useUploadPicture;