<template>
	<div>{{ count }}</div>
</template>

<script>
// import the module here instead of in `store/index.js`
import counterStoreModule from "../store/modules/counter";

export default {
  asyncData({ store, route }) {
    console.log(route);

    store.registerModule("counter", counterStoreModule);
    return store.dispatch("counter/asyncIncrement");
  },

  computed: {
    count() {
      return this.$store.state.counter.count;
    }
  },

  // IMPORTANT: avoid duplicate module registration on the client
  // when the route is visited multiple times.
  destroyed() {
    this.$store.unregisterModule("foo");
  }
};
</script>

<style>
</style>
