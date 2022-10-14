<template>
    <button @click="getWord()">New Word</button>
    <button @click="showWord()">Show Word</button>
    <div class="mystery-word">{{ mysteryWord }}</div>
</template>

<script>
export default {
    name: 'MysteryWord',
    data() {
      return {
        mysteryWord: '- - - - - - - -',
        chosenWord: '- - - - - - - -',
        testWords: ['one', 'two', 'three', 'four']
      }
    },
    
    methods: {
        async getWord() {
          let res = await fetch('https://random-word-api.herokuapp.com/word');
          let data = await res.json();
        
          this.chosenWord = data[0];
          let encrypted = '- '.repeat(this.chosenWord.length);
          this.mysteryWord = encrypted;
          console.log(data);
        }
      ,
      showWord() {
        this.mysteryWord = this.chosenWord;
      }
    },
}
</script>

<style scoped>
.mystery-word {
  color: white;
  font-size: 3rem;
  
}

button {
  margin: 2rem;
  padding: .5rem;
  cursor: pointer;
}
</style>