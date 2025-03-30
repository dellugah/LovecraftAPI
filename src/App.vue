<script setup>
import {useRouter} from "vue-router";

const router = useRouter();
</script>

<template>
  <div class="mainHomeContainer">
    <img class="tentacleBackground" src="/green_resized800_tentaclesLeftbackup.png" alt="">
    <img class="particlesLeft" src="/particle.gif" alt="" width="500px" height="auto">
    <img class="octImgLeft" src="/tentaculos_rasterizado.gif" alt="">
    <div class="mainContainer">
      <div class="header">
        <div class="creaturesPageHeader">
          <img class="img" src="/green_resized800_tentaclesLeft.png" alt="" height="100" width="auto">
          <div class="headerCreatures">
            <h2><span class="heading">Lovecraft API</span></h2>
          </div>
          <img class="img" src="/green_resized800_tentaclesRight.png" alt="" height="100" width="auto">
        </div>
        <div class="buttonContainer">
          <div class="button"><router-link to="/">Home</router-link></div>
          <div class="button"><router-link to="/creatures">Creatures</router-link></div>
          <div class="button"><router-link to="/races">Races</router-link></div>
          <div class="button"><router-link to="/about">About</router-link></div>
        </div>
      </div>
      <div class="routerView">
        <router-view/>
      </div>
      <div class="footer"></div>
    </div>
    <img class="octImgRight" src="/tentaculos_rasterizado.gif" alt="">
    <img class="particlesRight" src="/particle.gif" alt="" width="500px" height="auto">
    <img class="tentacleBackground" src="/green_resized800_tentaclesRightbackup.png" alt="">
  </div>
</template>

<style>
/*VARIABLES*/
:root{
  --brightpurple: #b562ff;
  --green: #7cfc58;
  --purple: #270049;
  --black: #000000;
  --lightpurple: #efdfff;
  --lightblack: #111113;
  --gray: #1e1e1e;
  --borderradius: 1em;
  --dropshadow1: drop-shadow(-10px 10px 15px rgba(0, 0, 0, 0.95));
  --dropshadow2: drop-shadow(10px 10px 15px rgba(0, 0, 0, 0.95));
  --dropshadow3: drop-shadow(0px 0px 5px var(--green));
  --dropshadow4: drop-shadow(0px 10px 7px rgba(0, 0, 0, 0.95));
  --font: 'Courier New', 'monospace';
  --inset: -25em;
}

/*BASIC ELEMENTS*/
body{
  margin: 0;
  padding: 0;
  overflow: hidden; /* Prevent scrolling */
  height: 100%;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-content: center;
  align-items: center;


  background: url('/sprayLeft.png') no-repeat left center,
  url('/sprayRight.png') no-repeat right center,
  var(--purple);
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
  color: white;
  font-weight: bold;
}
span{
  font-weight: bold;
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
  transform: scaley(-1);
  scale: 1.1;
  z-index: 1;
  margin-right: -2em;
  margin-left: -28em;
  filter: var(--dropshadow2);
}
.octImgRight{
  transform: scaleX(-1) scaley(-1);
  scale: 1.1;
  z-index: 1;
  margin-left: -2em;
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
  position: absolute;
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
.loading{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 300px;
}
.purple{
  color: var(--brightpurple);
  font-weight: bold;
  font-size: 1.5em;
}
.white{
  color: #e4e4e4;
  font-weight: bold;
}
.creaturesPageHeader {
  z-index: 7;
  scale: 1.5;
  pointer-events: none;
  margin-top: -2.5em;
  margin-bottom: -1em;
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-items: center;
  justify-content: center;
  filter: drop-shadow(0px 0px 2px var(--green)) grayscale(100%) contrast(140%);
}
.img{
  margin-bottom: -2px;
  margin-left:-5px;
  margin-right: -5px;
}
.headerCreatures {
  color: var(--black);
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-items: center;
  justify-content: center;
  height: 45px;
  width: auto;
  padding: 1em 2.5em;
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