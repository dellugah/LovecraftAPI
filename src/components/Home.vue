<script setup>

</script>

<template>
  <div class="homeContainer">
    <img id="lovecraft" class="image" src="/lovecraftGreen.png" alt="" height="150" width="auto">
    <h4><span id="homePhrase">This cursed web app is birthed from the ineffable depths <br>
      of Lovecraft's unfathomable imagination.</span></h4>
  </div>
</template>

<style scoped>
.homeContainer{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  padding: 1em;
  margin-top: 6em;
  margin-bottom: 2em;
}

.image{
  filter: var(--dropshadow3);
  margin-bottom: 2em;
}

#homePhrase{
  display: flex;
  flex-direction: column;
  place-items: center;
  justify-items: center;
  text-align: center;
}

#lovecraft{
  filter: grayscale(100%) brightness(130%) drop-shadow(0 0 100px #e3e3e3);
}
</style>