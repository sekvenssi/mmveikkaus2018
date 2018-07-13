<template>
  <v-card color="indigo" class="white--text">
    <div class="pads">
      <h1 class="display-4">{{ totalParticipants }}</h1>
      <h4 class="headline">Participants</h4>
    </div>
  </v-card>
</template>

<script>
import { mapState, mapGetters } from 'vuex';

export default {
  name: 'participants',
  computed: {
    ...mapState({
      participantsLoading: state => state.participantModule.participantsLoading,
    }),
    ...mapGetters([
      'totalParticipants',
    ]),
  },
};
</script>

<style scoped>
.pads {
  padding: 10px 0px;
}
</style>
