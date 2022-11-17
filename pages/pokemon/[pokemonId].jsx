import React from 'react'
import styles from '../../styles/Pokemon.module.css'
import Image from 'next/image'


export const getStaticPaths = async() => {
  const maxPokemons = 250;
  const api  = "https://pokeapi.co/api/v2/pokemon/"

  const res = await fetch (`${api}/?limit=${maxPokemons}`)
  const data = await res.json() 

  //params
  const paths = data.results.map((pokemon,index)=>{
    return {
      params:{pokemonId: (index+1).toString() }
    }
  })
  return {
    paths,
    fallback: false,
  }
}


export const getStaticProps = async(context) => {
    const id = context.params.pokemonId
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    return {
      props: {pokemon: data}
    }
}

const pokemon = (poke) => {
  return (
        <div className={styles.pokemon_container}>
          
          
          <h1 className={styles.title}>{poke.pokemon.name}</h1>
         
          <Image
            src={`https://cdn.traction.one/pokedex/pokemon/${poke.pokemon.id}.png`}
            width="200"
            height="200"
            alt={poke.pokemon.name}
          />
          <div>
            <h3>Número:</h3>
            <p>#{poke.pokemon.id}</p>
          </div>

          <div  className={styles.types_container}>
            {poke.pokemon.types.map((item,id)=>(

              <span 
              key={id} 
              className={`${styles.type} ${styles['type_' + item.type.name]}`}>     {item.type.name}
              </span>
            ))
            }
          </div>

          <div className={styles.data_container}>

            <div className={styles.data_height}>
              <h4>Altura:</h4>
              <p>{poke.pokemon.height * 10} cm</p>
            </div>

            <div className={styles.data_weight}>
              <h4>Peso:</h4>
              <p>{poke.pokemon.weight / 10} kg</p>
            </div>
          </div>
        </div>
  )
}

export default pokemon