import {
    createRouter,
    createWebHistory
} from 'vue-router'

const routes = [{
    path: '/',
    component: () => import('@/views/About.vue')
},
{
    path: '/features',
    component: () => import('@/views/Features.vue')
},
{
    path: '/pricing',
    component: () => import('@/views/Pricing.vue')
},
{
    path: '/documentation',
    component: () => import('@/views/Documentation.vue'),
    children: [{
        path: '',
        component: () => import('@/docs/Introduction.vue')
    },
    {
        path: 'keyboard-shortcuts',
        component: () => import('@/docs/KeyboardShortcuts.vue')
    },
    {
        path: 'deployment',
        component: () => import('@/docs/Deployment.vue')
    },
    {
        path: 'faq',
        component: () => import('@/docs/FAQ.vue')
    },
    {
        path: 'limitations',
        component: () => import('@/docs/Limitations.vue')
    },
    {
        path: 'composition-api',
        component: () => import('@/docs/CompositionAPI.vue')
    },
    {
        path: 'typescript',
        component: () => import('@/docs/Typescript.vue')
    },
    {
        path: 'v-bind',
        component: () => import('@/docs/VBind.vue')
    }
    ]
},
{
    path: '/feedback',
    component: () => import('@/views/Feedback.vue')
},
{
    path: '/feedback/:id',
    component: () => import('@/views/Post.vue'),
    props: true
},
{
    path: '/search',
    component: () => import('@/views/Search.vue')
},
{
    path: '/search/:id',
    component: () => import('@/views/Component.vue'),
    props: true
},
{
    path: '/support',
    component: () => import('@/views/Support.vue')
},
{
    path: '/terms-of-service',
    component: () => import('@/views/TermsOfService.vue')
},
{
    path: '/privacy-policy',
    component: () => import('@/views/PrivacyPolicy.vue')
},
{
    path: '/data-deletion',
    component: () => import('@/views/DataDeletion.vue')
},
{
    path: '/release-log',
    component: () => import('@/views/ReleaseLog.vue')
}
]

const router = createRouter({
    history: createWebHistory("/"),
    routes,
    scrollBehavior(to, from, savedPosition) {
        return {
            top: 0
        }
    }
})

export default router