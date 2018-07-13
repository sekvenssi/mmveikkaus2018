import participantActions from '../actions/participantActions';
import participantMutations from '../mutations/participantMutations';
import { participantGetters } from '../getters/participantGetters';

export const participantState = {
  participants: [],
  participantsLoading: false,
  participant: null,
  participantLoading: false,
  standing: null,
  standingLoading: false,
  totalBets: null,
  totalBetsLoading: false,
};

export const participantModule = {
  state: participantState,
  mutations: participantMutations,
  actions: participantActions,
  getters: participantGetters,
};
