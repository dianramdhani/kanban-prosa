<template>
  <div class="card border-0 bg-light mb-2" title="Double click to update" @dblclick="dblclick">
    <div class="card-body">
      <p class="card-text fw-bold">{{ title }}</p>
      <div class="d-flex justify-content-between">
        <div>
          <img
            class="me-1"
            :src="imageUrl"
            alt="a"
            style="max-height: 25px"
            :title="user.name"
          />
          <span class="badge rounded-pill" :class="{ [tagColor]: true }">{{
            tags
          }}</span>
        </div>
        {{ dueDate }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import UserService from "../services/UserService";
import TagsService from "../services/TagsService";

const userService = new UserService();
const tagsService = new TagsService();

export default {
  name: "Task",
  props: {
    title: String,
    assignee: String,
    start_date: Date | String,
    end_date: Date | String,
    tags: String,
    dblclick: Function,
  },
  data() {
    return {
      user: null,
    };
  },
  beforeMount() {
    this.user = userService.getUser(this.assignee);
  },
  beforeUpdate() {
    this.user = userService.getUser(this.assignee);
  },
  computed: {
    dueDate() {
      const startDate = new Date(this.start_date),
        endDate = new Date(this.end_date),
        duration = Math.abs(endDate - startDate);
      return moment.duration(duration, "millisecond").humanize();
    },

    imageUrl() {
      console.log('ada perubahan');
      var images = require.context("../assets/img", false, /\.png$/);
      return images(`./${this.user.imageName}`);
    },

    tagColor() {
      return tagsService.getClassBackground(this.tags);
    },
  },
};
</script>

<style scoped>
.card:hover {
  background-color: #eee !important;
}
</style>