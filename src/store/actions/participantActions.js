import { PARTICIPANT_ACTIONS } from '../action-types';
import { PARTICIPANT_MUTATIONS } from '../mutation-types';
import {
  getParticipants,
  getParticipant,
  getParticipantStanding,
  getTotalBets,
} from '../../utils/ajax/participant';
// import { participantResponse } from '../../utils/ajax/mockData';

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
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANT, null);
      const { data } = await getParticipant(participantId);
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANT, data);
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANT_LOADING, false);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
      commit(PARTICIPANT_MUTATIONS.SET_PARTICIPANT_LOADING, false);
    }
  },
  async [PARTICIPANT_ACTIONS.LOAD_STANDING]({ commit }, participantId) {
    try {
      commit(PARTICIPANT_MUTATIONS.SET_STANDING_LOADING, true);
      commit(PARTICIPANT_MUTATIONS.SET_STANDING, null);
      const { data } = await getParticipantStanding(participantId);
      commit(PARTICIPANT_MUTATIONS.SET_STANDING, data);
      commit(PARTICIPANT_MUTATIONS.SET_STANDING_LOADING, false);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
      commit(PARTICIPANT_MUTATIONS.SET_STANDING_LOADING, false);
    }
  },
  async [PARTICIPANT_ACTIONS.LOAD_TOTAL_BETS]({ commit }) {
    try {
      commit(PARTICIPANT_MUTATIONS.SET_TOTAL_BETS_LOADING, true);
      commit(PARTICIPANT_MUTATIONS.SET_TOTAL_BETS, null);
      const { data } = await getTotalBets();
      commit(PARTICIPANT_MUTATIONS.SET_TOTAL_BETS, data.total);
      commit(PARTICIPANT_MUTATIONS.SET_TOTAL_BETS_LOADING, false);
    } catch (error) {
      // eslint-disable-next-line
      console.log(error);
      commit(PARTICIPANT_MUTATIONS.SET_TOTAL_BETS_LOADING, false);
    }
  },
};

export default participantActions;
