<template>
  <section class="bg-gray-50 dark:bg-gray-900">
    <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
      <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
        <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
          <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white text-center">
            Welcome to Home
          </h1>
          <NuxtLink v-if="isAdmin" to="/admin" class="text-xl font-bold leading-tight tracking-tight text-blue-500 md:text-xl dark:text-white text-center block">Go to Admin</NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const isAdmin = ref(false);

onMounted( async () => {
  const session = await useCookie('session_id');
  const sessionVal = session?.value?.split('-');
    isAdmin.value = sessionVal.length > 0 && sessionVal[0] === 'admin';
  });
</script>