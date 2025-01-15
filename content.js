// Function to remove ad elements from the DOM
function removeYouTubeAds() {
    // Remove video ads (pre-roll, mid-roll)
    const adContainers = document.querySelectorAll(".video-ads, .ytp-ad-module");
    adContainers.forEach((ad) => ad.remove());

    // Remove banner ads
    const bannerAds = document.querySelectorAll("ytd-banner-promo-renderer, #masthead-ad");
    bannerAds.forEach((bannerAd) => bannerAd.remove());

    // Remove overlay ads
    const overlayAds = document.querySelectorAll(".ytp-ad-overlay-container");
    overlayAds.forEach((overlayAd) => overlayAd.remove());

    // Skip skippable ads
    const skipButton = document.querySelector(".ytp-ad-skip-button");
    if (skipButton) {
        skipButton.click();
    }
}

// Observe page changes and remove dynamically loaded ads
const observer = new MutationObserver(() => {
    removeYouTubeAds();
});

// Start observing the document body for changes
observer.observe(document.body, { childList: true, subtree: true });

// Initial cleanup
removeYouTubeAds();
