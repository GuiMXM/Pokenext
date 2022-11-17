import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from '../styles/Navbar.module.css'


const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        
            <div className={styles.logo}>
                <Image src="/images/pokeball.png" width={30} height={30} alt="pokenext Logo" />
                <h1>PokeNext</h1>
            </div>


        <ul className={styles.link_items}>
            <li>
            <Link href="/">
                <p>Home</p>
            </Link>
            </li>
            <li>
            <Link href="/about">
                <p>About</p>
            </Link>
            </li>


        </ul>
    </nav>
  )
}

export default Navbar