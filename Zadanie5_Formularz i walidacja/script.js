function validateForm() {

    let imie = document.getElementById("imie").value;
    let nazwisko = document.getElementById("nazwisko").value;
    let email = document.getElementById("email").value;
    let wiadomosc = document.getElementById("wiadomosc").value;
    let error = document.getElementById("error");

    error.innerHTML = "";

    if (imie === "" || nazwisko === "" || email === "" || wiadomosc === "") {
        error.innerHTML = "Wszystkie pola są wymagane!";
        return false;
    }

    if (/\d/.test(imie) || /\d/.test(nazwisko)) {
        error.innerHTML = "Imię i nazwisko nie mogą zawierać cyfr!";
        return false;
    }


    if (!email.includes("@") || !email.includes(".")) {
        error.innerHTML = "Niepoprawny email!";
        return false;
    }


    alert("Formularz wysłany poprawnie!");
    return true;
}
