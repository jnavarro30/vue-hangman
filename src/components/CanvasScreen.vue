<template>
    <canvas id="canvas" @mousemove="draw"></canvas>
</template>

<script>
export default {
  name: "CanvasScreen",
  props: ["lives"],
  mounted() {
    this.canvas = document.getElementById('canvas');
    this.ctx = this.canvas.getContext('2d');
    this.gallows();
  },
  data() {
    return {
      ctx: null,
      x: 0,
      y: 0
    }
  },
  methods: {
    showCoordinates(e) {
      this.x = e.offsetX;
      this.y = e.offsetY;
      console.log(this.x, this.y);
    },
    drawLine(x1, y1, x2, y2) {
      // let ctx = this.canvas;
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'white';
      this.ctx.lineWidth = 1;
      this.ctx.moveTo(x1, y1);
      this.ctx.lineTo(x2, y2);
      this.ctx.stroke();
      this.ctx.closePath();
    },
    draw(e) {
      // this.drawLine(this.x, this.y, e.offsetX, e.offsetY);
      this.x = e.offsetX;
      this.y = e.offsetY;
      console.log(e.offsetX, e.offsetY);
    },
    gallows() {
      this.drawLine(70, 20, 70, 120);
      this.drawLine(40, 120, 100, 120);
      this.drawLine(70, 20, 160, 20);
      this.drawLine(160, 20, 160, 30);
    } ,
    head() {
      this.ctx.beginPath();
      this.ctx.strokeStyle = 'white';
      this.ctx.arc(160, 45, 15, 0, 2 * Math.PI);
      this.ctx.stroke();
    },
    torso() {
      this.drawLine(160, 60, 160, 100);
    },
    leftArm() {
      this.drawLine(160, 70, 190, 80);
    },
    rightArm() {
      this.drawLine(160, 70, 130, 80);
    },
    leftLeg() {
      this.drawLine(160, 100, 140, 120);
    },
    rightLeg() {
      this.drawLine(160, 100, 180, 120);
    }
  },
  watch: {
    lives(newLives) {
      switch(newLives) {
        case 6: 
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          break;
        case 5: 
          this.head();
          break;
        case 4: 
          this.torso();
          break;
        case 3: 
          this.leftArm();
          break;
        case 2: 
          this.rightArm();
          break;
        case 1:
          this.leftLeg();
          break;
        default:
          this.rightLeg();
          setTimeout(() => {
            alert('You Lose!');
          }, 500)
      }
    }
  }
};
</script>

<style scoped>
#canvas {
  border: 2px solid var(--main-text-color);
  border-radius: 5px;
  height: 100%;
  width: 100%;
  margin: 0 auto;
}

h1 {
  color: white;
}
</style>