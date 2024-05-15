import { faCircleArrowDown,faUser, faBars, faTimes} from '@fortawesome/free-solid-svg-icons';
import styles from "./Header.module.scss"
import { useState } from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Header() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
      setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return(
        <div className={styles["Header"]}>
        <div className={styles["Logo"]}>
          <div className={styles["LogoTitle"]}>Logo</div>
        </div>

        <div className={`${styles["MobileMenu"]} ${styles["MenuMobile"]}`} onClick={toggleMobileMenu}>
                <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} style={{color:"black",fontSize:100 }} />
            </div>

        <div className={`${styles["Menu"]} ${isMobileMenuOpen ? styles["MobileMenuOpen"] : ""}`}>
          <div className={styles["MenuName"]}>
            <div className={styles["MenuTitle"]}>Accueil</div>
          </div>
          <div className={styles["MenuName"]}>
            <div className={styles["MenuTitle"]}>Lieux</div>
          </div>
          <div className={styles["MenuName"]}>
             <div className={styles["MenuTitle"]}>Hébergement</div>
          </div>
          <div className={styles["MenuName"]}>
            <div className={styles["MenuTitle"]}>Actualité</div>
          </div>
          <div className={styles["MenuName"]}>
            <div className={styles["MenuTitle"]}>Avis</div>
          </div>
        </div>  

        <div className={styles["Connexion"]}>
          <div className={styles["ButtonConnexion"]}>
            <div className={styles["ButtonConnexion2"]}>
            <FontAwesomeIcon icon={faUser} style={{color:"#ffffff",fontSize:35, paddingLeft:10}} />
           </div>
          </div>
          <div className={styles["ConnexionName"]}>Connexion</div>
          <div className={styles["ConnexionToggle"]}>
            <div className={styles["ConnexionToggle2"]}>
            <FontAwesomeIcon icon={faCircleArrowDown} style={{ color: "#ffffff" }} />
                     


            
           </div>
          </div>
        </div>
      </div>

    )
}