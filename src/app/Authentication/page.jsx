'use client'
import { useState } from "react"
import Signin from "../_Components/Signin"
import Signup from "../_Components/Signup"

function Authentication() {
    const [authenticated, setAuthenticated] = useState(true)
     const changeState = () => {
        setAuthenticated(!authenticated)
     }
    return (
        <div>
            {authenticated ?  <Signin changeState = {changeState}/> :  <Signup changeState= {changeState}/>}
           
           
        </div>
    )
}

export default Authentication
