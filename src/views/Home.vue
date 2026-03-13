<script setup>
   import Hero from '@/components/Hero.vue';
   import HomeCards from '@/components/HomeCards.vue';
   import JobListing from '@/components/JobListing.vue';
   
</script>


<template>

 <!--  <Hero title="Test Vue" breif="Test Project From Jobs by Vue" /> -->
 <Hero />
 <HomeCards />
 <JobListing :limit="3" :showAllButton="true"/>

    
</template>