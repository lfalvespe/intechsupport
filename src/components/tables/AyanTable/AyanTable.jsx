import styles from './AyanTable.module.css'

import { ayan } from '../../../data/tables/ayan'


const AyanTable = ({func}) => {

    const ayanList = ayan

    console.log(ayanList)

    return (
        <div className={styles.AyanTable}>

            <table>

                <thead>
                    <tr>
                        <td className={styles.closeTabBtn} colSpan={5} onClick={func}>close</td>
                    </tr>
                    <tr>
                        <th colSpan={5} style={{ background: '#181818', border: '1px solid #fff', color: '#fff' }}>
                            CIDADES AYAN/CHERDAK
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

                    {ayanList.map((city) => (
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

export default AyanTable