import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { Fecha } from '../helpers';
import styles from '../styles/Entrada.module.css'

const Entrada =({entrada}) => {
  const {titulo,descripcion,imagen, published_at,id} = entrada;
    
    
  return (
  
    <div className={styles.main}>
      
      

      <div className={styles.principal}>
        <h2>{titulo}</h2>
      <p>{Fecha(published_at)}</p>
      
      
      <Image layaut='responsive' width={300} height={300} src={`http://localhost:1337${imagen.url}`}></Image>
      <p className={styles.resumen}>{descripcion}</p>
      <Link href={`/blog/${id}`}>
        <a className={styles.enlace}>
          Leer entrada completa

        </a>
      </Link>

      </div>
      
    </div>
    


    


    
  )
}

export default Entrada

