import styles from "./LatestNews.module.css";

import  newslist  from "../../data/news/news.json";
import  newslistlastyear  from "../../data/news/newslastyear.json";

import { useState } from "react";

const LatestNews = () => {
 

 let news = []

 newslist.map((n) => {
  news.push(n)
 })

 let newslastyear = []

 newslistlastyear.map((n) => {
  newslastyear.push(n)
 })


  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState('')

  const actualYear = new Date().getFullYear()
  const actualMonth = new Date().getMonth()

  const [lastYear, setLastYear] = useState(false)


  const monthList = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']

  const [year, setYear] = useState(actualYear)
  const [month, setMonth] = useState(monthList[actualMonth])

  console.log(modal)

  const handleModal = (date, title, text, links, images) => {

    const data = {
      date,
      title,
      text,
      links,
      images
    }
    setModalContent(data)
    setModal(!modal)

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth' 
    });

  }

  
  return (

    <div className={styles.news}>

      <br />

      <button 
        style={{backgroundColor: lastYear ? 'orange' : 'lightgreen', fontWeight: 'bold', textShadow: '1px 1px 2px #1f1f1f8f'}} 
        onClick={() => 
          {
            !lastYear 
              ? (
                  setLastYear(!lastYear),
                  setMonth(monthList[11])
                )
              : (
                  setLastYear(!lastYear),
                  setMonth(monthList[actualMonth])
          )
          }
        }>
        {lastYear
          ? 'Ver notícias de ' + year
          : 'Ver notícias de ' + (year - 1)
        }
      </button>

      <br /><br />

      <button style={{marginBottom: '5px', textTransform:'capitalize', backgroundColor: month === monthList[0] && "lightgreen", textShadow: '1px 1px 2px #1f1f1f8f'}} onClick={() => setMonth(monthList[0])}>
        {monthList[0]}
      </button>
      <button style={{marginBottom: '5px', textTransform:'capitalize', backgroundColor: month === monthList[1] && "lightgreen", textShadow: '1px 1px 2px #1f1f1f8f'}} onClick={() => setMonth(monthList[1])}>
        {monthList[1]}
      </button>
      <button style={{marginBottom: '5px', textTransform:'capitalize', backgroundColor: month === monthList[2] && "lightgreen", textShadow: '1px 1px 2px #1f1f1f8f'}} onClick={() => setMonth(monthList[2])}>
        {monthList[2]}
      </button>
      <button style={{marginBottom: '5px', textTransform:'capitalize', backgroundColor: month === monthList[3] && "lightgreen", textShadow: '1px 1px 2px #1f1f1f8f'}} onClick={() => setMonth(monthList[3])}>
        {monthList[3]}
      </button>
      <button style={{marginBottom: '5px', textTransform:'capitalize', backgroundColor: month === monthList[4] && "lightgreen", textShadow: '1px 1px 2px #1f1f1f8f'}} onClick={() => setMonth(monthList[4])}>
        {monthList[4]}
      </button>
      <button style={{marginBottom: '5px', textTransform:'capitalize', backgroundColor: month === monthList[5] && "lightgreen", textShadow: '1px 1px 2px #1f1f1f8f'}} onClick={() => setMonth(monthList[5])}>
        {monthList[5]}
      </button>
      <button style={{marginBottom: '5px', textTransform:'capitalize', backgroundColor: month === monthList[6] && "lightgreen", textShadow: '1px 1px 2px #1f1f1f8f'}} onClick={() => setMonth(monthList[6])}>
        {monthList[6]}
      </button>
      <button style={{marginBottom: '5px', textTransform:'capitalize', backgroundColor: month === monthList[7] && "lightgreen", textShadow: '1px 1px 2px #1f1f1f8f'}} onClick={() => setMonth(monthList[7])}>
        {monthList[7]}
      </button>
      <button style={{marginBottom: '5px', textTransform:'capitalize', backgroundColor: month === monthList[8] && "lightgreen", textShadow: '1px 1px 2px #1f1f1f8f'}} onClick={() => setMonth(monthList[8])}>
        {monthList[8]}
      </button>
      <button style={{marginBottom: '5px', textTransform:'capitalize', backgroundColor: month === monthList[9] && "lightgreen", textShadow: '1px 1px 2px #1f1f1f8f'}} onClick={() => setMonth(monthList[9])}>
        {monthList[9]}
      </button>
      <button style={{marginBottom: '5px', textTransform:'capitalize', backgroundColor: month === monthList[10] && "lightgreen", textShadow: '1px 1px 2px #1f1f1f8f'}} onClick={() => setMonth(monthList[10])}>
        {monthList[10]}
      </button>
      <button style={{marginBottom: '5px', textTransform:'capitalize', backgroundColor: month === monthList[11] && "lightgreen", textShadow: '1px 1px 2px #1f1f1f8f'}} onClick={() => setMonth(monthList[11])}>
        {monthList[11]}
      </button>

      <br /> <br />

      <hr />


      <div className={styles.newsContainer}>

      {news && newslastyear &&

       !lastYear
        
        ? news.map((n) => (

          n. month === month &&
          <div className={styles.new} key={n.id} onClick={() => handleModal(n.date, n.title, n.text, n.links, n.images)}>
            <p className={styles.newMonth}> {n.month} </p>
            <p className={styles.newDate}>{n.date}</p>
            <p className={styles.newTitle}>{n.title}</p>
            </div>
          )
        )
        : newslastyear.map((n) => (

          n. month === month &&
          <div className={styles.new} key={n.id} onClick={() => handleModal(n.date, n.title, n.text, n.links, n.images)}>
            <p className={styles.newMonth}> {n.month} </p>
            <p className={styles.newDate}>{n.date}</p>
            <p className={styles.newTitle}>{n.title}</p>
            </div>
          )
        )
         
        
      }
    </div>

    <div className= {modal? styles.visibleModal : styles.hidden}>
      <div className={styles.modalContent}>
        {modalContent && (
          <>
            <p className={styles.newDate}>{modalContent.date}</p>
            <p>{modalContent.title}</p>
            <p>{modalContent.text}</p>
            <p>{console.log(modalContent)}</p>
            <br />

            {modalContent.links && 
            
              modalContent.links.map((l, i) => (
                <div key={i} className={styles.newsLinks}>🔗 <a href={l.url} target="_blank">{l.title}</a><br /><br /></div>
              ))

            }

            <div className={styles.newsImages}>

              {modalContent.images &&
                modalContent.images.map((img, i) => (
                  <div key={i}>
                   <a href={`news-images/${img.name}`} target="_blank"><img src={`news-images/${img.name}`} alt="" className={styles.newImg} /></a>
                  </div>
                ))
              }
            </div>
            
            
          </>
        )
        }

       <div className={styles.closeModal}><button onClick={() => handleModal('')}>Close</button></div>
        
      </div>
    </div>

  </div>
  );
};

export default LatestNews;
