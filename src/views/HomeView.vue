<script setup lang="ts">
type KeyMap = { [key: number]: number }
let pressed = ref<KeyMap>({}),
  audio = ref<any>(null),
  maxValue = 2,
  duration: number,
  volume: number

onMounted(() => {
  audio.value = document.getElementById('sound') as HTMLAudioElement

  document.onkeydown = function (e) {
    if (pressed.value[e.keyCode]) return
    pressed.value[e.keyCode] = e.timeStamp
  }

  document.onkeyup = function (e) {
    if (!pressed.value[e.keyCode]) return

    if (e.keyCode === 32) {
      // Calculate press time
      duration = (e.timeStamp - pressed.value[e.keyCode]) / 1000

      // Calculate new volume
      if (duration >= maxValue) {
        volume = 1
      } else {
        volume = duration / maxValue
      }

      // Set the volume and play the track
      audio.value.volume = volume
      audio.value.play()

      pressed.value[e.keyCode] = 0

      return false
    }
  }
})
</script>
<template>
  <main>
    <audio id="sound">
      <source src="https://audio.jukehost.co.uk/jmjS05pRiFBUywDRVVL0NysvEzHg2SQT" />
    </audio>
    <br />
    <br />
    <img
      class="mx-auto block animate__animated animate__pulse animate__infinite"
      alt="RuM is R u 44?"
      title="You are looking at Right place"
      src="../assets/images/logo.png"
    />

    <br />
    <div style="text-shadow: 12px 12px 20px #3b73b1">
      <span style="color: #24001d">
        <h1 class="glow">RuM Projects</h1>

        <h2>
          Starting EveryThing From Scratch btw this page just placeholder unitl I finish my Real RuM
          Page hihi
        </h2>
      </span>
      <span
        >.::<strong
          style="
            color: white;
            text-shadow:
              0 0 5px #2c7dcd,
              0 0 10px #298a9b,
              0 0 15px #585e5e,
              0 0 20px #4a4d4d,
              0 0 30px #313232,
              0 0 40px #333535,
              0 0 55px #353736,
              0 0 75px #2d4140;
          "
          >Welcome To my website all My Projects You will find it here</strong
        >::.</span
      >
    </div>
    <footer>
      <h4>
        Greets To:
        <div class="marquee">
          <p class="text">
            › -=| dR.N2NO | Mr.J0o | Sa3san | Ch@nk3R | DexTer | λɱϓ | o̷s̷a̷m̷a̷ | ᴸᴵᵛᴵᵁ ᶠᴼᴼᵀᴮᴬᴸᴸ|=- ‹
          </p>
        </div>
      </h4>
    </footer>
  </main>
</template>

<style scoped>
.marquee {
  width: 50%;
  overflow: hidden;
  white-space: nowrap;
  font-size: 20px;
}

.text {
  display: inline-block;
  padding-left: 100%;
  animation: marquee 10s linear infinite;
}

@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>
