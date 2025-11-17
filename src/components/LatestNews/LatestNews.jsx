import styles from "./LatestNews.module.css";

import  news  from "../../data/news/news.json";
import { useState } from "react";

const LatestNews = () => {

  const [modal, setModal] = useState(false)
  const [modalContent, setModalContent] = useState('')

  console.log(modal)

  const handleModal = (date, title, text, links) => {

    const data = {
      date,
      title,
      text,
      links
    }
    setModalContent(data)
    setModal(!modal)
   
  }

  const imgUrl = '../../assets/instructions/'

  return (

    <div className={styles.news}>

      <div className={styles.newsContainer}>
      {news &&
        news.map((n) => (
          
         
            <div className={styles.new} key={n.id} onClick={() => handleModal(n.date, n.title, n.text, n.links)}>
              <p className={styles.newDate}>{n.date}</p>
              <p className={styles.newTitle}>{n.title}</p>
            </div>
         
        ))}
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
                <div key={i}><a href={l.url} target="_blank">{l.title}</a><br /><br /></div>
              ))

            }

            

            
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
