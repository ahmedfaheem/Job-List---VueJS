import { createRouter, createWebHistory } from "vue-router";
import Home from '@/views/Home.vue';
import Jobs from '@/views/Jobs.vue';
import NotFound from '@/views/404.vue';
import AddJob from '@/views/AddJob.vue';
import JobDetails from "@/views/JobDetails.vue";
const Router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/jobs',
            name: 'jobs',
            component: Jobs
        },
        {
           path: '/job/:id',
           name: 'job-details',
           component: JobDetails
        },
        {
          path: '/jobs/add',
            name: 'add-job',
            component: AddJob
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'not-found',
            component: NotFound
        }
    ]
});

export default Router;