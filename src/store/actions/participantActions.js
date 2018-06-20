import { PARTICIPANT_ACTIONS } from '../action-types';
import { PARTICIPANT_MUTATIONS } from '../mutation-types';
import { getParticipants } from '../../utils/ajax/participant';

const participantActions = {
  async [PARTICIPANT_ACTIONS.LOAD_PARTICIPANTS]({ commit }) {
    try {
      const { data } = await getParticipants();
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANTS, data);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
    }
  },
};

export default participantActions;
