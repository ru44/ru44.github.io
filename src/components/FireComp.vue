<script setup lang="ts"></script>
<template>
  <div class="mx-auto block fire">
    <div class="logs">
      <div class="log l1"></div>
      <div class="log l2"></div>
    </div>
    <div class="flames">
      <div class="flame f1"></div>
      <div class="flame f2"></div>
      <div class="flame f3"></div>
    </div>
    <div class="sparks">
      <div class="spark s1"></div>
      <div class="spark s2"></div>
      <div class="spark s3"></div>
      <div class="spark s4"></div>
      <div class="spark s5"></div>
      <div class="spark s6"></div>
      <div class="spark s7"></div>
      <div class="spark s8"></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.fire {
  position: relative;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  align-self: end;
  justify-self: center;
  width: 300px;
  height: 300px;
  background: #880e4f;
  border-radius: 50%;
  box-shadow: 0 0 50px 50px #880e4f;
  animation: background 5s ease infinite;
  transform: translateY(150px);
}
.flame {
  position: absolute;
  bottom: 70px;
  width: 100px;
  height: 100px;
  background-color: red;
  border-radius: 0 70%;
  box-shadow:
    -10px -10px 0 10px orange,
    -20px -20px 0 20px yellow;
  animation: flicker 5s ease infinite;
}
.f1 {
  left: 50px;
}
.f3 {
  transform: rotateZ(45deg);
  left: 100px;
  bottom: 100px;
}
.f2 {
  transform: rotateZ(90deg);
  left: 150px;
}
.log {
  position: absolute;
  bottom: 15px;
  left: 50px;
  width: 200px;
  height: 50px;
  background-color: brown;
  border-radius: 10px;
}
.l1 {
  transform: rotateZ(20deg);
  box-shadow: 0 0 10px #3e2723;
}
.l2 {
  transform: rotateZ(-20deg);
  box-shadow: 0 0 10px #3e2723;
}
.l3 {
  transform: rotate3d(1, 1, 1, 40deg);
}
.l4 {
  transform: rotate3d(1, 1, 1, -40deg);
}
.spark {
  width: 5px;
  height: 5px;
  background-color: orangered;
  border-radius: 50%;
  box-shadow: 0 0 5px 3px orange;
  position: absolute;
  top: 150px;
  left: 150px;
  opacity: 0;
}
.s1 {
  animation:
    fadein 5s ease infinite,
    floatup 5s ease infinite,
    left 5s ease infinite;
}
.s2 {
  animation:
    fadein 5s 0.5s ease infinite,
    floatup 5s 0.5s ease infinite,
    right 5s 0.5s ease infinite;
}
.s3 {
  animation:
    fadein 5s 1s ease infinite,
    floatup 5s 1s ease infinite,
    farleft 5s 1s ease infinite;
}
.s4 {
  animation:
    fadein 5s 1.5s ease infinite,
    floatup 5s 1.5s ease infinite,
    farright 5s 1.5s ease infinite;
}
.s5 {
  animation:
    fadein 5s 2s linear infinite,
    floatup 5s 2s linear infinite;
}
.s6 {
  animation:
    fadein 5s 2.5s ease infinite,
    floatup 5s 2.5s ease infinite,
    left 5s 2.5s ease infinite;
}
.s7 {
  animation:
    fadein 5s 3s ease infinite,
    floatup 5s 3s ease infinite,
    right 5s 3s ease infinite;
}
.s8 {
  animation:
    fadein 5s 3.5s ease infinite,
    floatup 5s 3.5s ease infinite,
    farleft 5s 3.5s ease infinite;
}

@keyframes flicker {
  0%,
  100% {
    background-color: red;
    box-shadow:
      -10px -10px 0 10px orange,
      -15px -15px 0 15px yellow;
  }
  25%,
  75% {
    background-color: red;
    box-shadow:
      -10px -10px 0 10px orangered,
      -20px -20px 0 20px yellow;
  }
  50% {
    background-color: red;
    box-shadow:
      -10px -10px 0 10px orange,
      -15px -15px 0 15px yellow;
  }
}

@keyframes fadein {
  0%,
  100% {
    opacity: 0;
  }
  75% {
    opacity: 100%;
  }
}

@keyframes floatup {
  0% {
    top: 150px;
  }
  100% {
    top: -50%;
  }
}
@keyframes left {
  0% {
    left: 150px;
  }
  100% {
    left: 100px;
  }
}
@keyframes right {
  0% {
    left: 150px;
  }
  100% {
    left: 200px;
  }
}
@keyframes farleft {
  0% {
    left: 150px;
  }
  100% {
    left: 0px;
  }
}
@keyframes farright {
  0% {
    left: 150px;
  }
  100% {
    left: 300px;
  }
}
@keyframes background {
  0%,
  50%,
  100% {
    box-shadow: 0 0 50px 50px #880e4f;
  }
  25%,
  75% {
    box-shadow: 0 0 60px 60px #880e4f;
  }
}

// style enhancements

// $orange: rgb(255, 106, 0);
// $red: rgb(255, 34, 0);
// $yellow: rgb(255, 200, 0);
// $blue: rgb(0, 55, 255);

// body {
//   background: rgb(22, 22, 30);
// }
// .firepit {
//   position: absolute;
//   bottom: 0;
//   left: 47%;
// }
// .fire {
//   position: relative;
//   width: 60px;
//   height: 60px;

//   .flame {
//     position: absolute;
//     bottom: 0;
//     left: 0;
//     opacity: 0.9;
//     width: 100%;
//     height: 100%;
//     border-bottom-right-radius: 70%;
//     border-bottom-left-radius: 70%;
//     border-top-left-radius: 70%;
//     transform: rotate(-45deg) skew(-10deg, -10deg);
//     background-color: $red;
//     background-image: linear-gradient(top right, fade-out($red, 0.1), fade-out($orange, 0.3));
//     z-index: 1;

//     animation-iteration-count: infinite;
//     animation-fill-mode: forwards;
//     animation-name: burn-left;
//     animation-duration: 300ms;

//     &:nth-of-type(2n) {
//       animation-name: burn-right;
//       animation-duration: 400ms;
//     }

//     &:nth-of-type(2) {
//       height: 80%;
//       width: 80%;
//       left: 10%;
//       background-color: $orange;
//       background-image: linear-gradient(top right, fade-out($orange, 0.9), fade-out($yellow, 0.9));
//       z-index: 2;
//     }

//     &:nth-of-type(3) {
//       height: 50%;
//       width: 50%;
//       left: 25%;
//       background-image: linear-gradient(top right, $yellow, white);
//       z-index: 3;
//     }

//     &:nth-of-type(4) {
//       height: 30%;
//       width: 30%;
//       left: 35%;
//       background-color: white;
//       background-image: linear-gradient(top right, fade-out(white, 0.7), fade-out($blue, 0.1));
//       opacity: 1;
//       z-index: 4;
//     }
//   }
// }

// .spark {
//   position: absolute;
//   bottom: 46%;
//   left: 15%;
//   width: 3px;
//   height: 3px;
//   background-color: fade-out($orange, 0.6);

//   animation-name: fly-up-burnout-1;
//   animation-duration: 6s;
//   animation-timing-function: linear;
//   animation-iteration-count: infinite;
//   animation-delay: 0.4s;

//   &:nth-of-type(2n) {
//     animation-name: fly-up-burnout-2;
//     animation-duration: 8.4s;
//     animation-delay: 1s;
//   }
//   &:nth-of-type(3n) {
//     animation-delay: 1.9s;
//     animation-duration: 8s;
//     left: 55%;
//   }
//   &:nth-of-type(4n) {
//     animation-delay: 2.6s;
//     animation-duration: 7s;
//     left: 88%;
//   }
//   &:nth-of-type(5n) {
//     animation-delay: 1.4s;
//     animation-duration: 7s;
//     left: 22%;
//   }
//   &:nth-of-type(6n) {
//     animation-delay: 3.2s;
//     left: 61%;
//   }
//   &:nth-of-type(7n) {
//     animation-delay: 0.8s;
//     animation-duration: 5s;
//     left: 64%;
//   }
//   &:nth-of-type(8n) {
//     animation-delay: 5s;
//     left: 19%;
//   }
//   &:nth-of-type(9n) {
//     animation-delay: 4s;
//     animation-duration: 6.8s;
//     left: 22%;
//   }
//   &:nth-of-type(10n) {
//     animation-delay: 5.2s;
//     left: 61%;
//   }
//   &:nth-of-type(11n) {
//     animation-delay: 3.5s;
//     animation-duration: 8s;
//     left: 81%;
//   }
//   &:nth-of-type(12n) {
//     animation-delay: 2s;
//     left: 85%;
//   }
// }

// @keyframes burn-left {
//   0%,
//   100% {
//     transform: rotate(-45deg) skew(-10deg, -10deg) scale(1);
//   }
//   30%,
//   60% {
//     transform: rotate(-44deg) skew(-12deg, -12deg) scale(1.01);
//   }
// }

// @keyframes burn-right {
//   0%,
//   100% {
//     transform: rotate(-45deg) skew(-10deg, -10deg) scale(1);
//   }
//   30%,
//   60% {
//     transform: rotate(-46deg) skew(-6deg, -6deg) scale(1.01);
//   }
// }

// @keyframes fly-up-burnout-1 {
//   0% {
//     transform: translate(0, 0);
//     opacity: 1;
//   }

//   33% {
//     transform: translate(12px, -70px);
//   }

//   66% {
//     transform: translate(0, -140px);
//     opacity: 0.6;
//   }

//   100% {
//     transform: translate(6px, -200px);
//     opacity: 0;
//   }
// }

// @keyframes fly-up-burnout-2 {
//   0% {
//     transform: translate(0, 0);
//     opacity: 1;
//   }

//   50% {
//     transform: translate(-10px, -80px);
//   }

//   80% {
//     transform: translate(-4px, -140px);
//     opacity: 0.6;
//   }

//   100% {
//     transform: translate(-6px, -160px);
//     opacity: 0;
//   }
// }
</style>
