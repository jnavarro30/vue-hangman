<template>
  <MqResponsive tag="section" target="md+">
    <div class="main">
      <HeaderTitle />
      <CanvasScreen />
      <MysteryWord />
      <AlphabetKeyboard />
    </div>
  </MqResponsive>
</template>

<script>
import HeaderTitle from "./HeaderTitle.vue";
import CanvasScreen from "./CanvasScreen.vue";
import MysteryWord from "./MysteryWord.vue";
import AlphabetKeyboard from "./AlphabetKeyboard.vue";
import { MqResponsive } from "vue3-mq";

export default {
  name: "MainGame",
  components: {
    HeaderTitle,
    CanvasScreen,
    MysteryWord,
    AlphabetKeyboard,
    MqResponsive,
  },
};
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
}
.main {
  border: 8px solid var(--main-text-color);
  border-radius: 10px;
  height: 90%;
  width: 90%;
  max-width: 800px;
  background-color: black;
  text-align: center;
  margin: 0 auto;
}
</style>
