
import styles from './JustTable.module.css'

import { just } from '../../../data/tables/just'

const JustTab = ({ func }) => {

    const justList = just

    return (
        < div className={styles.JustTable}>


            <table>


                <thead>
                    <tr>
                        <td className={styles.closeTabBtn} colSpan={3} onClick={func}>close</td>
                    </tr>
                    <tr>
                        <th className={styles.title} colSpan={3}>
                            CIDADES JUST
                        </th>
                    </tr>
                    <tr>
                        <td></td>
                        <th>City</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>
                    
                        <tr>
                            <td className={styles.id}>1</td>
                            <td className={styles.name}>All Android</td>
                            <td className={`${styles.status} ${styles.active}`}>Active</td>
                        </tr>
                        <tr>
                            <td className={styles.id}>2</td>
                            <td className={styles.name}>All iOS</td>
                            <td className={`${styles.status} ${styles.inactive}`}>Not active</td>
                        </tr>
                   
                </tbody>
            </table>

        </div>
    )
}


export default JustTab