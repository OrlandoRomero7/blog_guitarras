import Link from 'next/link'
import React from 'react'
import Layout from '../components/Layout'
import {useEffect} from 'react' 
import Entrada from '../components/Entrada'
import styles from '../styles/Blog.module.css'


const Blog = ({entradas})=> {
  return (
    <Layout tituloPagina='Blog'>
      <div className={styles.main}>
        <div className={styles.blog}>
        
        {entradas.map(entrada => (
          <Entrada
            key={entrada.id}
            entrada={entrada}
          />
          
          
        ))}

      </div>

      </div>
      
        
    </Layout>
  )
}
//funcion propia de next para hacer fetch getStaticProps
export async function getStaticProps(){
  const url = 'http://localhost:1337/blogs'
  const respuesta = await fetch(url)
  const entradas = await respuesta.json()
  return{
    props:{
      entradas
    }
  }

}

export default Blog