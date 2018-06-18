import axios from 'axios';
import { PARTICIPANT_ACTIONS } from '../action-types';
import { PARTICIPANT_MUTATIONS } from '../mutation-types';

const participantActions = {
  async [PARTICIPANT_ACTIONS.LOAD_PARTICIPANTS]({ dispatch }) {
    try {
      const participants = await axios.get('https://omzi98lh47.execute-api.us-east-1.amazonaws.com/dev/participants');
      dispatch(PARTICIPANT_MUTATIONS.SET_PARTICIPANTS, participants);
    } catch (error) {
      console.error(error);
    }
  },
};

export default participantActions;
