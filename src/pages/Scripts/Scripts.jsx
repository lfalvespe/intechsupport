import { useRef, useState } from 'react'

import './Scripts.css'

import { scripts } from '../../data/scripts'

import { BsCopy } from "react-icons/bs";

const Scripts = () => {

    const [scriptsList] = useState(scripts)
    console.log(scriptsList)

    const [query, setQuery] = useState('')
    const inputSearchRef = useRef()
    const [loading, setLoading] = useState(false)

    const [cat, setCat] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault()

        setLoading(true)

        setQuery('')
        inputSearchRef.current.focus()

        setTimeout(() => {
            setLoading(false)
        }, 2500)
    }


    const [isCopy, setIsCopy] = useState('')

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

    const showCategory = () => {

        return (

            <div className="catBox">

                <h3 className={` catTitle ${scripts[cat][0]}Title`}>{scripts[cat][1]}</h3>


                {scripts[cat][2].map((script) => (

                    <div className='scriptBox' key={Math.random()}>
                        <div className="scriptTitleContainer">
                            <div id={script.title} className={'scriptTitle'}>
                                {script.title}
                            </div>
                            <div onClick={() => handleCopy(script.text, script.title)}>
                                {!(isCopy === script.title)
                                    ? (<span><acronym title="copiar">
                                        <BsCopy className='copyIcon' />
                                    </acronym></span>)
                                    : (<span className='copied'>Copied</span>)}
                            </div>
                        </div>
                        <div className={`scriptText ${scripts[cat][0]}ScriptText`}>
                            <code>{script.text}</code>
                        </div>
                    </div>

                ))}


            </div>

        )

    }

    return (
        <div className='Scripts'>

            <h1>Message Scripts</h1>

            <form onSubmit={handleSubmit}>

                {!loading && (
                    <div>
                        <input
                            type="text"
                            value={query}
                            ref={inputSearchRef}
                            onChange={(e) => setQuery(e.target.value)}
                            placeholder='procurar um Script'
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
            <div className="catMenu">
                <button onClick={() => setCat(0)} className='catBtn'>Greetings</button>
                <button onClick={() => setCat(1)} className='catBtn'>Financial</button>
                <button onClick={() => setCat(2)} className='catBtn'>Checkout</button>
                <button onClick={() => setCat(3)} className='catBtn'>Lost and Found</button>
                <button onClick={() => setCat(4)} className='catBtn'>Branding</button>
                <button onClick={() => setCat(5)} className='catBtn'>Invoice</button>
                <button onClick={() => setCat(6)} className='catBtn'>Blocking</button>
                <button onClick={() => setCat(7)} className='catBtn'>Others</button>
            </div>
            <hr />


            {showCategory()}

            {/* 
            <ul>
                {scriptsList.map((cat, i) => (
                    <li key={i}>

                        <div className='catBox'>
                            <h3 className={` catTitle ${cat[0]}Title`}>{cat[1]}</h3>
                            {cat[2].map((script) => (

                                <div key={Math.random()} className='scriptBox'>
                                    <div className="scriptTitleContainer">
                                        <div id={script.title} className={'scriptTitle'}>
                                            {script.title}
                                        </div>
                                        <div onClick={() => handleCopy(script.text, script.title)}>
                                            {!(isCopy === script.title)
                                                ? (<span><acronym title="copiar">
                                                    <BsCopy className='copyIcon' />
                                                </acronym></span>)
                                                : (<span className='copied'>Copied</span>)}
                                        </div>
                                    </div>
                                    <div className={`scriptText ${cat[0]}ScriptText`}>
                                        <code>{script.text}</code>
                                    </div>
                                </div>

                            ))}
                        </div>
                    </li>
                ))}
            </ul> */}


        </div>
    )
}

export default Scripts

