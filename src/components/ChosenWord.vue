<template>
  <div class="word" data-test="hiddenWord">{{ hiddenWord }}</div>
</template>

<script>
export default {
  name: "ChosenWord",
  props: ["hiddenWord"],
};
</script>

<style scoped>
.word {
  color: white;
  font-size: 2.5rem;
  letter-spacing: 0.6rem;
  margin-top: 1.5rem;
}
</style>