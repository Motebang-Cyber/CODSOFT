import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title} >Hi, there, I'm Motebang</h1>
                <p className={styles.description}>I am a full-stack developer with about a year worth of IT Experience. I am a certified Azure cloud developer, certified microsoft power platform, certified microsoft 365 enduser. </p>
                <a href="mailto:letsengmg@gmail.com" className={styles.contactBtn}>Contact Me</a>
            </div>
            <img src={getImageUrl("hero/heroImage.png")} alt="myPicture" className={styles.heroImg}/>
            <div className={styles.topBlur}/>
            <div className={styles.bottomBlur}/>
        </section>
    );
};