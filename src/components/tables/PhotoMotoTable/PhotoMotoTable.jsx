import styles from './PhotoMotoTable.module.css'

import { photoMotoTable } from '../../../data/tables/photoMotoTable'

const PhotoMotoTable = ({ func }) => {

  const photoMotoList = photoMotoTable

  return (
    <div className={styles.photoMotoTable}>

      <table>

        <thead>
          <tr>
            <th className={styles.closeTabBtn} colSpan={5} onClick={func} style={{backgroundColor: 'transparent', border: 'unset', color: '#fff'}}>close</th>
          </tr>
          <tr>
            <th colSpan={5} style={{ background: '#181818', border: '1px solid #fff', color: '#fff', textTransform: 'uppercase' }}>Sem exigência de Foto do veículo para Moto TáXI</th>
          </tr>
          <tr>
            <th>id</th>
            <th>city</th>
          </tr>
        </thead>

        <tbody>

          {photoMotoList.map((city) => (
            <tr>
              <td className={styles.id}>{city.id}</td>
              <td className={styles.name}>{city.name}</td>
            </tr>

          ))}

        </tbody>

      </table>

    </div>


  )
}

export default PhotoMotoTable