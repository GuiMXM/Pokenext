import PokeCard from '../components/PokeCard';

import styles from '../styles/Home.module.css'


export async function getStaticProps(){
  const maxPokemons = 250;
  const api  = "https://pokeapi.co/api/v2/pokemon/"

  const res = await fetch (`${api}/?limit=${maxPokemons}`)
  const data = await res.json() 

  //add id para cada pokemon
  data.results.forEach((item,id) => {
    
    item.id = id + 1
  });
  
  return {
    props:{
      pokemons:data.results
    }
  }
}


export default function Home({pokemons}) {
  return (
    <>
    <div className={styles.title_container}>

      <h1> Poke <span>Nexta</span></h1>
      <img src="../images/raio.png"  alt="pokenext  Logo" />
    </div>
      <div className={styles.pokeContainer}>
        {pokemons.map((pokemon)=>(
            <PokeCard key={pokemon.id} pokemon={pokemon} />
          ) )}
      </div>
      
    </>
  )
}
