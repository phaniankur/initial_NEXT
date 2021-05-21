import React from 'react'
import { FaGoogle, FaMountain } from "react-icons/fa";
import styles from '../styles/qonway.module.css'



function qonway() {
    return (
        <div className={styles.main_div}>
            <div className={styles.header}>
                <h2>QONWAY</h2></div>
            <div className={styles.login_container}>
                <img />
                <div className={styles.login_only}>
                    <FaMountain className={styles.icon_header}/>
                    <h1>Welcome to Qonway -- Elegance is funny</h1>
                    <button className={styles.btn}>
                    <FaGoogle className={styles.icon}/>
                    Continue with Google</button> 
                </div>
                
            </div>
        </div>
    )
}

export default qonway