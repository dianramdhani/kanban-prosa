<template>
  <div class="col">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between mb-4">
          <h4 class="card-title">{{ title }}</h4>
          <button
            type="button"
            class="btn btn-primary"
            @click="modalTask.toggle"
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
        <draggable
          v-model="tasks"
          item-key="issue_id"
          group="taskList"
        >
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

  <div
    class="modal fade"
    ref="modalTask"
    data-bs-backdrop="static"
    data-bs-keyboard="false"
    tabindex="-1"
    aria-labelledby="staticBackdropLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <form class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">New {{ title }}</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" v-model="_title" />
          </div>
          <div class="mb-3">
            <label class="form-label">Tags</label>
            <input type="text" class="form-control" v-model="_tags" />
          </div>
          <div class="mb-3">
            <label class="form-label">Assignee</label>
            <input type="text" class="form-control" v-model="_assignee" />
          </div>
          <div class="mb-3">
            <label class="form-label">Start Date</label>
            <input
              type="datetime-local"
              class="form-control"
              v-model="_start_date"
            />
          </div>
          <div class="mb-3">
            <label class="form-label">End Date</label>
            <input
              type="datetime-local"
              class="form-control"
              v-model="_end_date"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="submit"
            class="btn btn-primary"
            @click.prevent="addTask"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";

export default {
  name: "TaskList",
  props: {
    store: String,
    title: String,
  },
  data() {
    return {
      modalTask: null,
      _title: "",
      _tags: "",
      _assignee: "",
      _start_date: null,
      _end_date: null,
    };
  },
  mounted() {
    this.modalTask = new Modal(this.$refs.modalTask);
    this.$store.dispatch(`${this.store}/fetchTasks`);
  },
  computed: {
    tasks: {
      get() {
        return this.$store.state[this.store].tasks;
      },
      set(value) {
        this.$store.commit(`${this.store}/updateTasks`, value);
      },
    },
  },
  methods: {
    addTask() {
      const task = {
        title: this._title,
        tags: this._tags,
        assignee: this._assignee,
        start_date: this._start_date,
        end_date: this._end_date,
      };
      this.$store.dispatch(`${this.store}/addTask`, task);
      this._title= "";
      this._tags= "";
      this._assignee= "";
      this._start_date= null;
      this._end_date= null;
      this.modalTask.toggle();
    }
  },
};
</script>