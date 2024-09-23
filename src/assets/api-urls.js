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
  },
  "user":{
    "getList": {url:"/user",method: 'get'},
  },

  "pateint": {
    "getArchive": { url: "/pateint_archive/:param1",method:'get'}
  }

}
