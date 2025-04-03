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
        //  infinit_scroll:{ // if the page has infinite scroll
        //     custom_el: String, //  if the el that the infinit directive expects is nor the RouterView Element
        //     urlRef: 'user-getList',
        //     store_ref: 'user',
        //     onSucSaveTheJsonOn: "users",
        //     distance: 20,
        //   } 
  //     }
  //   },

  routes: [
    {
      path:'/',
      name:'home',
      meta:{ 
        title: 'home', 
        auth: true
      },
      component : ()=>import ('../views/test_.vue'),
      redirect: '/pateint/register'
    },

    // -----------------user routes------------------------//

    {
      path:'/login',
      name:'login',
      meta:{ 
        title: 'login', 
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
    {
      path:'/users',
      name:'users',
      meta:{ 
        title: 'users',
        auth: true 
      },
      component : ()=>import ('../views/user/users_.vue'),
    },
    {
      path:'/user/create',
      name:'create-user',
      meta:{ 
        title: 'sign-up',
        auth: true 
      },
      component : ()=>import ('../views/user/create_.vue'),
    },

    
    //---------------END of user Routes ------------------//
    
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
    {
      path:'/pateints',
      name:'pateints',
      meta:{ 
        title: 'pateints', 
        auth: true,
        other_info:{
         infinit_scroll:{ // if the page has infinite scroll
            url_ref: 'pateint-searchPateint',
            store_ref: 'pateint',
            onSucSaveTheJsonOn: "pateints",
            distance: 20,
          },
        }
      },
      component : ()=>import ('../views/pateint/pateints_.vue'),
    },

    {
      path:'/invoices',
      name:'invoices-queue',
      meta:{ 
        title: 'invoices-queue', 
        auth: true,
        other_info:{
          infinit_scroll:{ // if the page has infinite scroll
             url_ref: 'invoice-getList',
             store_ref: 'invoice',
             onSucSaveTheJsonOn: "invoices",
             distance: 20,
           },
         }
      },
      component : ()=>import ('../views/finance/invoice_list.vue'),
    },
    {
      path:'/credits',
      name:'pateint-credits',
      meta:{ 
        title: 'pateint-credits', 
        auth: true,
        other_info:{
          infinit_scroll:{ // if the page has infinite scroll
             url_ref: 'credit-getList',
             store_ref: 'credit',
             onSucSaveTheJsonOn: "credits",
             distance: 20,
           },
         }
      },
      component : ()=>import ('../views/finance/credits_.vue'),
    },
    {
      path:'/deposites',
      name:'pateint-deposites',
      meta:{ 
        title: 'pateint-deposites', 
        auth: true,
        other_info:{
          infinit_scroll:{ // if the page has infinite scroll
             url_ref: 'deposite-getList',
             store_ref: 'deposite',
             onSucSaveTheJsonOn: "deposites",
             distance: 20,
           },
         }
      },
      component : ()=>import ('../views/finance/deposites_.vue'),
    },

    {
      path:'/insurance-registration',
      name:'insurance-registration',
      meta:{ 
        title: 'insurance-registration', 
        auth: true,
      },
      component : ()=>import ('../views/finance/insurance-registration.vue'),
    },
    {
      path:'/insurance-invoices',
      name:'insurance-invoices',
      meta:{ 
        title: 'insurance-invoices', 
        auth: true,
      },
      component : ()=>import ('../views/finance/insurance-invoices.vue'),
    },
    {
      path:'/insurance-companies',
      name:'insurance-companies',
      meta:{ 
        title: 'insurance-companies', 
        auth: true,
      },
      component : ()=>import ('../views/finance/insurance-companies.vue'),
    },

    {
      path:'/store-add-item',
      name:'store-add',
      meta:{ 
        title: 'store-add-item', 
        auth: true,
      },
      component : ()=>import ('../views/store/add_item.vue'),
    },
    {
      path:'/store-items',
      name:'store-items',
      meta:{ 
        title: 'store-items', 
        auth: true,
      },
      component : ()=>import ('../views/store/items_.vue'),
    },
    {
      path:'/store-requested-items',
      name:'store-requested-items',
      meta:{ 
        title: 'store-requested-items', 
        auth: true,
      },
      component : ()=>import ('../views/store/requested_tems.vue'),
    },
    {
      path:'/my-store-history',
      name:'my-store-history',
      meta:{ 
        title: 'store-requested-items', 
        auth: true,
      },
      component : ()=>import ('../views/store/my_store_history.vue'),
    },
    {
      path:'/departments',
      name:'departments',
      meta:{ 
        title: 'departments', 
        auth: true,
      },
      component : ()=>import ('../views/departments_.vue.vue'),
    },
    {
      path:'/create-department',
      name:'create-department',
      meta:{ 
        title: 'create-department', 
        auth: true,
      },
      component : ()=>import ('../views/department/create-department.vue'),
    },

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
      path:'/employee/register',
      name:'employee-register',
      meta:{ 
        title: 'employee', 
        auth: true 
      },
      component : ()=>import ('../views/employee/register_employee.vue'),
    },
    {
      path:'/employees',
      name:'employees',
      meta:{ 
        title: 'employees', 
        auth: true 
      },
      component : ()=>import ('../views/HR/employees_.vue'),
    },

    {
      path:'/attendances',
      name:'attendances',
      meta:{ 
        title: 'attendance', 
        auth: true 
      },
      component : ()=>import ('../views/employee/attendance_.vue'),
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