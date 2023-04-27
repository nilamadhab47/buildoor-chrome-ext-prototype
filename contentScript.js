(() => {
    let youtubeLeftControls , youtubePlayer;
    let currentVideo = ""

    chrome.runtime.onMessage.addListener((obj, sender, response)=> {
        const {type, value, videoID} = obj;
        
        if(type === "NEW") {
            currentVideo = videoID;
            newVideoLoaded()
        }

    })

    const newVideoLoaded = () => {
        const bookmarkBtnExists = document.getElementsByClassName("bookmark-btn")[0]

        if(!bookmarkBtnExists) {
            const bookmarkBtn = document.createElement("img");

            bookmarkBtn.src = chrome.runtime.getURL("assets/bookmark.png");
            bookmarkBtn.className = "ytp-button " + "bookmark-btn";
            bookmarkBtn.title = "click to bookmark current timestamp";

            youtubeLeftControls = document.getElementsByClassName("ytp-left-controls")[0];
            youtubePlayer = document.getElementsByClassName("video-stream")[0];


            youtubeLeftControls.appendChild(bookmarkBtn);
            bookmarkBtn.addEventListener("click", addNewBookmarkEventHandler);
        }
    }

    const addNewBookmarkEventHandler = () => {
        const currentTime = youtubePlayer.currentTime;
        const newBookMark = {
            time: currentTime,
            desc = 
        }
    }


    newVideoLoaded();
})();