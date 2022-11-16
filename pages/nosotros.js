import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout tituloPagina='Nosotros'>
      <div className={styles.principal}>
        <h1>Misión</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis, ante vitae 
          dignissim ullamcorper, nibh erat sagittis lacus, sed sagittis tortor sem a arcu. 
          Pellentesque porta sit amet massa condimentum commodo. </p>
        <h1>Visión</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sagittis, ante vitae 
          dignissim ullamcorper, nibh erat sagittis lacus, sed sagittis tortor sem a arcu. 
          Pellentesque porta sit amet massa condimentum commodo. </p>

      </div>
        
    </Layout>
  )
}

export default Nosotros