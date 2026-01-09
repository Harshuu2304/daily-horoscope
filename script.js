function showHoroscope() {
    let ch = document.getElementById("initial").value.toUpperCase();
    let result = "";

    switch (ch) {
        case 'A':
            result = "Today is a great day to start something new.";
            break;
        case 'B':
            result = "Be careful with money today.";
            break;
        case 'C':
            result = "Confidence will bring success.";
            break;
        case 'H':
            result = "Hard work will pay off soon.";
            break;
        case 'S':
            result = "Stay calm and avoid arguments today.";
            break;
        default:
            result = "Enter a valid alphabet (A–Z).";
    }

    document.getElementById("result").innerText = result;
}
