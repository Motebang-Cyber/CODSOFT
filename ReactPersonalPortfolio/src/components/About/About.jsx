import React from 'react';

import styles from "./About.module.css";
import { getImageUrl } from '../../utils'

export const About = () => {
  return (
    <section className={styles.container} id="about"> 
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}> 
            <img src={getImageUrl("hero/heroImage.png")} alt="My Picture" className={styles.aboutImage} />
            <ul className={styles.aboutItems}>
                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/iot.png")} alt="iot Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Iot Developer</h3>
                        <p>I am a frontend developer with experience in building fully responsive and optimized sites.</p>
                    </div>  
                </li> 

               

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/sql-server.png")} alt="server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Full-stack Developer</h3>
                        <p>I have experience developing fast and optimized and APIs.</p>
                    </div>  
                </li> 

                <li className={styles.aboutItem}>
                    <img src={getImageUrl("about/cloud-code.png")} alt="server Icon" />
                    <div className={styles.aboutItemText}>
                        <h3>Cloud Developer</h3>
                        <p>I have experience within the Azure and Aws cloud streams.</p>
                    </div>  
                </li> 
            </ul>    
        </div>
    </section>
  );
};
