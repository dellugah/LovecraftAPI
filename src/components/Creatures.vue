<script setup>
import {onMounted, ref} from "vue";

// vars
const creatures = ref([]);
const creature = ref([]);

// utility vars
let loading = ref(false); //spawns loading icon
const fetchInProcess = ref(false); //prevent multiple fetch requests

// fetch the initial creature list
async function fetchCreatureNames() {
  try{
    const response = await fetch('https://lovecraftapirest.fly.dev/api/creatures');
    if(!response.ok){
      throw new Error('Something went wrong');
    }else{
      creatures.value = await response.json();
      creatures.value.forEach(creature => {
        creature.name = capitalizeWords(creature.name);
      });
    }
} catch(err) {
  console.log(err);}
}

// fetch the creature id
async function selectCreature(id){
  loading.value = true;
  if(fetchInProcess.value === false){
    try{
      fetchInProcess.value = true;
      const response = await fetch('https://lovecraftapirest.fly.dev/api/creatures/' + id);
      if(!response.ok){
        throw new Error('Something went wrong');
      }
      creature.value = await response.json();
      creature.value.name = capitalizeWords(creature.value.name);
      if(creature.value.overview === 'undefined'){
        creature.value.overview = "No information available";
      }
      fetchInProcess.value = false;
      loading.value = false;
    }
    catch(err) {
      console.log(err);
      loading.value = false;
      fetchInProcess.value = false;
    }
  }
  else{
    console.log('Fetch in progress, please wait a moment.');
  }
}

// Capitalize first character and lowercase the rest
function capitalizeWords(string) {
  if (!string) return '';
  return string
      .split(' ')
      .map(
          (word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      )
      .join(' ');
}

// Open images on a new tab
function openInNewTab(url) {
  window.open(url, '_blank');
}


onMounted(() => {
  fetchCreatureNames();
  selectCreature();
});

</script>

<template>
  <section v-if="creatures?.length > 0">
    <div class="creaturesMainContainer">
      <div class="authorSelection">
        <div class="authorsSelectionContainer">
          <img id="tentacleTop" src="/tentaclesTop.png" alt="" height="150" width="auto">
          <div class="authorsScrollable">
            <div class="authorBlock"></div>
            <div class="authorsSelection" v-for="(creature, index) in creatures" @click="selectCreature(creature.id)">
              <span :id="creature.id" class="authorName">{{creature.name}}</span>
            </div>
            <div class="authorBlock"></div>
          </div>
          <img id="tentacleBottom" src="/tentaclesBottom.png" alt="" height="150" width="auto">
        </div>
      </div>


<!--      if creature is loaded      -->
      <div class="creaturesProfileContainer" v-if="creature?.name">
        <div class="creatureInfo">
          <p><span class="purple">{{ creature?.name }}</span></p>
          <p><span class="white">Author:</span> {{ creature.author }}</p>
          <p><span class="white">Canon:</span> {{ creature.canon }}</p>
          <p><span class="white">Category:</span> {{ creature.category }}</p>
        </div>
        <!-- Images -->
        <div class="images">
          <img class="creaturePhoto" v-for="(imgUrl, index) in creature.img.slice(0, 3)"
               :key="index" :src="imgUrl" alt="Creature Image" width="100px" height="auto" @click="openInNewTab(imgUrl)"/>
        </div>
        <!-- Overview -->
        <div class="overview">
          <p>{{ creature.overview }}</p>
        </div>
        <!-- Link to more information -->
        <div class="wiki">
          <a :href="creature.wikiUrl" target="_blank">Read more on Wiki</a>
        </div>
      </div>
<!--      if no creature is selected     -->
      <div class="creaturesProfileContainer" v-else>
        <div class="homeContainer">
          <img class="image" src="/eye.gif" alt="" height="150" width="auto">
          <h3><span class="white">Choose an eldritch being.</span></h3>
        </div>
      </div>
<!--      if creature fetch is loading     -->
      <div class="creaturesProfileContainer" v-if="loading">
        <div class="homeContainer">
          <img id="loadingBottom" src="/spellCircle.gif" alt="" height="150" width="auto">
        </div>
      </div>
    </div>
  </section>
<!--  loading div -->
  <section v-else class="loading">
    <img id="loading" src="/spellCircle.gif" alt="" height="150" width="auto">
    <h5><span>Summoning...</span></h5>
  </section>

</template>

<style scoped>
.creaturesMainContainer{
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  flex-direction: row;
  height: 547px;
  width: 900px;
  gap: .1em;
}
.authorsSelectionContainer{
  z-index: 3;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  justify-content: center;
  position: absolute;
  height: 35em;
  width: 20em;
}
.authorsSelectionContainer::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3;
  pointer-events: none;
  box-shadow: inset 0 50px 40px rgb(0, 0, 0),
  inset 0 -50px 40px rgb(0, 0, 0);
}
.authorSelection{
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-items: center;
  justify-content: center;
  height: 100%;
  width: 21em;
}
.authorsScrollable {
  display: grid;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  pointer-events: auto;
  scrollbar-width: none;
  scroll-behavior: smooth;
}
.creaturesProfileContainer{
  overflow: visible;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  justify-content: center;
  border-radius: 1em;
  position: absolute;
  right: 5em;
  height: 30em;
  width: 37em;
}
.authorsSelection{
  user-select: none;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  justify-content: center;
  z-index: 1;
  margin: .3em;
  background-color: var(--green);
  border-radius: 1em;
  min-height: 3em;
  width: 16em;
  position: relative;
  transition: 0.1s ease-in-out;
}
.authorsSelection:hover{
  background-color: var(--brightpurple);
  filter: drop-shadow(0px 0px 10px var(--brightpurple));
  cursor: pointer;
  scale: 1.05;
}
.authorsSelection:active{
  background-color: var(--lightpurple);
  filter: drop-shadow(0px 0px 10px var(--lightpurple));
  scale: 1;
}

.authorName{
  font-weight: bold;
  color: var(--black);
  font-size: 1em;
}
.authorBlock{
  min-height: 6em;
  width: 15em;
}
.creaturePhoto{
  margin: .5em;
  cursor: pointer;
}
.creatureInfo{
  margin-top: 1em;
  position: absolute;
  left: 0;
  top: 1em;
}
.images{
  padding: .25em;
  border-radius: .5em;
  margin-top: 4.5em;
  position: absolute;
  z-index: 4;
  display:grid;
  place-items: center;
  justify-items: center;
  right: 0;
  max-width: 20em;
}
.overview{
  margin-top: 10em;
  position: absolute;
  left: 0;
  top: 1em;
  padding-right: 1em;
  max-width: 25em;
  max-height: 17em;
  overflow-y: auto;
  overflow-x: hidden;
  height: 100%;
  width: 100%;
  pointer-events: auto;
}
.wiki{
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-content: center;
  position: absolute;
  bottom: -1em;
  margin-left: -15em;
}
.homeContainer{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  padding: 1em;
}
#tentacleTop{
  z-index: 5;
  margin-bottom: -149px;
  filter: drop-shadow(0px 0px 10px var(--black));
  pointer-events: none;
}
#tentacleBottom{
  z-index: 5;
  margin-top: -150px;
  filter: drop-shadow(0px 0px 10px var(--black));
  pointer-events: none;
}
#loadingBottom{
  z-index: 7;
  filter: hue-rotate(90deg) contrast(1.1) brightness(1.5) saturate(1.5);
  mix-blend-mode: screen;
  position: absolute;
  bottom: -7em;
  right: -5em;
  scale: .7;
  transform: scaleY(-1);
}
.image{
  margin-bottom: 2em;
}
</style>