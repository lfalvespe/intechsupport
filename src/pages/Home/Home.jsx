import styles from './Home.module.css'


import UnderConstruction from '../../components/warnings/UnderConstruction/UnderConstruction'

const Home = () => {
    return (
        <div className={styles.Home}>

            <h1>Home</h1>

            <hr />

            <h2>Complete guide for inDrive support system analysts</h2>


            <ul>
                <li><h3> Procedural updates</h3></li>
                <li><h3> Customer service instructions</h3></li>
                <li><h3> How-Tos</h3></li>
                <li><h3> All spreadsheets in one place</h3></li>
                <li><h3> Document templates</h3></li>
                <li><h3> Script and Push messages</h3></li>
                <li><h3> Tags to use in chat and email</h3></li>
                <li><h3> Tasks schedule</h3></li>
            </ul>

            <hr />

            {/* <div className={styles.loadingContainer}>
                <UnderConstruction />
            </div> */}

        </div>
    )
}

export default Home