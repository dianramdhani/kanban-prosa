<template>
  <div class="drl-nav-container p-4">
    <div class="d-flex justify-content-between align-items-center mb-5">
      <input type="text" class="form-control drl-search" placeholder="Search" />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-search"
        viewBox="0 0 16 16"
      >
        <path
          d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        />
      </svg>
    </div>
    <div class="d-flex mb-4">
      <img
        src="../assets/a.png"
        alt="user"
        class="me-4"
        style="width: 50px; height: 50px"
      />
      <span>
        <h5 class="mb-0">User name</h5>
        role
      </span>
    </div>
    <div class="row mb-5">
      <span class="col">
        <h3 class="mb-0">327</h3>
        Complete Task
      </span>
      <span class="col">
        <h3 class="mb-0">327</h3>
        Complete Task
      </span>
    </div>

    <div class="list-group mb-4">
      <h5 class="list-group-item" style="color: #000">MENU</h5>
      <button type="button" class="list-group-item list-group-item-action">
        Home
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        My Task
      </button>
      <button type="button" class="list-group-item list-group-item-action">
        Notification
        <span
          class="badge rounded-pill bg-white ms-2"
          style="width: 20px; color: #000"
          >3</span
        >
      </button>
    </div>

    <div class="list-group">
      <h5 class="list-group-item" style="color: #000">TEAMS</h5>
      <button
        type="button"
        class="
          list-group-item list-group-item-action
          d-flex
          justify-content-between
        "
      >
        Researchers
        <span>
            <img class="ms-1" style="max-height: 20px" src="../assets/a.png" alt="logo">
        </span>
      </button>
      <button
        type="button"
        class="
          list-group-item list-group-item-action
          d-flex
          justify-content-between
        "
      >
        FE/BE Teams
        <span>
            <img class="ms-1" style="max-height: 20px" src="../assets/a.png" alt="logo">
            <img class="ms-1" style="max-height: 20px" src="../assets/b.png" alt="logo">
            <img class="ms-1" style="max-height: 20px" src="../assets/c.png" alt="logo">
        </span>
      </button>
      <button
        type="button"
        class="
          list-group-item list-group-item-action
          d-flex
          justify-content-between
        "
      >
        PM Teams
        <span>
            <img class="ms-1" style="max-height: 20px" src="../assets/a.png" alt="logo">
            <img class="ms-1" style="max-height: 20px" src="../assets/b.png" alt="logo">
        </span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style scoped>
.drl-nav-container {
  position: absolute;
  height: 100vh;
  width: 300px;
  background-color: #4ca991;
  color: #fff;
}

.drl-search,
.drl-search::placeholder {
  background: unset;
  color: #fff;
}

.drl-search,
.drl-search:focus {
  border: unset;
  box-shadow: unset;
}

.list-group * {
  background-color: unset;
  border: unset;
  padding-left: unset;
  padding-right: unset;
}

.list-group button {
  color: #fff;
}

.list-group button:hover {
  color: #ccc;
}
</style>