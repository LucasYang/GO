<template>
  <div id="app">
    <ChessBoard />
  </div>
</template>

<script>
import ChessBoard from "./components/ChessBoard";

export default {
  name: "app",
  components: {
    ChessBoard
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  box-sizing: content-box;
  display: flex;
  justify-content: center;
  align-items: center;
}

#app,
body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}
</style>
