<template>
  <div id="board-layout">
    <div id="vertical-line-wrapper">
      <span
        class="vertical-line"
        v-for="(hor_label, index) in vertical_labels"
        :key="hor_label"
        :style="'left:'+(index*5.55555555)+'%' "
      ></span>
    </div>
    <span
      class="board-row"
      v-for="(hor_label, index) in vertical_labels"
      :key="hor_label"
      :style="'bottom:'+(index*5.55555555)+'%' "
    >
      <span
        class="board-point"
        @click="gridPointClickHandler(ver_label+hor_label)"
        v-for="(ver_label, index) in horizontal_labels"
        :key="hor_label+ver_label"
        :style="'left: calc(' + (index*5.55555555)+'%' + ' - 4px)' "
        :class="{'board-point black': pointed_grid.includes(ver_label+hor_label) }"
      >
        {{ver_label+hor_label}}
        <Stone
          v-if="showStone(ver_label+hor_label)"
          :player="determinePlayerType(ver_label+hor_label)"
          :takenOut="surroundingGrids(ver_label+hor_label).takenOut"
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
      // not clickable
      if (this.moves) {
      }
      let moveInfo = {
        position,
        step: this.moves.length,
        connected_stones: this.surroundingGrids(position).friendlyStones,
        chi: this.surroundingGrids(position).chi,
        takenOut: false
      };
      // concat the moves in data
      let newMoves = [...this.moves].concat(moveInfo);
      this.moves = newMoves;
      this.updateSurroundingStoneInfo(position);
    },
    updateSurroundingStoneInfo: function(position) {
      console.log(position);
      // the stones that surround the current grid point
      let surroundingStones = this.surroundingGrids(position).takenByStone;
      let surStonesPos = surroundingStones.map(({ position }) => position);
      // the opponent's stones around my clicked position
      let current_player = this.determinePlayerType(position);
      let opposingStones = this.surroundingGrids(position).opposingStones;
      let friendlyStones = this.surroundingGrids(position).friendlyStones;
      console.log("opposingStones:", opposingStones);
      console.log("friendlyStones:", friendlyStones);

      // update chi and and connected_stones
      this.moves.forEach(move => {
        move.connected_stones = this.surroundingGrids(
          move.position
        ).friendlyStones;
        if (surStonesPos.includes(move.position)) {
          move.chi--;
        }
        return move;
      });
      console.log(this.moves);
    },
    // display stone on the gridpoint
    showStone: function(gridPoint) {
      return this.moves.find(({ position }) => {
        if (position === gridPoint) {
          return true;
        } else return false;
      });
    },
    // black player is even, white is odd
    determinePlayerType: function(gridPoint) {
      let play_index = this.moves.findIndex(({ position }, index) => {
        return position === gridPoint;
      });
      return play_index % 2 === 0 ? "black" : "white";
    },
    // return an array of surrounding grids of a position
    surroundingGrids(position) {
      let current_player = this.determinePlayerType(position);
      let hor_point = position[0];
      let ver_point = parseInt(position.slice(1));
      let hor_point_index = this.horizontal_labels.indexOf(hor_point);
      let ver_point_index = this.vertical_labels.indexOf(ver_point);
      let point_left =
        this.horizontal_labels[hor_point_index - 1] +
        this.vertical_labels[ver_point_index] +
        "";
      let point_right =
        this.horizontal_labels[hor_point_index + 1] +
        this.vertical_labels[ver_point_index] +
        "";
      let point_top =
        this.horizontal_labels[hor_point_index] +
        this.vertical_labels[ver_point_index + 1] +
        "";
      let point_bottom =
        this.horizontal_labels[hor_point_index] +
        this.vertical_labels[ver_point_index - 1] +
        "";

      let surrounding_points = [
        point_top,
        point_left,
        point_bottom,
        point_right
      ];
      // filter out undefined and NaN for border/edge cases
      let filteredSurroundingPoints = surrounding_points.filter(ele => {
        return !ele.includes("NaN") && !ele.includes("undefined");
      });

      // check if the surrounding grids has been taken by stones
      let pointsTaken = this.moves.filter(({ position }) => {
        return filteredSurroundingPoints.includes(position);
      });
      // only count opposing stones
      let opposingStones = pointsTaken.filter(({ step }) => {
        switch (current_player) {
          case "white":
            // return black stones
            return step % 2 === 0;
          case "black":
            // return white stones
            return step % 2 === 1;
        }
      });

      let friendlyStones = pointsTaken.filter(({ step }) => {
        switch (current_player) {
          case "black":
            // return black stones
            return step % 2 === 0;
          case "white":
            // return white stones
            return step % 2 === 1;
        }
      });

      // total chi - taken chi
      return {
        opposingStones,
        chi:
          filteredSurroundingPoints.length -
          opposingStones.length -
          friendlyStones.length,
        takenByStone: pointsTaken,
        friendlyStones: friendlyStones
      };
    }
  },
  data: () => {
    return {
      vertical_labels: [
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
      horizontal_labels: [
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
  },
  computed: {
    black_moves() {
      return this.moves.filter((ele, index) => index % 2 === 0);
    },
    white_moves() {
      return this.moves.filter((ele, index) => index % 2 === 1);
    }
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

#vertical-line-wrapper {
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
  cursor: pointer;
}

.board-point:hover {
  background: #ffffff;
}

.black {
  background: #000000;
}
</style>
