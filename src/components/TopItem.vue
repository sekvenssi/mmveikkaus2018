<template>
    <v-list-tile :key="id" avatar @click="onClick">
      <v-list-tile-avatar color="teal">
        <span class="white--text headline">{{ position }}</span>
      </v-list-tile-avatar>
      <v-list-tile-content>
        <v-list-tile-title>
          <span class="link_color">{{ name }}</span>
        </v-list-tile-title>
      </v-list-tile-content>
      <v-list-tile-action><b>{{ points }}</b></v-list-tile-action>
    </v-list-tile>
</template>

<script>
export default {
  name: 'top-item',
  props: {
    id: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    points: {
      type: Number,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
  },
  methods: {
    onClick() {
      const route = { name: 'participant', params: { participantId: this.id } };
      this.$router.push(route);
    },
  },
};
</script>

<style>
  .list .list__tile--link:hover {
    background: rgba(0,0,0,.12);
  }
  .link_color {
    color: #1867c0;
  }
</style>
