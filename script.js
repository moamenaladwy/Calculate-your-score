function checkScore() {
    // الحصول على القيمة المدخلة من المستخدم
    var score = document.getElementById("score").value;

    // التحقق إذا كانت القيمة المدخلة هي رقم صحيح
    if (score === "" || isNaN(score)) {
        document.getElementById("result").innerHTML = "من فضلك أدخل درجة صحيحة.";
        return;
    }

    // تحويل القيمة إلى رقم
    score = parseFloat(score);

    // التحقق من النجاح أو الفشل
    if (score >= 50) {
        document.getElementById("result").innerHTML = "لقد نجحت في الاختبار!";
        document.getElementById("result").className = "result success visible";
    } else {
        document.getElementById("result").innerHTML = "للأسف، لقد فشلت في الاختبار.";
        document.getElementById("result").className = "result failure visible";
    }
}
