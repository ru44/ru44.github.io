<script setup lang="ts">
     var pressed = {},
        audio = document.getElementById('sound'),
        maxValue = 2,
        duration,
        volume

      document.onkeydown = function (e) {
        if (pressed[e.which]) return
        pressed[e.which] = e.timeStamp
      }

      document.onkeyup = function (e) {
        if (!pressed[e.which]) return

        if (e.keyCode === 32) {
          // Calculate press time
          duration = (e.timeStamp - pressed[e.which]) / 1000

          // Calculate new volume
          if (duration >= maxValue) {
            volume = 1
          } else {
            volume = duration / maxValue
          }

          // Set the volume and play the track
          audio.volume = volume
          audio.play()

          pressed[e.which] = 0

          return false
        }
      }

</script>

<template>
  <main>
    <audio id="sound">
      <source src="https://audio.jukehost.co.uk/Qe8NEXE7OTak5bS1dpTSYuIo0OC8JUTQ" />
    </audio>
    <br />
    <br />
    <img
      alt="RuM is R u 44?"
      title="You are looking at Right place"
      src="https://i.imgur.com/3r4mVpp.png"
    />

    <br />
    <div style="text-shadow: 12px 12px 20px #3b73b1">
      <span style="color: #24001d">
        <h1 class="glow">RuM Projects</h1>

        <h2>
          Starting EveryThing From Scratch btw this pages just placeholder unitl I finish my Real
          RuM Page hihi
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
        <marquee style="font-size: 20px" scrollamount="10" scorlldelay="40" width="50%">
          › -=| dR.N2NO | Mr.J0o | Sa3san | Ch@nk3R | DexTer | λɱϓ | o̷s̷a̷m̷a̷ | ᴸᴵᵛᴵᵁ ᶠᴼᴼᵀᴮᴬᴸᴸ|=- ‹
        </marquee>
      </h4>
    </footer>
  </main>
</template>
