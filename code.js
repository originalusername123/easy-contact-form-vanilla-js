var formFooter = document.getElementById("myForm");

formFooter.addEventListener("submit", function(evt) {
    evt.preventDefault();

//gets the data from the form
    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var tel = document.getElementById("tel");
    var message = document.getElementById("message");

    var xhr = new XMLHttpRequest();

    xhr.open('POST', '/form.php');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {

        const ResArray = xhr.responseText.split('>');

        if(ResArray.at(-1).trim() == '0') {
          //Cleans the contact form
    name.value=''
    email.value=''
    tel.value=''
    message.value=''
    return alert('Tu mensaje fue recibido, pronto nos pondremos en contacto contigo.');
    }
    return alert('Ocurrió un error inesperado. Favor comunícate directamente a contacto@defiendetuidea.cl');

    };

    var data = 'name=' + name.value +
        '&email=' + email.value +
        '&tel=' + tel.value +
        '&message=' + message.value;

    xhr.send(encodeURI(data));

});
