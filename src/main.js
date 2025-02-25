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

const socketAuthUsers = sio('https://auth.vueplay.io', {
    transports: ['websocket', 'polling']
})
const authUsers = feathers()
const socketClient = feathers.socketio(socketAuthUsers)
authUsers.configure(socketClient)
authUsers.configure(feathers.authentication())
authUsers.use('users', socketClient.service('users'), {
    methods: ['count']
})

let boot = async () => {

    try {
        user.value = (await io.reAuthenticate())?.user
    } catch (e) {}

    router.beforeEach(async () => {
        try {
            user.value = (await io.reAuthenticate())?.user
        } catch (e) {
            user.value = null
        }
    })

    app.provide('io', io)
    app.provide('authUsers', authUsers)
    app.provide('user', computed(() => user?.value))
    app.provide('reAuthenticate', async () => {
        try {
            user.value = (await io.reAuthenticate())?.user
        } catch (e) {}
    })
    app.provide('login', async () => {
        try {
            user.value = (await io.reAuthenticate())?.user
        } catch (e) {}
        return user.value // fallback
    })
    app.provide('logout', async () => {
        await io.logout()
        user.value = null
        return user.value
    })
    app.use(router)
    app.mount('#app')

}

boot()