import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const usePostsStore = defineStore('posts', () => {
   function getPosts() {
    let a = fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(data=>{
      return data
    })
    return a
  }
  
  return {getPosts}
})
