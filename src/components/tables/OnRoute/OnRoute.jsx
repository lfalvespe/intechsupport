import styles from './OnRoute.module.css'

import { onroute } from '../../../data/tables/onroute'

const OnRoute = ({func}) => {
    return (
        <div className={styles.OnRoute}>

            <table>


                <thead>
                    <tr>
                        <td className={styles.closeTabBtn} colSpan={5} onClick={func}>close</td>
                    </tr>
                    <tr>
                        <th className={styles.title} colSpan={5}>
                            PEDIDOS A CAMINHO
                        </th>
                    </tr>
                    <tr>
                        <td></td>
                        <th>Code</th>
                        <th>City</th>
                    </tr>
                </thead>

                <tbody>

                    {onroute.map((city) => (
                        <tr key={city.id}>
                            <td className={styles.id}>{city.id}</td>
                            <td className={styles.code}>{city.code}</td>
                            <td className={styles.name}>{city.name}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default OnRoute