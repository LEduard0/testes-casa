function validateForm() {
    var x = document.forms["form"]["name"].value;
    if (x == "") {
        alert("É necessário inserir seu nome");
        return false;
    }
}