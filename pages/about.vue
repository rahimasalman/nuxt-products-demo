<template>
  <div>
    <h1>
      About
    </h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid veniam facilis molestiae? Non, sapiente?
      Deserunt sed eligendi, repellat, aliquid amet?
    </p>
    <div>{{ data }}</div>
    <div>{{ postData }}</div>
  </div>
</template>

<script setup>
const {data} = await useFetch('/api/test?name=mario', {
  method: 'post',
  body: {age: 40}
})
</script>

<style scoped></style>