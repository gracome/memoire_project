
<template>
    <div>
                <!-- App Add-ons Start -->
      
        <!-- App Add-ons End -->

        <div class="backdrop"></div>

        <!-- All Modals Start -->

        <!-- Modal 1 :: Start a Conversation-->
        <div class="modal modal-lg-fullscreen fade" id="startConversation" tabindex="-1" role="dialog" aria-labelledby="startConversationLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="startConversationLabel">New Chat</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body p-0 hide-scrollbar">
                    <div class="row">
                        <div class="col-12">
                            <!-- Search Start -->
                            <form class="form-inline w-100 p-2 border-bottom">
                                <div class="input-group w-100 bg-light">
                                    <input type="text" class="form-control form-control-md search border-right-0 transparent-bg pr-0" placeholder="Search">
                                    <div class="input-group-append">
                                        <div class="input-group-text transparent-bg border-left-0" role="button">
                                            <!-- Default :: Inline SVG -->
                                            <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                            </svg>   
                                            
                                            <!-- Alternate :: External File link -->
                                            <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/search.svg" alt=""> -->
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <!-- Search End -->
                        </div>

                        <div class="col-12">
                                <!-- List Group Start -->
                                <ul class="list-group list-group-flush">

                                <!-- List Group Item Start -->
                                <li class="list-group-item">
                                    <div class="media">
                                        <div class="avatar avatar-online mr-2">
                                            <img src="../styles/theme/img/1.png" alt="">
                                        </div>

                                        <div class="media-body">
                                            <h6 class="text-truncate">
                                                <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="text-reset">Catherine Richardson</a>
                                            </h6>

                                            <p class="text-muted mb-0">Online</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- List Group Item End -->

                                <!-- List Group Item Start -->
                                <li class="list-group-item">
                                    <div class="media">
                                        <div class="avatar avatar-online mr-2">
                                            <img src="../styles/theme/img/2.png" alt="">
                                        </div>

                                        <div class="media-body">
                                            <h6 class="text-truncate">
                                                <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="text-reset">Katherine Schneider</a>
                                            </h6>

                                            <p class="text-muted mb-0">Online</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- List Group Item End -->

                                <!-- List Group Item Start -->
                                <li class="list-group-item">
                                    <div class="media">
                                        <div class="avatar avatar-offline mr-2">
                                            <img src="../styles/theme/img/3.png" alt="">
                                        </div>

                                        <div class="media-body">
                                            <h6 class="text-truncate">
                                                <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="text-reset">Brittany K. Williams</a>
                                            </h6>

                                            <p class="text-muted mb-0">Offline</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- List Group Item End -->

                                <!-- List Group Item Start -->
                                <li class="list-group-item">
                                    <div class="media">
                                        <div class="avatar avatar-busy mr-2">
                                            <img src="../styles/theme/img/4.png" alt="">
                                        </div>
                                        <div class="media-body">
                                            <h6 class="text-truncate"><a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="text-reset">Christina Turner</a></h6>
                                            <p class="text-muted mb-0">Busy</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- List Group Item End -->

                                <!-- List Group Item Start -->
                                <li class="list-group-item">
                                    <div class="media">
                                        <div class="avatar avatar-away mr-2">
                                            <img src="../styles/theme/img/5.png" alt="">
                                        </div>

                                        <div class="media-body">
                                            <h6 class="text-truncate"><a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="text-reset">Annie Richardson</a></h6>
                                            <p class="text-muted mb-0">Away</p>
                                        </div>
                                    </div>
                                </li>
                                <!-- List Group Item End -->

                            </ul>
                            <!-- List Group End -->
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal 2 :: Create Group -->
        <div class="modal modal-lg-fullscreen fade" id="createGroup" tabindex="-1" role="dialog" aria-labelledby="createGroupLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title js-title-step" id="createGroupLabel">&nbsp;</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body py-0 hide-scrollbar">
                        <div class="row hide pt-2" data-step="1" data-title="Create a New Group">
                            
                            <div class="col-12">
                                <div class="form-group">
                                    <label for="groupName">Group name</label>
                                    <input type="text" class="form-control form-control-md" id="groupName" placeholder="Type group name here">
                                </div>
                            </div>
                            <div class="col-12">
                                <div class="form-group">
                                    <label>Choose profile picture</label>
                                    <div class="custom-file">
                                        <input type="file" class="custom-file-input" id="profilePictureInput" accept="image/*">
                                        <label class="custom-file-label" for="profilePictureInput">Choose file</label>
                                        </div>
                                </div>
                            </div>

                            <div class="col-12">
                                <div class="row">
                                    <div class="col-12">
                                        <div class="form-group mb-0">
                                        <label>Group privacy</label>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group rounded p-2 border">
                                        <div class="custom-control custom-radio">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked="">
                                            <label class="form-check-label" for="exampleRadios1">
                                                Public group
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    <div class="col">
                                        <div class="form-group rounded p-2 border">
                                        <div class="custom-control custom-radio">
                                            <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2">
                                            <label class="form-check-label" for="exampleRadios2">
                                                Private group
                                            </label>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                        
                        </div>

                        <div class="row hide pt-2" data-step="2" data-title="Add Group Members">
                            <div class="col-12 px-0">
                                <!-- Search Start -->
                                <form class="form-inline w-100 px-2 pb-2 border-bottom">
                                    <div class="input-group w-100 bg-light">
                                        <input type="text" class="form-control form-control-md search border-right-0 transparent-bg pr-0" placeholder="Search">
                                        <div class="input-group-append">
                                            <div class="input-group-text transparent-bg border-left-0" role="button">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                                                </svg>   

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-20" src="./../../assets/media/heroicons/outline/search.svg" alt=""> -->
                                            </div>
                                        </div>
                                    </div>
                                </form>
                                <!-- Search End -->
                            </div>

                            <div class="col-12 px-0">
                                <!-- List Group Start -->
                                <ul class="list-group list-group-flush">

                                    <!-- List Group Item Start -->
                                    <li class="list-group-item">
                                        <div class="media">
                                            <div class="avatar avatar-online mr-2">
                                                <img src="../styles/theme/img/1.png" alt="">
                                            </div>

                                            <div class="media-body">
                                                <h6 class="text-truncate">
                                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="text-reset">Catherine Richardson</a>
                                                </h6>

                                                <p class="text-muted mb-0">Online</p>
                                            </div>

                                            <div class="media-options">
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" type="checkbox" value="" id="chx-user-1" checked="">
                                                    <label class="custom-control-label" for="chx-user-1"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <label class="media-label" for="chx-user-1"></label>
                                    </li>
                                    <!-- List Group Item End -->

                                    <!-- List Group Item Start -->
                                    <li class="list-group-item">
                                        <div class="media">
                                            <div class="avatar avatar-online mr-2">
                                                <img src="../styles/theme/img/2.png" alt="">
                                            </div>

                                            <div class="media-body">
                                                <h6 class="text-truncate">
                                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="text-reset">Katherine Schneider</a>
                                                </h6>

                                                <p class="text-muted mb-0">Online</p>
                                            </div>

                                            <div class="media-options">
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" type="checkbox" value="" id="chx-user-2" checked="">
                                                    <label class="custom-control-label" for="chx-user-2"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <label class="media-label" for="chx-user-2"></label>
                                    </li>
                                    <!-- List Group Item End -->

                                    <!-- List Group Item Start -->
                                    <li class="list-group-item">
                                        <div class="media">
                                            <div class="avatar avatar-offline mr-2">
                                                <img src="../styles/theme/img/3.png" alt="">
                                            </div>

                                            <div class="media-body">
                                                <h6 class="text-truncate">
                                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="text-reset">Brittany K. Williams</a>
                                                </h6>

                                                <p class="text-muted mb-0">Offline</p>
                                            </div>
                                            <div class="media-options">
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" type="checkbox" value="" id="chx-user-3">
                                                    <label class="custom-control-label" for="chx-user-3"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <label class="media-label" for="chx-user-3"></label>
                                    </li>
                                    <!-- List Group Item End -->

                                    <!-- List Group Item Start -->
                                    <li class="list-group-item">
                                        <div class="media">
                                            <div class="avatar avatar-busy mr-2">
                                                <img src="../styles/theme/img/4.png" alt="">
                                            </div>
                                            <div class="media-body">
                                                <h6 class="text-truncate"><a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="text-reset">Christina Turner</a></h6>
                                                <p class="text-muted mb-0">Busy</p>
                                            </div>
                                            <div class="media-options">
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" type="checkbox" value="" id="chx-user-4" checked="">
                                                    <label class="custom-control-label" for="chx-user-4"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <label class="media-label" for="chx-user-4"></label>
                                    </li>
                                    <!-- List Group Item End -->

                                    <!-- List Group Item Start -->
                                    <li class="list-group-item">
                                        <div class="media">
                                            <div class="avatar avatar-away mr-2">
                                                <img src="../styles/theme/img/5.png" alt="">
                                            </div>

                                            <div class="media-body">
                                                <h6 class="text-truncate"><a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#" class="text-reset">Annie Richardson</a></h6>
                                                <p class="text-muted mb-0">Away</p>
                                            </div>
                                            <div class="media-options">
                                                <div class="custom-control custom-checkbox">
                                                    <input class="custom-control-input" type="checkbox" value="" id="chx-user-5">
                                                    <label class="custom-control-label" for="chx-user-5"></label>
                                                </div>
                                            </div>
                                        </div>
                                        <label class="media-label" for="chx-user-5"></label>
                                    </li>
                                    <!-- List Group Item End -->

                                </ul>
                                <!-- List Group End -->
                            </div>
                        </div>

                        <div class="row pt-2 h-100 hide" data-step="3" data-title="Finished">
                            <div class="col-12">
                                <div class="d-flex justify-content-center align-items-center flex-column h-100">
                                    <div class="btn btn-success btn-icon rounded-circle text-light mb-3">
                                        <!-- Default :: Inline SVG -->
                                        <svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                                        </svg>
                                            
                                        <!-- Alternate :: External File link -->
                                        <!-- <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/check.svg" alt=""> -->
                                    </div>
                                    <h6>Group Created Successfully</h6>
                                    <p class="text-muted text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores cumque laborum fugiat vero pariatur provident!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-link text-muted js-btn-step mr-auto" data-orientation="cancel" data-dismiss="modal"></button>
                        <button type="button" class="btn btn-secondary  js-btn-step" data-orientation="previous"></button>
                        <button type="button" class="btn btn-primary js-btn-step" data-orientation="next"></button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal 3 :: Invite Others -->
        <div class="modal modal-lg-fullscreen fade" id="inviteOthers" tabindex="-1" role="dialog" aria-labelledby="inviteOthersLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="inviteOthersLabel">Invite Others</h5>
                        
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body hide-scrollbar">
                        <form>
                            <div class="row">
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="inviteEmailAddress">Email address</label>
                                        <input type="email" class="form-control form-control-md" id="inviteEmailAddress" placeholder="Type email address here" value="">
                                    </div>
                                </div>
                                <div class="col-12">
                                    <div class="form-group">
                                        <label for="inviteMessage">Invitation message</label>
                                        <textarea class="form-control form-control-md no-resize hide-scrollbar" id="inviteMessage" placeholder="Write your message here" rows="3"></textarea>
                                    </div>
                                </div>
                            </div>
                        </form>
                        
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-link text-muted" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Send Invitation</button>
                        </div>
                </div>
            </div>
        </div>
                
        <!-- Modal 4 :: Notifications -->
        <div class="modal modal-lg-fullscreen fade" id="notificationModal" tabindex="-1" role="dialog" aria-labelledby="notificationModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="notificationModalLabel">Notifications</h5>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body p-0 hide-scrollbar">
                        <div class="row">

                            <div class="col-12">
                                    <!-- List Group Start -->
                                    <ul class="list-group list-group-flush  py-2">

                                    <!-- List Group Item Start -->
                                    <li class="list-group-item">
                                        <div class="media">
                                            <div class="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"></path>
                                                </svg>
                                                    
                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/user-add.svg" alt=""> -->
                                            </div>

                                            <div class="media-body">
                                                <h6>
                                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Catherine richardson</a> send you a friend request
                                                </h6>

                                                <p class="text-muted mb-0">5 mins ago</p>
                                            </div>
                                        </div>
                                        <div class="d-flex justify-content-center mt-2">
                                            <button type="button" class="btn btn-outline-danger mx-1">Reject</button>
                                            <button type="button" class="btn btn-primary mx-1">Accept</button>
                                        </div>

                                    </li>
                                    <!-- List Group Item End -->

                                    <!-- List Group Item Start -->
                                    <li class="list-group-item">
                                        <div class="media">
                                            <div class="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                    
                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/check-circle.svg" alt=""> -->
                                            </div>

                                            <div class="media-body">
                                                <h6>
                                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Katelyn Valdez</a> accepted your friend request
                                                </h6>

                                                <p class="text-muted mb-0">25 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- List Group Item End -->

                                    <!-- List Group Item Start -->
                                    <li class="list-group-item">
                                        <div class="media">
                                            <div class="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/photograph.svg" alt=""> -->
                                            </div>

                                            <div class="media-body">
                                                <h6>
                                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Eva Walker</a> updated profile picture
                                                </h6>

                                                <p class="text-muted mb-0">5 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- List Group Item End -->

                                    <!-- List Group Item Start -->
                                    <li class="list-group-item">
                                        <div class="media">
                                            <div class="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                </svg>
                                                    
                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/check-circle.svg" alt=""> -->
                                            </div>

                                            <div class="media-body">
                                                <h6>
                                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Bonnie Torres</a> accepted your friend request
                                                </h6>

                                                <p class="text-muted mb-0">5 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- List Group Item End -->

                                    <!-- List Group Item Start -->
                                    <li class="list-group-item">
                                        <div class="media">
                                            <div class="btn btn-primary btn-icon rounded-circle text-light mr-2">
                                                <!-- Default :: Inline SVG -->
                                                <svg class="hw-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                                                </svg>

                                                <!-- Alternate :: External File link -->
                                                <!-- <img class="injectable hw-24" src="./../../assets/media/heroicons/outline/photograph.svg" alt=""> -->
                                            </div>

                                            <div class="media-body">
                                                <h6>
                                                    <a href="http://prismthemes.com/quicky/ltr/light-skin/index.html#">Christopher Garcia</a> updated profile picture
                                                </h6>

                                                <p class="text-muted mb-0">5 mins ago</p>
                                            </div>
                                        </div>
                                    </li>
                                    <!-- List Group Item End -->


                                </ul>
                                <!-- List Group End -->
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer justify-content-center">
                        <button type="button" class="btn btn-link text-muted">Clear all</button>
                    </div>
                </div>
            </div>
        </div>

        <!-- Modal 5 :: Add Note -->
        <div class="modal modal-lg-fullscreen fade" id="addNoteModal" tabindex="-1" role="dialog" aria-labelledby="addNoteModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addNoteModalLabel">Add new note</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                        <div class="form-group">
                            <label for="addNoteName" class="col-form-label">Note title:</label>
                            <input type="text" class="form-control" id="addNoteName" value="" placeholder="Add note title here">
                        </div>
                        <div class="form-group">
                            <label for="addNoteDetails" class="col-form-label">Note details:</label>
                            <textarea class="form-control hide-scrollbar" id="addNoteDetails" rows="4" placeholder="Add note descriptions"></textarea>
                        </div>
                        <div class="form-group">
                            <label class="col-form-label">Note tag:</label>
                            <select class="custom-select font-size-sm shadow-none">
                                <option selected="">Personal</option>
                                <option value="1">Important</option>
                                <option value="2">Work</option>
                                <option value="3">Favourite</option>
                                </select>
                        </div>
                    
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light border" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Add task</button>
                </div>
                </div>
            </div>
        </div>

        <!-- Modal 6 :: Edit Task -->
        <div class="modal modal-lg-fullscreen fade" id="taskModal" tabindex="-1" role="dialog" aria-labelledby="taskModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="taskModalLabel">Edit task</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="form-group">
                        <label for="editTaskName" class="col-form-label">Task name:</label>
                        <input type="text" class="form-control" id="editTaskName" value="Dinner with friends" placeholder="Add task name here">
                    </div>
                    <div class="form-group">
                        <label for="editTaskDetails" class="col-form-label">Task details:</label>
                        <textarea class="form-control hide-scrollbar" id="editTaskDetails" rows="4" placeholder="Add task descriptions">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis temporibus vel, molestiae nobis dolor aut sapiente. Vero possimus molestias consequatur quod, quo rem autem molestiae, accusantium nemo culpa eos doloremque?
                        </textarea>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light border" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-success">Finish</button>
                    <button type="button" class="btn btn-primary">Save</button>
                </div>
                </div>
            </div>
        </div>
        
        <!-- Modal 7 :: Add Task -->
        <div class="modal modal-lg-fullscreen fade" id="addTaskModal" tabindex="-1" role="dialog" aria-labelledby="addTaskModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-dialog-zoom">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="addTaskModalLabel">Add new task</h5>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">×</span>
                    </button>
                </div>
                <div class="modal-body">
                    <form>
                    <div class="form-group">
                        <label for="addTaskName" class="col-form-label">Task name:</label>
                        <input type="text" class="form-control" id="addTaskName" value="" placeholder="Add task name here">
                    </div>
                    <div class="form-group">
                        <label for="addTaskDetails" class="col-form-label">Task details:</label>
                        <textarea class="form-control hide-scrollbar" id="addTaskDetails" rows="4" placeholder="Add task descriptions"></textarea>
                    </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-light border" data-dismiss="modal">Close</button>
                    <button type="button" class="btn btn-primary">Add task</button>
                </div>
                </div>
            </div>
        </div>

        <!-- All Modals End -->
        
    </div>
</template>