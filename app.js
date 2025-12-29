function scanURL() {
    // 1. جلب الرابط المدخل من المستخدم وتحديد مكان عرض النتيجة
    let url = document.getElementById("urlInput").value.trim();
    let resultElement = document.getElementById("result");

    // 2. التحقق مما إذا كان الحقل فارغاً
    if (!url) {
        resultElement.innerHTML = "❌ Please enter a URL first.";
        resultElement.style.color = "orange";
        return;
    }

    let alerts = []; // مصفوفة لتخزين التحذيرات المكتشفة

    // 3. فحص بروتوكول الأمان (HTTPS)
    if (!url.startsWith("https://")) {
        alerts.push("⚠️ This site does NOT use a secure connection (No HTTPS).");
    }

    // 4. كشف الروابط الطويلة جداً (تستخدم غالباً في التمويه)
    if (url.length > 100) {
        alerts.push("⚠️ Warning: URL is unusually long, which is common in phishing.");
    }

    // 5. كشف الرموز المشبوهة (مثل رمز @ الذي يوجه المستخدم لمكان مختلف)
    if (url.includes("@")) {
        alerts.push("⚠️ Security Risk: URL contains an '@' symbol, used to hide the real destination.");
    }

    // 6. عرض النتائج النهائية بناءً على الفحوصات
    if (alerts.length === 0) {
        // إذا لم يتم العثور على أي مشكلة
        resultElement.innerHTML = "✅ This link looks safe based on basic checks.";
        resultElement.style.color = "green";
    } else {
        // إذا تم اكتشاف مشكلة واحدة أو أكثر، يتم عرضها كلها
        resultElement.innerHTML = alerts.join("<br>");
        resultElement.style.color = "red";
    }
}
