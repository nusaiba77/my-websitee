function scanURL() {
    let url = document.getElementById("urlInput").value;

    if (!url) {
        document.getElementById("result").innerHTML = "Please enter a URL.";
        return;
    }

    // Basic check (not real scanning but good for project logic)
    if (url.startsWith("https://")) {
        document.getElementById("result").innerHTML = "This site uses HTTPS (More secure).";
    } else {
        document.getElementById("result").innerHTML = "Warning: This site does NOT use HTTPS.";
    }
}