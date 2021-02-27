import { CompletedChallenges } from "../components/CompletedChallenges";
import { Countdown } from "../components/Countdown";
import { ExperienceBar } from "../components/ExperienceBar";
import { Profile } from "../components/Profile";
import { ChallengeBox } from "../components/ChallengeBox";
import {GetServerSideProps} from 'next'

import Head from 'next/head'


import styles from "../styles/pages/Home.module.css"
import { CountdownProvider } from "../contexts/CountdownContext";
import { ChallangesProvider } from "../contexts/ChallengesContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import { Lateral } from "../components/Lateral";



interface HomeProps{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    theme:boolean;
}

export default function Home(props: HomeProps) {

  return (
    <ThemeProvider
      theme={props.theme}
    >
    <ChallangesProvider 
      level={props.level}
      currentExperience ={props.currentExperience}
      challengesCompleted = {props.challengesCompleted}
    >
      <div className={styles.mainContainer}>
        <Lateral/>
        <div className={styles.container}>
          <Head>
            <title>Inicio | Moveit</title>
          </Head>
          
          <ExperienceBar/>
          

          <CountdownProvider>
            <section>
              <div>
                  <Profile/>
                  <CompletedChallenges/>
                  <Countdown/>
              </div>

              <div>
                <ChallengeBox/>
              </div>
            </section>
          </CountdownProvider>
        </div>
      </div>
    </ChallangesProvider>
    </ThemeProvider>
  )
}

export const getServerSideProps : GetServerSideProps = async (ctx) =>{

    const {level, currentExperience, challengesCompleted, theme} = ctx.req.cookies;

    return{
        props: {
          level: Number(level), 
          currentExperience: Number(currentExperience),
          challengesCompleted: Number(challengesCompleted),
          theme: Boolean(theme),
        }
    }
}