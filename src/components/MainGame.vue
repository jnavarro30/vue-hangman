<template>
  <main>
    <HeaderTitle />
    <CanvasScreen />
    <MysteryWord />
    <AlphabetLetters />
  </main>
</template>

<script>
import HeaderTitle from './HeaderTitle.vue';
import CanvasScreen from './CanvasScreen.vue';
import MysteryWord from './MysteryWord.vue';
import AlphabetLetters from './AlphabetLetters.vue';

export default {
  name: 'MainGame',
  components: {
    HeaderTitle,
    CanvasScreen,
    MysteryWord,
    AlphabetLetters
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
