import educationLogon from "@/view/educationLogon.vue";
import personalSenter from "@/view/personalSenter.vue";
import MyPersonal from "@/view/MyPersonal.vue";
import HiddenData from "@/view/HiddenData.vue";
import LunTan from "@/view/LunTan.vue";
import DaTi from "@/view/DaTi.vue";
import MyTask from "@/view/myTask.vue";
import vueRouter from 'vue-router'
import Vue from "vue";
import Axios from "axios";


Vue.use(vueRouter)


const router=   new vueRouter({
        routes: [
            {
                path: '/educationLogon',
                component: educationLogon
            }
            ,
            {
                path: '/personalSenter',
                component: personalSenter
            },
            {
                path: '/MyPersonal',
                component: MyPersonal
            }
            ,
            {
                path: '',
                redirect: '/educationLogon'
            }
            ,

            {
                path:'/HiddenData',
                component:HiddenData,
                hidden:true

            },
            {
                path:'/LunTan',
                component:LunTan,


            },
            {
                path:'/DaTi',
                component:DaTi
            },
            {
                path:'/Task',
                component:MyTask
            }


        ],
        mode: "history"
    }
)
router.beforeEach((to, from, next)=>{
    if(to.path==='/educationLogon'||to.path==='/personalSenter'){
        next()

    }
    else{
        Axios.interceptors.request.use(
            config => {
                if (localStorage.getItem('token')) {
                    config.headers.token = JSON.parse(localStorage.getItem('token'));
                }
                return config;
            },
            error => {
                return Promise.reject(error);
            });
        next();
    }
})
export default router;
// vueRouter.beforeEach((to, from, next) => {
//     if (to.path === '/personalSenter') {
//         next();
//     } else {
//         let token = localStorage.getItem('token');
//         if (token === null || token === '') {
//             Message.warning('请登录')
//             next('/personalSenter');
//         } else {
//             next();
//         }
//     }
// });

