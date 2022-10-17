<template>
  <div class="canvas-container">
    <button @click="getWord()">New Word</button>
    <div class="canvas"></div>
    <button @click="showWord()">Show Word</button>
  </div>
</template>

<script>
export default {
  name: "CanvasScreen",
  data() {
    return {
      mysteryWord: "- - - - - - - -",
      chosenWord: "- - - - - - - -",
      testWords: ["one", "two", "three", "four"],
    };
  },
  methods: {
    async getWord() {
      let res = await fetch("https://random-word-api.herokuapp.com/word");
      let data = await res.json();

      this.chosenWord = data[0];
      let encrypted = "- ".repeat(this.chosenWord.length);
      this.mysteryWord = encrypted;
      console.log(data);
    },
    showWord() {
      this.mysteryWord = this.chosenWord;
    },
  },
};
</script>

<style scoped>
.canvas-container {
  display: flex;
  align-items: center;
  height: 28%;
  width: 70%;
  border: 5px solid red;
  margin: 0 auto;
}
.canvas {
  border: 2px solid var(--main-text-color);
  border-radius: 5px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

button {
  background-color: var(--main-text-color);
  border: none;
  border-radius: 5px;
  margin: 1rem 1rem 0 1rem;
  padding: 0.5rem;
  width: 10rem;
  cursor: pointer;
  color: black;
}
</style>