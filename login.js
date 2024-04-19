function validarFormulario() {
    var username = document.getElementById("email").value;
    var senha = document.getElementById("senha").value;
 
    // Verificar se os campos estão vazios
    if (username.trim() === '' || senha.trim() === '') {
        alert("Por favor, preencha todos os campos.");
        return false;
    }
 
    // Outras verificações de validação podem ser adicionadas aqui
 
    // Se todos os campos estiverem preenchidos
    return true;
}