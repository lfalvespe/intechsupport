import styles from './MonetTable.module.css'

import { monetization } from '../../../data/tables/monetization'

const MonetTable = ({ func }) => {
    return (
        <div className={styles.MonetTable}>

            <table>
                <thead>
                    <tr>
                        <th colSpan={3} style={{background:'beige'}}>FRETE</th>
                    </tr>
                    <tr>
                        <th>name</th>
                        <th>value</th>
                        <th>change date</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td rowSpan={2}>Manaus</td>
                        <td>5% a partir de 50 Reais</td>
                        <td rowSpan={2}>01.08.2022</td>
                    </tr>
                    <tr>
                        <td>
                        <td>3% a partir de 100 Reais</td>
                        </td>
                    </tr>
                </tbody>
            </table>

            <table>

                <thead>

                    <tr>
                        <td className={styles.closeTabBtn} colSpan={8} onClick={func}>close</td>
                    </tr>
                    <tr>
                        <th colSpan={8} style={{ background: '#181818', border: '1px solid #fff', color: '#fff' }}>
                            MONETIZAÇÃO
                        </th>
                    </tr>
                    <tr>
                        <td></td>
                        <th>Code</th>
                        <th>City</th>
                        <th>Value 1</th>
                        <th>Change 1</th>
                        <th>Value 2</th>
                        <th>Change 2</th>
                        <th>Actual</th>
                    </tr>
                </thead>

                <tbody>

                    {monetization.map((city) => (

                        <tr key={city.id}>
                            <td className={styles.id}>{city.id}</td>
                            <td className={styles.code}>{city.code}</td>
                            <td className={styles.name}>{city.name}</td>
                            <td className={styles.value1}>{city.value1}</td>
                            <td className={styles.change_date_1}>{city.change_date_1}</td>
                            <td className={styles.value2}>{city.value2}</td>
                            <td className={styles.change_date_2}>{city.change_date_2}</td>
                            <td className={styles.actual_value}>{city.value3}</td>
                        </tr>

                    ))}

                </tbody>

            </table>

        </div>
    )
}

export default MonetTable