<template>
    <h4>participant: {{ participant.name }}</h4>
</template>

<script>
import { mapState } from 'vuex';
import { PARTICIPANT_ACTIONS } from '../store/action-types';

export default {
  name: 'participant',
  created() {
    this.load();
  },
  computed: {
    ...mapState({
      participant: state => state.participantModule.participant,
    }),
  },
  methods: {
    load() {
      this.$store.dispatch(PARTICIPANT_ACTIONS.LOAD_PARTICIPANT, this.$route.params.participantId);
    },
  },
};
</script>

<style>
</style>
