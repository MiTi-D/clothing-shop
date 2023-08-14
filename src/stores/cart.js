
import { ref, computed,onMounted } from 'vue'
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', () => {
    const carts = ref([])
    const price = ref(0)
    
    function addCart(id, title, image, cartPrice) {
        price.value = 0 
        const cartItem = carts.value.find(cart => cart.id === id)
        if (cartItem) {
            cartItem.quantity++
        }else{
        carts.value.push({ id, title, image, price: cartPrice,quantity:1 });       
        }
        carts.value.forEach((cart) => {
            price.value += (cart.price*cart.quantity);
        });
        localStorage.setItem('carts',JSON.stringify(carts.value))
    }
    onMounted(() => {
        let localCart = JSON.parse(localStorage.getItem('carts')) 
        for (const cart of localCart) {
            carts.value.push(cart)
        }
        carts.value.forEach((cart) => {
            price.value += (cart.price*cart.quantity);
        });
    })
    return { addCart, carts, price }
})