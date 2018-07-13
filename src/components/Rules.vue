<template>
  <v-card>
    <v-toolbar color="blue">
      <v-toolbar-title class="white--text">
        <h4>Point system</h4>
      </v-toolbar-title>
    </v-toolbar>
    <div
      <v-card-text>
        <ul class="text-md-left list-inside">
          <li><b>5 points</b> for winner of the tournament</li>
          <li><b>5 points</b> for top scorer</li>
          <li><b>5 points</b> for top assister</li>
          <li><b>3 points</b> for correct semi-final team</li>
          <li><b>3 points</b> for all the rest special bets</li>
          <li><b>3 points</b> for correct goals for both teams EG. game ends 3-0 and you had bet 3-0</li>
          <li><b>1 point</b> for correct winner of the match (or draw) EG. game ends 5-0 and you had bet 2-0</li>
        </ul>
      </v-card-text>
    </div>

  </v-card>
</template>

<script>
export default {
  name: 'rules',
};
</script>

<style scoped>
.list-inside {
  list-style-position: inside;
  list-style-type: none;
}
</style>
