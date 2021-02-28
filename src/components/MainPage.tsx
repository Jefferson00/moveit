
import { useContext } from "react";
import { CountdownProvider } from "../contexts/CountdownContext";
import { LoginContext } from "../contexts/LoginContext";
import { ChallengeBox } from "./ChallengeBox";
import { CompletedChallenges } from "./CompletedChallenges";
import { Countdown } from "./Countdown";
import { ExperienceBar } from "./ExperienceBar";
import { Lateral } from "./Lateral";
import { Login } from "./Login";
import { Profile } from "./Profile";

import styles from "../styles/pages/Home.module.css"

export function MainPage() {
    const { isUserLogged } = useContext(LoginContext)

    return (
        <>
            {isUserLogged ?
                (<div className={styles.mainContainer}>
                    <Lateral />
                    <div className={styles.container}>
                        

                        <ExperienceBar />

                        <CountdownProvider>
                            <section>
                                <div>
                                    <Profile />
                                    <CompletedChallenges />
                                    <Countdown />
                                </div>

                                <div>
                                    <ChallengeBox />
                                </div>
                            </section>
                        </CountdownProvider>
                    </div>
                </div>)
                :
                (<Login />)
            }
        </>
    )
}