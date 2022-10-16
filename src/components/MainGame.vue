<template>
  <main>
    <HeaderTitle />
    <CanvasScreen />
    <MysteryWord />
    <AlphabetKeyboard />
  </main>
</template>

<script>
import HeaderTitle from './HeaderTitle.vue';
import CanvasScreen from './CanvasScreen.vue';
import MysteryWord from './MysteryWord.vue';
import AlphabetKeyboard from './AlphabetKeyboard.vue';

export default {
  name: 'MainGame',
  components: {
    HeaderTitle,
    CanvasScreen,
    MysteryWord,
    AlphabetKeyboard
}
}
</script>

<style scoped>
main {
  border: 8px solid var(--main-text-color);
  border-radius: 10px;
  height: 80%;
  width: 80%;
  background-color: black;
  text-align: center;
}
</style>
