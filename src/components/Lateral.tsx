
import styles from "../styles/components/Lateral.module.css"
import Switch from "react-switch"
import { useContext, useEffect, useState } from "react"
import { ThemeContext } from "../contexts/ThemeContext"

export function Lateral(){

    const {darkmode} = useContext(ThemeContext)

    return(
        <div className={
            styles.lateralContainer}>
            <div>
                <img src="logo.svg" alt="Move it"/>
            </div>
            <div>
                <button type="button">
                    <img src="icons/home.svg" alt="Home"/>
                </button>
            </div>
            <div>
                <Switch 
                    checked={darkmode.value} 
                    onChange={darkmode.toggle} 
                    uncheckedIcon={false} 
                    checkedIcon={false}
                    onHandleColor={'#4CD62B'}
                />
            </div>
        </div>
    )
}