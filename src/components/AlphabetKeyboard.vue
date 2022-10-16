<template>
  <div class="alphabet-keyboard">
    <div
      class="letter"
      :class="{ hidden: usedLetters.includes(letter) }"
      v-for="letter in alphabet"
      :key="letter"
      @click="selectLetter(letter)"
    >
      {{ letter }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AlphabetKeyboard",
  data() {
    return {
      alphabet: [
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
      ],
      usedLetters: [],
    };
  },
  methods: {
    selectLetter(letter) {
      this.usedLetters.push(letter);
    },
  },
};
</script>

<style scoped>
.alphabet-keyboard {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  place-content: center;
  grid-gap: 0.5rem;
  height: 300px;
  width: 80%;
  margin: 0 auto;
  margin-top: 5rem;
}

.letter {
  color: white;
  border: 2px solid var(--main-text-color);
  border-radius: 10px;
  padding: 1rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.letter:hover {
  background-color: white;
  color: black;
  box-shadow: 0px 0px 4px 4px var(--main-text-color);
}

.hidden {
  visibility: hidden;
}
</style>