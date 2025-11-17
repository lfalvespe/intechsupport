import { useState, useRef } from 'react'

import styles from './Push.module.css'

import { BsCopy } from "react-icons/bs"

import { pushes } from '../../data/pushes'


const Push = () => {

    // states    
    const [query, setQuery] = useState('')
    const inputSearchRef = useRef()
    const [loading, setLoading] = useState(false)
    const [showMostUsed, setshopwMostUsed] = useState(true)

    const [mostUsed] = useState([19, 20, 23, 24, 25, 26, 33, 34, 35, 30, 29, 22, 16, 8])

    const [isCopy, setIsCopy] = useState('')


    // functions
    const handleSubmit = (e) => {
        e.preventDefault()

        setLoading(true)

        setQuery('')
        inputSearchRef.current.focus()

        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }

    const handleCopy = (text, id) => {

        navigator.clipboard.writeText(text)

            .then(() => {
                setIsCopy(id)
                console.log('Texto copiado para a área de transferência!')

            })
            .catch((error) => {
                console.error('Falha ao copiar texto para a área de transferência:', error)
            })

        setTimeout(() => {
            setIsCopy('')
        }, 1200)

    }

    return (


        <div className={styles.Push}>

            <h1>Push Notifications</h1>

            <form onSubmit={handleSubmit}>

                {!loading && (
                    <div>
                        <input
                            type="text"
                            value={query}
                            ref={inputSearchRef}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder='procurar um Push'
                        />
                        <button>Buscar</button>
                    </div>
                )}

                {loading && (
                    <div>
                        <input
                            type="text"
                            value={query}
                            ref={inputSearchRef}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder='Buscando ...'
                            disabled
                        />
                        <button disabled>Aguarde</button>
                    </div>
                )}

            </form>

            <hr />

            <br />

            <button className={styles.switch_pushes_btn} onClick={() => setshopwMostUsed(!showMostUsed)}>
                {!showMostUsed? 'MAIS UTILIZADOS' : 'VER TODOS'}
            </button>

            
            <div className={styles.pushes_container}>
                {showMostUsed  
                ? <p style={{flex: '100%'}}>MAIS UTILIZADOS</p> 
                : <p style={{flex: '100%'}}>TODOS EM ORDEM ALFABÉTICA</p>}

                {showMostUsed ?

                    mostUsed.map((n) => (

                        <div key={pushes[n - 1].id} className={styles.push}>
                            <div className={styles.title}>
                                <span>{pushes[n - 1].title}</span>

                                <span onClick={() => handleCopy(pushes[n - 1].text, pushes[n - 1].title)}>
                                    {!(isCopy === pushes[n - 1].title)
                                        ? (<span><acronym title="copiar">
                                            <BsCopy className={styles.copyIcon} />
                                        </acronym></span>)
                                        : (<span className={styles.copied}>Copied</span>)}
                                </span>

                            </div>
                            <div className={`${styles[pushes[n - 1].class]} ${styles.text}`}>
                                {pushes[n - 1].text}
                            </div>
                        </div>

                    ))

                    :


                    pushes.map((push) => (

                        <div key={push.id} className={styles.push}>
                            <div className={styles.title}>
                                <span>{push.title}</span>

                                <span onClick={() => handleCopy(push.text, push.title)}>
                                    {!(isCopy === push.title)
                                        ? (<span><acronym title="copiar">
                                            <BsCopy className={styles.copyIcon} />
                                        </acronym></span>)
                                        : (<span className={styles.copied}>Copied</span>)}
                                </span>

                            </div>
                            <div className={`${styles[push.class]} ${styles.text}`}>
                                {push.text}
                            </div>
                        </div>

                    ))



                }

            </div>





            {/* <div className={styles.advice}>

                <img src={loading} alt="" width='90px' />
                <p>Working on this ... !</p>
            </div> */}

        </div>
    )
}

export default Push