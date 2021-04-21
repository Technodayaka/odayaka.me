<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Get in touch</router-link>
    </div>
    <router-view/>
  <div class="remp"></div>
  </div>
</template>

<style>
::selection {
  background: rgb(177, 0, 251);
  color: rgb(255, 255, 255);
}
html {
  background: rgb(255, 183, 124);margin: 0;
  font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #212529;
  text-align: left;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: rgb(177, 0, 251);
}

#nav a.router-link-exact-active {
  color: rgb(255, 255, 255);
}
</style>
