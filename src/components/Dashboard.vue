<template>
  <div>
    <h1>foo</h1>
    <v-container grid-list-md>
      <v-layout row wrap>
        <v-flex xs4>
          bar
        </v-flex>
        <v-flex xs4>
        </v-flex>
        <v-flex xs4>
          <v-toolbar color="cyan">
            <v-toolbar-title class="white--text">
              <h4><v-icon>trending_up</v-icon> Top 10</h4>
            </v-toolbar-title>
          </v-toolbar>
          <v-card>
            <v-container
              fluid
              style="min-height: 0;"
              grid-list-lg
            >
              <v-layout row wrap>
                <v-list>
                </v-list>
              </v-layout>
            </v-container>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
};
</script>

<style>
</style>
