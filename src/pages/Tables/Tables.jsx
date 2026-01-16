import { useState } from 'react'
import styles from './Tables.module.css'

// Tabelas
import AcTable from '../../components/tables/AcTable/AcTable'
import JustTable from '../../components/tables/JustTable/JustTable'
import CashlessTable from '../../components/tables/CashlessTable/CashlessTable'
import CargoTable from '../../components/tables/CargoTable/CargoTable'
import AyanTable from '../../components/tables/AyanTable/AyanTable'
import InterCityTable from '../../components/tables/InterCityTable/InterCityTable'
import YearsTable from '../../components/tables/YearsTable/YearsTable'
import CnhMotoTable from '../../components/tables/CnhMotoTable/CnhMotoTable'
import PhotoMotoTable from '../../components/tables/PhotoMotoTable/PhotoMotoTable'
import CourierTable from '../../components/tables/CourierTable/CourierTable'
import MotoTaxiTable from '../../components/tables/MotoTaxiTable/MotoTaxiTable'
import MonetTable from '../../components/tables/MonetTable/MonetTable'
import ComfortTable from '../../components/tables/ComfortTable/ComfortTable'
import OnRoute from '../../components/tables/OnRoute/OnRoute'
import MasterTable from '../../components/tables/MasterTable/MasterTable'

const Tables = () => {
    
    const [table, setTable] = useState(null)
  
    return (
        <div className={styles.Tables}>

            <h1>Spreadsheets</h1>

            <hr />

            <div className={styles.tabsContainer}>

                <div className={styles.tab} onClick={() => setTable(<YearsTable func={() => setTable(null)}/>)}>
                    Anos Permitidos
                </div>

                <div className={styles.tab} onClick={() => setTable(<CnhMotoTable func={() => setTable(null)}/>)}>
                    CNH Moto Táxi
                </div>

                <div className={styles.tab} onClick={() => setTable(<PhotoMotoTable func={() => setTable(null)}/>)}>
                    Foto Moto Táxi
                </div>

                <div className={styles.tab} onClick={() => {
                    setTable(<CashlessTable func={() => setTable(null)}/>)
                }
                }
                >Cidades Cashless
                </div>

                <div className={styles.tab} onClick={() => setTable(<MotoTaxiTable func={() => setTable(null)} />)}>
                    Cidades Moto Táxi
                </div>
                <div className={styles.tab} onClick={() => setTable(<CourierTable func={() => setTable(null)} />)}>
                    Cidades Courier
                </div>
                <div className={styles.tab} onClick={() => setTable(<CargoTable func={() => setTable(null)}/>)}>
                    Cidades Cargo
                </div>
                <div className={styles.tab} onClick={() => setTable(<AcTable func={() => setTable(null)}/>)}>
                    Cidades A/C
                </div>
                <div className={styles.tab} onClick={() => setTable(<MonetTable func={() => setTable(null)}/>)}>
                    Monetização
                </div>
                <div className={styles.tab} onClick={() => setTable(<ComfortTable func={() => setTable(null)}/>)}>
                    Comfort
                </div>
                <div className={styles.tab} onClick={() => setTable(<InterCityTable func={() => setTable(null)}/>)}>
                    Cidades Intercity
                    </div>
                <div className={styles.tab} onClick={() => setTable(<MasterTable func={() => setTable(null)}/>)}>
                    Cidades Master
                </div>

                <div className={styles.tab} onClick={() => setTable(<AyanTable func={() => setTable(null)}/>)}>
                    Ayan/New Order
                </div>

                <div className={styles.tab} onClick={() => setTable(<OnRoute func={() => setTable(null)}/>)}>
                    Pedidos a caminho
                </div>
                <div className={styles.tab} onClick={() => {
                    setTable(<JustTable func={() => setTable(null)}/>)
                }
                }
                >Cidades Just
                </div>

            </div>
            <hr />

            {!table &&
            
            <div className={styles.tableNullContainer}>
                <h4>
                    Escolha uma tabela para exibir as informações
                </h4>
            </div>
            
            }
            

            <div className={styles.contentsContainer}>
                {table}
            </div>

        </div>
    )
}

export default Tables
