<template>
  <Dashboard>
    <div class="row g-3">
      <TaskList title="Backlog" store="backlog" />
      <TaskList title="To Do" store="todo" />
      <TaskList title="Done" store="done" />
    </div>
  </Dashboard>
</template>

<script>
import TaskList from "./components/TaskList.vue";
import Dashboard from "./layouts/Dashboard.vue";

export default {
  components: { Dashboard, TaskList },
  name: "App",
};
</script>