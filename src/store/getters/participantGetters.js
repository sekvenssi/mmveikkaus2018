
export const sortObjectByNumberDescending = propName => (a, b) => b[propName] - a[propName];

export const topParticipants = state => (amount) => {
  const sortedParticipants = state.participants.sort(sortObjectByNumberDescending('points'));
  return sortedParticipants.slice(0, amount);
};

const totalParticipants = state => state.participants.length || 33;

const mapGroupGame = (game, index) => {
  const { home, away, bet, isPlayed } = game;
  const gameName = `${home.name} vs. ${away.name}`;
  const betGoals = `${bet.homeGoals} - ${bet.awayGoals}`;
  const notPlayedScore = 'Not played yet';
  const correctGoals = isPlayed ? `${home.goals} - ${away.goals}` : notPlayedScore;
  return {
    gameNumber: index + 1,
    gameName,
    betGoals,
    correctGoals,
    points: bet.points,
  };
};

const filterCorrectGame = (game) => {
  const points = game.bet.points;
  return points === 1 || points === 3;
};

export const userGamesScores = (state) => {
  const isLegal = state.participant && typeof state.participant.games !== 'undefined';
  return !isLegal ? [] : state.participant.games.map(mapGroupGame);
};

export const correctGroupGames = (state) => {
  const isLegal = state.participant && typeof state.participant.games !== 'undefined';
  return !isLegal ? [] : state.participant.games.filter(filterCorrectGame);
};

export const participantFirstLetter = (state) => {
  const isLegal = state.participant && typeof state.participant.name !== 'undefined';
  return isLegal ? state.participant.name.charAt(0) : '';
};

export const participantGetters = {
  topParticipants,
  totalParticipants,
  userGamesScores,
  correctGroupGames,
  participantFirstLetter,
};
