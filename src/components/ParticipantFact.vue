<template>
  <div>
    <h1 class="display-1"><b>{{ fact }}</b></h1>
    <p class="subheading">{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: 'participant-fact',
  props: {
    fact: [String, Number],
    label: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
</style>
