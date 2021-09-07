<template>
  <div class="card" style="width: 18rem">
    <div class="card-body">
      <p class="card-text">Improve accuracy of voice to text model</p>
      <div class="d-flex justify-content-between">
        <div>
          <img
            class="me-1"
            src="../assets/a.png"
            alt="a"
            style="max-height: 20px"
          />
          <span class="badge rounded-pill bg-primary">Primary</span>
        </div>
        2 days
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: {
    title: String,
    assignee: String,
    start_date: Date,
    end_date: Date,
    tags: String,
  },
  computed: {
    dueDate() {
      return "2 days";
    },
  },
};
</script>