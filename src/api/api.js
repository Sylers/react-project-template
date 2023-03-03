import axios from "axios";

export const getRequest = async (url) => (
    await axios({
      url,
      method: 'get',
    })
).data;

export const postRequest = async (url, method, data) => (
    await axios({
      url,
      method: method || 'post',
      data:data,
    })
).data;

export const postRequestWithHeaders = async (url, method, data, headers) => (
    await axios({
      url,
      method: method || 'post',
      data:data,
      headers
    })
).data;

/* 
  To download files from a server
  This works for file that needs authentication too
  using Bearer token which has been setup in the setup
  function in utils/appUtils.
*/
// export const downloadFile = async (url) => {
//   axios({
//     url, //your url
//     method: 'GET',
//     responseType: 'blob', // important
//   }).then((response) => {
//     // create file link in browser's memory
//     const href = URL.createObjectURL(response.data);

//     // create "a" HTML element with href to file & click
//     const link = document.createElement('a');
//     link.href = href;
//     link.setAttribute('download', 'file.pdf'); //or any other extension
//     document.body.appendChild(link);
//     link.click();

//     // clean up "a" element & remove ObjectURL
//     document.body.removeChild(link);
//     URL.revokeObjectURL(href);
//   });
// }
