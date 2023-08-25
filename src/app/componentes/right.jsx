import {Experiencia} from "@/app/componentes/experiencia";
import {Edu} from "@/app/componentes/educacion";

export function Inicio() {
    return(
        <div className="w-5/6 bg-gray-100 p-16 text-gray-800">
            <Experiencia></Experiencia>
            <Edu></Edu>
        </div>
    );
}