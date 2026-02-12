import { useEffect, useState } from "react";

import styles from "./Schedule.module.css";

import "../../components/tables/TasksTable/TasksTable";
// import TasksTable from '../../components/tables/TasksTable/TasksTable'

const Schedule = () => {
  const users = [
    {
      name: "Alice",
      escala: [22, 23, 1, 2, 11, 12],
    },

    {
      name: "Diana",
      escala: [24, 25, 3, 4, 13, 14],
    },

    {
      name: "Edvaldo",
      escala: [],
    },

    {
      name: "Israilane",
      escala: [26, 27, 5, 6, 15, 16],
    },

    {
      name: "Luiza",
      escala: [28, 29, 7, 8, 17, 18],
    },

    {
      name: "Luiz Fernando",
      escala: [20, 21, 30, 31, 9, 10, 19, 20],
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
                 <div className={styles.blink}>o iluminado</div>
                  <div className={styles.userStatus} style={{backgroundColor:"rgb(151, 19, 19)"}}>⚠️🤪⚠️</div>
                </>
              ) : (
                u.name != 'Edvaldo' 
                ? <div className={styles.userStatus}>💚 😎 💚</div>
                : <>
                    <div style={{color: "#85d5f5", fontWeight: 'bold'}}>VERIFICAÇÃO</div>
                    <div className={styles.userStatus}>✔️ 👨🏻‍💻 ✔️</div>
                </>
              )}
            </div>
          ))}

      </div>

      <hr />
    </div>
  );
};

export default Schedule;
