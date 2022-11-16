import styles from '../styles/Home.module.css'

import React from 'react'

import Layout from '../components/Layout'
import Image from 'next/image'

const Home = () => {
  return (

        <Layout 
        tituloPagina='Inicio'
        >
        <div className={styles.kk}>
          <h1> ¡Hola, Bienvenido!</h1>
          <Image width={500} height={500} src='/img/inicio.jpg' alt='logo_pagina'></Image>

        </div>
        
        </Layout>
        

  )
}

export default Home


