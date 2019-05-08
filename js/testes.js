function validateForm() {
    var y = document.forms["form"]["name"].value;
    if (y == "") {
        alert("É necessário inserir seu nome");
        return false;
    }
}

function verificaNumero() {
    var x, text;

    x = document.getElementById("numero").value;

    if (isNaN(x)) {
        text = "<font color='red'>Insira apenas numeros</font>";
    } else {
        text = "<font color='green'>Input Ok</font>"
    }
    document.getElementById("msgErro").innerHTML = text;
}