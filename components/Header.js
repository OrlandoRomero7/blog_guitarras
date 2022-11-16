import Link from 'next/link'
import React from 'react'
import styles from '../styles/Header.module.css'
import Image from 'next/image'
const Header = () => {
  return (
    <header className={styles.header}>
        
        <div className='contenedor'>
            <div className={styles.barra}>
                <Link href='/'>
                  <a>
                    <Image width={100} height={100} src='/img/guitarra4.png' alt='logo_pagina'></Image>
                  </a>
                </Link>
               
                <nav className={styles.navegacion}>
                        <Link href='/'>Incio</Link>
                        <Link href='/nosotros'>Nosotros</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/tienda'>Tienda</Link>
                </nav>
            </div>   

        </div>

        
        
        

    </header>
  )
}

export default Header