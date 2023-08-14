import { createRouter , createWebHashHistory } from "vue-router";
import Home from '../view/Home.vue'
import Posts from '../view/Posts.vue'
import Products from '../view/Products.vue'
import SinglePost from '../view/SinglePost.vue'
import Cart from '../view/Cart.vue'
import NotFound from '../view/NotFound.vue'
const routes = [
    { path: '/',name:"home", component: Home },
    { path: '/posts',name:"posts", component: Posts},
    {path:'/posts/:id',name:"Singlepost",component:SinglePost},
    { path: '/Products',name:"products", component: Products },
    { path: '/cart',name:"cart", component: Cart },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound }
]
const router = createRouter({
    history:createWebHashHistory(),
    routes
})
export default router