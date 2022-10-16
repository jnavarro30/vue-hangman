<template>
  <MainGame />
</template>

<script>
import MainGame from "./components/MainGame.vue";
export default {
  name: "App",
  components: {
    MainGame,
  },
};
</script>

<style>
:root {
  --main-text-color: orange;
}
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("./assets/stick__figure.jpeg");
  height: 100vh;
}
</style>
