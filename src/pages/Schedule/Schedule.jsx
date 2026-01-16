import { useEffect, useState } from "react";

import styles from "./Schedule.module.css";

import "../../components/tables/TasksTable/TasksTable";
// import TasksTable from '../../components/tables/TasksTable/TasksTable'

const Schedule = () => {
  const users = [
    {
      name: "Alice",
      escala: [20, 21, 3, 4],
    },

    {
      name: "Diana",
      escala: [22, 23, 5, 6],
    },

    {
      name: "Edvaldo",
      escala: [24, 25, 7, 8],
    },

    {
      name: "Emerson",
      escala: [12, 13, 26, 27, 9, 10],
    },

    {
      name: "Israilane",
      escala: [14, 15, 28, 29, 11, 12],
    },

    {
      name: "Luiza",
      escala: [16, 17, 30, 31],
    },

    {
      name: "Luiz Fernando",
      escala: [18, 19, 1, 2],
    },
  ];

  const data = new Date()
  const dataAtual = data.getDate();

 

  return (
    <div className={styles.Shedule}>
      <h1>Tasks Schedule</h1>
      <hr />

      {/* <div className={styles.tasksTableContainer}>
          <TasksTable />
        </div> */}

       <br /><br />
       

        <h4>ESCALA DO CHAT</h4> <br />
        <h3 style={{color: "rgba(247, 238, 158, 1)"}}><em>{data.toLocaleDateString()}</em></h3>


       

      <div className={styles.usersContainer}>
        
        {users &&
          users.map((u, i) => (
            <div className={styles.userLine} key={i}>
              <div className={styles.userName}>{u.name}</div>
              {u.escala.includes(dataAtual) ? (
                <>
                  <div className={styles.userStatus} style={{backgroundColor:"rgba(107, 15, 15, 1)"}}>⚠️🤪⚠️</div>
                  <div className={styles.blink}>o iluminado</div>
                </>
              ) : (
                <div className={styles.userStatus}>😎 🥰🙃</div>
              )}
            </div>
          ))}

      </div>

      <hr />
    </div>
  );
};

export default Schedule;
