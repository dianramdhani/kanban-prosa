<template>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between mb-4">
          <h4 class="card-title">To Do</h4>
          <button
            type="btn btn-primary btn-sm"
            class="btn btn-primary"
            @click="
              add({
                issue_id: 1,
                title: 'Improve accuracy of voice-to-text model',
                assignee: 'String',
                start_date: new Date('07-09-2021 11:50'),
                end_date: new Date('07-09-2021 11:50'),
                tags: 'RESEARCH',
              })
            "
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-plus"
              viewBox="0 0 16 16"
            >
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
              />
            </svg>
            Add Task
          </button>
        </div>
        <draggable v-model="tasks" item-key="issue_id">
          <template #item="{ element }">
            <Task
              :name="element.name"
              :title="element.title"
              :assignee="element.assignee"
              :start_date="element.start_date"
              :end_date="element.end_date"
              :tags="element.tags"
            />
          </template>
        </draggable>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Todo",
  computed: {
    tasks: {
      get() {
        return this.$store.state.todo.tasks;
      },
      set(value) {
        this.$store.commit("todo/updateTasks", value);
      },
    },
  },
  methods: { ...mapActions({ add: "todo/addTask" }) },
};
</script>