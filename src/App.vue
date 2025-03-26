<script setup>
import {useRouter} from "vue-router";
const router = useRouter();
</script>

<template>
  <div class="mainHomeContainer">
    <img class="tentacleBackground" src="/green_resized800_tentaclesLeftbackup.png" alt="">
    <img class="particlesLeft" src="/particle.gif" alt="" width="500px" height="auto">
    <img class="octImgLeft" src="/tentaclesLeft.png" alt="">
    <div class="mainContainer">
      <div class="header">
        <h1>Lovecraft API</h1>
        <div class="buttonContainer">
          <div class="button"><router-link to="/">Home</router-link></div>
          <div class="button"><router-link to="/creatures">Creatures</router-link></div>
          <div class="button"><router-link to="/races">Races</router-link></div>
          <div class="button"><router-link to="/about">About</router-link></div>
        </div>
      </div>
      <div class="routerView">
        <router-view></router-view>
      </div>
      <div class="footer"></div>
    </div>
    <img class="octImgRight" src="/tentaclesRight.png" alt="">
    <img class="particlesRight" src="/particle.gif" alt="" width="500px" height="auto">
    <img class="tentacleBackground" src="/green_resized800_tentaclesRightbackup.png" alt="">
  </div>
</template>

<style>
/*VARIABLES*/
:root{
  --brightpurple: #6c00cc;
  --green: #a1f867;
  --purple: #270049;
  --black: #000000;
  --lightpurple: #f9f4ff;
  --lightblack: #111113;
  --gray: #1e1e1e;
  --borderradius: 1em;
  --dropshadow1: drop-shadow(-10px 10px 7px rgba(0, 0, 0, 0.95));
  --dropshadow2: drop-shadow(10px 10px 7px rgba(0, 0, 0, 0.95));
  --dropshadow3: drop-shadow(0px 0px 5px var(--green));
  --dropshadow4: drop-shadow(0px 10px 7px rgba(0, 0, 0, 0.95));
  --font: 'Courier New', 'monospace';
  --inset: -25em;
}

/*BASIC ELEMENTS*/
body{
  overflow: hidden; /* Prevent scrolling */
  height: 100%; /* Ensure the page doesn't grow beyond the viewport */
  display: flex;
  flex-wrap: wrap; /* Allows wrapping when the window resizes */
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */

  background: url('/sprayLeft.png') no-repeat left center,
  url('/sprayRight.png') no-repeat right center,
  var(--purple); /* Image on the right */
}
.button{
  font-family: var(--font), 'serif';
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: center;
  color: var(--green);
  font-size: 1.3em;
  margin-left: 2em;
  margin-right: 2em;
  width: 5em;
  transition: 0.3s ease-in-out;
  border: none;
  border-radius: 3px;
  background: rgba(255, 255, 255, 0);
}
h1, h2, h3, h4, h5, h6{
  scale: 1.3;
  font-family: var(--font), 'serif';
  color: var(--lightpurple);
  font-weight: bold;
}
span{
  color: var(--green);
}

/*PARTICLES*/
.particlesRight{
  rotate: 90deg;
  margin-left: -8em;
  margin-right: var(--inset);
  margin-bottom: 5em;
  mix-blend-mode: screen;
  filter: hue-rotate(80deg);
}
.particlesLeft{
  transform: scaleX(-1);
  rotate: -90deg;
  margin-left: var(--inset);
  margin-right: -8em;
  margin-bottom: 5em;
  mix-blend-mode: screen;
  filter: hue-rotate(80deg);
}

/*IMAGES*/
.octImgLeft{
  z-index: 1;
  margin-bottom: 4em;
  margin-right: -1em;
  margin-left: -28em;
  filter: var(--dropshadow2);
}
.octImgRight{
  z-index: 1;
  margin-bottom: 4em;
  margin-left: -1em;
  margin-right: -28em;
  filter: var(--dropshadow1);
}
.tentacleBackground{
  z-index: -2;
  height: 600px;
  width: auto;
  scale: 1.5;
  filter: var(--dropshadow2);
}

/*FORMATING*/
.header{
  padding-top: 1em;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  background: linear-gradient(to top, var(--gray), var(--lightblack) 100%);
  border-top-left-radius: var(--borderradius);
  border-top-right-radius: var(--borderradius);
  height: 9em;
  width: 100%;
}
.mainHomeContainer{
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-items: center;
}
.routerView{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  margin: 1em;
}
.mainContainer{
  padding: 0;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  position: relative;
  border-radius: var(--borderradius);
  border: 5px solid var(--green);
  min-width: 1000px;
  min-height: 800px;
  max-width: 1000px;
  max-height: 800px;
  background-color: var(--black);
  background-size: 20%;
  background-position: center;
  background-repeat: no-repeat;
  box-shadow: 0 0 5em var(--green);
}
.buttonContainer{
  margin-top: 1em;
  padding: 1em;
  display: flex;
  flex-direction: row;
  justify-content: center;
  place-items: center;
  justify-items: center;
  background-color: var(--black);
  height: 3em;
  width: 100%;
}
.footer{
  position: absolute; /* Change this */
  bottom: 0;
  width: 100%;
  height: 5em;
  background: linear-gradient(to bottom, var(--gray), var(--lightblack) 100%);
  border-bottom-left-radius: var(--borderradius);
  border-bottom-right-radius: var(--borderradius);
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  justify-content: center;
}

.creaturesPageHeader {
  margin-top: -2.7em;
  margin-bottom: -1em;
  scale: .9;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-items: center;
  justify-content: center;
  filter: var(--dropshadow3) grayscale(100%);
}
.img{
  margin-bottom: 2px;
}
.headerCreatures {
  color: var(--black);
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-items: center;
  justify-content: center;
  height: 45px;
  width: 12em;
  background-color: var(--green);
  margin-left: -3px;
  margin-right:-3px;
  border-radius: .5em;
}
.heading {
  font-size: 1em;
  color: var(--black);
  font-weight: bold;
}
#app{
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-items: center;
}
</style>