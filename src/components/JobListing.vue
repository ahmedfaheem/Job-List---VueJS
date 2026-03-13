<script setup>
import JobCard from '@/components/JobCard.vue';
import JobData    from '@/jobs.json'
import { ref, defineProps } from 'vue';


const Jobs = ref(JobData);

 defineProps({
    limit: Number,
    showAllButton:{
        type: Boolean,
        default: false
    },
    
})


</script>



<template>
    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
             
              <JobCard v-for="(job, index) in Jobs.slice(0, limit ||  Jobs.length)" :job="job" :key="index" />

            </div>
        </div>
    </section>

     <section v-if="showAllButton" class="m-auto max-w-lg my-10 px-6">
      <a
        href="/jobs"
        class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >View All Jobs</a
      >
    </section>
</template>