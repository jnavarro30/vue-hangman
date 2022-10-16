<template>
  <div class="canvas-container">
    <button>New Word</button>
    <div class="canvas"></div>
    <button>Show Word</button>
  </div>
</template>

<script>
export default {
  name: "CanvasScreen",
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