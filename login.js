
    function validarFormulario(event) {
        event.preventDefault();

      
        const email = document.getElementById('inputEmail4').value.trim();
        const senha = document.getElementById('Senha').value.trim();
        if (email === '' || senha === '') {
            alert('Por favor, preencha todos os campos antes de continuar.');
        } else {
            // Se os campos estiverem preenchidos, redireciona para outro site (exemplo: google.com)
            window.location.href = "tela.html"
        }
    }

    // Adiciona um evento de submissão ao formulário
    document.querySelector('form').addEventListener('submit', validarFormulario);
