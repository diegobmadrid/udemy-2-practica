import PokemonContext from "./index";
// import ApiCall from "../../api";
import apiCall from "../../api";
import { useState } from "react";

export default function PokemonProvider({ children }) {
    const [pokemons, setPokemons] = useState([]);

    const getPokemons = async () => {
        try {
            const pokemonResult = await apiCall({ url: "https://pokeapi.co/api/v2/pokemon?limit=100" });
            setPokemons(pokemonResult.results
                /**El results son los datos que se quieren tomar unicamente de la llamada del API visto en la tabla Red en el navegador*/);
        } catch (error) {
            setPokemons([]);
        }
    }

    return (
        <PokemonContext.Provider value={{getPokemons,pokemons}}>
            {children}
        </PokemonContext.Provider>

    )
}