import Head from 'next/head'
import React from 'react'
import Header from '../components/Header'
import Footer from './Footer'

const Layout = ({ children,tituloPagina} ) => {
  return (
    <div>
      <Head>
        <title>Blog - {tituloPagina}</title>

      </Head>
      <Header>

      </Header>
        
      {children}
      <Footer></Footer>
    </div>
  )
}

export default Layout