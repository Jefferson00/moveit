import styles from "../styles/pages/Login.module.css"

export default function Home() {

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
                <input placeholder="Digite seu username"/>
                <button type="button" id="login-button">
                  <img src="icons/arrow.svg" alt="login"/>
                </button>
            </div>
        </section>
    </div>
  )
}

