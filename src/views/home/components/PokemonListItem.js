import { Link } from "react-router-dom";

export default function PokemonItemList({ name, url }) {

    const getId = () => {
        console.log(url.split("/")[6]);
    }

    return (
        // <div key={index}>
        //     <p>{name}</p>
        // </div>

        //Equivalente a hacer <React.Fragment> para no crear un contenedor por cada entrada
        <> {/**Sirve tambien para agregar mas de un componente a un contenedor */}
            <p>{name}</p>
            <button>
                <Link to={`/pokemon/${getId()}`}> Ver Detalles </Link>
            </button>
        </>
    )
};