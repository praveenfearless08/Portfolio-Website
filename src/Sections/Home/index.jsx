import styles from "./styles.module.css";

function Home() {
  return (
    <section className={styles.home_section} id="home">
      <p className={styles.greet}>Hi, my name is</p>
      <h1 className={styles.heading_1}>Praveen.</h1>
      <h1 className={styles.heading_2}>a web developer</h1>
      <p className={styles.desc}>
        I started learning to code when i was 16 year old because I wanted to
        make my own video games. Over time, I gain a wealth of experience
        designing and developing web applications
      </p>
      <a href="#experience">
        <button className={styles.btn}>Check out my Projects!</button>
      </a>
    </section>
  );
}

export default Home;
