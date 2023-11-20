function validateForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var resultDiv = document.getElementById("result");

    if (username === "" || password === "") {
        resultDiv.innerHTML = "<p>Preencha todos os campos.</p>";
    } 
    else if (password.length < 8) {
        resultDiv.innerHTML = "<p>A senha deve ter pelo menos 8 caracteres.</p>";
    } else if (!/[A-Z]/.test(password) || !/[@#$%!&*]/.test(password)) {
        resultDiv.innerHTML = "<p>A senha deve incluir pelo menos uma letra maiúscula e pelo menos um dos caracteres especiais: @, #, $, %, !, & ou *.</p>";
    } 
    else if (!/^(.+)@(gmail\.com|outlook\.com|yahoo\.com|protonmail\.com|icloud\.com)$/.test(username)) {
        resultDiv.innerHTML = "<p>Utilize um endereço de e-mail válido.</p>";
    } 
    else {
        resultDiv.innerHTML = "<p>Login bem-sucedido!</p>";
    }
}