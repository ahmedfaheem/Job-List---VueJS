<script setup>
</script>

<template>
  <!-- Go Back -->
  <section>
    <div class="container m-auto py-6 px-6">
      <a
        href="/jobs"
        class="text-green-500 hover:text-green-600 flex items-center gap-1 font-medium transition-colors duration-200"
      >
        <i class="fas fa-arrow-left mr-2"></i> Back to Job Listings
      </a>
    </div>
  </section>

  <section class="bg-green-50 min-h-screen">
    <div class="container m-auto py-10 px-6">
      <div class="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">

        <!-- Main Content -->
        <main>
          <!-- Header Card -->
          <div class="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500 text-center md:text-left">
            <span class="inline-block bg-green-100 text-green-700 text-sm font-semibold px-3 py-1 rounded-full mb-4">
              Full-Time
            </span>
            <h1 class="text-3xl font-bold text-gray-800 mb-3">Senior Vue Developer</h1>
            <div class="flex items-center justify-center md:justify-start gap-1">
              <i class="fa-solid fa-location-dot text-orange-500 mr-1"></i>
              <span class="text-orange-700 font-medium">Boston, MA</span>
            </div>
          </div>

          <!-- Description Card -->
          <div class="bg-white p-6 rounded-xl shadow-md mt-6">
            <h3 class="text-green-800 text-lg font-bold mb-4 flex items-center gap-2">
              <i class="fa-solid fa-briefcase text-green-500"></i>
              Job Description
            </h3>
            <p class="mb-6 text-gray-600 leading-relaxed">
              We are seeking a talented Front-End Developer to join our team
              in Boston, MA. The ideal candidate will have strong skills in
              HTML, CSS, and JavaScript, with experience working with modern
              JavaScript frameworks such as Vue or Angular.
            </p>

            <h3 class="text-green-800 text-lg font-bold mb-2 flex items-center gap-2">
              <i class="fa-solid fa-money-bill-wave text-green-500"></i>
              Salary
            </h3>
            <p class="text-gray-700 font-semibold">$70k - $80K / Year</p>
          </div>
        </main>

        <!-- Sidebar (right) -->
        <aside class="space-y-6">
          <!-- Company Info -->
          <div class="bg-white p-6 rounded-xl shadow-md">
            <h3 class="text-xl font-bold mb-4 text-gray-800 border-b pb-3">Company Info</h3>

            <h2 class="text-2xl font-semibold text-gray-800">NewTek Solutions</h2>

            <p class="my-3 text-gray-600 text-sm leading-relaxed">
              NewTek Solutions is a leading technology company specializing in
              web development and digital solutions. We pride ourselves on
              delivering high-quality products and services to our clients
              while fostering a collaborative and innovative work environment.
            </p>

            <hr class="my-4" />

            <div class="mb-3">
              <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Contact Email</h3>
              <p class="bg-green-50 border border-green-200 text-green-800 p-2 rounded-lg font-medium text-sm">
                contact@newteksolutions.com
              </p>
            </div>

            <div>
              <h3 class="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">Contact Phone</h3>
              <p class="bg-green-50 border border-green-200 text-green-800 p-2 rounded-lg font-medium text-sm">
                555-555-5555
              </p>
            </div>
          </div>

          <!-- Manage -->
          <div class="bg-white p-6 rounded-xl shadow-md">
            <h3 class="text-xl font-bold mb-4 text-gray-800 border-b pb-3">Manage Job</h3>
            <a
              href="/jobs/add"
              class="bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-center font-bold py-2.5 px-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 transition-colors duration-200 block"
            >
              <i class="fa-solid fa-pen-to-square mr-1"></i> Edit Job
            </a>
            <button
              class="bg-red-500 hover:bg-red-600 active:bg-red-700 text-white font-bold py-2.5 px-4 rounded-full w-full focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 transition-colors duration-200 mt-3 block"
            >
              <i class="fa-solid fa-trash mr-1"></i> Delete Job
            </button>
          </div>
        </aside>

      </div>
    </div>
  </section>
</template>