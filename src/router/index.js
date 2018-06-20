import Vue from 'vue';
import Router from 'vue-router';
import Dashboard from '@/components/Dashboard';
import Participant from '@/components/Participant';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'landing',
      component: Dashboard,
    },
    {
      path: '/participants/:participantId',
      name: 'participant',
      component: Participant,
    },
  ],
});
