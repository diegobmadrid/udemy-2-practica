import PokemonItemList from "./PokemonListItem";

export default function PokemonList({ pokemons }) {

    return (
        <div>
            {pokemons?.map((pokemon, index) => <PokemonItemList key={index} {...pokemon} />)}

        </div>
    )
}