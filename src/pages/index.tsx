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
import useDarkMode from "use-dark-mode";
import Switch from "react-switch"

interface HomeProps{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
}

export default function Home(props: HomeProps) {

  const darkmode = useDarkMode(false)


  return (
    <ChallangesProvider 
      level={props.level}
      currentExperience ={props.currentExperience}
      challengesCompleted = {props.challengesCompleted}
    >
      <div className={styles.container}>
        <Head>
          <title>Inicio | Moveit</title>
        </Head>
        
        <ExperienceBar/>
        <Switch 
          checked={darkmode.value} 
          onChange={darkmode.toggle} 
          uncheckedIcon={false} 
          checkedIcon={false}
          onHandleColor={'#4CD62B'}
        />

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
    </ChallangesProvider>
  )
}

export const getServerSideProps : GetServerSideProps = async (ctx) =>{

    const {level, currentExperience, challengesCompleted} = ctx.req.cookies;

    return{
        props: {
          level: Number(level), 
          currentExperience: Number(currentExperience),
          challengesCompleted: Number(challengesCompleted),
        }
    }
}