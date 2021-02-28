
import {GetServerSideProps} from 'next'

import Head from 'next/head'

import { ChallangesProvider } from "../contexts/ChallengesContext";
import { ThemeProvider } from "../contexts/ThemeContext";
import { LoginProvider } from "../contexts/LoginContext";
import { MainPage } from "../components/MainPage";

interface HomeProps{
    level: number;
    currentExperience: number;
    challengesCompleted: number;
    theme:boolean;
    userName: string;
    userImage: string;
    isUserLogged: boolean;
}

export default function Home(props: HomeProps) {
  return (
    <LoginProvider
      userName={props.userName}
      userImage={props.userImage}
      isUserLogged={props.isUserLogged}
    >
    <ThemeProvider
      theme={props.theme}
    >
    <ChallangesProvider 
      level={props.level}
      currentExperience ={props.currentExperience}
      challengesCompleted = {props.challengesCompleted}
    >
    <Head>
        <title>Inicio | Moveit</title>
    </Head>
    <MainPage/>
      
    </ChallangesProvider>
    </ThemeProvider>
    </LoginProvider>
  )
}

export const getServerSideProps : GetServerSideProps = async (ctx) =>{
   
    const {level, 
        currentExperience, 
        challengesCompleted, 
        theme,
        userName,
        userImage,
        isUserLogged,
    } = ctx.req.cookies;

    return{
        props: {
          level: Number(level), 
          currentExperience: Number(currentExperience),
          challengesCompleted: Number(challengesCompleted),
          theme: theme == 'true',
          userName: String(userName),
          userImage: String(userImage),
          isUserLogged: isUserLogged == 'true',
        }
    }
}

