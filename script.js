function showHoroscope() {
    let ch = document.getElementById("initial").value.toUpperCase();
    let result = "";

    let day = new Date().getDay(); // 0–6

    if (!ch || ch.length !== 1 || ch < 'A' || ch > 'Z') {
        result = "Please enter a valid alphabet (A–Z).";
    } else {
        switch (ch) {
            case 'A':
                result = day % 2 === 0
                    ? "Today is a great day to start something new."
                    : "Focus on planning before taking action.";
                break;

            case 'B':
                result = day % 2 === 0
                    ? "Be cautious with money matters today."
                    : "Good time to review past decisions.";
                break;

            case 'C':
                result = day % 2 === 0
                    ? "Confidence will bring positive outcomes."
                    : "Patience will help you avoid mistakes.";
                break;

            case 'D':
                result = day % 2 === 0
                    ? "Dedication will lead to success."
                    : "Take some rest and recharge yourself.";
                break;

            case 'E':
                result = day % 2 === 0
                    ? "Energy levels are high—use them wisely."
                    : "Emotional balance is important today.";
                break;

            case 'F':
                result = day % 2 === 0
                    ? "Focus on health and wellness."
                    : "Friends may bring good news.";
                break;

            case 'G':
                result = day % 2 === 0
                    ? "Growth opportunities are coming."
                    : "Gratitude will improve your mood.";
                break;

            case 'H':
                result = day % 2 === 0
                    ? "Hard work will pay off."
                    : "Help from others may surprise you.";
                break;

            case 'I':
                result = day % 2 === 0
                    ? "Ideas will flow easily today."
                    : "Introspection will give clarity.";
                break;

            case 'J':
                result = day % 2 === 0
                    ? "Joy comes from small achievements."
                    : "Stay calm under pressure.";
                break;

            case 'K':
                result = day % 2 === 0
                    ? "Keep faith in your abilities."
                    : "Kind actions will return to you.";
                break;

            case 'L':
                result = day % 2 === 0
                    ? "Listen carefully before reacting."
                    : "Luck favors thoughtful decisions.";
                break;

            case 'M':
                result = day % 2 === 0
                    ? "Motivation will push you forward."
                    : "Manage your time efficiently.";
                break;

            case 'N':
                result = day % 2 === 0
                    ? "New opportunities may arise."
                    : "Avoid rushing into conclusions.";
                break;

            case 'O':
                result = day % 2 === 0
                    ? "Optimism brings good results."
                    : "Observe more, speak less.";
                break;

            case 'P':
                result = day % 2 === 0
                    ? "Patience will reward you."
                    : "Planning is more important than action today.";
                break;

            case 'Q':
                result = day % 2 === 0
                    ? "Quality matters more than quantity."
                    : "Quiet time will help you think better.";
                break;

            case 'R':
                result = day % 2 === 0
                    ? "Responsibility brings recognition."
                    : "Relax and trust the process.";
                break;

            case 'S':
                result = day % 2 === 0
                    ? "Stay positive and focused."
                    : "Slow progress is still progress.";
                break;

            case 'T':
                result = day % 2 === 0
                    ? "Time management is key today."
                    : "Take breaks to avoid burnout.";
                break;

            case 'U':
                result = day % 2 === 0
                    ? "Unexpected events may help you grow."
                    : "Use your resources wisely.";
                break;

            case 'V':
                result = day % 2 === 0
                    ? "Value your own efforts."
                    : "Victory comes with consistency.";
                break;

            case 'W':
                result = day % 2 === 0
                    ? "Wisdom helps you choose correctly."
                    : "Work quietly, results will speak.";
                break;

            case 'X':
                result = day % 2 === 0
                    ? "X-factor creativity is strong today."
                    : "Explore something new.";
                break;

            case 'Y':
                result = day % 2 === 0
                    ? "You will feel confident today."
                    : "Yielding patience brings peace.";
                break;

            case 'Z':
                result = day % 2 === 0
                    ? "Zeal will help you finish tasks."
                    : "Zero distractions will bring success.";
                break;
        }
    }

    document.getElementById("result").innerText = result;
}
