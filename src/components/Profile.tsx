import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import { LoginContext } from "../contexts/LoginContext"
import styles from "../styles/components/Profile.module.css"

export function Profile(){
    const {level} = useContext(ChallengesContext)
    const {userImage, userName, handleLogout} = useContext(LoginContext)

    return(
        <div className={styles.profileContainer}>
            <img src={userImage} alt="profile"/>
            <div>
                <strong>
                    {userName}
                </strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
            <button onClick={handleLogout}>
                <img src="icons/logout.svg" alt="sair"/>
            </button>
        </div>
    )
}