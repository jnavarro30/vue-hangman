<template>
  <div class="word">{{ hiddenWord }}</div>
</template>

<script>
export default {
  name: "ChosenWord",
  props: ["chosenWord", "hiddenWord"],
  data() {
    return {};
  },
};
</script>

<style scoped>
.word {
  color: white;
  font-size: 2.5rem;
  letter-spacing: .6rem;
  margin-top: 3rem;
}
</style>