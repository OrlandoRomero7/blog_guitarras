import Link from 'next/link'
import React from 'react'
import styles from '../styles/Footer.module.css'

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.barra}>
        <p>Todos los derechos reservados.</p>
        <nav className={styles.navegacion}>
          <Link href='/'>Inicio</Link>
          <Link href='/nosotros'>Nosotros</Link>
          <Link href='/blog'>Blog</Link>
          <Link href='/tienda'>Tienda</Link>
        </nav>

      </div>
      

    </footer>
      

    

    
  )
}

export default Footer