<script setup>
import {onMounted, ref} from "vue";

const creatures = ref([]);
const creature = ref([]);
let loading = ref(false);

//fetch the initial creature list
async function fetchCreatureNames() {
  try{
    const response = await fetch('https://lovecraftapirest.fly.dev/api/creatures');
    if(!response.ok){
      throw new Error('Something went wrong');
    }
    creatures.value = await response.json();
    creatures.value.forEach(creature => {
      creature.name = capitalizeWords(creature.name);
    });
} catch(err) {
  console.log(err);}
}
//fetch the creature id
async function selectCreature(id){
  loading.value = true;
  try{
    const response = await fetch('https://lovecraftapirest.fly.dev/api/creatures/' + id);
    if(!response.ok){
      throw new Error('Something went wrong');
    }
    creature.value = await response.json();
    creature.value.name = capitalizeWords(creature.value.name);
    if(creature.value.overview === 'undefined'){
      creature.value.overview = "No information available";
    }
    loading.value = false;
  }
  catch(err) {
    console.log(err);
    loading.value = false;
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

onMounted(() => {
  fetchCreatureNames();
  selectCreature();
});

</script>

<template>
  <section v-if="creatures?.length > 0">
    <div class="creaturesMainContainer">
      <div class="creaturesSelectionContainer">
        <img id="tentacleTop" src="/tentaclesTop.png" alt="" height="150" width="auto">
        <div class="creaturesScrollable">
          <div class="creatureBlock"></div>
          <div class="creaturesSelection" v-for="(creature, index) in creatures" @click="selectCreature(creature.id)">
            <span :id="creature.id" class="creatureName">{{creature.name}}</span>
          </div>
          <div class="creatureBlock"></div>
        </div>
        <img id="tentacleBottom" src="/tentaclesBottom.png" alt="" height="150" width="auto">
      </div>
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
               :key="index" :src="imgUrl" alt="Creature Image" width="100px" height="auto"/>
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
      <div class="creaturesProfileContainer" v-else>
        <div class="homeContainer">
          <img class="image" src="/eye.gif" alt="" height="150" width="auto">
          <h3><span class="white">Choose an eldritch being.</span></h3>
        </div>
      </div>
      <div class="creaturesProfileContainer" v-if="loading">
        <div class="homeContainer">
          <img id="loadingBottom" src="/spellCircle.gif" alt="" height="150" width="auto">
        </div>
      </div>
    </div>
  </section>
  <section v-else class="loading">
    <img id="loading" src="/spellCircle.gif" alt="" height="150" width="auto">
    <h5><span>Summoning...</span></h5>
  </section>

</template>

<style scoped>
.creaturesMainContainer{
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-items: center;
  justify-content: center;
  height: 32em;
  width: 60em;
}
.creaturesSelectionContainer{
  z-index: 3;
  overflow-y: auto; /* Enables vertical scrolling */
  overflow-x: hidden; /* Prevents horizontal scrolling */
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  justify-content: center;
  position: absolute;
  margin-top: 5em;
  left: 2em;
  height: 35em;
  width: 20em;
}
.creaturesSelectionContainer::before {
  content: ''; /* The pseudo-element has no content */
  position: absolute; /* Fix it to the container itself */
  top: 0; /* Start at the top of the container */
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 3; /* Place it above the scrollable content */
  pointer-events: none; /* Allows interaction with the scrollable content */
  box-shadow: inset 0 50px 40px rgb(0, 0, 0), /* Top shadow for fade */
  inset 0 -50px 40px rgb(0, 0, 0); /* Bottom shadow for fade */
}
.creaturesScrollable {
  display: grid;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  justify-content: center;
  overflow-y: auto; /* Enable scrolling inside this layer */
  overflow-x: hidden; /* No horizontal scrolling */
  height: 100%; /* Full height to fit the parent container */
  width: 100%; /* Full width to fit the parent container */
  pointer-events: auto; /* Ensure scroll-ability */
  scrollbar-width: none; /* Firefox */
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
.creaturesSelection{
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
.creaturesSelection:hover{
  background-color: var(--brightpurple);
  filter: drop-shadow(0px 0px 10px var(--brightpurple));
  cursor: pointer;
  scale: 1.05;
}
.creaturesSelection:active{
  background-color: var(--lightpurple);
  filter: drop-shadow(0px 0px 10px var(--lightpurple));
  scale: 1;
}

.creatureName{
  font-weight: bold;
  color: var(--black);
  font-size: 1em;
}
.creatureBlock{
  min-height: 6em;
  width: 15em;
}
.creaturePhoto{
  margin: .5em;
}
.creatureInfo{
  margin-top: 1em;
  position: absolute;
  left: 0;
  top: 1em;
}
.images{
  position: absolute;
  z-index: 4;
  display:grid;
  place-items: center;
  justify-items: center;
  right: 1em;
  top: 0;
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
  overflow-y: auto; /* Enable scrolling inside this layer */
  overflow-x: hidden; /* No horizontal scrolling */
  height: 100%; /* Full height to fit the parent container */
  width: 100%; /* Full width to fit the parent container */
  pointer-events: auto; /* Ensure scroll-ability */
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
  pointer-events: none; /* Allows interaction with the scrollable content */
}
#tentacleBottom{
  z-index: 5;
  margin-top: -150px;
  filter: drop-shadow(0px 0px 10px var(--black));
  pointer-events: none; /* Allows interaction with the scrollable content */
}
#loading{
  filter: hue-rotate(90deg) contrast(1.1) brightness(1.5) saturate(1.5);
  mix-blend-mode: screen;
}
#loadingBottom{
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