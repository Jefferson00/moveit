import {createContext, ReactNode, useEffect, useState } from 'react'
import challanges from '../../challenges.json'

interface Challenge{
    type: 'body' | 'eye';
    description: string;
    amount: number;
}

interface ChallengesContextData{
    level: number,
    challengesCompleted: number,
    currentExperience: number, 
    activeChallenge: Challenge,
    experienceToNextLevel: number,
    levelUp: ()=> void, 
    startNewChallenge: ()=> void,
    resetChallenge: ()=> void,
    completeChallenge: ()=> void,
}

interface ChallengesProviderProps{
    children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesContextData)

export function ChallangesProvider({children}:ChallengesProviderProps){

    const [level,setLevel] = useState(1);
    const [currentExperience, setCurrentExperience] = useState(0);
    const [challengesCompleted, setChallengesCompleted] = useState(0);

    const [activeChallenge, setActiveChallenge] = useState(null);

    const experienceToNextLevel = Math.pow((level + 1) * 4, 2)

    useEffect(()=>{
        Notification.requestPermission();
    },[])

    function levelUp(){
        setLevel(level +1)
    }

    function startNewChallenge(){
        const randomChallengeIndex = Math.floor(Math.random() * challanges.length)
        const challenge = challanges[randomChallengeIndex];

        setActiveChallenge(challenge);

        new Audio('/notification.mp3').play();
        
        if (Notification.permission === 'granted'){
            new Notification('Novo desafio', {
                body: `Valendo ${challenge.amount} xp!`
            })
        }
    }

    function resetChallenge(){
        setActiveChallenge(null)
    }

    function completeChallenge(){
        if (!activeChallenge){
            return;
        }

        const {amount} = activeChallenge;

        let finalExperience = currentExperience + amount;

        if (finalExperience >= experienceToNextLevel){
            finalExperience = finalExperience - experienceToNextLevel;
            levelUp();
        }

        setCurrentExperience(finalExperience);
        setActiveChallenge(null);
        setChallengesCompleted(challengesCompleted + 1);
    }

    return(
        <ChallengesContext.Provider value={{
            level,
            levelUp, 
            currentExperience, 
            challengesCompleted,
            activeChallenge,
            startNewChallenge,
            resetChallenge,
            completeChallenge,
            experienceToNextLevel,
        }}>
            {children}
        </ChallengesContext.Provider>
    )
}