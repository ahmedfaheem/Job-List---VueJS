<script setup>
import JobCard from '@/components/JobCard.vue';
//import JobData    from '@/jobs.json'
import { ref, reactive, defineProps, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import { PulseLoader } from 'vue-spinner'
// can do with ref or reactive but reactive not need for .value and can not reasigne

// const state = ref({
//     jobs: [],
//     isLoading: true
// });

const state = reactive({
    Jobs: [],
    isLoading: true
});


defineProps({
    limit: Number,
    showAllButton: {
        type: Boolean,
        default: false
    },

})



onMounted(async () => {
    try {
        const data = await fetch("http://localhost:8000/jobs");
        state.Jobs = await data.json();

    } catch (error) {
        console.error("Error in Fetching", error);
    } finally {
        state.isLoading = false;
    }

});


const loading = ref(true)
const color = ref('#5dc596')
const size = ref('15px')

</script>



<template>




    <section class="bg-green-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div  v-if="state.isLoading" class="text-center flex justify-center">
                <PulseLoader />
            </div>
            <div  v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">

                <JobCard v-for="(job, index) in state.Jobs.slice(0, limit || state.Jobs.length)" :job="job"
                    :key="index" />

            </div>
        </div>
    </section>

    <section v-if="showAllButton" class="m-auto max-w-lg my-10 px-6">
        <RouterLink to="/jobs" class="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700">View
            All Jobs</RouterLink>
    </section>
</template>