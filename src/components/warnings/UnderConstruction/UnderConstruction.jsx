import styles from './UnderConstruction.module.css'

import constructIcon from '../../../assets/construction.png'


const UnderConstruction = () => {
  return (
    <div className={styles.UnderConstruction}>

      <div className={styles.warning}>
  
        <img src={constructIcon} alt="" width={120} />

        <h2>Under construction !!!</h2>

        <pre>
          <code>
            Content added daily. <br />
            Browse the sections to follow along!!!"
          </code>
        </pre>

      </div>

    </div>
  )
}

export default UnderConstruction