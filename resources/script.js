

function iniciaSesion(){
    const socio = document.querySelector("#socio")
    const formulario = document.querySelector("#formulario-login")
    const tarjeta = document.querySelector(".tarjeta-sesion")
    const usulos = []
    

    const tarjetaBienvenida = () => {
        formulario.style.display = "none"
        for( const usulo of usulos){
        tarjeta.innerHTML = `
        <div id="nueva-tarjeta">
            <h2>¡Bienvenid@ de nuevo! 
        </div>
        `
        tarjeta.style.display = "flex"
    }
    }

    socio.addEventListener("submit",(event) => {
        
        event.preventDefault()

        usulos.push({
            
            email: socio.emailuser.value,
            contrasena: socio.contrasenauser.value

        })

        if (!emailuser.value || !contrasenauser.value) {
            Swal.fire({
                title: 'Por favor complete todos los campos obligatorios',
                confirmButtonText: "Entendido",
                confirmButtonColor: '#a18173',
                padding: "2rem",
                icon: "warning",
                background: "#eee",
            })
        
            }
        else{
            tarjetaBienvenida()
        }

    })
}





function formulario(){
    const socio = document.querySelector("#agregar-socio")
    const formulario = document.querySelector("#formulario")
    const tarjeta = document.querySelector(".tarjeta-socio")
    const usuarios = []
    

    const tarjetaClub = () => {
        formulario.style.display = "none"
        for( const usuario of usuarios){
        tarjeta.innerHTML = `
        <div id="nueva-tarjeta">
            <h2>${usuario.nombre} ${usuario.apellido}</h2>

            <p>¡Bienvenid@ a nuestro club!</p>

            <p>Te dejamos un regalito de bienvenida en tu correo</p>

            <i class="fa-sharp fa-solid fa-gift"></i>
            
        </div>
        `
        tarjeta.style.display = "flex"
    }
    }

    socio.addEventListener("submit",(event) => {
        
        event.preventDefault()

        usuarios.push({
            nombre: socio.nombre.value,
            apellido: socio.apellido.value,
            email: socio.email.value,
            contrasena: socio.contrasena.value

        })

        if (!nombre.value || !apellido.value || !email.value || !contrasena.value) {
            Swal.fire({
                title: 'Por favor complete todos los campos obligatorios',
                confirmButtonText: "Entendido",
                confirmButtonColor: '#a18173',
                padding: "2rem",
                icon: "warning",
                background: "#eee",
            })
        
            }
        else{
            tarjetaClub()
        }

    })
}

formulario();
iniciaSesion();