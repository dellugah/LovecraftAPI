<script setup>

</script>

<template>
  <div class="homeContainer">
    <img class="image" src="/lovecraftGreen.png" alt="" height="150" width="auto">
    <h4><span>This web app is inspired by the imagination of Lovecraft.</span></h4>
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
</style>