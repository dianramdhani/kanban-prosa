<template>
  <Navigation />
  <div class="drl-content px-4">
    <Header />
    <div class="row g-3">
      <Todo />
      <Todo />
      <Todo />
    </div>
  </div>
</template>

<script>
import Todo from "./components/Todo.vue";
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Header,
    Todo,
    Navigation,
  },
};
</script>

<style scoped>
.drl-content {
  width: calc(100vw - 300px);
  position: absolute;
  right: 0;
}
</style>
