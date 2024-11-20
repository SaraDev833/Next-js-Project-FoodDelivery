'use client'
import { useState } from "react"
import Signin from "../_Components/Signin"
import Signup from "../_Components/Signup"
import Link from "next/link"

function Authentication() {
    const [authenticated, setAuthenticated] = useState(true)
     const changeState = () => {
        setAuthenticated(!authenticated)
     }
    return (
        <div>
            <Signup/>
           
        </div>
    )
}

export default Authentication
