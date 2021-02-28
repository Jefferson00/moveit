import { useContext, useState } from "react"
import { LoginContext } from "../contexts/LoginContext"
import styles from "../styles/pages/Login.module.css"

export function Login() {

  const {handleLogin} = useContext(LoginContext)
  const [userName, setUserName] = useState('');

  function teste(){
    handleLogin(userName)
  }

  return (
   
    <div className={styles.container}>
        <section>
            <img src="Simbolo.svg" alt="simbolo"/>
        </section>
        <section>
            <img src="Logo-full-white.svg" alt="Logo"/>
            <strong>
                Bem-vindo
            </strong>
            <div>
                <img src="icons/github.svg" alt="Github"/>
                <p>Faça login com seu github para começar</p>
            </div>

            <div>
                <input 
                type="text"
                placeholder="Digite seu username"
                onChange={e =>setUserName(e.target.value)}
                value={userName}
                />
                <button type="button" id="login-button" onClick={teste}>
                  <img src="icons/arrow.svg" alt="login"/>
                </button>
            </div>
        </section>
    </div>
  )
}