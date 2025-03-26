<script setup>

</script>

<template>
  <div class="creaturesPageHeader">
    <img class="img" src="/green_resized800_tentaclesLeft.png" alt="" height="100" width="auto">
    <div class="headerCreatures">
      <h2><span class="heading">CREATURES</span></h2>
    </div>
    <img src="/green_resized800_tentaclesRight.png" alt="" height="100" width="auto">
  </div>

  <div class="creaturesMainContainer">
    <div class="creaturesSelectionContainer">
      <img id="tentacleTop" src="/tentaclesTop.png" alt="" height="150" width="auto">
      <div class="creaturesScrollable">
        <div class="creatureBlock"></div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creaturesSelection">
          <span class="creatureName">Creature Name</span>
        </div>
        <div class="creatureBlock"></div>
      </div>
      <img id="tentacleBottom" src="/tentaclesBottom.png" alt="" height="150" width="auto">
    </div>

    <div class="creaturesProfileContainer">
    </div>
  </div>
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
  left: 5em;
  height: 30em;
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
  pointer-events: auto; /* Ensure scrollability */
  scrollbar-width: none; /* Firefox */
}
.creaturesProfileContainer{
  filter: grayscale(100%);
  box-shadow: inset 0 0 20px var(--black);
  background-color: var(--gray);
  border-radius: 1em;
  position: absolute;
  right: 3em;
  height: 30em;
  width: 37em;
}
.creaturesSelection{
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
  width: 15em;
  position: relative;
}
.creaturesSelection:hover{
  background-color: white;
  filter: drop-shadow(0px 0px 10px white);
  cursor: pointer;
}
.creatureName{
  font-weight: bold;
  color: var(--black);
  font-size: 1.4em;
}
.creatureBlock{
  min-height: 7em;
  width: 15em;
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
</style>