import { createContext, ReactNode, useEffect, useState } from 'react'
import axios from 'axios'
import Cookies from 'js-cookie'

interface LoginContextData {
    isUserLogged: boolean,
    userName: string,
    userImage: string,
    handleLogin: (userName: string) => void;
    handleLogout: () => void;
}

interface LoginProviderProps {
    children: ReactNode;
    userName: string;
    userImage:string;
    isUserLogged:boolean;
}

interface UserResponse {
    avatar_url: string,
    name: string,
    id: string,
}

export const LoginContext = createContext({} as LoginContextData)


export function LoginProvider({ children, ...rest }: LoginProviderProps) {
   
    const [isUserLogged, setIsUserLogged] = useState(rest.isUserLogged ?? false)
    const [userName, setUserName] = useState(rest.userName ?? '')
    const [userImage, setUserImage] = useState(rest.userImage ?? '')

    async function handleLogin(userName: string) {
        if (userName != '') {
            await axios.get(`https://api.github.com/users/${userName}`).then((res) => {
                const user: UserResponse = res.data
                setUserName(user.name)
                setUserImage(user.avatar_url)
                setIsUserLogged(true)
            }).catch(err => {
                console.log(err)
            })
        } else {
            console.log('err')
        }
    }

    function handleLogout(){
        setIsUserLogged(false)
        setUserName('')
        setUserImage('')
        Cookies.remove('userName')
        Cookies.remove('userImage')
        Cookies.remove('isUserLogged')
    }

    useEffect(() => {
        Cookies.set('userName', userName);
        Cookies.set('userImage', userImage);
        Cookies.set('isUserLogged', String(isUserLogged));
        console.log(userName)
        console.log(userImage)

    }, [userName, userImage, isUserLogged])

    return (
        <LoginContext.Provider value={{
            isUserLogged,
            userName,
            userImage,
            handleLogin,
            handleLogout,
        }}>
            {children}
        </LoginContext.Provider>
    )
}