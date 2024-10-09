// // Image upload using axios                    ;
// import axios from 'axios'

// // Image upload
// export const imageUpload = async image => {
//   const formData = new FormData()
//   formData.append('image', image)
//   const { data } = await axios.post(
//     `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`,
//     formData
//   )
//   return data.data.display_url
// }



// Image upload using fetch
export const imageUpload = async image => {
    const formData = new FormData();
    formData.append('image', image);
  
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMGBB_API_KEY}`, {
      method: 'POST',
      body: formData
    });
  
    const result = await response.json();
    return result.data.display_url;
  };
  




// import { gapi } from 'gapi-script';

// // Step 1: Authenticate the user and obtain an access token
// export const authenticate = async () => {
//     const client_id = import.meta.env.VITE_GOOGLE_CLIENT_ID;
//     const discovery_docs = ["https://www.googleapis.com/discovery/v1/apis/drive/v3/rest"];
//     const scopes = 'https://www.googleapis.com/auth/drive.file';
  
//     return new Promise((resolve, reject) => {
//       gapi.load('client:auth2', () => {
//         gapi.auth2.init({
//           client_id,
//           discoveryDocs,
//           scope: scopes
//         }).then(() => {
//           gapi.auth2.getAuthInstance().signIn().then(user => {
//             const accessToken = user.getAuthResponse().access_token;
//             resolve(accessToken);
//           }).catch(reject);
//         });
//       });
//     });
//   };


// // Step 2: Upload file to Google Drive
// export const fileUpload = async (file, accessToken) => {
//     const formData = new FormData();
//     formData.append('file', file);
  
//     const metadata = {
//       name: file.name, // File name in Google Drive
//       mimeType: file.type // MIME type of the file
//     };
  
//     formData.append('metadata', new Blob([JSON.stringify(metadata)], { type: 'application/json' }));
  
//     const response = await fetch('https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart', {
//       method: 'POST',
//       headers: {
//         'Authorization': `Bearer ${accessToken}`
//       },
//       body: formData
//     });
  
//     const result = await response.json();
//     return result.id; // Return the uploaded file's ID
//   };



// // Usage Example
// const handleFileUpload = async (file) => {
//     try {
//       const accessToken = await authenticate(); // Step 1: Authenticate and get token
//       const fileId = await fileUpload(file, accessToken); // Step 2: Upload file
//       console.log('File uploaded, ID:', fileId);
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };
  
  