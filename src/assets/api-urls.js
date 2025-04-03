// these are every urls used in the app 
// "getProfile": "/user/:param1" // when you need to pass params to the url
// globally_res_feedback:{ err:true, succ_msg: 'event-happend successfully'} // if we want the err || succ res to be handled globally
export default  {
  "auth": {
    // "signUp": {url:"/auth/register",method:'post'},
    "login": {url:"/user/sign_in",method: 'post'},
    "getProfile": {url:"/user/get_me",method: 'get',globally_res_feedback:{err:true}},
    "updateMe": {url:"/user/update_me",method: 'post'},
    "updatePassword": { url: "/user/update_password",method: 'post' },
    "updatePhoneNumber": {url:"/user/update_phoneNumber",method: 'post'}
  },
  "user":{
    "getList": {url:"/user/users",method: 'get',globally_res_feedback:{ err:true}},
    "createUser":{url:"/user/create",method: 'post',globally_res_feedback:{ err:true,succ_msg: 'employee-registered successfully'}},
  },
  "pateint": {
    "searchPateint": {url:"/pateint/search",method: 'get',globally_res_feedback:{ err:true}},
    "getArchive": { url: "/pateint_archive/:param1",method:'get',globally_res_feedback:{ err:true}},
    "registerPateint": { url: "/pateint/register_pateint/",method:'post'}
  },
  "custom_invoice": {
    "create": {url:"/custom_invoice",method: 'post'},
    "getList": {url:"/custom_invoice",method: 'get',globally_res_feedback:{ err:true}}
  },
  "invoice":{
    "getList": {url:"/invoice",method: 'get',globally_res_feedback:{ err:true}},
  },
  "credit":{
    "getList": {url:"/credit",method: 'get',globally_res_feedback:{ err:true}},
  },
  "deposite":{
    "getList": {url:"/deposite",method: 'get',globally_res_feedback:{ err:true}},
  },
  "insurance":{
    "create": {url:"/insurance",method: 'post'},
    "getList": {url:"/insurance",method: 'get'},
    "get_insurance_invoices": {url:"/insurance/invoices?populate=invoices",method: 'get'},
  },
  "store":{
    "create": {url:"/store",method: 'post'},
    "getList": {url:"/store",method: 'get',globally_res_feedback:{ err:true}},
    "requested_items":{url:"/store/requested_items",method: 'get',globally_res_feedback:{ err:true}},
  },
  "department":{
    "getList": {url:"/department",method: 'get',globally_res_feedback:{ err:true}},
    "create": {url:"/department",method: 'post'},
  },
  "employee":{
    "getList": {url:"/employee",method: 'get',globally_res_feedback:{ err:true}},
    "register": {url:"/employee/register",method: 'post',globally_res_feedback:{ succ_msg: 'employee-registered successfully'}},
  },
  "attendance":{
    "getList": {url:"/attendance",method: 'get',globally_res_feedback:{ err:true}},
  }
}

