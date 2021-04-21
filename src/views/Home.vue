<template>
  <div class="home">
    <div class="typing-container">
      <h2 class="typewriter">I'm Oliver a.k.a. Odayaka</h2>
    </div>
    <img alt="Odayaka Animations logo" src="@/assets/oalogo.jpg" class="cloak-img">
    <div class="hi">
      <h1 class="cloak-1">Hi!</h1>
      <h1 class="cloak-1">I'm Odayaka Animations</h1>
      <h3 class="cloak-2">Here's some things I've made.</h3>
    </div>
    <div class="flex-row-cloak">
      <div class="what-ive-done">
        <video width="320" height="240" autoplay muted loop playsinline>
          <source src="@/assets/anim1.webm" type="video/webm" />
          <source src="@/assets/anim1.mp4" type="video/mp4" />
        </video>
        <video width="320" height="240" autoplay muted loop playsinline>
          <source src="@/assets/anim2.webm" type="video/webm" />
          <source src="@/assets/anim2.mp4" type="video/mp4" />
        </video>
        <video width="320" height="240" autoplay muted loop playsinline>
          <source src="@/assets/anim3.webm" type="video/webm" />
          <source src="@/assets/anim3.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div class="where-you-can-find-me">
      <social />
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import social from '@/components/social.vue';
@Component({
  components: {
    social,
  },
})
export default class Home extends Vue {}
</script>
<style>
.hi {
  padding: 0;
  color: #000000;
}
.flex-row-cloak {
  display: flex;
  flex-direction: row;
}
/* Images and Videos */
.cloak-img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.what-ive-done {
  padding: 5px;
}
/* text */
.cloak-1 {
  font-weight: lighter;
  size: 2rem;
}
.cloak-2 {
  font-weight: lighter;
}
/* Typing */
/* GLOBAL STYLES */
.typing-container {
  padding-top: 5em;
  display: flex;
  justify-content: center;
}

/* DEMO-SPECIFIC STYLES */
.typewriter {
  color: #fff;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid black; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(30, end),
    blink-caret .5s step-end infinite;
}

/* The typing effect */
@keyframes typing {
  from { width: 0 }
  to { width: 20% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}
</style>
