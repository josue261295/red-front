import { useState } from "react";
/* import "./aseets/app.css";*/
import React from 'react'
import Menus from "./menus";
import { useNavigate } from 'react-router-dom'

const Login = () => { 
    /* desde aqui inicia las funciones js*/
    const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
  }
  
  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
  }
  const navigate = useNavigate()
  const handleSubmit = (event) => {
    event.preventDefault()
    // Aquí puedes agregar la lógica para verificar las credenciales del usuario
    // Por ejemplo, puedes hacer una solicitud a un servidor para autenticar al usuario.
    // Luego, puedes redirigir al usuario a la página de inicio si las credenciales son válidas.
    // Aquí, por simplicidad, solo imprimiremos las credenciales en la consola.
    navigate("menu")
    
    }

    /* desde aqui empieza el html */
  return (
    <>
     <div className="container">
     <h2>Seguridad y Control de Usuarios <br/> Inicio de Sesión </h2>

<form onSubmit={handleSubmit}>
  <label htmlFor="username">Usuario:</label>
  <input type="text" id="username" name="username" onChange={handleUsernameChange} required/>

  <label htmlFor="password">Contraseña:</label>
  <input type="password" id="password" name="password" onChange={handlePasswordChange} required />
  <div id="passwordStrength"></div>

  <button type="submit" >Iniciar Sesión</button>
</form>
      </div>



      
    </>
  )
}

export default Login
