import { PARTICIPANT_ACTIONS } from '../action-types';
import { PARTICIPANT_MUTATIONS } from '../mutation-types';
import { getParticipants, getParticipant } from '../../utils/ajax/participant';

const participantActions = {
  async [PARTICIPANT_ACTIONS.LOAD_PARTICIPANTS]({ commit }) {
    try {
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANTS_LOADING, true);
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANTS, []);
      const { data } = await getParticipants();
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANTS, data);
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANTS_LOADING, false);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANTS_LOADING, false);
    }
  },
  async [PARTICIPANT_ACTIONS.LOAD_PARTICIPANT]({ commit }, participantId) {
    try {
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANT_LOADING, true);
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANT, {});
      const { data } = await getParticipant(participantId);
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANT, data);
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANT_LOADING, false);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANT_LOADING, false);
    }
  },
};

export default participantActions;
