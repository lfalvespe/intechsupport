import { useState } from "react"

import { updateProfile } from "firebase/auth"

import useAuthContext from "../../hooks/useAuthContext"

import { auth } from '../../services/firebaseConfig'

import './EditProfile.css'

const EditProfile = () => {

    const { agent, setAgent, editing, setEditing } = useAuthContext()

    const [nick, setNick] = useState(agent.displayName)
    const [photo, setPhoto] = useState(agent.photoURL)


    const handleEdit = () => {
        updateProfile(auth.currentUser, {
            displayName: nick,
            photoURL: photo
        }).then(() => {
            console.log('Perfil Atualizado!')
        }).catch((err) => {
            console.log("ERRO: ".err)
        })

        setEditing(false)
    }

    return (

        <div className='editProfile'>
            <h1 className='pageTitle'>Editar perfil</h1>

            {editing &&

                <div className="editContainer">

                    <label htmlFor="nick">
                        Nickname:
                    </label>
                    <input
                        type="text"
                        name="nick"
                        value={nick}
                        onChange={(e) => setNick(e.target.value)}
                        required />

                    <label htmlFor="photo">
                        Photo Url:
                    </label>
                    <input
                        type="text"
                        name="photo"
                        value={photo}
                        onChange={(e) => setPhoto(e.target.value)}
                        required />

                    <input type="button" value="salvar" id="editBtn" onClick={handleEdit} />


                </div>

            }


        </div>
    )
}

export default EditProfile