import { useContext, useEffect } from "react";
import PokemonContext from "../../context/pokemons";
import PokemonList from "./components/PokemonList";

export default function Home() {
    // const MiContexto=useContext(PokemonContext)
    // console.log(MiContexto);
    //SE PUEDE HACER DESTRUCTURING CON LOS ATRIBUTOS DEL PROVIDER

    const  {getPokemons, pokemons } = useContext(PokemonContext);
    // const [pokemons,getPokemons] =useContext(PokemonContext);
    // console.log(getPokemons)

    useEffect(() => {
        getPokemons().catch(null);
        console.log(pokemons)
    }, [])

    return (
        <div>
            <PokemonList pokemons={pokemons}/>
        </div>
    );
}

;