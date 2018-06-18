import participantActions from '../actions/participantActions';
import participantMutations from '../mutations/participantMutations';

export const participantState = {
  participants: [],
};

export const participantModule = {
  state: participantState,
  mutations: participantMutations,
  actions: participantActions,
};
