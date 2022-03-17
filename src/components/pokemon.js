import axios from "axios";
import React, { useState, useEffect} from "react";

// data.results[0].name
const Pokemon = (props) =>{

const[pokemon, setPokemon] = useState([]);

useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
    .then(response=>{
        console.log(response);
        setPokemon(response.data.results)
    })
},[]);

    return(

        <div>
            <h1>Im a pokeMAN!</h1>
            {pokemon.map((pokeObj,i)=>{
                return<li key={i}>{pokeObj.name}</li>
            })}
        </div>
    )
}
export default Pokemon
