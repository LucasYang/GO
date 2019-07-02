<template>
  <div id="chessboard">
    <Grid />
  </div>
</template>

<script>
import Grid from "./Grid";
export default {
  name: "ChessBoard",
  props: {
    msg: String
  },
  components: {
    Grid
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#chessboard {
  height: 80vh;
  width: 80vh;
  background: rgb(219, 178, 98);
  padding: 24px;
  box-sizing: content-box;
  box-shadow: 0 0 1px 1px #888888;
}
</style>
