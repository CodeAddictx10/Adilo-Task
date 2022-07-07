import App from "@/App.vue";
import Records from "@/pages/Records.vue";
import NewRecording from "@/pages/NewRecording.vue";
import {
    createRouter,
    createWebHistory,
    type RouteRecordRaw,
} from "vue-router";

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Recordings",
        component: Records,
    },
    {
        path: "/new-record",
        name: "NewRecording",
        component: NewRecording,
    },
];
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
});

export default router;
