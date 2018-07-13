<template>
  <v-container grid-list-md text-xs-center>
    <div v-if="isLoading">
      <v-progress-circular
        :size="70" :width="7"
        indeterminate color="purple">
      </v-progress-circular>
    </div>
    <div v-else>
      <v-layout row wrap>
        <v-flex xs12>
          <v-avatar color="red" size="200">
            <span class="display-3 white--text">{{ participantFirstLetter }}</span>
          </v-avatar>
          <h1 class="display-1 topmarg10">{{ participant.name }}</h1>
        </v-flex>
      </v-layout>
      <div class="topmarg30"></div>
      <v-layout row wrap>
        <v-flex xs4>
          <participant-fact :fact="pointsFact" label="Total points"></participant-fact>
        </v-flex>
        <v-flex xs4>
          <participant-fact :fact="standingFact" label="Standing"></participant-fact>
        </v-flex>
        <v-flex xs4>
          <participant-fact :fact="correctGamesFact" label="Correct bets"></participant-fact>
        </v-flex>
      </v-layout>
      <v-layout row wrap>
        <v-flex xs12>
          <group-stage-bets :bets="userGamesScores"></group-stage-bets>
        </v-flex>
      </v-layout>
    </div>
  </v-container>
</template>

<script>
import { mapState, mapGetters } from 'vuex';
import { PARTICIPANT_ACTIONS } from '../store/action-types';
import ParticipantFact from './ParticipantFact';
import GroupStageBets from './GroupStageBets';

export default {
  name: 'participant',
  components: {
    ParticipantFact,
    GroupStageBets,
  },
  created() {
    this.load();
  },
  computed: {
    ...mapState({
      participant: state => state.participantModule.participant,
      standing: state => state.participantModule.standing,
      isLoading: state => state.participantModule.participantLoading,
    }),
    ...mapGetters([
      'userGamesScores',
      'correctGroupGames',
      'participantFirstLetter',
    ]),
    standingFact() {
      const slash = '/';
      return this.standing ? `${this.standing.standing} ${slash} ${this.standing.participants}` : '';
    },
    pointsFact() {
      return this.participant.totalPoints;
    },
    correctGamesFact() {
      return this.correctGroupGames.length;
    },
  },
  methods: {
    load() {
      const participantId = this.$route.params.participantId;
      this.$store.dispatch(PARTICIPANT_ACTIONS.LOAD_PARTICIPANT, participantId);
      this.$store.dispatch(PARTICIPANT_ACTIONS.LOAD_STANDING, participantId);
    },
  },
};
</script>

<style scoped>
  .topmarg10 {
    margin-top: 10px;
  }
  .topmarg30 {
    margin-top: 30px;
  }
</style>
