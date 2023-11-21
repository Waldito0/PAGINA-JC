function RecuperarRegistro() {
  
    var correo = document.getElementById('Correo').value;
    var contraseña = document.getElementById('Contraseña').value;
  

    if (correo.trim() !== '' && contraseña.trim() !== '') {

      var usuario = {
        correo: correo,
        contraseña: contraseña
      };
  
      var usuarioJSON = JSON.stringify(usuario);
  

      sessionStorage.setItem('usuarioRegistrado', usuarioJSON);
  
      alert('Inicio de sesion exitoso');
  
      document.getElementById('Correo').value = '';
      document.getElementById('Contraseña').value = '';
    } else {

      alert('Por favor, completa todos los campos');
    }
  }