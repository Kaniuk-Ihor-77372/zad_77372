let currentTheme = "green";

function changeTheme() {
    const theme = document.getElementById("theme");

    if (currentTheme === "green") {
        theme.href = "red.css";
        currentTheme = "red";
    } else {
        theme.href = "green.css";
        currentTheme = "green";
    }
}

function toggleSection() {
    const section = document.getElementById("projekty");

    if (section.style.display === "none") {
        section.style.display = "block";
    } else {
        section.style.display = "none";
    }
}
