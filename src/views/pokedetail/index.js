import { useParams } from "react-router-dom";


export default function PokeDetail() {

    //Mandar parametros entre una ruta y otra.
    const { id } = useParams();
    console.log(id);

    return (
        <div>
            PokeDetail
        </div>
    );
};