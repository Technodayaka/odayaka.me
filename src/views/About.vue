<template>
  <div class="about">
    <h1>Oh, hi!</h1>
    <div class="typing-container">
      <h2 class="typewriter">I’m Odayaka, a person who animates stuff for YouTube to earn money</h2>
    </div>
    <h2>I use flipaclip and 10 frames per second to animate funny and interesting animations.</h2>
  </div>
</template>
<style>
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
  to { width: 50% }
}

/* The typewriter cursor effect */
@keyframes blink-caret {
  from, to { border-color: transparent }
  50% { border-color: orange }
}
</style>
