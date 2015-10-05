if (sessionStorage.getItem("nombre")) {
    location.replace("imagenes.html");
}

function login() {

    if (document.getElementById("txtNom").value === "") {
        alert("Nombre vacio");
        return;
    }

    sessionStorage.setItem("nombre", document.getElementById("txtNom").value);
    location.replace("imagenes.html");
}

document.getElementById("btnOk").addEventListener("click", login);