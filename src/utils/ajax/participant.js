import { axiosInstance } from './axiosConfig';

const axios = axiosInstance();

export const getParticipant = (participantId) => {
  const endpoint = `https://omzi98lh47.execute-api.us-east-1.amazonaws.com/dev/participant/${participantId}`;
  return axios.get(endpoint);
};

export const getParticipants = () => {
  const endpoint = 'https://omzi98lh47.execute-api.us-east-1.amazonaws.com/dev/participants';
  return axios.get(endpoint);
};

export const getParticipantStanding = (participantId) => {
  const endpoint = `https://omzi98lh47.execute-api.us-east-1.amazonaws.com/dev/standing/${participantId}`;
  return axios.get(endpoint);
};

export const getTotalBets = () => {
  const endpoint = 'https://omzi98lh47.execute-api.us-east-1.amazonaws.com/dev/totalbets';
  return axios.get(endpoint);
};
