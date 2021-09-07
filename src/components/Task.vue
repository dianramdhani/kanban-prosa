<template>
  <div class="card border-0 bg-light mb-2">
    <div class="card-body">
      <p class="card-text fw-bold">{{ title }}</p>
      <div class="d-flex justify-content-between">
        <div>
          <img
            class="me-1"
            src="../assets/a.png"
            alt="a"
            style="max-height: 25px"
            :title="assignee"
          />
          <span class="badge rounded-pill bg-primary">{{ tags }}</span>
        </div>
        {{ dueDate }}
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";

export default {
  name: "Task",
  props: {
    title: String,
    assignee: String,
    start_date: Date | String,
    end_date: Date | String,
    tags: String,
  },
  computed: {
    dueDate() {
      const startDate = new Date(this.start_date),
        endDate = new Date(this.end_date),
        duration = Math.abs(endDate - startDate);
      return moment.duration(duration, "millisecond").humanize();
    },
  },
};
</script>