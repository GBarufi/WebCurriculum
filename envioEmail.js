$(document).ready(function () {
    $("#formContato").on("submit", function (event) {
        var $request = $.ajax({
            method: "POST",
            url: 'http://contato-twsatc.rhcloud.com/contato-api/email',
            data: {
                nome: $("#nome").val(),
                email: $("#email").val(),
                telefone: $("#tel").val(),
                mensagem: $("#msg").val(),
                para: $("#destinoEmail").val()
            },
            crossDomain: true
        });

        event.preventDefault();

        $request.then(function (response) {
            if (response) {
                $("#formContato").trigger("reset");
                alert('Enviado com sucesso!');
            } else {
                alert('Falha ao enviar.');
            }
        });
    }); 

     
});