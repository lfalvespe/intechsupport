import { useState } from 'react'
import styles from './DocModels.module.css'

import modelSelfieCnh from '../../assets/instructions/model_selfie_cnh.jpg'
import modelDigitalCnh from '../../assets/instructions/model_cnh.jpg'
import modelDigitalCrlv from '../../assets/instructions/model_crlv.jpg'
import modelVehicle from '../../assets/instructions/model_vehicle.jpg'
import modelAddress from '../../assets/instructions/model_address.png'
import modelRenavam from '../../assets/instructions/model_renavam.jpg'
import modelWithdraw from '../../assets/instructions/model_withdraw.png'
import modelAccountRemove from '../../assets/instructions/model_account_remove.png'


const DocModels = () => {

    const [content, setContent] = useState(null)
    const [link, setLink] = useState(null)

    const handleCopy = (link) => {
        navigator.clipboard.writeText('https://intechsupport.vercel.app' + link)
    }

    return (
        <div className={styles.DocModels}>

            <h1>Document Templates</h1>

            <hr />
            <div className={styles.modelsContainer}>

                <div className={styles.model}
                    onClick={() => {
                        setContent(<img className={styles.img} src={modelSelfieCnh} alt="selfie cnh" />)
                        setLink(modelSelfieCnh)
                    }
                    }>
                    Selfie CNH
                </div>
                <div className={styles.model}
                    onClick={() => {
                        setContent(<img className={styles.img} src={modelDigitalCnh} alt="selfie cnh" />)
                        setLink(modelDigitalCnh)
                    }
                    }>
                    CNH Digital
                </div>
                <div className={styles.model}
                    onClick={() => {
                        setContent(<img className={styles.img} src={modelDigitalCrlv} alt="selfie cnh" />)
                        setLink(modelDigitalCrlv)
                    }
                    }>
                    CRLV Digital
                </div>
                <div className={styles.model}
                    onClick={() => {
                        setContent(<img className={styles.img} src={modelVehicle} alt="selfie cnh" />)
                        setLink(modelVehicle)
                    }
                    }>
                    Foto Veículo
                </div>
                <div className={styles.model}
                    onClick={() => {
                        setContent(<img className={styles.img} src={modelAddress} alt="selfie cnh" />)
                        setLink(modelAddress)
                    }
                    }>
                    Comp. Resid.
                </div>
                <div className={styles.model}
                    onClick={() => {
                        setContent(<img className={styles.img} src={modelRenavam} alt="selfie cnh" />)
                        setLink(modelRenavam)
                    }
                    }>
                    Renavam
                </div>
                <div className={styles.model}
                    onClick={() => {
                        setContent(<img className={styles.img} src={modelWithdraw} alt="selfie cnh" />)
                        setLink(modelWithdraw)
                    }
                    }>
                    Reembolso
                </div>
                <div className={styles.model}
                    onClick={() => {
                        setContent(<img className={styles.img} src={modelAccountRemove} alt="selfie cnh" />)
                        setLink(modelAccountRemove)
                    }
                    }>
                    Remover Conta
                </div>

            </div>
            <hr />

            {!content &&
                <div className={styles.docModelsNullContainer}>
                    <h4>
                        Escolha um modelo para exibir
                    </h4>
                </div>
            }

            <div className={styles.contentsContainer}>

                {content && (

                    <>
                        <div className={styles.actions}>
                            <a href={link} target='_blank' download><button>Baixar</button></a>
                            <button onClick={() => handleCopy(link)}>Copiar Link</button>
                            <button onClick={() => setContent(null)}>Fechar</button>
                        </div>
                        <div>{content}</div>
                    </>

                )}
            </div>

        </div>
    )
}

export default DocModels