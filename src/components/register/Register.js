import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Result from '../Result/Result'
import Step1 from '../Step1/Step1'
import Step2 from '../Step2/Step2'
import "./register.css"


function Register() {
    return (
        <>
        <h1>REGISTRATION</h1>
            <Routes>
                <Route path="/register" element={<Register/>} />
                <Route path="/step1" element={<Step1/>} />
                <Route path="/step2" element={<Step2/>} />
                <Route path="/result" element={<Result/>} />
            </Routes>
        </>
    )
}

export default Register
