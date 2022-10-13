<template>
    <button @click="getWord()">New Word</button>
    <div class="mystery-word">{{ mysteryWord }}</div>
</template>

<script>
export default {
    name: 'MysteryWord',
    data() {
      return {
        mysteryWord: '- - - - - - - -',
        testWords: ['one', 'two', 'three', 'four']
      }
    },
    
    methods: {
        async getWord() {
          let res = await fetch('https://random-word-api.herokuapp.com/word');
          let data = await res.json();
          console.log(this.mysteryWord);
          this.mysteryWord = data[0];
          console.log(data);
        }
      ,
      hideWord() {
        
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