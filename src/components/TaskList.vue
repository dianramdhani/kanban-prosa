<template>
  <div class="col-md">
    <div class="card">
      <div class="card-body">
        <div class="d-flex justify-content-between mb-4">
          <h4 class="card-title">{{ title }}</h4>
          <button
            type="button"
            class="btn btn-primary btn-rounded"
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
        <draggable v-model="tasks" item-key="issue_id" group="taskList">
          <template #item="{ element }">
            <Task
              :name="element.name"
              :title="element.title"
              :assignee="element.assignee"
              :start_date="element.start_date"
              :end_date="element.end_date"
              :tags="element.tags"
              @dblclick="openUpdateForm(element.issue_id)"
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
          <h5 class="modal-title">
            {{ idToUpdate ? "Update" : "New" }} {{ title }}
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
            @click="clearForm"
          ></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label class="form-label">Title</label>
            <input type="text" class="form-control" v-model="_title" />
          </div>
          <div class="mb-3">
            <label class="form-label">Tags</label>
            <select class="form-select" v-model="_tags">
              <option v-for="{ name } in tags" :key="name" :value="name">
                {{ name }}
              </option>
            </select>
          </div>
          <div class="mb-3">
            <label class="form-label">Assignee</label>
            <select class="form-select" v-model="_assignee">
              <option v-for="{ id, name } in users" :key="id" :value="id">
                {{ name }}
              </option>
            </select>
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
        <div class="modal-footer" v-if="idToUpdate === null">
          <button
            type="submit"
            class="btn btn-primary btn-rounded"
            @click.prevent="addTask"
          >
            Save
          </button>
        </div>
        <div class="modal-footer" v-else>
          <button type="submit" class="btn btn-primary btn-rounded" @click.prevent="updateTask">
            Update
          </button>
          <button type="button" class="btn btn-danger btn-rounded" @click="deleteTask">
            Delete
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import { Modal } from "bootstrap";
import UserService from "../services/UserService";
import TagsService from "../services/TagsService";

const userService = new UserService();
const tagsService = new TagsService();

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
      users: userService.getUsers(),
      tags: tagsService.getTags(),
      idToUpdate: null,
    };
  },
  userService: null,
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
    clearForm() {
      this._title = "";
      this._tags = "";
      this._assignee = "";
      this._start_date = null;
      this._end_date = null;
      this.idToUpdate = null;
    },

    addTask() {
      const task = {
        title: this._title,
        tags: this._tags,
        assignee: this._assignee,
        start_date: this._start_date,
        end_date: this._end_date,
      };
      this.$store.dispatch(`${this.store}/addTask`, task);
      this.clearForm();
      this.modalTask.toggle();
    },

    openUpdateForm(idToUpdate) {
      this.idToUpdate = idToUpdate;
      const task = this.tasks.find(({ issue_id }) => issue_id === idToUpdate);
      this._title = task.title;
      this._tags = task.tags;
      this._assignee = task.assignee;
      this._start_date = task.start_date;
      this._end_date = task.end_date;
      this.modalTask.toggle();
    },

    updateTask() {
      this.tasks = this.tasks.map((task) =>
        task.issue_id === this.idToUpdate
          ? {
              ...task,
              title: this._title,
              tags: this._tags,
              assignee: this._assignee,
              start_date: this._start_date,
              end_date: this._end_date,
            }
          : task
      );
      this.clearForm();
      this.modalTask.toggle();
    },

    deleteTask() {
      this.tasks = this.tasks.filter(({issue_id})=>issue_id !== this.idToUpdate);
      this.clearForm();
      this.modalTask.toggle();
    },
  },
};
</script>