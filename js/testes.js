function validateForm() {
    var x = document.forms["form"]["name"].value;
    if (x == "") {
        alert("É necessário inserir seu nome");
        return false;
    }
}

function veificaNumero() {
    var x, text;

    x = document.getElementById("numero").value;

    if (isNaN(x) || x < 1 || x > 10) {
        text = "Input not valid";
    } else {
        text = "Input OK";
    }
    document.getElementById("msgErro").innerHTML = text;
}