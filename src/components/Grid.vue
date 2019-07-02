<template>
  <div id="board-layout">
    <div id="line-crossing">
      <span
        class="vertical-line"
        v-for="(hor_label, index) in horizontal_labels"
        :key="hor_label"
        :style="'left:'+(index*5.55555555)+'%' "
      ></span>
    </div>
    <span
      class="board-row"
      v-for="(hor_label, index) in horizontal_labels"
      :key="hor_label"
      :style="'bottom:'+(index*5.55555555)+'%' "
    >
      <span
        class="board-point"
        @click="gridPointClickHandler(ver_label+hor_label)"
        v-for="(ver_label, index) in vertical_labels"
        :key="hor_label+ver_label"
        :style="'left: calc(' + (index*5.55555555)+'%' + ' - 4px)' "
        :class="{'board-point black': pointed_grid.includes(ver_label+hor_label) }"
      >
        <Stone
          v-if="moves.includes(ver_label+hor_label)"
          :player="moves.indexOf(ver_label+hor_label)%2 === 0 ? 'white':'black' "
        ></Stone>
      </span>
    </span>
  </div>
</template>

<script>
import Stone from "./Stone";

export default {
  name: "Grid",
  components: {
    Stone
  },
  props: {
    msg: String
  },
  methods: {
    gridPointClickHandler: function(position) {
      let newMoves = [...this.moves].concat(position);
      this.moves = newMoves;
      console.log(this.moves);
    }
  },
  data: () => {
    return {
      horizontal_labels: [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        16,
        17,
        18,
        19
      ],
      vertical_labels: [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T"
      ],
      // the grids that are bulleted
      pointed_grid: [
        "D4",
        "D10",
        "D16",
        "K4",
        "K10",
        "K16",
        "Q4",
        "Q10",
        "Q16"
      ],
      // the moves positioned on the board
      moves: []
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#board-layout {
  box-sizing: border-box;
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
}

#line-crossing {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.vertical-line {
  position: absolute;
  height: 100%;
  width: 1px;
  background: #000000;
}

.board-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000000;
  height: 1px;
  position: absolute;
  width: 100%;
  left: 0;
}

.board-point {
  width: 9px;
  height: 9px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
}

.board-point:hover {
  background: #ffffff;
}

.black {
  background: #000000;
}
</style>
