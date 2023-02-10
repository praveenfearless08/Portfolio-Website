import styles from "./styles.module.css";
import Heading from "../../Components/Heading";
import profile from "./praveen3.jpg";

function About() {
  return (
    <section id="about">
      <Heading index="01" heading="About Me" />
      <div className={styles.container}>
        <div className={styles.left}>
          <p className={styles.desc}>
            Hello, My name is Praveen Kumar. I am from Mirzapur,Uttar Pradesh. I
            am currently studying Btech CSE from Lovely Professional University.
            I am 3rd year student having huge interest in Web development and
            Software Development.
          </p>
         
        </div>
        <div className={styles.right}>
          <img src={profile} alt="profile" className={styles.profile_img} />
          <div className={styles.img_border}></div>
        </div>
      </div>
    </section>
  );
}

export default About;
