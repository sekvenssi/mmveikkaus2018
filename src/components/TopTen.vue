<template>
  <div>
    <v-card>
      <v-toolbar color="cyan">
        <v-toolbar-title class="white--text">
          <h4><v-icon>trending_up</v-icon> Top 10</h4>
        </v-toolbar-title>
      </v-toolbar>
      <div class="pads" v-if="isLoading">
        <v-progress-circular
          :size="70" :width="7"
          indeterminate color="purple"></v-progress-circular>
      </div>
      <v-list v-else>
        <template  v-for="(item, index) in topTen">
          <top-item
            :key="item.id"
            :id="item.id"
            :name="item.name"
            :points="item.points"
            :position="index+1">
          </top-item>
        </template>
      </v-list>
    </v-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { PARTICIPANT_ACTIONS } from '../store/action-types';
import TopItem from './TopItem';

export default {
  name: 'top-ten',
  components: {
    TopItem,
  },
  created() {
    this.load();
  },
  computed: {
    topTen() {
      return this.$store.getters.topParticipants(10);
    },
    ...mapState({
      isLoading: state => state.participantModule.participantsLoading,
    }),
  },
  methods: {
    load() {
      this.$store.dispatch(PARTICIPANT_ACTIONS.LOAD_PARTICIPANTS);
    },
  },
};
</script>

<style scoped>
  .pads {
    padding: 25px 0px;
  }
</style>
