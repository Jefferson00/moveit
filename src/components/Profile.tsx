import { useContext } from "react"
import { ChallengesContext } from "../contexts/ChallengesContext"
import { ThemeContext } from "../contexts/ThemeContext"
import styles from "../styles/components/Profile.module.css"

export function Profile(){
    const {level} = useContext(ChallengesContext)
    const {darkmode} = useContext(ThemeContext)

    return(
        <div className={styles.profileContainer}>
            <img src="https://github.com/jefferson00.png" alt="profile"/>
            <div>
                <strong>
                    Jefferson Silva
                </strong>
                <p>
                    <img src="icons/level.svg" alt="level"/>
                    Level {level}
                </p>
            </div>
        </div>
    )
}