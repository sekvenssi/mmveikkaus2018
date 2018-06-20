
export const sortObjectByNumberDescending = propName => (a, b) => b[propName] - a[propName];

export const topParticipants = state => (amount) => {
  const sortedParticipants = state.participants.sort(sortObjectByNumberDescending('points'));
  return sortedParticipants.slice(0, amount);
};

export const participantGetters = {
  topParticipants,
};
