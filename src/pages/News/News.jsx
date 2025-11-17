import styles from './News.module.css'

import LatestNews from '../../components/LatestNews/LatestNews'

const News = () => {
  return (
    <div className={styles.News}>

            <h1 className='page-title'>Latest Updates</h1>

            <hr />

            <div className={styles.NewsContainer}>

              <LatestNews />
                
            </div>

            <hr />

    </div>
  )
}

export default News