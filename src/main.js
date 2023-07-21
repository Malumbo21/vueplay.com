import '@/index.css'
import {
    createApp,
    ref,
    computed
} from 'vue'
import App from '@/App.vue'
import router from '@/logic/router'
import feathers from '@feathersjs/client'
import sio from 'socket.io-client'

const user = ref()
const app = createApp(App)
const socket = sio('https://api.vueplay.io', {
    transports: ['websocket', 'polling']
})
const io = feathers()
io.configure(feathers.socketio(socket))
io.configure(feathers.authentication())

let boot = async () => {

    try {
        user.value = (await io.reAuthenticate())?.user
    } catch (e) { }

    router.beforeEach(async () => {
        try {
            user.value = (await io.reAuthenticate())?.user
        } catch (e) {
            user.value = null
        }
    })

    app.provide('io', io)
    app.provide('user', computed(() => user?.value))
    app.provide('reAuthenticate', async () => {
        try {
            user.value = (await io.reAuthenticate())?.user
        } catch (e) { }
    })
    app.provide('login', async () => {
        try {
            user.value = (await io.reAuthenticate())?.user
        } catch (e) { }
        return user.value // fallback
    })
    app.use(router)
    app.mount('#app')

}

boot()