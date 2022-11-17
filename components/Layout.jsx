import React from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head'




const Layout = ({children}) => {
  return (
    <>
        <Head>
        <link rel="shortcut icon" href="/images/pokeball.ico" />
            <title>PokeNext</title>
        </Head>
        <Navbar/>
        <main className='main-container'>
            {children}
        </main>
        <Footer/>
    </>
  )
}

export default Layout