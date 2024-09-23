import { defineStore } from "pinia";
// vue
import { ref } from "vue";

export const use_user_store= defineStore('user-store',()=>{
  
  // this array items have thier corespondant( same string ) urlRef on the "api-urls" Asset file
  const api_calls = ['create','getList','getOne','update','deleteUser']
  const user_store_apicalls_statusholder_obj = ref({})

  const page = ref(1)
  const perPage = ref(10) 

  const user = ref(null)
  const users = ref([
    {
      "_id": "64d5e519ad123fed0d0e35e6",
      "body": "answer to my new Question as Anon answer to my new Question as Anon",
      "upvotes": 1,
      "downvotes": 0,
      "userVote": 1,
      "accepted": true,
      "isAnon": true,
      "createdAt": "2023-08-11T07:36:57.802Z",
      "updatedAt": "2023-08-11T08:15:48.603Z",
    },
    {
      "_id": "64d5e519ad123fed0d0e35e3",
      "body": "answer to my new Question as Anon answer to my new Question as Anon",
      "upvotes": 1,
      "downvotes": 0,
      "userVote": 1,
      "accepted": true,
      "isAnon": true,
      "createdAt": "2023-08-11T07:36:57.802Z",
      "updatedAt": "2023-08-11T08:15:48.603Z",
    },
    {
      "_id": "64d5e519ad123fed0d0e35e4",
      "body": "answer to my new Question as Anon answer to my new Question as Anon",
      "upvotes": 1,
      "downvotes": 0,
      "userVote": 1,
      "accepted": true,
      "isAnon": true,
      "createdAt": "2023-08-11T07:36:57.802Z",
      "updatedAt": "2023-08-11T08:15:48.603Z",
    },{
      "_id": "64d5e519ad123fed0d0e35e5",
      "body": "answer to my new Question as Anon answer to my new Question as Anon",
      "upvotes": 1,
      "downvotes": 0,
      "userVote": 1,
      "accepted": true,
      "isAnon": true,
      "createdAt": "2023-08-11T07:36:57.802Z",
      "updatedAt": "2023-08-11T08:15:48.603Z",
    },
    {
      "_id": "64d5e519ad123fed0d0e35e66",
      "body": "answer to my new Question as Anon answer to my new Question as Anon",
      "upvotes": 1,
      "downvotes": 0,
      "userVote": 1,
      "accepted": true,
      "isAnon": true,
      "createdAt": "2023-08-11T07:36:57.802Z",
      "updatedAt": "2023-08-11T08:15:48.603Z",
    },
    {
      "_id": "64d5e519ad123fed0d0e35e67",
      "body": "answer to my new Question as Anon answer to my new Question as Anon",
      "upvotes": 1,
      "downvotes": 0,
      "userVote": 1,
      "accepted": true,
      "isAnon": true,
      "createdAt": "2023-08-11T07:36:57.802Z",
      "updatedAt": "2023-08-11T08:15:48.603Z",
    },{
      "_id": "64d5e519ad123fed0d0e35e11",
      "body": "answer to my new Question as Anon answer to my new Question as Anon",
      "upvotes": 1,
      "downvotes": 0,
      "userVote": 1,
      "accepted": true,
      "isAnon": true,
      "createdAt": "2023-08-11T07:36:57.802Z",
      "updatedAt": "2023-08-11T08:15:48.603Z",
    }
    ,{
      "_id": "64d5e519ad123fed0d0e35e21",
      "body": "answer to my new Question as Anon answer to my new Question as Anon",
      "upvotes": 1,
      "downvotes": 0,
      "userVote": 1,
      "accepted": true,
      "isAnon": true,
      "createdAt": "2023-08-11T07:36:57.802Z",
      "updatedAt": "2023-08-11T08:15:48.603Z",
    },{
      "_id": "64d5e519ad123fed0d0e35e991",
      "body": "answer to my new Question as Anon answer to my new Question as Anon",
      "upvotes": 1,
      "downvotes": 0,
      "userVote": 1,
      "accepted": true,
      "isAnon": true,
      "createdAt": "2023-08-11T07:36:57.802Z",
      "updatedAt": "2023-08-11T08:15:48.603Z",
    },{
      "_id": "64d5e519ad123fed4d0e35e21",
      "body": "answer to my new Question as Anon answer to my new Question as Anon",
      "upvotes": 1,
      "downvotes": 0,
      "userVote": 1,
      "accepted": true,
      "isAnon": true,
      "createdAt": "2023-08-11T07:36:57.802Z",
      "updatedAt": "2023-08-11T08:15:48.603Z",
    }

  ])

  return {
    api_calls,
    user_store_apicalls_statusholder_obj,

    page,
    perPage,

    user,
    users,
  }

})