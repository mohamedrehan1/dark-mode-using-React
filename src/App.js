import React from "react"
import Navbar from "./Navbar"
import Main from "./Main"

export default function App() {
    
    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode(){
        setDarkMode(prev => !prev)
    }
    
    return (
        <div className="container">
            <Navbar 
                darkMode = {darkMode}
                toggleDarkMode = {toggleDarkMode}
            />
            <Main
                darkMode = {darkMode}
            />
        </div>
    )
}