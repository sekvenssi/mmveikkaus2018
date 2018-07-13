<template>
  <v-card color="light-blue" class="white--text">
    <div v-if="totalBetsLoading" class="pads">
      <v-progress-circular
        :size="70" :width="7"
        indeterminate color="purple">
      </v-progress-circular>
    </div>
    <div v-else class="pads">
      <h1 class="display-4">{{ totalBets }}</h1>
      <h4 class="headline">Bets placed</h4>
    </div>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';
import { PARTICIPANT_ACTIONS } from '../store/action-types';

export default {
  name: 'all-bets',
  created() {
    this.load();
  },
  computed: {
    ...mapState({
      totalBets: state => state.participantModule.totalBets,
      totalBetsLoading: state => state.participantModule.totalBetsLoading,
    }),
  },
  methods: {
    load() {
      this.$store.dispatch(PARTICIPANT_ACTIONS.LOAD_TOTAL_BETS);
    },
  },
};
</script>

<style scoped>
.pads {
  padding: 10px 0px;
}
</style>
