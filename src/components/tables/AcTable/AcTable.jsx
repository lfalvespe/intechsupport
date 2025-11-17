import styles from './AcTable.module.css'

import { ac } from '../../../data/tables/ac'


const AcTable = ({ func }) => {

    const acList = ac

    return (
        <div className={styles.AcTable}>

            <table>


                <thead>
                    <tr>
                        <td className={styles.closeTabBtn} colSpan={5} onClick={func}>close</td>
                    </tr>
                    <tr>
                        <th className={styles.title} colSpan={5}>
                            CIDADES A/C
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

                    {ac.map((city) => (
                        <tr key={city.id}>
                            <td className={styles.id}>{city.id}</td>
                            <td className={styles.code}>{city.code}</td>
                            <td className={styles.name}>{city.name}</td>
                            <td className={styles.date}>{city.date}</td>
                            <td className={styles.status}>{city.status}</td>
                        </tr>
                    ))}
   
                </tbody>
            </table>
        </div>
    )
}

export default AcTable