import { useState } from 'react'
import './App.css'

function App() {
  const [showButtons, setShowButtons] = useState(false);

  const showAdditionalButtons = () => {
    setShowButtons(true);
  };
  return (
    <>
      <div class="header">
        <img src="group-363.png" className="ladrillos" alt="100ladrillos logo" />
        <div className='headerButtonsDiv'>
          {showButtons ? (
            <>        
              <button className='headerButtons'><h1 className = "headerText">Registrarse</h1></button>
              <button className='headerButtons'><h1 className = "headerText">Iniciar sesion</h1></button>
            </>
          ) : ( 
          <button className='headerButtons' onClick={showAdditionalButtons}>
            <h1 className='headerText'>Bienvenidos</h1>
          </button>
          )}
        </div>
      </div>
      <img src='image-2.png' className='angelImage' alt='angel image'/>
      <div className='signUpDiv'>
        <span className='signUpText'>Crear tu cuenta</span>
        <span className='al-aceptar-crear-una-cuenta'>Al aceptar crear una cuenta en 100 Ladrillos aceptas nuestro
          <span className='blue-letter-style'> Aviso de Privacidad, Derechos Arco </span>
          y nuestros
          <span className='blue-letter-style'> Terminos y Condiciones</span>
        </span>
        <div className='input-div'>
          <label className='label'>Ingresa tu correo electrónico</label>
          <input placeholder='tu@email.com' className='ingresar-email'></input>
        </div>
        <div className='input-div'>
          <label className='label-2'>Ingresa tu contraseña</label>
          <input placeholder='Contraseña' className='ingresar-constrasena' type='password'></input>
          <button className='visibility-off-image'><img src='VisibilityOff.png' /></button>
        </div>
        <div className='linea-separacion1'></div>
        <div className='linea-separacion2'></div>
      </div>
    </>
  )
}

export default App
