import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook,faXTwitter,faInstagramSquare } from '@fortawesome/free-brands-svg-icons';
import styles from './Footer.module.scss';


export default function Footer() {

    return (
        <div className={styles["Footer"]}>
  <div className={styles["FooterContainer1"]}>
    <div className={styles["Newsletters"]}>
      <div className={styles["NewslettersTitle"]}>
        <div className={styles["TitleSubscribe"]}>Souscrire sur notre newsletters</div>
      </div>
      <div className={styles["NewslettersEmail"]}>
        <div className={styles["EmailName"]}>E-mail</div>
        <div className={styles["EmailArrow"]}>
        <FontAwesomeIcon icon={faArrowRight} style={{color:"white", opacity:0.5}} />
        </div>
      </div>
    </div>
    <div className={styles["SocialNetwork"]}>
      <div className={styles["Facebook"]}>
      <FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff" }} />
      </div>
      <div className={styles["Twitter"]}>
      <FontAwesomeIcon icon={faXTwitter} style={{ color: "#ffffff" }} />
      </div>
      <div className={styles["Instagram"]}>
      <FontAwesomeIcon icon={faInstagramSquare} style={{ color: "#ffffff" }} />
      </div>
    </div>
  </div>
  <div className={styles["FooterContainer2"]}>
    <div className={styles["AboutContact"]}>
      <div className={styles["AboutUs"]}>
        <div className={styles["AboutLeft"]}>
          <div className={styles["AboutContactTitle"]}>About us</div>
          <div className={styles["AboutLeftName"]}>
            <div className={styles["AboutName"]}>Mentions légales</div>
            <div className={styles["AboutName"]}>Guides</div>
            <div className={styles["AboutName"]}>Gestion des cookies</div>
            <div className={styles["AboutName"]}>Auteurs</div>
            <div className={styles["AboutName"]}>À propos de nous</div>
          </div>
        </div>
        <div className={styles["AboutRight"]}>
          <div className={styles["AboutName"]}>Tous les articles</div>
          <div className={styles["AboutName"]}>Contact</div>
        </div>
      </div>
      <div className={styles["AboutContactTitle"]}>Contacts us</div>
        <div className={styles["ContactPerson"]}>
          <div className={styles["ContactNumber"]}>+1 (001) 981-76-17</div>
          <div className={styles["ContactMail"]}>info@logoipsum.com</div>
        </div>
      </div>
    </div>
    <div className={styles["PC"]}>
      <div className={styles["PCName"]}>Privacy</div>
      <div className={styles["PCName"]}>© 2023 — Copyright</div>
    </div>
  </div>



    )
}