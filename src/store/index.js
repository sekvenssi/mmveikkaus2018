import Vue from 'vue';
import Vuex from 'vuex';
import { participantModule } from './modules/participantModule';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    participantModule,
  },
});

export default store;
