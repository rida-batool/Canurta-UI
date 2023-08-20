import React,{useContext, useState} from 'react';



export const ThemeContext = React.createContext();



const ThemeContextProvider = ({children})=>{

    const [theme, setTheme] = useState('light')

    return <ThemeContext.Provider value = {{theme, setTheme}}>
        {children}
    </ThemeContext.Provider>
}

export default ThemeContextProvider;