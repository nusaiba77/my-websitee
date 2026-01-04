function scanURL() {

    let url = document.getElementById("urlInput").value.trim();
    let resultElement = document.getElementById("result");

    if (!url) {
        resultElement.innerHTML = "❌ Please enter a URL first.";
        resultElement.style.color = "orange";
        return;
    }

    let alerts = []; 


    if (!url.startsWith("https://")) {
        alerts.push("⚠️ This site does NOT use a secure connection (No HTTPS).");
    }

    if (url.length > 100) {
        alerts.push("⚠️ Warning: URL is unusually long, which is common in phishing.");
    }

    if (url.includes("@")) {
        alerts.push("⚠️ Security Risk: URL contains an '@' symbol, used to hide the real destination.");
    }

    if (alerts.length === 0) {
        resultElement.innerHTML = "✅ This link looks safe based on basic checks.";
        resultElement.style.color = "green";
    } else {
        resultElement.innerHTML = alerts.join("<br>");
        resultElement.style.color = "red";
    }
}

