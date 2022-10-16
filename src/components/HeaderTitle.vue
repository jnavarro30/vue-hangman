<template>
  <header>
    <h1>Hangman</h1>
  </header>
</template>
    
<script>
export default {
  name: "HeaderTitle",
};
</script>

<style scoped>
header {
  color: var(--main-text-color);
}
h1 {
  text-decoration: underline;
  letter-spacing: 1rem;
}
</style>