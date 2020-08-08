import { useState, useEffect } from 'react';
import { useFirebase } from "../firebase/FirebaseContext";


const useStorage = (file) => {
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  
  const { database, storage } = useFirebase();


  useEffect(() => {
    // references
    const storageRef = storage.ref(file.name);
    const collectionRef = database.collection('images');
    
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();

      await collectionRef.add({ url });
      setUrl(url);
    });
  }, [file]);

  return { progress, url, error };
}

export default useStorage;