
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



function validateForm() {

    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    let email = document.getElementById("email").value;
    let wiadomosc = document.getElementById("wiadomosc").value;

    let error = document.getElementById("error");

    error.innerHTML = "";

    if (
        imie === "" ||
        nazwisko === "" ||
        email === "" ||
        wiadomosc === ""
    ) {
        error.innerHTML = "Wszystkie pola są wymagane!";
        return false;
    }

    if (/\d/.test(imie) || /\d/.test(nazwisko)) {
        error.innerHTML =
            "Imię i nazwisko nie mogą zawierać cyfr!";
        return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
        error.innerHTML = "Niepoprawny email!";
        return false;
    }

    alert("Formularz wysłany poprawnie!");

    return true;
}



fetch("data.json")
    .then(response => response.json())
    .then(data => {

        let skillsList =
            document.getElementById("skills");

        data.umiejetnosci.forEach(skill => {

            let li = document.createElement("li");

            li.textContent = skill;

            skillsList.appendChild(li);
        });

    });



let projects =
    JSON.parse(localStorage.getItem("projects")) || [];

displayProjects();

function addProject() {

    let input =
        document.getElementById("newProject");

    let projectName = input.value;

    if (projectName === "") {

        alert("Wpisz nazwę projektu!");

        return;
    }

    projects.push(projectName);

    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );

    displayProjects();

    input.value = "";
}

function displayProjects() {

    let projectList =
        document.getElementById("projects");

    projectList.innerHTML = "";

    projects.forEach((project, index) => {

        let li = document.createElement("li");

        li.innerHTML = `
            ${project}
            <button onclick="deleteProject(${index})">
                Usuń
            </button>
        `;

        projectList.appendChild(li);
    });
}

function deleteProject(index) {

    projects.splice(index, 1);

    localStorage.setItem(
        "projects",
        JSON.stringify(projects)
    );

    displayProjects();
}
