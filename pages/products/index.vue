<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="prod in products">
        <ProductCard :product="prod"/>
      </div>
    </div>
  </div>
</template>

<script setup>

definePageMeta({
	layout: "products"
});

// fetch the products
const {data: products} = await useFetch("https://fakestoreapi.com/products");

useHead({
	title: "Nuxt Products | All",
	meta: [
		{name: "description", content: "Nuxt Products Demo Page Detailed View"}
	]
});
</script>

<style scoped></style>