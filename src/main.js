import '@/index.css'
import {
    createApp
} from 'vue'
import App from '@/App.vue'
import router from '@/logic/router'
import feathers from '@feathersjs/client'
import sio from 'socket.io-client'

const app = createApp(App)

const socket = sio('https://api.vueplay.io', {
    transports: ['websocket', 'polling']
})

const io = feathers()
io.configure(feathers.socketio(socket))
io.configure(feathers.authentication())

let boot = async () => {

    try {
        await io.reAuthenticate()
    } catch (e) { }

    router.beforeEach(async () => {
        try {
            let user = await io.reAuthenticate()
            localStorage.setItem('user', JSON.stringify(user))
        } catch (e) {
            localStorage.setItem('user', null)
        }
    })

    app.provide('io', io)
    app.use(router)
    app.mount('#app')

}

boot()