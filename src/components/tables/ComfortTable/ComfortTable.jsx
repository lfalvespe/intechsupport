import styles from './ComfortTable.module.css'

import { comfort } from '../../../data/tables/comfort'

const ComfortTable = ({ func }) => {
    return (
        <div className={styles.ComfortTable}>

            <table>

                <thead>
                    <tr>
                        <td className={styles.closeTabBtn} colSpan={5} onClick={func}>close</td>
                    </tr>
                    <tr>
                        <th colSpan={5} style={{ background: '#181818', border: '1px solid #fff', color: '#fff' }}>
                            CIDADES COMFORT
                        </th>
                    </tr>
                    <tr>
                        <td></td>
                        <th>Code</th>
                        <th>City</th>
                        <th>Start</th>
                        <th>Status</th>
                    </tr>
                </thead>

                <tbody>

                    {comfort.map((city) => (

                        <tr key={city.id}>
                            <td className={styles.id}>{city.id}</td>
                            <td className={styles.code}>{city.code}</td>
                            <td className={styles.city}>{city.name}</td>
                            <td className={styles.start}>{city.start}</td>
                            <td className={`${styles.status} ${city.status === "active" ? styles.active : styles.inactive}`}>{city.status}</td>
                        </tr>

                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default ComfortTable