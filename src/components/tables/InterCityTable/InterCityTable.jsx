import styles from './InterCityTable.module.css'

import { intercity } from '../../../data/tables/intercity'

const InterCityTable = ({func}) => {

  const interCityList = intercity
  console.log(interCityList)

  return (
    <div className={styles.InterCityTable}>



      <table>

        <thead>
          <tr>
            <td className={styles.closeTabBtn} colSpan={6} onClick={func}>close</td>
          </tr>
          <tr>
            <th colSpan={6} style={{ background: '#181818', border: '1px solid #fff', color: '#fff' }}>
              CIDADES INTERCITY
            </th>
          </tr>
          <tr>
            <td></td>
            <th>Code</th>
            <th>City</th>
            <th>Status</th>
            <th>Monet.</th>
            <th>Fee</th>
            
          </tr>
        </thead>

        <tbody>

          {interCityList.map((city) => (
            <tr key={city.id}>
              <td className={styles.id}>{city.id}</td>
              <td className={styles.code}>{city.code}</td>
              <td className={styles.name}>{city.name}</td>
              <td className={styles.status}>{city.status}</td>
              <td className={styles.monetized}>{city.monetized}</td>
              <td className={styles.value}>{city.value}</td>
            </tr>
          ))}

        </tbody>
      </table>


    </div>
  )
}

export default InterCityTable