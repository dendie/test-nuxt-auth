<template>
  <div class="flex items-center justify-center h-screen">
    <form @submit.prevent="handleSubmit">
      <input v-model="username" type="text" placeholder="Username" />
      <input v-model="password" type="password" placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import * as yup from 'yup';

const username = ref('');
const password = ref('');
const router = useRouter();

// const schema = yup.object().shape({
//   username: yup.string().min(4, 'Username must be at least 4 characters').required(),
//   password: yup.string().min(4, 'Password must be at least 4 characters').required(),
// });

const handleSubmit = async () => {
try {
    // await schema.validate({ username: username.value, password: password.value });
    const response = await $fetch('/api/login', {
      method: 'POST',
      body: { username: username.value, password: password.value },
    });
    if (response.success) {
      router.push('/home');
    }
} catch (error) {
    alert(error.message);
}
};
</script>