
window.onload = asignarEventos;
var retornoURL;

function asignarEventos() {
    var contador = 1;
    $("#btnAgregar").click(function()
    {
        agregarObjeto(contador);
        contador++;
    });

}

function agregarObjeto(contador){

    var user = $("#txtUsuario").val();
    var pass = $("#txtContraseña").val();
    var srcFoto = retornoURL;
    
    var objeto = `<div class="divObjeto" id="${contador}">
                    <div id="divInternoObjeto">
                        <p>
                            Email: ${user}
                        </br>
                            Contraseña: ${pass}
                        </p>
            
                        <img id="imagen" src="${srcFoto}" height="80" alt="Image preview..."><br>
                        <button id="btnEliminar" onclick="eliminarObjeto(${contador});">X</button>
                    </div>
                </div>`
        
    $("#containerInterno").append(objeto);
}

function eliminarObjeto(contador){
    
    $(`#${contador}`).remove();
}

function encodeImagetoBase64(element) {

    var file = element.files[0];

    var reader = new FileReader();

    reader.onloadend = function() {

      retornoURL = reader.result;
    }

    reader.readAsDataURL(file);

  }