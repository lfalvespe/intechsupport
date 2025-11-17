import logo from '../assets/logo.png'

import { NavLink, useNavigate } from "react-router-dom"

import useAuthContext from '../hooks/useAuthContext'

import { signOut, } from "firebase/auth"

import { auth } from "../services/firebaseConfig"

const Header = () => {

    const { agent, setAgent, editing, setEditing } = useAuthContext()

    const navigate = useNavigate()

    const handleLogout = async () => {

        await signOut(auth)
            .then(() => {

                console.log('Logout com sucesso!')
                setAgent(null)
                navigate("/")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <header>

            <div>
                <img src="logo.png" className="logo" alt="" />
            </div>

            <div className="titleContainer">
                <h1>Technical Support</h1>
            </div>
            <div className="avatarContainer">
                    <div className='avatar'>
                        <img
                            src={agent.photoURL ? agent.photoURL : logo}
                            alt=""
                            onClick={() => {
                                setEditing(true)
                                navigate('/edit_profile')
                            }}>
                        </img>
                    </div>
                
                    <div className='nickname'>
                        {agent.displayName}
                        <span className='logoutBtn' onClick={handleLogout}>Sair</span>
                    </div>
                

            </div>


        </header>
    )
}

export default Header