import React from 'react'

import Image from 'next/image'
import styles from '../styles/About.module.css'
export default function About() {
  return (
    <div className={styles.about}>
      <h1>Sobre o projeto</h1>
      <Image
        src="/images/charizard.png"
        alt="Charizard"
        width="300"
        height="300"
      />
      <div>
        <p>PokeNext é um App construído em Next.js para consultar Pokémons.</p>
        <p>Ele possui todos os principais dados de 250 pokemons! Tais como tipos, altura e peso. </p>
      </div>
    </div>
    
  )
}