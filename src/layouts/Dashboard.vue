<template>
  <header class="navbar sticky-top flex-md-nowrap">
    <div class="col-md-3 col-lg-2 d-flex d-none d-md-block bg-primary search">
      <input
        class="form-control"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
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
    <div class="col">
      <a class="navbar-brand me-0 px-3" href="#">
        <img src="../assets//img/logo.png" alt="logo" />
        Kanban Prosa
      </a>
    </div>
    <button
      class="
        navbar-toggler
        position-absolute
        top-50
        start-100
        d-md-none
        collapsed
      "
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#sidebarMenu"
      aria-controls="sidebarMenu"
      aria-expanded="false"
      aria-label="Toggle navigation"
      style="transform: translate(calc(-100% - 16px), -50%)"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="d-none d-md-block me-4">
      <span class="me-2">
        <img
          src="../assets//img/user.png"
          alt="user"
          title="Thomas Fedric"
          class="user-icon"
        />
        <img
          src="../assets//img/user1.png"
          alt="user1"
          title="Martin Julian"
          class="user-icon"
        />
        <img
          src="../assets//img/user2.png"
          alt="user2"
          title="Dorman"
          class="user-icon"
        />
      </span>
      <span class="badge rounded-pill bg-light text-dark">70 Members</span>
    </div>
  </header>
  <div class="container-fluid">
    <div class="row">
      <nav
        id="sidebarMenu"
        class="col-md-3 col-lg-2 d-md-block sidebar collapse"
      >
        <div class="position-sticky" style="padding-top: 6rem">
          <input
            class="form-control w-100 d-md-none mb-3"
            type="text"
            placeholder="Search"
            aria-label="Search"
          />
          <div class="d-flex pb-3">
            <img class="me-2" src="../assets//img/user.png" alt="user" />
            <div class="d-flex flex-column justify-content-center">
              <h3 class="mb-0">Thomas Fedric</h3>
              <strong>Product Owner</strong>
            </div>
          </div>
          <div class="row pb-5 task-status">
            <div class="col">
              <h2 class="mb-0">372</h2>
              <strong>Completed Tasks</strong>
            </div>
            <div class="col">
              <h2 class="mb-0">11</h2>
              <strong>Open Tasks</strong>
            </div>
          </div>
          <h6 class="sidebar-heading pb-2">Menu</h6>
          <ul class="nav flex-column pb-5">
            <li class="nav-item">
              <a class="nav-link" href="#"> Home </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> My Tasks </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> Notification </a>
            </li>
          </ul>
          <h6 class="sidebar-heading pb-2">Teams</h6>
          <ul class="nav flex-column pb-5">
            <li
              class="nav-item d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#"> Researchers </a>
              <span>
                <img
                  src="../assets//img/user1.png"
                  alt="user1"
                  title="Martin Julian"
                  class="user-icon"
                />
                <img
                  src="../assets//img/user2.png"
                  alt="user2"
                  title="Dorman"
                  class="user-icon"
                />
              </span>
            </li>
            <li
              class="nav-item d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#"> FE/BE Team </a>
              <span>
                <img
                  src="../assets//img/user2.png"
                  alt="user2"
                  title="Dorman"
                  class="user-icon"
                />
              </span>
            </li>
            <li
              class="nav-item d-flex justify-content-between align-items-center"
            >
              <a class="nav-link" href="#"> PM Team </a>
              <span>
                <img
                  src="../assets//img/user.png"
                  alt="user"
                  title="Thomas Fedric"
                  class="user-icon"
                />
                <img
                  src="../assets//img/user1.png"
                  alt="user1"
                  title="Martin Julian"
                  class="user-icon"
                />
                <img
                  src="../assets//img/user2.png"
                  alt="user2"
                  title="Dorman"
                  class="user-icon"
                />
              </span>
            </li>
            <li class="nav-item">
              <a class="nav-link add-team" href="#"> + Add a Team </a>
            </li>
          </ul>
        </div>
      </nav>
      <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
        <slot />
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
};
</script>