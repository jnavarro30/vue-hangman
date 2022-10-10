<template>
  <div class="main_game">
    <h1 class="main_title">Hangman</h1>
    <div class="main_canvas"></div>
    <div class="main_word">- - - - - - - -</div>
    <div class="main_letters"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main_game {
  border: 8px solid var(--main-text-color);
  border-radius: 10px;
  height: 80%;
  width: 80%;
  background-color: black;
  text-align: center;
}

.main_title {
  color: var(--main-text-color);
}

.main_canvas {
  border: 2px solid var(--main-text-color);
  height: 200px;
  width: 400px;
  margin: 0 auto;
}

.main_word {
  color: white;
  font-size: 3rem;
  padding: 1rem;
}

.main_letters  {
  border: 2px solid var(--main-text-color);
  height: 300px;
  width: 80%;
  margin: 0 auto;
  margin-top: 5rem;
}
</style>
