<template>
  <div class="d-flex justify-content-between mt-4" style="margin-bottom: 60px">
    <div class="d-flex align-items-center">
      <img src="../assets/logo.png" alt="logo" />
      <span class="fs-2 fw-bold">Kanban Prosa</span>
    </div>
    <div class="d-flex align-items-center">
      <span class="me-2">
        <img
          class="me-1"
          src="../assets/a.png"
          alt="a"
          style="max-height: 25px"
        />
        <img
          class="me-1"
          src="../assets/b.png"
          alt="a"
          style="max-height: 25px"
        />
        <img
          class="me-1"
          src="../assets/c.png"
          alt="a"
          style="max-height: 25px"
        />
      </span>
      <span class="badge rounded-pill bg-light text-dark p-2">70 Members</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header",
};
</script>