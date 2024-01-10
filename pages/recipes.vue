<template>
  <h1>Recipes</h1>
</template>

<script setup>
const data = await $fetch('http://localhost:1337/api/recipes?populate[illustration]=media&populate[ingredients][populate]=*');
console.log(data);
</script>
