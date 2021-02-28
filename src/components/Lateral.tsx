
import styles from "../styles/components/Lateral.module.css"
import Switch from "react-switch"
import { useContext} from "react"
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
                <Switch 
                    checked={darkmode.value} 
                    onChange={darkmode.toggle} 
                    uncheckedIcon={false} 
                    checkedIcon={false}
                    onColor={'#5965E0'}
                    offColor={'#d2d2d2'}
                    onHandleColor={'#2a2e5d'}
                    offHandleColor={'#5965e0'}
                    checkedHandleIcon={
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center",height: "100%"}}>
                            <img src="icons/dark_mode.svg" />
                        </div>
                    }
                    uncheckedHandleIcon={
                        <div style={{display:"flex", alignItems:"center", justifyContent:"center",height: "100%"}}>
                        <img src="icons/light_mode.svg" />
                        </div>
                    }
                />
            </div>
        </div>
    )
}