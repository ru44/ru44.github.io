<template>
  <div class="greetings">
    <h1 class="green">{{ msg }} <img src="https://user-images.githubusercontent.com/1303154/88677602-1635ba80-d120-11ea-84d8-d263ba5fc3c0.gif"  class="logo" alt="hands"/> </h1>
    <h3>
      Starting everything from scratch, by the way, this page is just a placeholder until I finish my real RuM page.
      Hihi.
    </h3>
  </div>
</template>
<script lang="ts" setup>
defineProps<{
  msg: string
}>();
</script>
<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

.logo {
  width: 50px;
  height: 50px;
  margin-left: 10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
