<template>
  <div id="app">
    <div class="dci">
      <a href="https://bingus.link/3P3INiCNp">
        <div class="dci-logo">
          <img src="https://cdn.discordapp.com/icons/831191458106966016/c640915bba6a40cb3e2a9e3834632b3a.png" class="dci-logoimg" />
        </div>
        <div class="dci-navbar">
          <h1 class="dci-invitetext">Join the Talking Or Stuff discord!</h1>
        </div>
      </a>
    </div>
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/contact">Get in touch</router-link>
    </div>
    <router-view/>
  <div class="remp">
    <ul>This site was made by <a href="https://litbelb.com">Litbelb</a> with <a href="https://vuejs.org">vuejs</a> and &#9829;</ul>
    <ul></ul>
  </div>
  </div>
</template>

<style>
@font-face{font-family:Inter;src:url('/assets/font/Inter.woff2') format("woff2-variations");font-weight:400}
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
  padding: 35px;
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: rgb(177, 0, 251);
}

#nav a.router-link-exact-active {
  color: rgb(255, 255, 255);
}
.remp {
  text-align: center;
}
/* Discord Invite stuff */
.dci /* Stands for DisCordInvite */ {
  background: rgb(32, 34, 37);
  display: flex;
  flex-direction: row-reverse;
  width: 95%;
  padding: 40px;
}
@media screen and (max-width: 400px) {
  .dci {
    background: rgb(32, 34, 37);
  }
  .dci-logo {
    padding: 15px;
  }
  .dci-invitetext {
    position: absolute;
    left: 3%;
  }
}
.dci-invitetext {
  position: absolute;
  color: rgb(255, 255, 255);
  left: 15%;
  top: 1%;
}
.dci-logo {
  position: absolute;
  left: 2%;
  z-index: 8;
}
.dci-logoimg {
  border-radius: 50%;
}
</style>
