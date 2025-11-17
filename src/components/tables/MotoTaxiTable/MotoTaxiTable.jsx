import styles from './MotoTaxiTable.module.css'

import { mototaxi } from '../../../data/tables/mototaxi'

const MotoTaxiTable = ({func}) => {

  return (

    <div className={styles.MotoTaxiTable}>

      <table>

        <thead>

          <tr>
            <td className={styles.closeTabBtn} colSpan={8} onClick={func}>close</td>
          </tr>
          <tr>
            <th colSpan={8} style={{ background: '#181818', border: '1px solid #fff', color: '#fff' }}>
              CIDADES MOTO TAXI
            </th>
          </tr>
          <tr>
            <td></td>
            <th>Code</th>
            <th>City</th>
            <th>Status</th>
            <th>Start</th>
            <th>Monet.</th>
            <th>M. Start</th>
            <th>Fee</th>
          </tr>
        </thead>

        <tbody>

          {mototaxi.map((city) => (

            <tr key={city.id}>
              <td className={styles.id}>{city.id}</td>
              <td className={styles.code}>{city.code}</td>
              <td className={styles.name}>{city.name}</td>
              <td className={styles.status}>{city.status}</td>
              <td className={styles.start}>{city.start}</td>
              <td className={styles.monetized}>{city.monetized}</td>
              <td className={styles.monet_start}>{city.monet_start}</td>
              <td className={styles.value}>{city.value}</td>
            </tr>

          ))}

        </tbody>

      </table>


    </div>

  )
}

export default MotoTaxiTable