import React from 'react'
import { useEffect, useState } from 'react';
import {useCookies} from 'react-cookie'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router';

const Home = () => {
    const navigate = useNavigate()
    const [cookies, removeCookie] = useCookies([])
    const [username, setUserName] = useState("")

    useEffect(()=>{
        const verifyCookie = async () => {
            if(!cookies.token){
                navigate("/login")
            }
            const {data} = await axios.post(
                'http://localhost:4001',
                {},
                {withCredentials: true}
            )
            const {status, user} = data
            setUserName(user)
            return status 
            ? toast(`Hello ${user}`, {
                position: "top-right",
            }) 
            : (removeCookie("token"), navigate("/login"))
        }
        verifyCookie()
    }, [cookies, navigate, removeCookie])
    const Logout = () => {
        removeCookie("token")
        navigate("/signup")
    }
    return(
        <div className='home_page'>
            <h4>
                {""}
                Welcome <span>{username}</span>
            </h4>
            <button onClick={Logout}>Logout</button>
            <ToastContainer/>
        </div>
    )
}

export default Home;