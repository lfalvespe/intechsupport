import styles from './MasterTable.module.css'

import { master } from '../../../data/tables/master'

const MasterTable = ({func}) => {
  return (
    <div className={styles.MasterTable}>

      <table>

        <thead>

          <tr>
            <td className={styles.closeTabBtn} colSpan={8} onClick={func}>close</td>
          </tr>
          <tr>
            <th colSpan={8} style={{ background: '#181818', border: '1px solid #fff', color: '#fff' }}>
              CIDADES MASTER
            </th>
          </tr>
          <tr>
            <td></td>
            <th>City</th>
            <th>Enabled</th>
            <th>Recruit start</th>
            <th>Start.</th>
            <th>Status</th>
            <th>Monet.</th>
          </tr>
        </thead>

        <tbody>

          {master.map((city) => (

            <tr key={city.id}>
              <td className={styles.id}>{city.id}</td>
              <td className={styles.name}>{city.name}</td>
              <td className={styles.enabled}>{city.enabled}</td>
              <td className={styles.recruit_start}>{city.recruit_start}</td>
              <td className={styles.start}>{city.start}</td>
              <td className={`${styles.status} ${city.status === 'active' ? styles.active : styles.inactive}`}> {city.status}</td>
              <td className={styles.monetized}>{city.monetized}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>
  )
}

export default MasterTable