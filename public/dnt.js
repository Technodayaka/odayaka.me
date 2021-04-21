const auroraScript = document.getElementById("aurora-script");
const comments = document.getElementById("comments");
if (window.doNotTrack || navigator.doNotTrack || navigator.msDoNotTrack || 'msTrackingProtectionEnabled' in window.external) {
    if (window.doNotTrack == "1" || navigator.doNotTrack == "yes" || navigator.doNotTrack == "1" || navigator.msDoNotTrack == "1" || window.external.msTrackingProtectionEnabled()) {
    auroraScript.remove();
    console.log(`%c I noticed you had the DNT (Do Not Track) header on, so I disabled aurora.js and muut for you. Happy browsing!`, `color:yellow;`);
    }
} else {
    console.log(`%c Just because you don't have the DNT (Do Not Track) header on, doesn't mean I still track you. I use aurora.js, and Plausible Analytics.`, `color:yellow;`);
}