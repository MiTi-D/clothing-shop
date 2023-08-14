import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
export const useProductsStore = defineStore('products', () => {
   function getProducts() {
    let a = fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data=>{
      return data
    })
    return a
  }
  
  return {getProducts}
})
