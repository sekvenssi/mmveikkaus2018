<template>
  <div>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs12>
          <v-avatar size="360">
            <img src="../assets/wc_logo.png">
          </v-avatar>
          <h1>3 Step IT - 2018 FIFA World Cup Predictions</h1>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12 md4>
          <participants/>
          <div class="pads"></div>
          <all-bets/>
        </v-flex>
        <v-flex xs12 md4>
          <rules/>
        </v-flex>
        <v-flex xs12 md4>
          <top-ten></top-ten>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TopTen from './TopTen';
import AllBets from './AllBets';
import Rules from './Rules';
import Participants from './Participants';

export default {
  name: 'dashboard',
  components: {
    TopTen,
    AllBets,
    Rules,
    Participants,
  },
};
</script>

<style scoped>
.pads {
  padding: 5px 0px;
}
</style>
