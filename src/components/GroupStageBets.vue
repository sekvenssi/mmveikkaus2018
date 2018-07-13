<template>
  <div>
    <v-layout row wrap>
      <v-flex xs12>
        <h1 class="headline topmarg30">Group Stage bets</h1>
      </v-flex>
      <v-flex xs4>

      </v-flex>
      <v-flex xs4>
      </v-flex>
      <v-flex xs4>
      </v-flex>
      <v-flex xs12>
        <v-data-table
          :headers="headers"
          :items="bets"
          hide-actions
          disable-initial-sort
        >
          <template slot="items" slot-scope="props">
            <tr v-bind:class="pointsClass(props.item.points)">
              <td class="text-xs-left">{{ props.item.gameNumber }}</td>
              <td class="text-xs-left">{{ props.item.gameName }}</td>
              <td class="text-xs-left">{{ props.item.betGoals }}</td>
              <td class="text-xs-left">{{ props.item.correctGoals }}</td>
              <td class="text-xs-left"><b>{{ props.item.points }}</b></td>
            </tr>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
  name: 'group-stage-bets',
  props: {
    bets: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      headers: [
        { text: '#', value: 'index' },
        { text: 'Game', value: 'gameName' },
        { text: 'Bet score', value: 'betGoals' },
        { text: 'Correct score', value: 'correctGoals' },
        { text: 'Points', value: 'points' },
      ],
    };
  },
  methods: {
    pointsClass(points) {
      let cssClazz = 'not-played';
      switch (points) {
        case 0:
          cssClazz = 'wrong';
          break;
        case 1:
          cssClazz = 'correct-game';
          break;
        case 3:
          cssClazz = 'correct-score';
          break;
        default:
          cssClazz = 'not-played';
      }
      return cssClazz;
    },
  },
};
</script>

<style scoped>
  .wrong {
    background-color: #EF9A9A;
  }
  .correct-score {
    background-color: #4CAF50;
  }
  .correct-game {
    background-color: #E8F5E9;
  }
  .not-played {
    background-color: inherit;
  }
  .table >>> .table thead {
    border-bottom: solid 1px #DDDDDD;
  }
  .table >>> .table tbody tr:not(:last-child) {
    border-bottom: solid 1px #DDDDDD;
  }
  .table >>> .table tfoot tr {
    border-top: solid 1px #DDDDDD;
  }
</style>
