import styles from './CashlessTable.module.css'

import { cashless } from '../../../data/tables/cashless'

const CashlessTable = ({ func }) => {

    const cashlessList = cashless

    return (
        <div className={styles.CashlessTable}>

            <table>

                <thead>
                    <tr>
                        <td className={styles.closeTabBtn} colSpan={5} onClick={func}>close</td>
                    </tr>
                    <tr>
                        <th colSpan={5} style={{ background: '#181818', border: '1px solid #fff', color: '#fff' }}>
                            CIDADES CASHLESS
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

                    {cashlessList.map((city) => (

                        <tr key={city.id}>
                            <td className={styles.id}>{city.id}</td>
                            <td className={styles.code}>{city.code}</td>
                            <td className={styles.city}>{city.name}</td>
                            <td className={styles.date}>{city.date}</td>
                            <td className={styles.status}>{city.status}</td>
                        </tr>

                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default CashlessTable