<template>
     <aside class="sidebar">
            <!-- Tab Content Start -->
            <div class="tab-content">
               <!-- Chat Tab Content Start -->
                <div class="tab-pane active" id="chats-content">
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
                                            <a class="nav-link text-muted px-1" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" title="Notifications" role="button" data-toggle="modal" data-target="#notificationModal">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img src="./../../assets/media/heroicons/outline/bell.svg" alt="" class="injectable hw-20"> -->
                                            </a>
                                        </li>
                                        
                                        <li class="nav-item list-inline-item d-block d-xl-none mr-1">
                                            <a class="nav-link text-muted px-1" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" title="Appbar" data-toggle-appbar="">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-20" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path></svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="hw-20" src="./../../assets/media/heroicons/outline/view-grid.svg" alt="" class="injectable hw-20"> -->
                                            </a>
                                        </li>

                                        <li class="nav-item list-inline-item mr-0">
                                            <div class="dropdown">
                                                <a class="nav-link text-muted px-1" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" role="button" title="Details" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <!-- Default :: Inline SVG -->
                                                    <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                                    </svg>
                                                        
                                                    <!-- Alternate :: External File link -->
                                                    <!-- <img src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt="" class="injectable hw-20"> -->
                                                </a>

                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" role="button" data-toggle="modal" data-target="#startConversation">New Chat</a>
                                                    <a class="dropdown-item" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" role="button" data-toggle="modal" data-target="#createGroup">Create Group</a>
                                                    <a class="dropdown-item" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" role="button" data-toggle="modal" data-target="#inviteOthers">Invite Others</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                                
                                <!-- Sidebar Header Start -->
                                <div class="sidebar-sub-header">
                                    <!-- Sidebar Header Dropdown Start -->
                                    <div class="dropdown mr-2">
                                        <!-- Dropdown Button Start -->
                                        <button class="btn btn-outline-default dropdown-toggle" type="button" data-chat-filter-list="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            All Chats
                                        </button>
                                        <!-- Dropdown Button End -->

                                        <!-- Dropdown Menu Start -->
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" data-chat-filter="" data-select="all-chats" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">All Chats</a>
                                            <a class="dropdown-item" data-chat-filter="" data-select="friends" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Friends</a>
                                            <a class="dropdown-item" data-chat-filter="" data-select="groups" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Groups</a>
                                            <a class="dropdown-item" data-chat-filter="" data-select="unread" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Unread</a>
                                            <a class="dropdown-item" data-chat-filter="" data-select="archived" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Archived</a>
                                        </div>
                                        <!-- Dropdown Menu End -->
                                    </div>
                                    <!-- Sidebar Header Dropdown End -->

                                    <!-- Sidebar Search Start -->
                                    <form class="form-inline">
                                        <div class="input-group">
                                            <input type="text" class="form-control search border-right-0 transparent-bg pr-0" placeholder="Search users">
                                            <div class="input-group-append">
                                                <div class="input-group-text transparent-bg border-left-0" role="button">
                                                    <!-- Default :: Inline SVG -->
                                                    <svg class="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                    </svg>

                                                    <!-- Alternate :: External File link -->
                                                    <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/search.svg" alt=""> -->
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <!-- Sidebar Search End -->
                                </div>
                                <!-- Sidebar Header End -->
                            </div>
                            <!-- Chat Header End -->

                            <!-- Chat Contact List Start -->
                            <ul class="contacts-list" id="chatContactTab" data-chat-list="">
                                <!-- Chat Item Start -->
                                <li class="contacts-item friends">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/chat-1.html">
                                        <div class="avatar avatar-online">
                                            <!-- <img src="../styles/theme/img/2.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Catherine Richardson</h6>
                                                <div class="chat-time">Just now</div>
                                            </div>
                                            <div class="contacts-texts">
                                                <p class="text-truncate">I’m sorry, I didn’t catch that. Could you please repeat?</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- Chat Item End -->

                                <!-- Chat Item Start -->
                                <li class="contacts-item groups">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/chat-2.html">
                                        <div class="avatar bg-success text-light">
                                            <span>
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
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
                                                <p class="text-truncate"><span>Jeny: </span>That’s pretty common. I heard that a lot of people had the same experience.</p>
                                                <div class="d-inline-flex align-items-center ml-1">
                                                    <!-- Default :: Inline SVG -->
                                                    <svg class="hw-16 text-muted" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path>
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
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <div class="avatar avatar-offline bg-info text-light">
                                            <span>EW</span>
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name">Eva Walker</h6>
                                                <div class="chat-time">09:36 am</div>
                                            </div>
                                            <div class="contacts-texts">
                                                <p class="text-truncate">You’re kidding! I drive a motorcycle as well. What type of bike do you have?</p>
                                                <div class="badge badge-rounded badge-primary ml-1">2</div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- Chat Item End -->

                                <!-- Chat Item Start -->
                                <li class="contacts-item friends">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <!-- <div class="avatar avatar-busy"><img src="../styles/theme/img/3.png" alt=""></div> -->
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name">Christopher Garcia</h6>
                                                <div class="chat-time"><span>Yesterday</span></div>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-20 text-muted" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clip-rule="evenodd"></path>
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
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <div class="avatar avatar-online">
                                            <!-- <img src="../styles/theme/img/4.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name">Christina Turner</h6>
                                                <div class="chat-time">
                                                    <span>31/05/20</span>
                                                </div>
                                            </div>
                                            <div class="contacts-texts">
                                                <p class="text-truncate">I’m working hard in Maths, Physics and Chemistry. I have planning to appear in I.I.T. after XII.</p>
                                                <div class="badge badge-rounded badge-primary ml-1">10</div>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- Chat Item End -->

                                <!-- Chat Item Start -->
                                <li class="contacts-item friends">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <div class="avatar avatar-offline">
                                            <!-- <img src="../styles/theme/img/5.png" alt=""> -->
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
                                                <svg class="hw-20 text-muted" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm2 10a1 1 0 10-2 0v3a1 1 0 102 0v-3zm2-3a1 1 0 011 1v5a1 1 0 11-2 0v-5a1 1 0 011-1zm4-1a1 1 0 10-2 0v7a1 1 0 102 0V8z" clip-rule="evenodd"></path>
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
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <!-- <div class="avatar avatar-online"><img src="../styles/theme/img/6.png" alt=""></div> -->
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name">Bonnie Torres</h6>
                                                <div class="chat-time"><span>20/04/20</span></div>
                                            </div>
                                            <div class="contacts-texts">
                                                <p class="text-truncate">Catch you later! Bye-bye!</p>
                                                <div class="d-inline-flex align-items-center ml-1">
                                                    <!-- Default :: Inline SVG -->
                                                    <svg class="hw-16 text-muted" viewBox="0 0 20 20" fill="currentColor">
                                                        <path fill-rule="evenodd" d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.707.707L4.586 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.586l3.707-3.707a1 1 0 011.09-.217zM12.293 7.293a1 1 0 011.414 0L15 8.586l1.293-1.293a1 1 0 111.414 1.414L16.414 10l1.293 1.293a1 1 0 01-1.414 1.414L15 11.414l-1.293 1.293a1 1 0 01-1.414-1.414L13.586 10l-1.293-1.293a1 1 0 010-1.414z" clip-rule="evenodd"></path>
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
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <!-- <div class="avatar avatar-offline"><img src="../styles/theme/img/7.png" alt=""></div> -->
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name">Jacqueline James</h6>
                                                <div class="chat-time"><span>15/02/20</span></div>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"></path>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
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
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <!-- <div class="avatar avatar-away"><img src="../styles/theme/img/8.png" alt=""></div> -->
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name">Annie Richardson</h6>
                                                <div class="chat-time"><span>26/12/19</span></div>
                                            </div>
                                            <div class="contacts-texts">
                                                <p class="text-truncate">I think I have everything I need, thank you!</p>
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
                <!-- Chats Tab Content End -->

                <!-- Calls Tab Content Start -->
                <div class="tab-pane" id="calls-content">
                    <div class="d-flex flex-column h-100">
                        <div class="hide-scrollbar h-100" id="callContactsList">
                            <!-- Chat Header Start -->
                            <div class="sidebar-header sticky-top p-2">

                                <div class="d-flex justify-content-between align-items-center">
                                    <!-- Chat Tab Pane Title Start -->
                                    <h5 class="font-weight-semibold mb-0">Calls</h5>
                                    <!-- Chat Tab Pane Title End -->

                                    <ul class="nav flex-nowrap">

                                        <li class="nav-item list-inline-item mr-1">
                                            <a class="nav-link text-muted px-1" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" title="Notifications" role="button" data-toggle="modal" data-target="#notificationModal">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img src="./../../assets/media/heroicons/outline/bell.svg" alt="" class="injectable hw-20"> -->
                                            </a>
                                        </li>

                                        <li class="nav-item list-inline-item mr-0">
                                            <div class="dropdown">
                                                <a class="nav-link text-muted px-1" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" role="button" title="Details" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <!-- Default :: Inline SVG -->
                                                    <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                                    </svg>
                                                        
                                                    <!-- Alternate :: External File link -->
                                                    <!-- <img src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt="" class="injectable hw-20"> -->
                                                </a>

                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" role="button" data-toggle="modal" data-target="#startConversation">New Chat</a>
                                                    <a class="dropdown-item" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" role="button" data-toggle="modal" data-target="#createGroup">Create Group</a>
                                                    <a class="dropdown-item" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" role="button" data-toggle="modal" data-target="#inviteOthers">Invite Others</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                                
                                <!-- Sidebar Header Start -->
                                <div class="sidebar-sub-header">
                                    <!-- Sidebar Header Dropdown Start -->
                                    <div class="dropdown mr-2">
                                        <!-- Dropdown Button Start -->
                                        <button class="btn btn-outline-default dropdown-toggle" type="button" data-chat-filter-list="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            All Chats
                                        </button>
                                        <!-- Dropdown Button End -->

                                        <!-- Dropdown Menu Start -->
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" data-chat-filter="" data-select="all-chats" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">All Chats</a>
                                            <a class="dropdown-item" data-chat-filter="" data-select="friends" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Friends</a>
                                            <a class="dropdown-item" data-chat-filter="" data-select="groups" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Groups</a>
                                            <a class="dropdown-item" data-chat-filter="" data-select="unread" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Unread</a>
                                            <a class="dropdown-item" data-chat-filter="" data-select="archived" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Archived</a>
                                        </div>
                                        <!-- Dropdown Menu End -->
                                    </div>
                                    <!-- Sidebar Header Dropdown End -->

                                    <!-- Sidebar Search Start -->
                                    <form class="form-inline">
                                        <div class="input-group">
                                            <input type="text" class="form-control search border-right-0 transparent-bg pr-0" placeholder="Search users">
                                            <div class="input-group-append">
                                                <div class="input-group-text transparent-bg border-left-0" role="button">
                                                    <!-- Default :: Inline SVG -->
                                                    <svg class="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                    </svg>

                                                    <!-- Alternate :: External File link -->
                                                    <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/search.svg" alt=""> -->
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <!-- Sidebar Search End -->
                                </div>
                                <!-- Sidebar Header End -->
                            </div>
                            <!-- Chat Header End -->

                            <!-- Call Contact List Start -->
                            <ul class="contacts-list" id="callLogTab" data-call-list="">
                                
                                <!-- Call Item Start -->
                                <li class="contacts-item incoming active">
                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="media-link"></a>
                                    <div class="contacts-link">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/2.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Catherine Richardson</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"></path>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                                </svg>
                                                    
                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/phone-incoming.svg" alt=""> -->
                                                <p class="text-muted mb-0">Just now</p>
                                            </div>
                                        </div>
                                        <div class="contacts-action">
                                            <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                </svg>
                                                    
                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/phone.svg" alt=""> -->
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <!-- Call Item End -->
                                
                                <!-- Call Item Start -->
                                <li class="contacts-item outgoing">
                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="media-link"></a>
                                    <div class="contacts-link outgoing">
                                        <div class="avatar bg-info text-light">
                                            <span>EW</span>
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Eva Walker</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"></path>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                                </svg>
                                                    
                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/phone-outgoing.svg" alt=""> -->
                                                <p class="text-muted mb-0">5 mins ago</p>
                                            </div>
                                        </div>
                                        <div class="contacts-action">
                                            <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/phone.svg" alt=""> -->
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <!-- Call Item End -->
                                
                                <!-- Call Item Start -->
                                <li class="contacts-item missed">
                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="media-link"></a>
                                    <div class="contacts-link missed">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/3.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Christopher Garcia</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-danger mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"></path>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-danger mr-1" src="./../../assets/media/heroicons/solid/phone-incoming.svg" alt=""> -->
                                                <p class="text-danger mb-0">20 mins ago</p>
                                            </div>
                                        </div>
                                        <div class="contacts-action">
                                            <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/phone.svg" alt=""> -->
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <!-- Call Item End -->
                                
                                <!-- Call Item Start -->
                                <li class="contacts-item outgoing">
                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="media-link"></a>
                                    <div class="contacts-link outgoing">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/4.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Christina Turner</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"></path>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/phone-outgoing.svg" alt=""> -->
                                                <p class="text-muted mb-0">4 hour ago</p>
                                            </div>
                                        </div>
                                        <div class="contacts-action">
                                            <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/phone.svg" alt=""> -->
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <!-- Call Item End -->
                                
                                <!-- Call Item Start -->
                                <li class="contacts-item incoming">
                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="media-link"></a>
                                    <div class="contacts-link incoming">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/5.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Tammy Martinez</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"></path>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/phone-incoming.svg" alt=""> -->
                                                <p class="text-muted mb-0">Yesterday</p>
                                            </div>
                                        </div>
                                        <div class="contacts-action">
                                            <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/phone.svg" alt=""> -->
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <!-- Call Item End -->
                                
                                <!-- Call Item Start -->
                                <li class="contacts-item incoming">
                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="media-link"></a>
                                    <div class="contacts-link incoming">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/6.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Bonnie Torres</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M14.414 7l3.293-3.293a1 1 0 00-1.414-1.414L13 5.586V4a1 1 0 10-2 0v4.003a.996.996 0 00.617.921A.997.997 0 0012 9h4a1 1 0 100-2h-1.586z"></path>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/phone-incoming.svg" alt=""> -->
                                                <p class="text-muted mb-0">12/06/2020</p>
                                            </div>
                                        </div>
                                        <div class="contacts-action">
                                            <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/phone.svg" alt=""> -->
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <!-- Call Item End -->
                                
                                <!-- Call Item Start -->
                                <li class="contacts-item outgoing">
                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="media-link"></a>
                                    <div class="contacts-link outgoing">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/7.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Jacqueline James</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path d="M17.924 2.617a.997.997 0 00-.215-.322l-.004-.004A.997.997 0 0017 2h-4a1 1 0 100 2h1.586l-3.293 3.293a1 1 0 001.414 1.414L16 5.414V7a1 1 0 102 0V3a.997.997 0 00-.076-.383z"></path>
                                                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/phone-outgoing.svg" alt=""> -->
                                                <p class="text-muted mb-0">16/05/2020</p>
                                            </div>
                                        </div>
                                        <div class="contacts-action">
                                            <button class="btn btn-secondary btn-icon btn-minimal btn-sm text-muted" type="button">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/phone.svg" alt=""> -->
                                            </button>
                                        </div>
                                    </div>
                                </li>
                                <!-- Call Item End -->
                                
                            </ul>
                            <!-- Call Contact List Start -->
                        </div>
                    </div>
                </div>
                <!-- Calls Tab Content End -->

                <!-- Friends Tab Content Start -->
                <div class="tab-pane" id="friends-content">
                    <div class="d-flex flex-column h-100">
                        <div class="hide-scrollbar" id="friendsList">
                            <!-- Chat Header Start -->
                            <div class="sidebar-header sticky-top p-2">

                                <div class="d-flex justify-content-between align-items-center">
                                    <!-- Chat Tab Pane Title Start -->
                                    <h5 class="font-weight-semibold mb-0">Friends</h5>
                                    <!-- Chat Tab Pane Title End -->

                                    <ul class="nav flex-nowrap">

                                        <li class="nav-item list-inline-item mr-1">
                                            <a class="nav-link text-muted px-1" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" title="Notifications" role="button" data-toggle="modal" data-target="#notificationModal">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img src="./../../assets/media/heroicons/outline/bell.svg" alt="" class="injectable hw-20"> -->
                                            </a>
                                        </li>

                                        <li class="nav-item list-inline-item mr-0">
                                            <div class="dropdown">
                                                <a class="nav-link text-muted px-1" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" role="button" title="Details" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <!-- Default :: Inline SVG -->
                                                    <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"></path>
                                                    </svg>
                                                        
                                                    <!-- Alternate :: External File link -->
                                                    <!-- <img src="./../../assets/media/heroicons/outline/dots-vertical.svg" alt="" class="injectable hw-20"> -->
                                                </a>

                                                <div class="dropdown-menu dropdown-menu-right">
                                                    <a class="dropdown-item" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" role="button" data-toggle="modal" data-target="#startConversation">New Chat</a>
                                                    <a class="dropdown-item" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" role="button" data-toggle="modal" data-target="#createGroup">Create Group</a>
                                                    <a class="dropdown-item" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" role="button" data-toggle="modal" data-target="#inviteOthers">Invite Others</a>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                
                                
                                <!-- Sidebar Header Start -->
                                <div class="sidebar-sub-header">
                                    <!-- Sidebar Header Dropdown Start -->
                                    <div class="dropdown mr-2">
                                        <!-- Dropdown Button Start -->
                                        <button class="btn btn-outline-default dropdown-toggle" type="button" data-chat-filter-list="" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            All Chats
                                        </button>
                                        <!-- Dropdown Button End -->

                                        <!-- Dropdown Menu Start -->
                                        <div class="dropdown-menu">
                                            <a class="dropdown-item" data-chat-filter="" data-select="all-chats" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">All Chats</a>
                                            <a class="dropdown-item" data-chat-filter="" data-select="friends" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Friends</a>
                                            <a class="dropdown-item" data-chat-filter="" data-select="groups" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Groups</a>
                                            <a class="dropdown-item" data-chat-filter="" data-select="unread" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Unread</a>
                                            <a class="dropdown-item" data-chat-filter="" data-select="archived" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Archived</a>
                                        </div>
                                        <!-- Dropdown Menu End -->
                                    </div>
                                    <!-- Sidebar Header Dropdown End -->

                                    <!-- Sidebar Search Start -->
                                    <form class="form-inline">
                                        <div class="input-group">
                                            <input type="text" class="form-control search border-right-0 transparent-bg pr-0" placeholder="Search users">
                                            <div class="input-group-append">
                                                <div class="input-group-text transparent-bg border-left-0" role="button">
                                                    <!-- Default :: Inline SVG -->
                                                    <svg class="text-muted hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                    </svg>

                                                    <!-- Alternate :: External File link -->
                                                    <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/search.svg" alt=""> -->
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                    <!-- Sidebar Search End -->
                                </div>
                                <!-- Sidebar Header End -->
                            </div>
                            <!-- Chat Header End -->

                            <!-- Friends Contact List Start -->
                            <ul class="contacts-list" id="friendsTab" data-friends-list="">
                                <!-- Item Series Start -->
                                <li>
                                    <small class="font-weight-medium text-uppercase text-muted">A</small>
                                </li>
                                <!-- Item Series End -->

                                <!-- friends Item Start -->
                                <li class="contacts-item active">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/3.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Albert K. Johansen</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                                </svg>
                                                    
                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> -->
                                                <p class="text-muted mb-0">San Fransisco, CA</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- friends Item End -->

                                <!-- friends Item Start -->
                                <li class="contacts-item">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/3.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Alice R. Botello</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> -->
                                                <p class="text-muted mb-0">Brentwood, NY</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- friends Item End -->
                                
                                <!-- Item Series Start -->
                                <li>
                                    <small class="font-weight-medium text-uppercase text-muted">b</small>
                                </li>
                                <!-- Item Series End -->
                                
                                    <!-- friends Item Start -->
                                    <li class="contacts-item">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/3.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Brittany K. Williams</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> -->
                                                <p class="text-muted mb-0">Scranton, PA</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- friends Item End -->

                                <!-- Item Series Start -->
                                <li>
                                    <small class="font-weight-medium text-uppercase text-muted">C</small>
                                </li>
                                <!-- Item Series End -->
                                
                                    <!-- friends Item Start -->
                                    <li class="contacts-item">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/3.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Christopher Garcia</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> -->
                                                <p class="text-muted mb-0">Riverside, CA</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- friends Item End -->

                                <!-- friends Item Start -->
                                <li class="contacts-item">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/3.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Casey Mcbride</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> -->
                                                <p class="text-muted mb-0">Zephyr, NC</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- friends Item End -->
                                
                                <!-- Item Series Start -->
                                <li>
                                    <small class="font-weight-medium text-uppercase text-muted">G</small>
                                </li>
                                <!-- Item Series End -->

                                    <!-- friends Item Start -->
                                    <li class="contacts-item">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/3.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Gemma Mendez</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> -->
                                                <p class="text-muted mb-0">Frederick, MD</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- friends Item End -->

                                <!-- Item Series Start -->
                                <li>
                                    <small class="font-weight-medium text-uppercase text-muted">k</small>
                                </li>
                                <!-- Item Series End -->

                                <!-- friends Item Start -->
                                <li class="contacts-item">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/3.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Katelyn Valdez</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> -->
                                                <p class="text-muted mb-0">Jackson, TN</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- friends Item End -->

                                <!-- friends Item Start -->
                                <li class="contacts-item">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/3.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Katherine Schneider</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> -->
                                                <p class="text-muted mb-0">Saginaw, MI</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- friends Item End -->

                                <!-- Item Series Start -->
                                <li>
                                    <small class="font-weight-medium text-uppercase text-muted">m</small>
                                </li>
                                <!-- Item Series End -->

                                    <!-- friends Item Start -->
                                    <li class="contacts-item">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/3.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Maizie Edwards</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> -->
                                                <p class="text-muted mb-0">Greensboro, NC</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- friends Item End -->

                                <!-- Item Series Start -->
                                <li>
                                    <small class="font-weight-medium text-uppercase text-muted">s</small>
                                </li>
                                <!-- Item Series End -->

                                <!-- friends Item Start -->
                                <li class="contacts-item">
                                    <a class="contacts-link" href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">
                                        <div class="avatar">
                                            <!-- <img src="../styles/theme/img/3.png" alt=""> -->
                                        </div>
                                        <div class="contacts-content">
                                            <div class="contacts-info">
                                                <h6 class="chat-name text-truncate">Susan K. Taylor</h6>
                                            </div>
                                            <div class="contacts-texts">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-16 text-muted mr-1" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-16 text-muted mr-1" src="./../../assets/media/heroicons/solid/location-marker.svg" alt=""> -->
                                                <p class="text-muted mb-0">Centerville, VA</p>
                                            </div>
                                        </div>
                                    </a>
                                </li>
                                <!-- friends Item End -->
                                
                            </ul>
                            <!-- Friends Contact List End -->
                        </div>
                    </div>
                </div>
                <!-- Friends Tab Content End -->

                <!-- Profile Tab Content Start -->
                <!-- Sidebar Content Start -->
                          
                                           
                             
                <!-- Profile Tab Content End -->
            </div>
            <!-- Tab Content End -->
        </aside>
</template>