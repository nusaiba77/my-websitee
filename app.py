let suspiciousWords = ["free", "money", "win", "verify", "prize", "claim", "offer"];

let lowerURL = url.toLowerCase();

let found = suspiciousWords.some(word => lowerURL.includes(word));

if (found) {
    document.getElementById("result").innerHTML += "<br>⚠️ This URL contains suspicious keywords.";
} else {
    document.getElementById("result").innerHTML += "<br>✔️ No suspicious keywords detected.";
}