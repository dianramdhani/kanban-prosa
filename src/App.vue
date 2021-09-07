<template>
  <Navigation />
  <div class="drl-content px-4">
    <Header />
    <div class="row g-3">
      <TaskList title="Backlog" store="backlog" />
      <TaskList title="To Do" store="todo" />
      <TaskList title="Done" store="done" />
    </div>
  </div>
</template>

<script>
import TaskList from "./components/TaskList.vue";
import Header from "./components/Header.vue";
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: {
    Header,
    TaskList,
    Navigation,
  },
};
</script>

<style scoped>
.drl-content {
  width: calc(100vw - 300px);
  height: 100vh;
  overflow-y: auto;
  position: absolute;
  right: 0;
}
</style>
