
const firebaseConfig = {

    apiKey: "AIzaSyCND_bA_up1wej3tDe0JlqxQW7i7tMWC3w",

    authDomain: "zadanie8-f779b.firebaseapp.com",

    databaseURL:
    "https://zadanie8-f779b-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "zadanie8-f779b",

    storageBucket:
    "zadanie8-f779b.appspot.com",

    messagingSenderId: "846242229757",

    appId:
    "1:846242229757:web:d3b2f06065ecf182aebd94",

    measurementId: "G-9YFDXX7MEW"
};



firebase.initializeApp(firebaseConfig);

const database = firebase.database();



let currentTheme = "green";

window.changeTheme = function () {

    const theme =
        document.getElementById("theme");

    if (currentTheme === "green") {

        theme.href = "red.css";

        currentTheme = "red";

    } else {

        theme.href = "green.css";

        currentTheme = "green";
    }
};




window.toggleSection = function () {

    const section =
        document.getElementById("projekty");

    if (section.style.display === "none") {

        section.style.display = "block";

    } else {

        section.style.display = "none";
    }
};




window.validateForm = function () {

    let imie =
        document.getElementById("imie").value;

    let nazwisko =
        document.getElementById("nazwisko").value;

    let email =
        document.getElementById("email").value;

    let wiadomosc =
        document.getElementById("wiadomosc").value;

    let error =
        document.getElementById("error");

    error.innerHTML = "";

    if (
        imie === "" ||
        nazwisko === "" ||
        email === "" ||
        wiadomosc === ""
    ) {

        error.innerHTML =
            "Wszystkie pola są wymagane!";

        return false;
    }

   
    if (
        /\d/.test(imie) ||
        /\d/.test(nazwisko)
    ) {

        error.innerHTML =
            "Imię i nazwisko nie mogą zawierać cyfr!";

        return false;
    }

    if (
        !email.includes("@") ||
        !email.includes(".")
    ) {

        error.innerHTML =
            "Niepoprawny email!";

        return false;
    }

    return true;
};




window.sendToFirebase = function () {

    if (!validateForm()) {

        return;
    }

    const data = {

        imie:
            document.getElementById("imie").value,

        nazwisko:
            document.getElementById("nazwisko").value,

        email:
            document.getElementById("email").value,

        wiadomosc:
            document.getElementById("wiadomosc").value
    };

    firebase.database().ref("messages").push(data)

        .then(function () {

            alert(
                "Dane zapisane poprawnie!"
            );

            
            document.getElementById("imie").value = "";

            document.getElementById("nazwisko").value = "";

            document.getElementById("email").value = "";

            document.getElementById("wiadomosc").value = "";

            document.getElementById("error").innerHTML = "";
        });
};




fetch("data.json")

    .then(response => response.json())

    .then(data => {

      
        let skillsList =
            document.getElementById("skills");

        data.umiejetnosci.forEach(skill => {

            let li =
                document.createElement("li");

            li.textContent = skill;

            skillsList.appendChild(li);
        });

    
        let projectsList =
            document.getElementById("projects");

        data.projekty.forEach(project => {

            let li =
                document.createElement("li");

            li.textContent = project;

            projectsList.appendChild(li);
        });
    });
