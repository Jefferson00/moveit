import {createContext, ReactNode, useEffect } from 'react'
import useDarkMode, { DarkMode } from "use-dark-mode";
import Cookies from 'js-cookie'
 
interface ThemeContextData{
    darkmode: DarkMode;
}

interface ThemeProviderProps{
    children: ReactNode;
    theme: boolean;
}
 
 
export const ThemeContext = createContext({} as ThemeContextData)
 
 
export function ThemeProvider({children, ...rest}:ThemeProviderProps){

    const darkmode = useDarkMode(rest.theme ?? false)

    useEffect(() =>{
        Cookies.set('theme', String(darkmode.value));

        if(darkmode.value){
            document.documentElement.style.setProperty('--background-lateral','#0c0c0c');
            document.documentElement.style.setProperty('--title','#ffffff');
            document.documentElement.style.setProperty('--background-countdown','#222a3a');
            document.documentElement.style.setProperty('--boxshadow','rgba(255, 255, 255, 0.15)');
            document.documentElement.style.setProperty('--background-challenges-box','#222a3a');
            document.documentElement.style.setProperty('--blue','#2a2e5d');
            document.documentElement.style.setProperty('--blue-dark','#444a90');
            document.documentElement.style.setProperty('--contdown-button','#0c0c0c');
            document.documentElement.style.setProperty('--text','#ffffff');
            document.documentElement.style.setProperty('--background-modal','rgba(0 ,0 ,0 ,0.8)');
            document.documentElement.style.setProperty('--background-container-modal','#1d1d1d');
        }else{
            document.documentElement.style.setProperty('--background-lateral','#ffffff');
            document.documentElement.style.setProperty('--title','#2E384D');
            document.documentElement.style.setProperty('--background-countdown','#ffffff');
            document.documentElement.style.setProperty('--boxshadow','rgba(0,0, 0, 0.15)');
            document.documentElement.style.setProperty('--background-challenges-box','#ffffff');
            document.documentElement.style.setProperty('--blue','#5965E0');
            document.documentElement.style.setProperty('--blue-dark','#4953B8');
            document.documentElement.style.setProperty('--contdown-button','#ffffff');
            document.documentElement.style.setProperty('--text','#666666');
            document.documentElement.style.setProperty('--background-modal','rgba(242,243,245,0.8)');
            document.documentElement.style.setProperty('--background-container-modal','#ffffff');
        }
    },[darkmode])

    return(
        <ThemeContext.Provider value={{
            darkmode,
        }}>
                {children}
        </ThemeContext.Provider>
    )
}
