import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [showButtons, setShowButtons] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] = useState(false);

  const showAdditionalButtons = () => {
    setShowButtons(true);
  };

  const handleEmailInputChange = () => {
    setShowPasswordConfirmation(true);
  };


  function analizarContraseña() {
  
    const contraseña = document.getElementById('passwordUser').value;
  
    let letras = 0;
    let numeros = 0;
    let simbolos = 0;

    for (let i = 0; i < contraseña.length; i++) {
      const caracter = contraseña.charAt(i);
  
      if (/^[a-zA-Z]+$/.test(caracter)) {
        letras++;
      }
      else if (/^\d+$/.test(caracter)) {
        numeros++;
      }
      else {
        simbolos++;
      }
    }
  
    const tamaño = contraseña.length;
  
    console.log(`Letras: ${letras}`);
    console.log(`Números: ${numeros}`);
    console.log(`Símbolos: ${simbolos}`);
    console.log(`Tamaño total: ${tamaño}`);
  }
  
  useEffect(() => {
    const passwordInput = document.getElementById('passwordUser');
    const emailInput = document.getElementById('emailUser');

    passwordInput.addEventListener('input', analizarContraseña);
    emailInput.addEventListener('input', handleEmailInputChange);

    return () => {
      passwordInput.removeEventListener('input', analizarContraseña);
      emailInput.removeEventListener('input', handleEmailInputChange);
    };
  }, []);


  return (
    <>
      <div className="header">
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
          <input placeholder='tu@email.com' className='ingresar-email' id='emailUser'></input>
        </div>
        <div className='input-div'>
          <label className='label-2'>Ingresa tu contraseña</label>
          <input placeholder='Contraseña' className='ingresar-constrasena' type='password' id='passwordUser'></input>
          <button className='visibility-off-image'><img src='VisibilityOff.png' /></button>
        </div>
        <div>
        {showPasswordConfirmation ? (
          <>
            
          </>
        ) : (
          <>
            <div className='linea-separacion1'></div>
            <div className='linea-separacion2'></div>
            <span className='o-registrarte-con'>O registrate con: </span>
            <div className='botones-inicio-de-sesion-div'>
              <button className='boton-inicio-de-sesion-google'><img src='2000-px-google-g-logo-1.png'/></button>
              <button className='boton-inicio-de-sesion-microsoft'><img src='microsoft-windows-logo-1.png'/></button>
              <button className='boton-inicio-de-sesion-facebook'><img src='facebok-1.png'/></button>
              <img src='systems-icons.png' className='systems-icons-1'></img>
              <img src='systems-icons2.png' className='systems-icons-2'></img>
              <img src='systems-icons2.png' className='systems-icons-3'></img>
              <img src='systems-icons2.png' className='systems-icons-4'></img>
            </div>
          </>
        )}
        </div>
      </div>
    </>
  )
}

export default App
