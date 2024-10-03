// these are every urls used in the app 
// "getProfile": "/user/:param1" // when you need to pass params to the url

export default  {
  "example":{
    "event":{url:'/asd/asd:param1:param2',method:'post'}
  },
  "auth": {
    // "signUp": {url:"/auth/register",method:'post'},
    "login": {url:"/user/sign_in",method: 'post'},
    "getProfile": {url:"/user/get_me",method: 'get'},
    "updateMe": {url:"/user/update_me",method: 'post'},
    "updatePassword": { url: "/user/update_password",method: 'post' },
    "updatePhoneNumber": {url:"/user/update_phoneNumber",method: 'post'}
  },
  "user":{
    "getList": {url:"/user",method: 'get'},
  },

  "pateint": {
    "searchPateint": {url:"/pateint/search",method: 'get'},
    "getArchive": { url: "/pateint_archive/:param1",method:'get'}
  }

}
