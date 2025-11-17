import styles from './Schedule.module.css'

import '../../components/tables/TasksTable/TasksTable'
import TasksTable from '../../components/tables/TasksTable/TasksTable'

const Schedule = () => {
  return (
    <div className={styles.Shedule}>
        <h1>Tasks Schedule ( Maio - 2024 )</h1>
        <hr />

        <div className={styles.tasksTableContainer}>
          <TasksTable />
        </div>

    </div>
  )
}

export default Schedule