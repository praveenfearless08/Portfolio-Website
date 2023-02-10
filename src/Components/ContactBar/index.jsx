import styles from "./styles.module.css";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

function ContactBar() {
  return (
    <div className={styles.contact_bar_wrapper}>
      <div className={styles.contact_bar}>
        <a href="/" target="_blank" className={styles.icons}>
          <LinkedInIcon />
        </a>
        <a href="/" target="_blank" className={styles.icons}>
          <GitHubIcon />
        </a>
        <a href="/" target="_blank" className={styles.icons}>
          <InstagramIcon />
        </a>
        <a href="/" target="_blank" className={styles.icons}>
          <TwitterIcon />
        </a>
        <div className={styles.line}></div>
      </div>
      <div className={styles.contact_bar}>
        <a href="mailto:praveenfearless08@gmail.com" className={styles.email}>
          praveenfearless08@gmail.com
        </a>
        <div className={styles.line}></div>
      </div>
    </div>
  );
}

export default ContactBar;
