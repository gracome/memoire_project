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
              <ul
                class="contacts-list"
                id="chatContactTab"
                data-chat-list=""
                v-if="$store.state.conversations.length > 0"
              >
                <!-- Chat Item Start       -->
                <li
                  class="contacts-item unread"
                  v-for="(convers, index) in $store.state.conversations"
                  :key="index"
                  :class="
                    $store.state.current_conversation.id == convers.id
                      ? ' active'
                      : ''
                  "
                >
                  <a
                    class="contacts-link"
                    href="#"
                    @click="get_converstion_message(convers)"
                  >
                    <div class="avatar avatar-online">
                      <img src="@/styles/theme/img/7.png" alt="" />
                    </div>
                    <div class="contacts-content">
                      <div class="contacts-info">
                        <h6 class="chat-name">{{ convers.client.phone }}</h6>
                        <div class="chat-time">
                          <span>
                            {{timeAgo(convers.updatedAt)}}
                          </span>
                        </div>
                      </div>
                      <div class="contacts-texts">
                        <p class="text-truncate">
                          {{ convers.last_message.content }}
                        </p>
                        <!-- <div class="badge badge-rounded badge-primary ml-1">
                          10
                        </div> -->
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
                      <img src="@/styles/theme/img/7.png" alt="" />
                    </div>

                    <div class="media-body align-self-center">
                      <h6 class="text-truncate mb-0">
                        {{ $store.state.current_conversation.client.phone }}
                      </h6>
                    </div>
                  </div>
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
                      <!-- <div
                        class="message-divider sticky-top pb-2"
                        data-label="Yesterday"
                      >
                        &nbsp;
                      </div> -->
                    </div>

                    <!-- Self Message Start -->
                    <div
                      class="message"
                      v-for="(mess, index) in $store.state.current_conversation.messages"
                      :key="'mess' + index"
                      :class="mess.direction == 'IN' ? 'self' : ''"
                    >
                      <div class="message-wrapper">
                        <div class="message-content">
                          {{ mess.content }}
                        </div>
                      </div>
                    </div>
                    <!-- Self Message End -->
                  </div>

                  <!-- Scroll to finish -->
                  <div class="chat-finished" id="chat-finished"></div>
                </div>
                <!-- Chat Content End-->
                <div class="chat-footer">
                  <div class="attachment d-none">
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

                  <textarea
                    class="form-control emojionearea-form-control"
                    id="messageInput"
                    rows="1"
                    placeholder="Entrez votre message..."
                    v-model="new_message"
                  ></textarea>

                  <div>
                    <button
                      class="
                        btn btn-primary btn-icon
                        send-icon
                        rounded-circle
                        text-light
                        mb-1
                      "
                      type="submit"
                      @click="sendMessage()"
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
                    </button>
                  </div>
                </div>
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
                                <!-- <img src="/@/01.jpg" class="img-fluid rounded border" alt=""> -->
                              </a>
                            </div>
                            <div class="col-4 col-md-2 col-xl-4">
                              <a
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- <img src="/@/02.jpg" class="img-fluid rounded border" alt="">  -->
                              </a>
                            </div>
                            <div class="col-4 col-md-2 col-xl-4">
                              <a
                                href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html#"
                              >
                                <!-- <img src="/@/03.jpg" class="img-fluid rounded border" alt="">  -->
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
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </main>
  </div>
</template>
<script>
import { services, client } from "@/api";
import moment from "moment";
export default {
  sockets: {
    connect: function () {},
    NEW_CONVERSATION: function (new_conversation) {
      console.log("New_Conversation", new_conversation);
    },
    NEW_MESSAGE: function (message) {
      console.log("New_mess", message);
    },
    CONVERSATION_UPDATED: function (new_conversation) {
      console.log("Conversation_update", new_conversation);
    },
    MESSAGE_UPDATED: function (new_message) {
      console.log("Message_updated", new_message);
    },
    CONVERSATION_AGENT_CHANGED: function (new_conversation) {
      console.log("Conversation_Agent", new_conversation);
    },
  },
  data() {
    return {
      new_message: "",
    };
  },
  methods: {
    timeAgo (date) {
      return moment(date).startOf('hour').fromNow();  
    },
    sendMessage() {
      const data = {
        client_id: "",
        content: this.new_message,
        conversation_id: this.$store.state.current_conversation.id,
        createdAt: new Date(),
        created_date: new Date(),
        direction: "OUT",
        id: "aoz",
        updatedAt: new Date(),
        user_id: client.getCookies("yinwe"),
      }
      this.$store.state.messages.push(data);
      this.$store.state.current_conversation.messages =
        this.$store.state.messages.filter(
          (item) => item.conversation_id == this.$store.state.current_conversation.id
        );
        this.new_message = ''
    },
    async load_conversations() {},
    async load_message() {},
    get_converstion_message(conversation) {
      this.$store.state.current_conversation =
        this.$store.state.conversations.find((el) => el.id == conversation.id);
      this.$store.state.current_conversation.messages =
        this.$store.state.messages.filter(
          (item) => item.conversation_id == conversation.id
        );
    },
    lastmessageOf(conversation) {
      let messages = this.$store.state.messages.filter(
        (item) => item.conversation_id == conversation.id
      );

      let lastMessage = messages.sort((a, b) => {
        let atime = new Date(a).getTime();
        let btime = new Date(b).getTime();

        if (atime > btime) return -1;
        else if (atime < btime) return 1;
        else return 0;
      })[0];
      if (_.isNil(lastMessage)) {
        return {
          content: "En attente de recevoir ce message",
        };
      } else {
        return lastMessage;
      }
    },
  },
  async mounted() {
    moment.locale("fr");
    let conversations = [];
    await services.liste_conversation().then((response) => {
      if (!_.isNil(response.data.data)) {
        conversations = response.data.data;
        this.$store.state.conversations = conversations.sort(
          (previous, next) =>
            moment(previous.updatedAt).format("YYYYMMDD") -
            moment(next.updatedAt).format("YYYYMMDD")
        );
        this.$store.state.current_conversation =
          this.$store.state.conversations[0];
      }
    });
    let messages = [];
    await services.liste_messages().then((response) => {
      console.log("liste des messages", response);
      if (!_.isNil(response.data.data)) {
        messages = response.data.data;
        this.$store.state.messages = messages;
        this.get_converstion_message(this.$store.state.current_conversation);
        this.$store.state.conversations = this.$store.state.conversations.map(
          (element) => {
            return {
              ...element,
              last_message: this.lastmessageOf(element),
            };
          }
        );
        console.log("liste conversations", this.$store.state.conversations);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
.chat-body .chat-footer {
  position: fixed;
  bottom: 0;
  width: calc(100% - 37%);
}
</style>