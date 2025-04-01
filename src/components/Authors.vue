<script setup>
import {ref, onMounted} from "vue";

const  authors = ref([])
const  creatureList = ref([])
const  creatures= ref([])

async function fetchAuthors() {
  const response = fetch('https://lovecraftapirest.fly.dev/api/creatures')
  .then(response => response.json())
      .then(data => {
        data.forEach(creatureAuthor => {
          let authorExists = authors.value.some(author => author.author === creatureAuthor.author);
          if (!authorExists) {
            authors.value.push({author: creatureAuthor.author});
          }
        })
      })
}

async function fetchCreatures(author) {
  creatures.value = [];
  console.log('Fetching for' + author);
  fetch('https://lovecraftapirest.fly.dev/api/creatures/')
      .then(response => response.json())
      .then(data => {
        creatureList.value = data; // Save the response data to creatureList
        creatureList.value.forEach(creature => {
          if (creature.author === author) {
            creatures.value.push(creature); // Only push creatures matching the author
            console.log(creatures.value);
          }
        });
      })
      .catch(error => {
        console.error('Failed to fetch creatures:', error);
      });
}

onMounted(() => {
  fetchAuthors();
})
</script>

<template>
  <div class="racesMainContainer" v-if="authors.length > 0">
    <div class="authorSelection">
      <div class="authorsSelectionContainer">
        <img id="tentacleTop" src="/tentaclesTop.png" alt="" height="150" width="auto">
        <div class="authorsScrollable">
          <div class="authorBlock"></div>
          <div class="authorsSelection" v-for="(author, index) in authors" :key="index" @click="fetchCreatures(author.author)">
            <span class="authorName">{{ author.author }}</span>
          </div>
          <div class="authorBlock"></div>
        </div>
        <img id="tentacleBottom" src="/tentaclesBottom.png" alt="" height="150" width="auto">
      </div>
    </div>
    <div class="creaturesContainer" v-if="creatures.length > 0">
      <div class="creatureOrganizer" v-for="(creature, index) in creatures" :key="index">
        <div class="creatureInfoContainer">
        <div class="photo">
          <img class="profilePhoto" :src="creature.img[0]" alt="" height="110px" width="auto" v-if="creature.img.length > 0">
          <img class="profilePhoto" src="/photo.png" alt="" height="110px" width="auto" v-else></img>
        </div>
        <div class="info">
          <h3>Creature Name:</h3>
          <span>{{creature.name}}</span>
          <h3>Canon:</h3>
          <span>{{ creature.canon }}</span>
        </div>
      </div>
        <img class="creatureImageDecoration" src="/tentaculos_arestassolidas_verde.gif" alt="" height="160" width="auto">
      </div>
    </div>
    <div class="creaturesContainer" v-else>
      <div class="homeContainer">
        <img class="image" src="/eye.gif" alt="" height="150" width="auto">
        <h3><span class="white">Choose an author to see it's creations.</span></h3>
      </div>
    </div>
  </div>
  <section v-else class="loading">
    <img id="loading" src="/spellCircle.gif" alt="" height="150" width="auto">
    <h5><span>loading...</span></h5>
  </section>
</template>

<style scoped>
.creatureImageDecoration{
  margin-bottom: .1em;
  transform: scaleX(-1) scaleY(-1);
  margin-left:-1.2em;
  filter: drop-shadow(0px 0px 10px var(--green));
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
.profilePhoto{
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;

}
.homeContainer{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  padding: 1em;
  margin-top: 10em;
}
.image{
  margin-bottom: 2em;
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
.authorsSelectionContainer{
  z-index: 3;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  justify-content: center;
  position: relative;
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
.authorBlock{
  min-height: 6em;
  width: 15em;
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
.authorSelection{
  display: flex;
  flex-direction: row;
  place-items: center;
  justify-items: center;
  justify-content: center;
  height: 100%;
  width: 21em;
}
.photo{
  place-items: center;
  justify-items: center;
  justify-content: center;
  height:100px;
  width:100px;
  margin-right: 1em;
  overflow: hidden;
  border-radius: 1em;
}
.racesMainContainer{
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  flex-direction: row;
  height: 547px;
  width: 900px;
  gap: .1em;
}
.creatureOrganizer{
  display: flex;
  flex-direction: row;
  place-items: center;
}
.creatureInfoContainer{
  display: flex;
  flex-direction: row;
  place-items: end;
  margin: .5em;
  padding: 1em;
  background-color: var(--black);
  border: 5px solid var(--green);
  box-shadow: 0px 0px 15px var(--brightpurple);
  height: 9em;
  width: 25em;
  border-radius: 1em;
}

.creaturesContainer{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  width: 35em;
  padding: 1em;
  max-height: 547px;
  margin-left: 2em;
  scrollbar-width: none;
  scroll-behavior: smooth;
  overflow-y: auto;
}
.authorName{
  font-weight: bold;
  color: var(--black);
  font-size: 1em;
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
</style>