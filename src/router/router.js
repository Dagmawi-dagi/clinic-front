import { createRouter, createWebHistory } from 'vue-router';
// progressbar
import { progress_bar } from '../main';
// store
import { use_auth_store } from '../stores/auth';
import { use_util_store } from '../stores/util-store';
import { storeToRefs } from 'pinia';


const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return  savedPosition
    return { top: 0, left: 0 }
  },
  history: createWebHistory(import.meta.env.BASE_URL),

  // // things to pass to a route meta
  //   meta :{
  //     title: 'login', 
  //     auth: false, // if the page is only for logged in users
  //     restrict: ['a','b'], // if the page is for specific user types
  //     search: { // for search functionalty on this route // the search result will be saved on store[result]
  //       store: '',
  //       store_result: '', 
  //     },
  //     filter: { // for filter functionalty on this route // the filter result will be saved on store[result]
  //       store: '',
  //       store_result:''
  //     },
  //     other_info:{
  //       // here the navs we have on the application
  //     }
  //   },

  routes: [

    // -----------------user routes------------------------//

    {
      path:'/login',
      name:'login',
      meta:{ 
        title: 'login', 
      },
      beforeEnter:(to,from,next)=>{
        if (window.localStorage.getItem('token') ) return next('/')
        next()
      },
      component : ()=>import ('../views/auth/login_.vue'),
    },

    {
      path:'/user-profile',
      name:'user-profile',
      meta:{ 
        title: 'user-profile',
        auth: true 
      },
      component : ()=>import ('../views/user/user-profile.vue'),
    },

    //---------------END of user Routes ------------------//
    {
      path:'/',
      name:'home',
      meta:{ 
        title: 'home', 
        auth: true
      },
      component : ()=>import ('../views/test_.vue'),
    },
    // ----------------------- pateint routes ---------------------------//
    {
      path:'/pateint/:id',
      name:'pateint',
      meta:{ 
        title: 'pateint', 
        auth: true
      },
      component : ()=>import ('../views/pateint/pateint_.vue'),
    },
    {
      path:'/pateint/register',
      name:'register-pateint',
      meta:{ 
        title: 'register-pateint', 
        auth: true
      },
      component : ()=>import ('../views/pateint/register-pateint.vue'),
    },
    // ---------------------End of pateint routes -------------------//

    {
      path:'/employee/:id',
      name:'employee',
      meta:{ 
        title: 'employee', 
        auth: true 
      },
      component : ()=>import ('../views/employee/employee_.vue'),
    },
    

    {
      path:'/:catchAll(.*)',
      name:'page-not-found',
      meta: {
        title: '404 page-not-found'
      },
      component: ()=>import ('../views/404-page-not-found.vue'),
    }
  ]
})

router.beforeEach(  (to,from,next)=>{
  // set the state of the routing and init the progress bar
  const { route_resovled } = storeToRefs(use_util_store())
  route_resovled.value = false
  progress_bar.start();
  next()
})

router.beforeResolve((to,from,next) => {
  // if the route is auth Protectd and there is No logged in user redirect them to login page
  const { logged_in_user } = storeToRefs(use_auth_store())
  if (!logged_in_user.value && to.meta.auth ) return next('/login')
  // restrict the user if we have logged in user 
  if ( to.meta.restrict && !to.meta.restrict.includes( logged_in_user.value.role) ) return next(false)
  next()
})

router.afterEach((to)=>{
  console.log('afterEach');
  // set the state of the routing
  const { route_resovled } = storeToRefs(use_util_store())
  route_resovled.value = true
  // set the page title  
  document.title = `Z | ${to.meta.title} `
  // end the progress bar
  progress_bar.done()
})


export default router