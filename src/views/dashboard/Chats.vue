<template>
  <div class="chats">
    <aside class="sidebar">
      <div id="chat">
        <!-- Chat Tab Content Start -->
        <div class="tab-pane" id="chats-content">
          <div class="d-flex flex-column h-100">
            <div class="hide-scrollbar h-100" id="chatContactsList">
              <!-- Chat Header Start -->
              <div class="sidebar-header sticky-top p-2">
                <div class="d-flex justify-content-between align-items-center">
                  <!-- Chat Tab Pane Title Start -->
                  <h5 class="font-weight-semibold mb-0">Chats</h5>
                  <!-- Chat Tab Pane Title End -->

                  <ul class="nav flex-nowrap">
                    <li class="nav-item list-inline-item mr-1">
                      <a
                        class="nav-link text-muted px-1"
                        href="http://prismthemes.com/quicky/ltr/light-skin/index.html#"
                        title="Notifications"
                        role="button"
                        data-toggle="modal"
                        data-target="#notificationModal"
                      >
                        <!-- Default :: Inline SVG -->
                        <svg
                          class="hw-20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                          ></path>
                        </svg>

                        <!-- Alternate :: External File link -->
                        <!-- <img src="./../../assets/media/heroicons/outline/bell.svg" alt="" class="injectable hw-20"> -->
                      </a>
                    </li>

                    <li
                      class="nav-item list-inline-item d-block d-xl-none mr-1"
                    >
                      <a
                        class="nav-link text-muted px-1"
                        href="http://prismthemes.com/quicky/ltr/light-skin/index.html#"
                        title="Appbar"
                        data-toggle-appbar=""
                      >
                        <!-- Default :: Inline SVG -->
                        <svg
                          class="hw-20"
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                          ></path>
                        </svg>

                        <!-- Alternate :: External File link -->
                        <!-- <img class="hw-20" src="./../../assets/media/heroicons/outline/view-grid.svg" alt="" class="injectable hw-20"> -->
                      </a>
                    </li>

                    <li class="nav-item list-inline-item mr-0">
                      <div class="dropdown">
                        <a
                          class="nav-link text-muted px-1"
                          href="http://prismthemes.com/quicky/ltr/light-skin/index.html#"
                          role="button"
                          title="Details"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <!-- Default :: Inline SVG -->
                          <svg
                            class="hw-20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            ></path>
                          </svg>

                          <!-- Alternate :: External File link -->
                          <!-- <img src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt="" class="injectable hw-20"> -->
                        </a>

                        <div class="dropdown-menu dropdown-menu-right">
                          <a
                            class="dropdown-item"
                            href="http://prismthemes.com/quicky/ltr/light-skin/index.html#"
                            role="button"
                            data-toggle="modal"
                            data-target="#startConversation"
                            >New Chat</a
                          >
                          <a
                            class="dropdown-item"
                            href="http://prismthemes.com/quicky/ltr/light-skin/index.html#"
                            role="button"
                            data-toggle="modal"
                            data-target="#createGroup"
                            >Create Group</a
                          >
                          <a
                            class="dropdown-item"
                            href="http://prismthemes.com/quicky/ltr/light-skin/index.html#"
                            role="button"
                            data-toggle="modal"
                            data-target="#inviteOthers"
                            >Invite Others</a
                          >
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>

                <!-- Sidebar Header Start -->

                <!-- Sidebar Header End -->
              </div>
              <!-- Chat Header End -->

              <!-- Chat Contact List Start -->
              <ul class="contacts-list" id="chatContactTab" data-chat-list="">
                <!-- Chat Item Start -->
                <li class="contacts-item friends">
                  <a class="contacts-link" href="chat/chat-1.html">
                    <div class="avatar avatar-online">
                      <!-- <img src="./profilePage_files/2.png" alt=""> -->
                    </div>
                    <div class="contacts-content">
                      <div class="contacts-info">
                        <h6 class="chat-name text-truncate">
                          Catherine Richardson
                        </h6>
                        <div class="chat-time">Just now</div>
                      </div>
                      <div class="contacts-texts">
                        <p class="text-truncate">
                          I’m sorry, I didn’t catch that. Could you please
                          repeat?
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <!-- Chat Item End -->

                <!-- Chat Item Start -->
                <li class="contacts-item groups">
                  <a
                    class="contacts-link"
                    href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html"
                  >
                    <div class="avatar bg-success text-light">
                      <span>
                        <!-- Default :: Inline SVG -->
                        <svg
                          class="hw-24"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          ></path>
                        </svg>

                        <!-- Alternate :: External File link -->
                        <!-- <img class="injectable" src="./../../assets/media/heroicons/outline/user-group.svg" alt=""> -->
                      </span>
                    </div>
                    <div class="contacts-content">
                      <div class="contacts-info">
                        <h6 class="chat-name">Themeforest Group</h6>
                        <div class="chat-time"><span>10:20 pm</span></div>
                      </div>
                      <div class="contacts-texts">
                        <p class="text-truncate">
                          <span>Jeny: </span>That’s pretty common. I heard that
                          a lot of people had the same experience.
                        </p>
                        <div class="d-inline-flex align-items-center ml-1">
                          <!-- Default :: Inline SVG -->
                          <svg
                            class="hw-16 text-muted"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>

                          <!-- Alternate :: External File link -->
                          <!-- <img class="injectable hw-16 text-muted" src="./../../assets/media/heroicons/solid/lock-closed.svg" alt=""> -->
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <!-- Chat Item End -->

                <!-- Chat Item Start -->
                <li class="contacts-item friends unread">
                  <a
                    class="contacts-link"
                    href="http://prismthemes.com/quicky/ltr/light-skin/index.html#"
                  >
                    <div class="avatar avatar-offline bg-info text-light">
                      <span>EW</span>
                    </div>
                    <div class="contacts-content">
                      <div class="contacts-info">
                        <h6 class="chat-name">Eva Walker</h6>
                        <div class="chat-time">09:36 am</div>
                      </div>
                      <div class="contacts-texts">
                        <p class="text-truncate">
                          You’re kidding! I drive a motorcycle as well. What
                          type of bike do you have?
                        </p>
                        <div class="badge badge-rounded badge-primary ml-1">
                          2
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <!-- Chat Item End -->

                <!-- Chat Item Start -->
                <li class="contacts-item friends">
                  <a
                    class="contacts-link"
                    href="http://prismthemes.com/quicky/ltr/light-skin/index.html#"
                  >
                    <!-- <div class="avatar avatar-busy"><img src="./profilePage_files/3.png" alt=""></div> -->
                    <div class="contacts-content">
                      <div class="contacts-info">
                        <h6 class="chat-name">Christopher Garcia</h6>
                        <div class="chat-time"><span>Yesterday</span></div>
                      </div>
                      <div class="contacts-texts">
                        <!-- Default :: Inline SVG -->
                        <svg
                          class="hw-20 text-muted"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>

                        <!-- Alternate :: External File link -->
                        <!-- <img class="injectable text-muted" src="./../../assets/media/heroicons/solid/photograph.svg" alt=""> -->
                        <p class="text-truncate">Photo</p>
                      </div>
                    </div>
                  </a>
                </li>
                <!-- Chat Item End -->

                <!-- Chat Item Start -->
                <li class="contacts-item unread">
                  <a
                    class="contacts-link"
                    href="http://prismthemes.com/quicky/ltr/light-skin/index.html#"
                  >
                    <div class="avatar avatar-online">
                      <!-- <img src="./profilePage_files/4.png" alt=""> -->
                    </div>
                    <div class="contacts-content">
                      <div class="contacts-info">
                        <h6 class="chat-name">Christina Turner</h6>
                        <div class="chat-time">
                          <span>31/05/20</span>
                        </div>
                      </div>
                      <div class="contacts-texts">
                        <p class="text-truncate">
                          I’m working hard in Maths, Physics and Chemistry. I
                          have planning to appear in I.I.T. after XII.
                        </p>
                        <div class="badge badge-rounded badge-primary ml-1">
                          10
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <!-- Chat Item End -->

                <!-- Chat Item Start -->
                <li class="contacts-item friends">
                  <a
                    class="contacts-link"
                    href="http://prismthemes.com/quicky/ltr/light-skin/index.html#"
                  >
                    <div class="avatar avatar-offline">
                      <!-- <img src="./profilePage_files/5.png" alt=""> -->
                    </div>
                    <div class="contacts-content">
                      <div class="contacts-info">
                        <h6 class="chat-name">Tammy Martinez</h6>
                        <div class="chat-time">
                          <span>24/04/20</span>
                        </div>
                      </div>
                      <div class="contacts-texts">
                        <!-- Default :: Inline SVG -->
                        <svg
                          class="hw-20 text-muted"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>

                        <!-- Alternate :: External File link -->
                        <!-- <img class="injectable text-muted" src="./../../assets/media/heroicons/solid/document-report.svg" alt=""> -->
                        <p class="text-truncate">project_guidelines.docs</p>
                      </div>
                    </div>
                  </a>
                </li>
                <!-- Chat Item End -->

                <!-- Chat Item Start -->
                <li class="contacts-item friends">
                  <a
                    class="contacts-link"
                    href="http://prismthemes.com/quicky/ltr/light-skin/index.html#"
                  >
                    <!-- <div class="avatar avatar-online"><img src="./profilePage_files/6.png" alt=""></div> -->
                    <div class="contacts-content">
                      <div class="contacts-info">
                        <h6 class="chat-name">Bonnie Torres</h6>
                        <div class="chat-time"><span>20/04/20</span></div>
                      </div>
                      <div class="contacts-texts">
                        <p class="text-truncate">Catch you later! Bye-bye!</p>
                        <div class="d-inline-flex align-items-center ml-1">
                          <!-- Default :: Inline SVG -->
                          <svg
                            class="hw-16 text-muted"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                          <!-- Alternate :: External File link -->
                          <!-- <img class="injectable hw-16 text-muted" src="./../../assets/media/heroicons/solid/volume-off.svg" alt=""> -->
                        </div>
                      </div>
                    </div>
                  </a>
                </li>
                <!-- Chat Item End -->

                <!-- Chat Item Start -->
                <li class="contacts-item friends">
                  <a
                    class="contacts-link"
                    href="http://prismthemes.com/quicky/ltr/light-skin/index.html#"
                  >
                    <!-- <div class="avatar avatar-offline"><img src="./profilePage_files/7.png" alt=""></div> -->
                    <div class="contacts-content">
                      <div class="contacts-info">
                        <h6 class="chat-name">Jacqueline James</h6>
                        <div class="chat-time"><span>15/02/20</span></div>
                      </div>
                      <div class="contacts-texts">
                        <!-- Default :: Inline SVG -->
                        <svg
                          class="hw-16 text-muted"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"
                          ></path>
                          <path
                            d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"
                          ></path>
                        </svg>

                        <!-- Alternate :: External File link -->
                        <!-- <img class="injectable hw-16 text-muted" src="./../../assets/media/heroicons/solid/phone-incoming.svg" alt=""> -->
                        <p class="text-truncate">Missed call</p>
                      </div>
                    </div>
                  </a>
                </li>
                <!-- Chat Item End -->

                <!-- Chat Item Start -->
                <li class="contacts-item archived">
                  <a
                    class="contacts-link"
                    href="http://prismthemes.com/quicky/ltr/light-skin/index.html#"
                  >
                    <!-- <div class="avatar avatar-away"><img src="./profilePage_files/8.png" alt=""></div> -->
                    <div class="contacts-content">
                      <div class="contacts-info">
                        <h6 class="chat-name">Annie Richardson</h6>
                        <div class="chat-time"><span>26/12/19</span></div>
                      </div>
                      <div class="contacts-texts">
                        <p class="text-truncate">
                          I think I have everything I need, thank you!
                        </p>
                      </div>
                    </div>
                  </a>
                </li>
                <!-- Chat Item End -->
              </ul>
              <!-- Chat Contact List End -->
            </div>
          </div>
        </div>
      </div>
    </aside>

    <main class="main">
      <!-- Chats Page Start -->
      <div class="chats">
        <div
          class="
            d-flex
            flex-column
            justify-content-center
            text-center
            h-100
            w-100
          "
        >
          <main class="main main-visible">
            <!-- Chats Page Start -->
            <div class="chats">
              <!-- Chat Body Start -->
              <div class="chat-body">
                <!-- Chat Header Start-->
                <div class="chat-header">
                  <!-- Chat Back Button (Visible only in Small Devices) -->
                  <button
                    class="
                      btn btn-secondary btn-icon btn-minimal btn-sm
                      d-xl-none
                    "
                    type="button"
                    data-close=""
                  >
                    <svg
                      class="hw-20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M10 19l-7-7m0 0l7-7m-7 7h18"
                      ></path>
                    </svg>
                    <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/arrow-left.svg" alt=""> -->
                  </button>

                  <!-- Chat participant's Name -->
                  <div class="media chat-name align-items-center text-truncate">
                    <div
                      class="
                        avatar
                        bg-success
                        text-light
                        d-none d-sm-inline-block
                        mr-3
                      "
                    >
                      <span>
                        <svg
                          class="hw-24"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          ></path>
                        </svg>
                        <!-- <img class="injectable" src="./../../assets/media/heroicons/outline/user-group.svg" alt=""> -->
                      </span>
                    </div>

                    <div class="media-body align-self-center">
                      <h6 class="text-truncate mb-0">Themeforest Group</h6>
                      <small class="text-muted">252 Participants</small>
                    </div>
                  </div>

                  <!-- Chat Options -->
                  <ul class="nav flex-nowrap">
                    <li
                      class="nav-item list-inline-item d-none d-sm-block mr-1"
                    >
                      <a
                        class="nav-link text-muted px-1"
                        data-toggle="collapse"
                        data-target="#searchCollapse"
                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                        aria-expanded="false"
                      >
                        <svg
                          class="hw-20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                          ></path>
                        </svg>

                        <!-- <img src="./../../assets/media/heroicons/outline/search.svg" alt="" class="injectable hw-20"> -->
                      </a>
                    </li>

                    <li
                      class="nav-item list-inline-item d-none d-sm-block mr-1"
                    >
                      <a
                        class="nav-link text-muted px-1"
                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                        title="Add People"
                      >
                        <svg
                          class="hw-20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          ></path>
                        </svg>
                        <!-- <img src="./../../assets/media/heroicons/outline/phone.svg" alt="" class="injectable hw-20"> -->
                      </a>
                    </li>
                    <li
                      class="nav-item list-inline-item d-none d-sm-block mr-0"
                    >
                      <div class="dropdown">
                        <a
                          class="nav-link text-muted px-1"
                          href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                          role="button"
                          title="Details"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            class="hw-20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            ></path>
                          </svg>
                          <!-- <img src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt="" class="injectable hw-20"> -->
                        </a>

                        <div class="dropdown-menu dropdown-menu-right">
                          <a
                            class="dropdown-item align-items-center d-flex"
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                            data-chat-info-toggle=""
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>

                            <!-- <img src="./../../assets/media/heroicons/outline/information-circle.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>View Info</span>
                          </a>

                          <a
                            class="dropdown-item align-items-center d-flex"
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                clip-rule="evenodd"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                              ></path>
                            </svg>
                            <!-- <img src="./../../assets/media/heroicons/outline/volume-off.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>Mute Notifications</span>
                          </a>
                          <a
                            class="dropdown-item align-items-center d-flex"
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <!-- <img src="./../../assets/media/heroicons/outline/photograph.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>Wallpaper</span>
                          </a>
                          <a
                            class="dropdown-item align-items-center d-flex"
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                              ></path>
                            </svg>

                            <!-- <img src="./../../assets/media/heroicons/outline/archive.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>Archive</span>
                          </a>
                          <a
                            class="dropdown-item align-items-center d-flex"
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              ></path>
                            </svg>

                            <!-- <img src="./../../assets/media/heroicons/outline/trash.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>Delete</span>
                          </a>
                          <a
                            class="
                              dropdown-item
                              align-items-center
                              d-flex
                              text-danger
                            "
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              ></path>
                            </svg>

                            <!-- <img src="./../../assets/media/heroicons/outline/ban.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>Block</span>
                          </a>
                        </div>
                      </div>
                    </li>
                    <li class="nav-item list-inline-item d-sm-none mr-0">
                      <div class="dropdown">
                        <a
                          class="nav-link text-muted px-1"
                          href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                          role="button"
                          title="Details"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <svg
                            class="hw-20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                            ></path>
                          </svg>
                          <!-- <img src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt="" class="injectable hw-20"> -->
                        </a>

                        <div class="dropdown-menu dropdown-menu-right">
                          <a
                            class="dropdown-item align-items-center d-flex"
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                              ></path>
                            </svg>
                            <!-- <img src="./../../assets/media/heroicons/outline/phone.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>Call</span>
                          </a>
                          <a
                            class="dropdown-item align-items-center d-flex"
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                            data-toggle="collapse"
                            data-target="#searchCollapse"
                            aria-expanded="false"
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                              ></path>
                            </svg>
                            <!-- <img src="./../../assets/media/heroicons/outline/search.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>Search</span>
                          </a>

                          <a
                            class="dropdown-item align-items-center d-flex"
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                            data-chat-info-toggle=""
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                              ></path>
                            </svg>

                            <!-- <img src="./../../assets/media/heroicons/outline/information-circle.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>View Info</span>
                          </a>

                          <a
                            class="dropdown-item align-items-center d-flex"
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                                clip-rule="evenodd"
                              ></path>
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2"
                              ></path>
                            </svg>
                            <!-- <img src="./../../assets/media/heroicons/outline/volume-off.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>Mute Notifications</span>
                          </a>
                          <a
                            class="dropdown-item align-items-center d-flex"
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                              ></path>
                            </svg>
                            <!-- <img src="./../../assets/media/heroicons/outline/photograph.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>Wallpaper</span>
                          </a>
                          <a
                            class="dropdown-item align-items-center d-flex"
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                              ></path>
                            </svg>
                            <!-- <img src="./../../assets/media/heroicons/outline/archive.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>Archive</span>
                          </a>
                          <a
                            class="dropdown-item align-items-center d-flex"
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              ></path>
                            </svg>

                            <!-- <img src="./../../assets/media/heroicons/outline/trash.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>Delete</span>
                          </a>
                          <a
                            class="
                              dropdown-item
                              align-items-center
                              d-flex
                              text-danger
                            "
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                          >
                            <svg
                              class="hw-20 mr-2"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636"
                              ></path>
                            </svg>

                            <!-- <img src="./../../assets/media/heroicons/outline/ban.svg" alt="" class="injectable hw-20 mr-2"> -->
                            <span>Block</span>
                          </a>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
                <!-- Chat Header End-->

                <!-- Search Start -->
                <div class="collapse border-bottom px-3" id="searchCollapse">
                  <div class="container-xl py-2 px-0 px-md-3">
                    <div class="input-group bg-light">
                      <input
                        type="text"
                        class="
                          form-control form-control-md
                          border-right-0
                          bg-transparent
                          pr-0
                        "
                        placeholder="Search"
                      />
                      <div class="input-group-append">
                        <span
                          class="input-group-text bg-transparent border-left-0"
                        >
                          <svg
                            class="hw-20"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                            ></path>
                          </svg>

                          <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/search.svg" alt="Search icon"> -->
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <!-- Search End -->

                <!-- Chat Content Start-->
                <div class="chat-content p-2">
                  <div class="container">
                    <!-- Message Day Start -->
                    <div class="message-day">
                      <div
                        class="message-divider sticky-top pb-2"
                        data-label="Yesterday"
                      >
                        &nbsp;
                      </div>

                      <!-- Received Message Start -->
                      <div class="message">
                        <div class="message-wrapper">
                          <div class="message-content">
                            <h6 class="text-dark">Brittany Williams</h6>
                            <span
                              >Wow! Today is October 30th! Halloween is tomorrow
                              already! Have you decided what you will be
                              dressing up for Halloween yet, Sara?</span
                            >
                          </div>
                        </div>
                        <div class="message-options">
                          <!-- <div class="avatar avatar-sm"><img alt="" src="./Quicky - HTML Chat Template_files/1.png"></div> -->
                          <span class="message-date">9:12am</span>
                          <div class="dropdown">
                            <a
                              class="text-muted"
                              href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <!-- Default :: Inline SVG -->
                              <svg
                                class="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                ></path>
                              </svg>

                              <!-- Alternate :: External File link -->
                              <!-- <img class="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> -->
                            </a>

                            <div class="dropdown-menu">
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> -->
                                <span>Copy</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> -->
                                <span>Replay</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> -->
                                <span>Forward</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> -->
                                <span>Favourite</span>
                              </a>
                              <a
                                class="
                                  dropdown-item
                                  d-flex
                                  align-items-center
                                  text-danger
                                "
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> -->
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Received Message End -->

                      <!-- Self Message Start -->
                      <div class="message self">
                        <div class="message-wrapper">
                          <div class="message-content">
                            I’m not sure what I want to be yet. I want to be
                            either a butterfly or a pumpkin. But why do we dress
                            up for Halloween?
                          </div>
                        </div>
                        <div class="message-options">
                          <!-- <div class="avatar avatar-sm"><img alt="" src="./Quicky - HTML Chat Template_files/6.png"></div> -->

                          <span class="message-date">9:12am</span>
                          <span class="message-status">Edited</span>

                          <div class="dropdown">
                            <a
                              class="text-muted"
                              href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <!-- Default :: Inline SVG -->
                              <svg
                                class="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                ></path>
                              </svg>

                              <!-- Alternate :: External File link -->
                              <!-- <img class="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> -->
                            </a>

                            <div class="dropdown-menu">
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> -->
                                <span>Copy</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/pencil.svg" alt="message edit"> -->
                                <span>Edit</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> -->
                                <span>Replay</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> -->
                                <span>Forward</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> -->
                                <span>Favourite</span>
                              </a>
                              <a
                                class="
                                  dropdown-item
                                  d-flex
                                  align-items-center
                                  text-danger
                                "
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> -->
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Self Message End -->

                      <!-- Received Message Start -->
                      <div class="message">
                        <div class="message-wrapper">
                          <div class="message-content">
                            <h6 class="text-dark">Jacqueline James</h6>
                            <span
                              >Halloween is a festival for children, and
                              costumes make it more special. I think we have
                              much more fun going from house to house asking for
                              candies (trick-or-treating) after sunset dressed
                              in our favourite costumes.</span
                            >
                          </div>
                        </div>
                        <div class="message-options">
                          <!-- <div class="avatar avatar-sm"><img alt="" src="./Quicky - HTML Chat Template_files/7.png"></div> -->
                          <span class="message-date">9:12am</span>
                          <div class="dropdown">
                            <a
                              class="text-muted"
                              href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <!-- Default :: Inline SVG -->
                              <svg
                                class="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                ></path>
                              </svg>

                              <!-- Alternate :: External File link -->
                              <!-- <img class="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> -->
                            </a>

                            <div class="dropdown-menu">
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> -->
                                <span>Copy</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> -->
                                <span>Replay</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> -->
                                <span>Forward</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> -->
                                <span>Favourite</span>
                              </a>
                              <a
                                class="
                                  dropdown-item
                                  d-flex
                                  align-items-center
                                  text-danger
                                "
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> -->
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Received Message End -->

                      <!-- Received Message Start -->
                      <div class="message">
                        <div class="message-wrapper">
                          <div class="message-content">
                            <h6 class="text-dark">Bonnie Torres</h6>
                            <span
                              >Yes, I remember having a lot of fun last year
                              when mom took me around in a bunny outfit. Do you
                              know what you want to be yet, Patrick?</span
                            >
                          </div>
                        </div>
                        <div class="message-options">
                          <!-- <div class="avatar avatar-sm"><img alt="" src="./Quicky - HTML Chat Template_files/2.png"></div> -->
                          <span class="message-date">9:12am</span>
                          <div class="dropdown">
                            <a
                              class="text-muted"
                              href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <!-- Default :: Inline SVG -->
                              <svg
                                class="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                ></path>
                              </svg>

                              <!-- Alternate :: External File link -->
                              <!-- <img class="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> -->
                            </a>

                            <div class="dropdown-menu">
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> -->
                                <span>Copy</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> -->
                                <span>Replay</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> -->
                                <span>Forward</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> -->
                                <span>Favourite</span>
                              </a>
                              <a
                                class="
                                  dropdown-item
                                  d-flex
                                  align-items-center
                                  text-danger
                                "
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> -->
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Received Message End -->

                      <!-- Self Message Start -->
                      <div class="message self">
                        <div class="message-wrapper">
                          <div class="message-content">
                            I want to be Batman! I like wearing the cape and the
                            mask. I think you should be a butterfly. You are so
                            much shorter than me, and dressed in a pumpkin
                            costume, someone might think you really are one and
                            try to make a pie out of you.
                          </div>
                        </div>
                        <div class="message-options">
                          <!-- <div class="avatar avatar-sm"><img alt="" src="./Quicky - HTML Chat Template_files/6.png"></div> -->

                          <span class="message-date">9:12am</span>

                          <div class="dropdown">
                            <a
                              class="text-muted"
                              href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <!-- Default :: Inline SVG -->
                              <svg
                                class="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                ></path>
                              </svg>

                              <!-- Alternate :: External File link -->
                              <!-- <img class="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> -->
                            </a>

                            <div class="dropdown-menu">
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> -->
                                <span>Copy</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/pencil.svg" alt="message edit"> -->
                                <span>Edit</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> -->
                                <span>Replay</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> -->
                                <span>Forward</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> -->
                                <span>Favourite</span>
                              </a>
                              <a
                                class="
                                  dropdown-item
                                  d-flex
                                  align-items-center
                                  text-danger
                                "
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> -->
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Self Message End -->

                      <!-- Received Message Start -->
                      <div class="message">
                        <div class="message-wrapper">
                          <div class="message-content">
                            <h6 class="text-dark">Annie Richardson</h6>
                            <span
                              >How could anyone mistake me for a real pumpkin?
                              Real pumpkins do not have a head or arms or legs.
                              But I suppose I will be a butterfly anyway. I can
                              have pretty wings.</span
                            >
                          </div>
                        </div>
                        <div class="message-options">
                          <!-- <div class="avatar avatar-sm"><img alt="" src="./Quicky - HTML Chat Template_files/5.png"></div> -->
                          <span class="message-date">9:12am</span>
                          <div class="dropdown">
                            <a
                              class="text-muted"
                              href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <!-- Default :: Inline SVG -->
                              <svg
                                class="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                ></path>
                              </svg>

                              <!-- Alternate :: External File link -->
                              <!-- <img class="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> -->
                            </a>

                            <div class="dropdown-menu">
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> -->
                                <span>Copy</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> -->
                                <span>Replay</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> -->
                                <span>Forward</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> -->
                                <span>Favourite</span>
                              </a>
                              <a
                                class="
                                  dropdown-item
                                  d-flex
                                  align-items-center
                                  text-danger
                                "
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> -->
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Received Message End -->
                    </div>
                    <!-- Message Day End -->

                    <!-- Message Day Start -->
                    <div class="message-day">
                      <div
                        class="message-divider sticky-top pb-2"
                        data-label="Today"
                      >
                        &nbsp;
                      </div>

                      <!-- Self Message Start -->
                      <div class="message self">
                        <div class="message-wrapper">
                          <div class="message-content">
                            <span
                              >Great! So you will be a butterfly and I will be
                              Batman. Let’s go ask Mom if we can go
                              trick-or-treating tomorrow night by ourselves.
                              Although you are still young, I think I am old
                              enough to watch over the both of us.</span
                            >
                          </div>
                        </div>
                        <div class="message-options">
                          <!-- <div class="avatar avatar-sm"><img alt="" src="./Quicky - HTML Chat Template_files/6.png"></div> -->

                          <span class="message-date">9:12am</span>
                          <span class="message-status">Edited</span>

                          <div class="dropdown">
                            <a
                              class="text-muted"
                              href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <!-- Default :: Inline SVG -->
                              <svg
                                class="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                ></path>
                              </svg>

                              <!-- Alternate :: External File link -->
                              <!-- <img class="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> -->
                            </a>

                            <div class="dropdown-menu">
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> -->
                                <span>Copy</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/pencil.svg" alt="message edit"> -->
                                <span>Edit</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> -->
                                <span>Replay</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> -->
                                <span>Forward</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> -->
                                <span>Favourite</span>
                              </a>
                              <a
                                class="
                                  dropdown-item
                                  d-flex
                                  align-items-center
                                  text-danger
                                "
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> -->
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Self Message End -->

                      <!-- Received Message Start -->
                      <div class="message">
                        <div class="message-wrapper">
                          <div class="message-content">
                            <h6 class="text-dark">Katherine Schneider</h6>
                            <span>OK, let’s go ask mom!</span>
                          </div>
                        </div>
                        <div class="message-options">
                          <!-- <div class="avatar avatar-sm"><img alt="" src="./Quicky - HTML Chat Template_files/4.png"></div> -->
                          <span class="message-date">9:12am</span>
                          <div class="dropdown">
                            <a
                              class="text-muted"
                              href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <!-- Default :: Inline SVG -->
                              <svg
                                class="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                ></path>
                              </svg>

                              <!-- Alternate :: External File link -->
                              <!-- <img class="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> -->
                            </a>

                            <div class="dropdown-menu">
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> -->
                                <span>Copy</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> -->
                                <span>Replay</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> -->
                                <span>Forward</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> -->
                                <span>Favourite</span>
                              </a>
                              <a
                                class="
                                  dropdown-item
                                  d-flex
                                  align-items-center
                                  text-danger
                                "
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> -->
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Received Message End -->

                      <!-- Self Message Start -->
                      <div class="message self">
                        <div class="message-wrapper">
                          <div class="message-content">
                            <span
                              >MOM! Can Sara and I go trick-or-treating by
                              ourselves tomorrow? I can watch over Sara and make
                              sure she stays out of trouble.</span
                            >
                          </div>
                        </div>
                        <div class="message-options">
                          <!-- <div class="avatar avatar-sm"><img alt="" src="./Quicky - HTML Chat Template_files/6.png"></div> -->

                          <span class="message-date">9:12am</span>

                          <div class="dropdown">
                            <a
                              class="text-muted"
                              href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <!-- Default :: Inline SVG -->
                              <svg
                                class="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                ></path>
                              </svg>

                              <!-- Alternate :: External File link -->
                              <!-- <img class="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> -->
                            </a>

                            <div class="dropdown-menu">
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> -->
                                <span>Copy</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/pencil.svg" alt="message edit"> -->
                                <span>Edit</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> -->
                                <span>Replay</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> -->
                                <span>Forward</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> -->
                                <span>Favourite</span>
                              </a>
                              <a
                                class="
                                  dropdown-item
                                  d-flex
                                  align-items-center
                                  text-danger
                                "
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> -->
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Self Message End -->

                      <!-- Received Message Start -->
                      <div class="message">
                        <div class="message-wrapper">
                          <div class="message-content">
                            <h6 class="text-dark">Gemma Mendez</h6>
                            <span
                              >Yes, Mom. If we go by ourselves, then you can
                              stay home and relax. You will not have to get cold
                              waiting for us.</span
                            >
                          </div>
                        </div>
                        <div class="message-options">
                          <!-- <div class="avatar avatar-sm"><img alt="" src="./Quicky - HTML Chat Template_files/3.png"></div> -->
                          <span class="message-date">9:12am</span>
                          <div class="dropdown">
                            <a
                              class="text-muted"
                              href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <!-- Default :: Inline SVG -->
                              <svg
                                class="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                ></path>
                              </svg>

                              <!-- Alternate :: External File link -->
                              <!-- <img class="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> -->
                            </a>

                            <div class="dropdown-menu">
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> -->
                                <span>Copy</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> -->
                                <span>Replay</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> -->
                                <span>Forward</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> -->
                                <span>Favourite</span>
                              </a>
                              <a
                                class="
                                  dropdown-item
                                  d-flex
                                  align-items-center
                                  text-danger
                                "
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> -->
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Received Message End -->

                      <!-- Self Message Start -->
                      <div class="message self">
                        <div class="message-wrapper">
                          <div class="message-content">
                            Thank you for offering, Patrick. However, I will be
                            worried and I will not be able to relax if you and
                            your brother go by yourselves while I stay home. Let
                            me ask Christine or Ian if one of them can go with
                            both of you. Then I can stay home and relax.
                            Christine! Ian!
                          </div>
                        </div>
                        <div class="message-options">
                          <!-- <div class="avatar avatar-sm"><img alt="" src="./Quicky - HTML Chat Template_files/6.png"></div> -->

                          <span class="message-date">9:12am</span>

                          <div class="dropdown">
                            <a
                              class="text-muted"
                              href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              data-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              <!-- Default :: Inline SVG -->
                              <svg
                                class="hw-18"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                              >
                                <path
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-width="2"
                                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                                ></path>
                              </svg>

                              <!-- Alternate :: External File link -->
                              <!-- <img class="injectable hw-18" src="./../../assets/media/heroicons/outline/dots-horizontal.svg" alt="message options"> -->
                            </a>

                            <div class="dropdown-menu">
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/duplicate.svg" alt="message options"> -->
                                <span>Copy</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/pencil.svg" alt="message edit"> -->
                                <span>Edit</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message replay"> -->
                                <span>Replay</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 rotate-y mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable rotate-y hw-18 mr-2" src="./../../assets/media/heroicons/outline/reply.svg" alt="message forward"> -->
                                <span>Forward</span>
                              </a>
                              <a
                                class="dropdown-item d-flex align-items-center"
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/star.svg" alt="message favourite"> -->
                                <span>Favourite</span>
                              </a>
                              <a
                                class="
                                  dropdown-item
                                  d-flex
                                  align-items-center
                                  text-danger
                                "
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- Default :: Inline SVG -->
                                <svg
                                  class="hw-18 mr-2"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                                  ></path>
                                </svg>

                                <!-- Alternate :: External File link -->
                                <!-- <img class="injectable hw-18 mr-2" src="./../../assets/media/heroicons/outline/trash.svg" alt="message delete"> -->
                                <span>Delete</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <!-- Self Message End -->
                    </div>
                    <!-- Message Day End -->
                  </div>

                  <!-- Scroll to finish -->
                  <div class="chat-finished" id="chat-finished"></div>
                </div>
                <!-- Chat Content End-->

                <!-- Chat Footer Start-->
                <div class="chat-footer">
                  <div class="attachment">
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary btn-icon btn-minimal btn-sm"
                        type="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        <svg
                          class="hw-20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          ></path>
                        </svg>

                        <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/plus-circle.svg" alt=""> -->
                      </button>
                      <div class="dropdown-menu">
                        <a
                          class="dropdown-item"
                          href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                        >
                          <svg
                            class="hw-20 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>
                          <!-- <img class="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/photograph.svg" alt=""> -->
                          <span>Gallery</span>
                        </a>
                        <a
                          class="dropdown-item"
                          href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                        >
                          <svg
                            class="hw-20 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z"
                            ></path>
                          </svg>

                          <!-- <img class="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/volume-up.svg" alt=""> -->
                          <span>Audio</span>
                        </a>
                        <a
                          class="dropdown-item"
                          href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                        >
                          <svg
                            class="hw-20 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                            ></path>
                          </svg>

                          <!-- <img class="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/document.svg" alt=""> -->
                          <span>Document</span>
                        </a>
                        <a
                          class="dropdown-item"
                          href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                        >
                          <svg
                            class="hw-20 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                            ></path>
                          </svg>

                          <!-- <img class="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/user.svg" alt=""> -->
                          <span>Contact</span>
                        </a>
                        <a
                          class="dropdown-item"
                          href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                        >
                          <svg
                            class="hw-20 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            ></path>
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            ></path>
                          </svg>

                          <!-- <img class="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/location-marker.svg" alt=""> -->
                          <span>Location</span>
                        </a>
                        <a
                          class="dropdown-item"
                          href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                        >
                          <svg
                            class="hw-20 mr-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                            ></path>
                          </svg>

                          <!-- <img class="injectable hw-20 mr-2" src="./../../assets/media/heroicons/outline/chart-square-bar.svg" alt=""> -->
                          <span>Poll</span>
                        </a>
                      </div>
                    </div>
                  </div>

                  <div
                    class="
                      btn btn-primary btn-icon
                      send-icon
                      rounded-circle
                      text-light
                      mb-1
                    "
                    role="button"
                  >
                    <svg
                      class="hw-24"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>

                    <!-- <img src="./../../assets/media/heroicons/outline/arrow-right.svg" alt="" class="injectable"> -->
                  </div>
                </div>
                <!-- Chat Footer End-->
              </div>
              <!-- Chat Body End -->

              <!-- Chat Info Start -->
              <div class="chat-info">
                <div class="d-flex h-100 flex-column">
                  <!-- Chat Info Header Start -->
                  <div class="chat-info-header px-2">
                    <div class="container-fluid">
                      <ul
                        class="nav justify-content-between align-items-center"
                      >
                        <!-- Sidebar Title Start -->
                        <li class="text-center">
                          <h5 class="text-truncate mb-0">Profile Details</h5>
                        </li>
                        <!-- Sidebar Title End -->

                        <!-- Close Sidebar Start -->
                        <li class="nav-item list-inline-item">
                          <a
                            class="nav-link text-muted px-0"
                            href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                            data-chat-info-close=""
                          >
                            <svg
                              class="hw-22"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                              ></path>
                            </svg>

                            <!-- <img class="injectable hw-22" src="./../../assets/media/heroicons/outline/x.svg" alt=""> -->
                          </a>
                        </li>
                        <!-- Close Sidebar End -->
                      </ul>
                    </div>
                  </div>
                  <!-- Chat Info Header End  -->

                  <!-- Chat Info Body Start  -->
                  <div class="hide-scrollbar flex-fill">
                    <!-- User Profile Start -->
                    <div class="border-bottom text-center p-3">
                      <!-- User Profile Picture -->
                      <div
                        class="avatar bg-success text-light avatar-xl mx-5 mb-3"
                      >
                        <span>
                          <svg
                            class="hw-50"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                            ></path>
                          </svg>
                          <!-- <img class="injectable hw-50" src="./../../assets/media/heroicons/outline/user-group.svg" alt=""> -->
                        </span>
                      </div>

                      <!-- User Info -->
                      <h5 class="mb-1">Themeforest Group</h5>
                      <p
                        class="
                          text-muted
                          d-flex
                          align-items-center
                          justify-content-center
                        "
                      >
                        <svg
                          class="mr-1 hw-18"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          ></path>
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          ></path>
                        </svg>

                        <!-- <img class="injectable mr-1 hw-18" src="./../../assets/media/heroicons/outline/location-marker.svg" alt=""> -->
                        <span>252 Participants</span>
                      </p>
                    </div>
                    <!-- User Profile End -->

                    <!-- Participants Start -->
                    <div class="chat-info-group">
                      <a
                        class="chat-info-group-header"
                        data-toggle="collapse"
                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#participants-list"
                        role="button"
                        aria-expanded="true"
                        aria-controls="participants-list"
                      >
                        <h6 class="mb-0">Group Participants</h6>

                        <svg
                          class="hw-20 text-muted"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                          ></path>
                        </svg>
                        <!-- <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/user-group.svg" alt=""> -->
                      </a>
                    </div>
                    <!-- Participants End -->

                    <!-- Shared Media Start -->
                    <div class="chat-info-group">
                      <a
                        class="chat-info-group-header"
                        data-toggle="collapse"
                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#shared-media"
                        role="button"
                        aria-expanded="true"
                        aria-controls="shared-media"
                      >
                        <h6 class="mb-0">Last Media</h6>

                        <!-- Default :: Inline SVG -->
                        <svg
                          class="hw-20 text-muted"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                          ></path>
                        </svg>

                        <!-- Alternate :: External File link -->
                        <!-- <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/photograph.svg" alt=""> -->
                      </a>

                      <div
                        class="chat-info-group-body collapse show"
                        id="shared-media"
                      >
                        <div class="chat-info-group-content">
                          <!-- Shared Media -->
                          <div class="form-row">
                            <div class="col-4 col-md-2 col-xl-4">
                              <a
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- <img src="./Quicky - HTML Chat Template_files/01.jpg" class="img-fluid rounded border" alt=""> -->
                              </a>
                            </div>
                            <div class="col-4 col-md-2 col-xl-4">
                              <a
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- <img src="./Quicky - HTML Chat Template_files/02.jpg" class="img-fluid rounded border" alt=""> -->
                              </a>
                            </div>
                            <div class="col-4 col-md-2 col-xl-4">
                              <a
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- <img src="./Quicky - HTML Chat Template_files/03.jpg" class="img-fluid rounded border" alt=""> -->
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <!-- Shared Media End -->

                    <!-- Shared Files Start -->
                    <div class="chat-info-group">
                      <a
                        class="chat-info-group-header"
                        data-toggle="collapse"
                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#shared-files"
                        role="button"
                        aria-expanded="true"
                        aria-controls="shared-files"
                      >
                        <h6 class="mb-0">Documents</h6>
                        <!-- Default :: Inline SVG -->
                        <svg
                          class="hw-20 text-muted"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                          ></path>
                        </svg>

                        <!-- Alternate :: External File link -->
                        <!-- <img class="injectable text-muted hw-20" src="./../../assets/media/heroicons/outline/document.svg" alt=""> -->
                      </a>

                      <div
                        class="chat-info-group-body collapse show"
                        id="shared-files"
                      >
                        <div
                          class="chat-info-group-content list-item-has-padding"
                        >
                          <!-- List Group Start -->
                          <ul class="list-group list-group-flush">
                            <!-- List Group Item Start -->
                            <li class="list-group-item">
                              <div class="document">
                                <div
                                  class="
                                    btn btn-primary btn-icon
                                    rounded-circle
                                    text-light
                                    mr-2
                                  "
                                >
                                  <!-- Default :: Inline SVG -->
                                  <svg
                                    class="hw-24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    ></path>
                                  </svg>

                                  <!-- Alternate :: External File link -->
                                  <!-- <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/document.svg" alt=""> -->
                                </div>

                                <div class="document-body">
                                  <h6 class="text-truncate">
                                    <a
                                      href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                                      class="text-reset"
                                      title="effects-of-global-warming.docs"
                                      >Effects-of-global-warming.docs</a
                                    >
                                  </h6>

                                  <ul class="list-inline small mb-0">
                                    <li class="list-inline-item">
                                      <span class="text-muted">79.2 KB</span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span class="text-muted text-uppercase"
                                        >docs</span
                                      >
                                    </li>
                                  </ul>
                                </div>

                                <div class="document-options ml-1">
                                  <div class="dropdown">
                                    <button
                                      class="
                                        btn
                                        btn-secondary
                                        btn-icon
                                        btn-minimal
                                        btn-sm
                                        text-muted
                                      "
                                      type="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <!-- Default :: Inline SVG -->
                                      <svg
                                        class="hw-20"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                        ></path>
                                      </svg>

                                      <!-- Alternate :: External File link -->
                                      <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt=""> -->
                                    </button>
                                    <div class="dropdown-menu">
                                      <a
                                        class="dropdown-item"
                                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                                        >Download</a
                                      >
                                      <a
                                        class="dropdown-item"
                                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                                        >Share</a
                                      >
                                      <a
                                        class="dropdown-item"
                                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                                        >Delete</a
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <!-- List Group Item End -->

                            <!-- List Group Item Start -->
                            <li class="list-group-item">
                              <div class="document">
                                <div
                                  class="
                                    btn btn-primary btn-icon
                                    rounded-circle
                                    text-light
                                    mr-2
                                  "
                                >
                                  <!-- Default :: Inline SVG -->
                                  <svg
                                    class="hw-24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    ></path>
                                  </svg>

                                  <!-- Alternate :: External File link -->
                                  <!-- <img class="injectable hw-24" src="./../../assets/media/icons/excel-file.svg" alt=""> -->
                                </div>

                                <div class="document-body">
                                  <h6 class="text-truncate">
                                    <a
                                      href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                                      class="text-reset"
                                      title="global-warming-data-2020.xlxs"
                                      >Global-warming-data-2020.xlxs</a
                                    >
                                  </h6>

                                  <ul class="list-inline small mb-0">
                                    <li class="list-inline-item">
                                      <span class="text-muted">79.2 KB</span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span class="text-muted text-uppercase"
                                        >xlxs</span
                                      >
                                    </li>
                                  </ul>
                                </div>

                                <div class="document-options ml-1">
                                  <div class="dropdown">
                                    <button
                                      class="
                                        btn
                                        btn-secondary
                                        btn-icon
                                        btn-minimal
                                        btn-sm
                                        text-muted
                                      "
                                      type="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <!-- Default :: Inline SVG -->
                                      <svg
                                        class="hw-20"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                        ></path>
                                      </svg>

                                      <!-- Alternate :: External File link -->
                                      <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt=""> -->
                                    </button>
                                    <div class="dropdown-menu">
                                      <a
                                        class="dropdown-item"
                                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                                        >View</a
                                      >
                                      <a
                                        class="dropdown-item"
                                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                                        >Share</a
                                      >
                                      <a
                                        class="dropdown-item"
                                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                                        >Delete</a
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <!-- List Group Item End -->

                            <!-- List Group Item Start -->
                            <li class="list-group-item">
                              <div class="document">
                                <div
                                  class="
                                    btn btn-primary btn-icon
                                    rounded-circle
                                    text-light
                                    mr-2
                                  "
                                >
                                  <!-- Default :: Inline SVG -->
                                  <svg
                                    class="hw-24"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                                    ></path>
                                  </svg>

                                  <!-- Alternate :: External File link -->
                                  <!-- <img class="injectable hw-24" src="./../../assets/media/icons/powerpoint-file.svg" alt=""> -->
                                </div>

                                <div class="document-body">
                                  <h6 class="text-truncate">
                                    <a
                                      href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                                      class="text-reset"
                                      title="great-presentation-on global-warming-2020.ppt"
                                      >Great-presentation-on
                                      global-warming-2020.ppt</a
                                    >
                                  </h6>

                                  <ul class="list-inline small mb-0">
                                    <li class="list-inline-item">
                                      <span class="text-muted">79.2 KB</span>
                                    </li>
                                    <li class="list-inline-item">
                                      <span class="text-muted text-uppercase"
                                        >ppt</span
                                      >
                                    </li>
                                  </ul>
                                </div>

                                <div class="document-options ml-1">
                                  <div class="dropdown">
                                    <button
                                      class="
                                        btn
                                        btn-secondary
                                        btn-icon
                                        btn-minimal
                                        btn-sm
                                        text-muted
                                      "
                                      type="button"
                                      data-toggle="dropdown"
                                      aria-haspopup="true"
                                      aria-expanded="false"
                                    >
                                      <!-- Default :: Inline SVG -->
                                      <svg
                                        class="hw-20"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                      >
                                        <path
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-width="2"
                                          d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                        ></path>
                                      </svg>

                                      <!-- Alternate :: External File link -->
                                      <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt=""> -->
                                    </button>
                                    <div class="dropdown-menu">
                                      <a
                                        class="dropdown-item"
                                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                                        >Download</a
                                      >
                                      <a
                                        class="dropdown-item"
                                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                                        >Share</a
                                      >
                                      <a
                                        class="dropdown-item"
                                        href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                                        >Delete</a
                                      >
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </li>
                            <!-- List Group Item End -->
                          </ul>
                          <!-- List Group End -->
                        </div>
                      </div>
                    </div>
                    <!-- Shared Files End -->
                  </div>
                  <!-- Chat Info Body Start  -->
                </div>
              </div>
              <!-- Chat Info End -->
            </div>
            <!-- Chats Page End -->
          </main>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
</script>


<style scoped>
#chats-header {
  background: #343a40;
  color: white;
}
</style>