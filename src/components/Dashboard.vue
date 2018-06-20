<template>
  <div>
    <h1>foo</h1>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs4>
        </v-flex>
        <v-flex xs4>
        </v-flex>
        <v-flex xs4>
          <top-ten></top-ten>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import TopTen from './TopTen';

export default {
  name: 'dashboard',
  components: {
    TopTen,
  },
};
</script>

<style>
</style>
