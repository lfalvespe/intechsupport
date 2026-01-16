import styles from './CnhMotoTable.module.css'

import { cnhMoto } from '../../../data/tables/CnhMoto'

const CnhMotoTable = ({ func }) => {

  const cnhMotoList = cnhMoto

  return (
    <div className={styles.cnhMotoTable}>

      <table>

        <thead>
          <tr>
            <th className={styles.closeTabBtn} colSpan={5} onClick={func} style={{backgroundColor: 'transparent', border: 'unset', color: '#fff'}}>close</th>
          </tr>
          <tr>
            <th colSpan={5} style={{ background: '#181818', border: '1px solid #fff', color: '#fff', textTransform: 'uppercase' }}>CNH para Moto TáXI</th>
          </tr>
          <tr>
            <th>id</th>
            <th>city</th>
            <th>CNH requirements</th>
          </tr>
        </thead>

        <tbody>

          {cnhMotoList.map((city) => (
            <tr>
              <td className={styles.id}>{city.id}</td>
              <td className={styles.name}>{city.name}</td>
              <td className={styles.cnh}>{city.cnh}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>


  )
}

export default CnhMotoTable