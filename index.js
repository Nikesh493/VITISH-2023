function myFunction(){
    Email.send({
      SecureToken : "43dd6b74-3d13-42a9-8e2f-979e26939f8d",
      To : "nikesh4493@gmail.com",
      From : "curdrice017@gmail.com",
      Subject : "emergency",
      Body : "I am in danger, http://172.16.40.122/",
      })
   .then(function (message) {
           alert("message sent successfully")
         });
   reset();
   return false;
 };