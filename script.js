function logar() {
    var login = document.getElementById('login').value.trim(); 
    var senha = document.getElementById('senha').value.trim(); 

// validar e-mail
function validarEmail(email) {
    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Validar CPF (Apenas números, sem format)
function validarCPF(cpf) {
    var regex = /^\d{11}$/;
    return regex.test(cpf);
}

// Validar senha
function validarSenha(senha) {
    return /^\d{6}$/.test(senha);
}

// Valida e-mail/CPF e senha
if ((validarEmail(login) || validarCPF(login)) && validarSenha(senha)) {
    alert('Bem - vindo!');
} else {
    alert('E-mail/CPF ou senha incorretos');
}
}