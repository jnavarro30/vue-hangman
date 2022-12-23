<template>
  <div class="alphabet-keyboard" :class="{ disable: isDisabled }">
    <div
      class="letter"
      :class="{ hidden: usedLetters.includes(letter) }"
      v-for="letter in alphabet"
      :key="letter"
      @click="selectLetter(letter)"
      data-test="letter"
    >
      {{ letter }}
    </div>
  </div>
</template>

<script>
export default {
  name: "AlphabetKeyboard",
  props: ["isDisabled"],
  data() {
    return {
      usedLetters: [],
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
    };
  },
  methods: {
    selectLetter(letter) {
      this.usedLetters.push(letter);
      this.$emit("selectLetter", this.usedLetters);
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
  height: 40%;
  width: 80%;
  margin: 0 auto;
  margin-top: 2rem;
}

.letter {
  color: white;
  border: 2px solid var(--main-text-color);
  border-radius: 10px;
  padding: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
}

.letter:hover {
  background-color: var(--main-text-color);
  color: black;
  box-shadow: 0px 0px 4px 4px var(--main-text-color);
}

.disable {
  pointer-events: none;
}
.hidden {
  visibility: hidden;
}
</style>