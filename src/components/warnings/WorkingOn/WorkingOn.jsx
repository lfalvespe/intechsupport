
import styles from './WorkingOn.module.css'

import loadingIcon from '../../../assets/loading.svg'

const WorkingOn = () => {
    return (
        <div className={styles.WorkingOn}>
            <img src={loadingIcon} alt="" width={150} />

            <div className={styles.warning}>
                <code>working on this...</code>
                <h2>Come back soon !!!</h2>
            </div>

        </div>
    )
}

export default WorkingOn