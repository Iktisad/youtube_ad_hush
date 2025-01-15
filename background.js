// List of known ad URLs or patterns
const defaultAdBlockList = [
    "*://googleads.g.doubleclick.net/*",
    "*://pagead2.googlesyndication.com/*",
    "*://static.doubleclick.net/*",
    "*://ads.youtube.com/*",
    "*://ad.doubleclick.net/*",
    "*://*.googlesyndication.com/*",
    "*://*.moatads.com/*"
];

// Function to fetch additional blocklist (e.g., EasyList)
async function fetchRemoteBlockList() {
    const remoteListUrl = "https://easylist.to/easylist/easylist.txt";
    const fetchedBlockList = [];

    try {
        const response = await fetch(remoteListUrl);
        const data = await response.text();

        // Parse the block list to extract domain patterns
        const regex = /^\|\|([^\^]+)\^/gm; // EasyList format: ||domain.com^
        let match;
        while ((match = regex.exec(data)) !== null) {
            fetchedBlockList.push(`*://${match[1]}/*`);
        }

        console.log("Remote blocklist fetched successfully.");
    } catch (error) {
        console.error("Error fetching remote blocklist:", error);
    }

    return fetchedBlockList;
}

// Combine default and remote block lists
async function initializeBlockList() {
    const remoteBlockList = await fetchRemoteBlockList();
    const combinedBlockList = [...defaultAdBlockList, ...remoteBlockList];

    console.log("Final Block List:", combinedBlockList);

    // Register listener to block requests
    chrome.webRequest.onBeforeRequest.addListener(
        (details) => {
            console.log(`Blocked: ${details.url}`);
            return { cancel: true };
        },
        { urls: combinedBlockList },
        ["blocking"]
    );
}

// Initialize block list on extension load
initializeBlockList();
