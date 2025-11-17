import styles from './Footer.module.css'

import cartoon from '../assets/cartoon2.png'
import { PiTelegramLogoLight } from "react-icons/pi";
import { FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";



const Footer = () => {
    return (

        <div className={styles.footer}>

            {/*            
            <h4>Created by <em>Fernando Alves</em></h4>
         
            
            <div className={styles.contacts}>
                <span>lfalvespe@gmail.com</span> <br />
                <a href="https://github.com/lfalvespe" target='_blank'>https://github.com/lfalvespe</a> <br />
                &copy; 2024
            </div> */}



            <div className={styles.logos}>
                <a href="mailto: lfalvespe@gmail.com">

                    <BiLogoGmail className={styles.mail} /><br /><span className={styles.legendMail}>Mail</span>

                </a>
                <a href="https://t.me/lfalvespe" target='_blank'>

                    <PiTelegramLogoLight className={styles.telegram} /><span className={styles.legendTelegram}><br />Telegram</span>

                </a>

                <a href="https://github.com/lfalvespe" target='_blank'>
                    <FaGithub className={styles.github} /><span className={styles.legendGithub}><br />Github</span>
                </a>

            </div>

            <div className={styles.separator}></div>

            <div className={styles.author}>
                <img src={cartoon} alt="emoji do autor" width={44} className={styles.cartoon}/> <br />
                <span className={styles.name}>Fernando Alves</span>
            </div>

            <div className={styles.mark}>
                &copy; 2024
            </div>

        </div>
    )
}

export default Footer
