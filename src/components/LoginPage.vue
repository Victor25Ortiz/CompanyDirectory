<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'
const { login } = useAuth()

const username = ref('')
const password = ref('')

const logUserIn = () => {
    console.log(username.value)
    if (login(username.value, password.value)) {
    }
}
</script>

<template>
    <form class="login-form" @submit.prevent="logUserIn">
    <input v-model="username" type="text" placeholder="Username" />
    <input v-model="password" type="text" placeholder="Password" />
    <button type="submit" class="bg-green-500 px-4 py-2">Log In</button>
    </form>
</template>

<style scoped lang="postcss">
.login-form {
    @apply mx-auto mt-80 flex max-w-md flex-col gap-4 rounded-md bg-white p-8 shadow-lg;
    & input {
        @apply text-xl px-4 py-2 ring-1 rounded-md ring-slate-300;
    }
}
</style>