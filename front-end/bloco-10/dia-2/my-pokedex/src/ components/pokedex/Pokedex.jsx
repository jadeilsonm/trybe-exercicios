import React from "react";
import Pokemon from "../pokemon/Pokemon";
import pokemons from "../../data";
import './Pokedex.css'

class Pokedex extends React.Component {
    render(){
        return(
            <main>
                <h1 className="title">Pokedex</h1>
                <div>
                    {pokemons.map(el => <Pokemon Poke={el} />)}
                </div>
            </main>
        )
    }
}

export default Pokedex