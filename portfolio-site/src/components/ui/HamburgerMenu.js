'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import styles from './HamburgerMenu.css';

const menuVariants = {
    open: {
        x: 0,
        transition: {
            duration:0.5,
        },
    },
    closed: {
        x: '-100%',
        transition: {
            duration: 0.5,
        },
    },
};

const HamburgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={styles.container}>
            <div className={styles.hamburger} onClick={() => setIsOpen(!isOpen)}>
            <div className={`${styles.line} ${isOpen ? styles.open : ''}`}></div>
            <div className={`${styles.line} ${isOpen ? styles.open : ''}`}></div>
            <div className={`${styles.line} ${isOpen ? styles.open : ''}`}></div>
            </div>
            <motion.nav 
            className={styles.menu}
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            variants={menuVariants}
            >
                <a href="About Me" onClick={() => setIsOpen(false)}>Section 1</a>
                <a href="Portfolio" onClick={() => setIsOpen(false)}>Section 2</a>
                <a href="Contact Me" onClick={() => setIsOpen(false)}>Section 3</a>
            </motion.nav>
        </div>
    );
};

export default HamburgerMenu;
