function login(){
    var nome = $('#user').val();
    var password = $('#password').val();




    if(nome && password && nome === "admin" && password ==="admin"){
        const user = {
            nome,
            entryDate: formatarData(new Date()),
            id: Math.floor(Math.random() * 100000),
        }

        localStorage.setItem("user", JSON.stringify(user))
        window.location.href = "../Store";
       
    }else{
        document.getElementById("error-modal").style.display = "flex";
        document.getElementById("user").style.borderColor = "red";
        document.getElementById("password").style.borderColor = "red";
    }
}

function closeError(){
    document.getElementById("error-modal").style.display = "none";
    document.getElementById("user").style.borderColor = "black";
    document.getElementById("password").style.borderColor = "black";
}

function showPassword(){
    var inputPassword = document.querySelector('#password');

    if (inputPassword.getAttribute("type") === "password"){
        inputPassword.setAttribute("type", "text");
    }else{
        inputPassword.setAttribute("type", "password");
    }
}

function formatarData(date){
    var options = {
        month: "numeric",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    }

    return date.toLocaleString("pt-BR", options)
}


