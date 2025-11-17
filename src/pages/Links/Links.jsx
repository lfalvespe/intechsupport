
import styles from './Links.module.css'
import WorkingOn from '../../components/warnings/WorkingOn/WorkingOn'

const Links = () => {




    return (
        <div className={styles.Links}>
            <h1>Links</h1>

            <hr />
            <div className={styles.loadingContainer}>
                <WorkingOn />
            </div>
        </div>
    )
}

export default Links