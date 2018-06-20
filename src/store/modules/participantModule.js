import participantActions from '../actions/participantActions';
import participantMutations from '../mutations/participantMutations';
import { participantGetters } from '../getters/participantGetters';

export const participantState = {
  participants: [],
  participantsLoading: false,
  participant: {},
  participantLoading: false,
};

export const participantModule = {
  state: participantState,
  mutations: participantMutations,
  actions: participantActions,
  getters: participantGetters,
};
