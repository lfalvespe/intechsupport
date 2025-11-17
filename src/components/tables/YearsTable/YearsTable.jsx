import styles from './YearsTable.module.css'

import { years } from '../../../data/tables/years'

const YearsTable = ({ func }) => {

  const yearsList = years

  return (
    <div className={styles.YearsTable}>

      <table>

        <thead>
          <tr>
            <th className={styles.closeTabBtn} colSpan={5} onClick={func} style={{backgroundColor: 'transparent', border: 'unset', color: '#fff'}}>close</th>
          </tr>
          <tr>
            <th colSpan={5} style={{ background: '#181818', border: '1px solid #fff', color: '#fff', textTransform: 'uppercase' }}>anos permitidos</th>
          </tr>
          <tr>
            <th>id</th>
            <th>city</th>
            <th>year</th>
            <th>CNH requirements</th>
            <th>intercity</th>
          </tr>
        </thead>

        <tbody>

          {years.map((year) => (
            <tr>
              <td className={styles.id}>{year.id}</td>
              <td className={styles.name}>{year.name}</td>
              <td className={styles.year}>{year.year}</td>
              <td className={year.cnh !== '-' && styles.cnh}>{year.cnh}</td>
              <td className={styles.year}>{year.intercity}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>


  )
}

export default YearsTable