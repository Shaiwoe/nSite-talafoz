<template>
    <p>Hello</p>
</template>



<script setup>

definePageMeta({
    middleware: 'auth'
})

const { authUser } = useAuth();

</script>