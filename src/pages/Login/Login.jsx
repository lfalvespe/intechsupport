import { useState, useRef, useEffect } from 'react'

import './Login.css'

import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";


import { auth } from '../../services/firebaseConfig'

import { signInWithEmailAndPassword, updateProfile, onAuthStateChanged } from "firebase/auth"

import useAuthContext from '../../hooks/useAuthContext'


const Login = () => {

    const { setAgent } = useAuthContext()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const emailInputRef = useRef()
    const passwordInputRef = useRef()

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                // const uid = user.uid;
                setAgent(user)
            } else {
                // User is signed out
                // ...
            }
        });

    }, [])



    const handleSubmit = async (e) => {
        e.preventDefault()

        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;

                setAgent(user)

                console.log('Usuário logado!', user)

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }


    return (

        <div className='login'>

            <div className="wrapper">

                    <div className="login-box">
                        <div className="login-header">

                            <div className='logo'>
                                <img src="logo.png" alt=""/>
                                <div className='legend'>Technical Support</div>
                            </div>

                        </div>
                        <form
                            onSubmit={handleSubmit} >
                            <div className="input-box">
                                <input
                                    type="text"
                                    id="email"
                                    className="input-field"
                                    ref={emailInputRef}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />

                                <label htmlFor="email" className="label">
                                    Email:
                                </label>
                                <FaUser className='icon'/>
                            </div>
                            <div className="input-box">
                                <input
                                    type="password"
                                    id="password"
                                    className="input-field"
                                    ref={passwordInputRef}
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    autoComplete="off"
                                />
                                <label htmlFor="password" className="label">
                                    Password:
                                </label>
                                <FaKey id="show-password" className='icon'/>

                            </div>
                            <div className="remember-forgot">
                                <div className="remember-me">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">Remember me</label>
                                </div>
                                <div className="forgot">
                                    <a href="#">Forgot password</a>
                                </div>
                            </div>

                            <div className="input-box">
                                <input type="submit" className="input-submit" value="Entrar" />
                            </div>
                            <div className="google-login">
                                <a href="#">Login with Google</a>
                            </div>
                        </form>
                    </div>
                

            </div>

        </div >

    )
}

export default Login