<template>
  <MqResponsive tag="section" target="md+">
    <div class="main">
      <HeaderTitle />
      <div class="canvas-container">
        <button @click="newWord()">New Word</button>
        <CanvasScreen />
        <button @click="showWord()">Show Word</button>
      </div>
      <ChosenWord :hiddenWord="hiddenWord" />
      <AlphabetKeyboard v-on:selectLetter="updateHiddenWord($event)" :isDisabled="isDisabled" />
    </div>
  </MqResponsive>
</template>

<script>
import HeaderTitle from "./HeaderTitle.vue";
import CanvasScreen from "./CanvasScreen.vue";
import ChosenWord from "./ChosenWord.vue";
import AlphabetKeyboard from "./AlphabetKeyboard.vue";
import { MqResponsive } from "vue3-mq";

export default {
  name: "MainGame",
  data() {
    return {
      chosenWord: "- - - - - - - -",
      hiddenWord: "- - - - - - - -",
      usedLetters: [],
      isDisabled: false
    };
  },
  mounted() {
    this.newWord();
  },
  components: {
    HeaderTitle,
    CanvasScreen,
    ChosenWord,
    AlphabetKeyboard,
    MqResponsive,
  },
  methods: {
    async newWord() {
      let res = await fetch("https://random-word-api.herokuapp.com/word");
      let data = await res.json();
      this.chosenWord = data[0];
      this.hiddenWord = "-".repeat(this.chosenWord.length);
      this.isDisabled = false;
      console.log(data);
    },
    showWord() {
      this.hiddenWord = this.chosenWord;
      this.isDisabled = true;
    },
    updateHiddenWord(value) {
      console.log(this.chosenWord);
      if (typeof value == "string") {
        this.hiddenWord = value;
      } else {
        this.usedLetters = Object.values(value);
        let letter = this.usedLetters[this.usedLetters.length - 1];
        if (this.chosenWord.includes(letter)) {
          let temp = [...this.hiddenWord];
          [...this.chosenWord].forEach((ltr, i) => {
            if (ltr === letter) {
              temp.splice(i, 1, ltr);
            }
          });
          console.log(temp);
          this.hiddenWord = temp.join("");

          if (this.chosenWord === this.hiddenWord) {
            this.isDisabled = true;
            setTimeout(() => {
              alert("You Win!");
            }, 500);
            return;
          }
        }
      }
    },
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

.canvas-container {
  display: flex;
  align-items: center;
  height: 28%;
  width: 80%;
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
  font-weight: bold;
}
</style>
