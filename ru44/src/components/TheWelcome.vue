<script lang="ts" setup>
import WelcomeItem from "./WelcomeItem.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";</script>

<template>
  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-tools" />
    </template>
    <p>here is a list of the tools I use</p>
    <p>Docker, VS code</p>
    <template #heading>Tooling</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-brands fa-product-hunt" />
    </template>
    <p>All in One Cli (CLIuno) </p>
    <template #heading>Projects</template>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <font-awesome-icon icon="fa-solid fa-heart" />
    </template>
    <a href="https://ko-fi.com/ru44y" target="_blank">click here
    </a>
    <template #heading>Support Me</template>
  </WelcomeItem>
</template>
