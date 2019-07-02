<template>
  <div id="stone" :class="player === 'white' ? 'white-player': 'black-player' "></div>
</template>

<script>
export default {
  name: "Stone",
  props: {
    player: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#stone {
  position: absolute;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  box-shadow: 0 0 1px 1px #888888;
}

.white-player {
  background: white;
}
.black-player {
  background: black;
}
</style>
