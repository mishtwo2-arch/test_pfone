const language = navigator.language;

if (language.startsWith("ru")) {
    window.location.href = "ru.html";
} else {
    window.location.href = "en.html";
}