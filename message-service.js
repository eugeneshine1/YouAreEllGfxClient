export default class MessageService {

   getAllMessages() {
       const request = new XMLHttpRequest();

       new Promise(function (resolve, reject) {
           // Setup our listener to process completed requests
           request.onload = function () {
               // Process the response
               if (request.status >= 200 && request.status < 300) {
                   const threads = JSON.parse(request.responseText); // 'This is the returned text.'
                   resolve(threads);
               } else {
                   reject({
                       status: request.status,
                       statusText: request.statusText
                   });
               }
           };

           request.open("GET", "http://zipcode.rocks:8085/messages");

           request.send();
       }).then(successCallback, errorCallback);

      function successCallback(response) {
             // This data comes from the resolve method
             console.log(response);
      }
      function errorCallback(response) {
             // This data comes from the reject method
             console.log(response);
      }
   }

}