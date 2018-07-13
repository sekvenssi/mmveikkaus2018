import { PARTICIPANT_MUTATIONS } from '../mutation-types';

const participantMutations = {
  [PARTICIPANT_MUTATIONS.SET_PARTICIPANTS](state, response) {
    state.participants.splice(0, state.participants.length);
    state.participants = response || [];
  },
  [PARTICIPANT_MUTATIONS.SET_PARTICIPANT](state, response) {
    state.participant = response || {};
  },
  [PARTICIPANT_MUTATIONS.SET_PARTICIPANTS_LOADING](state, isLoading) {
    state.participantsLoading = isLoading;
  },
  [PARTICIPANT_MUTATIONS.SET_PARTICIPANT_LOADING](state, isLoading) {
    state.participantLoading = isLoading;
  },
  [PARTICIPANT_MUTATIONS.SET_STANDING](state, standing) {
    state.standing = standing;
  },
  [PARTICIPANT_MUTATIONS.SET_STANDING_LOADING](state, isLoading) {
    state.standingLoading = isLoading;
  },

  [PARTICIPANT_MUTATIONS.SET_TOTAL_BETS](state, response) {
    console.log(response);
    state.totalBets = response;
  },
  [PARTICIPANT_MUTATIONS.SET_TOTAL_BETS_LOADING](state, isLoading) {
    state.totalBetsLoading = isLoading;
  },

};

export default participantMutations;
