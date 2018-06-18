import { PARTICIPANT_MUTATIONS } from '../mutation-types';

const participantMutations = {
  [PARTICIPANT_MUTATIONS.SET_PARTICIPANTS](state, response) {
    state.participants.splice(0, state.participants.length);
    state.participants = response || [];
  },
};

export default participantMutations;
