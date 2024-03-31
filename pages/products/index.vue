<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="prod in products">
                <nuxt-link :to="`/products/${prod.id}`">
                    {{ prod.title }}
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    layout: 'products'
})

// fetch the products
const { data: products } = await useFetch('https://fakestoreapi.com/products')
</script>

<style scoped></style>