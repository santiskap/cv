import {Experiencia} from "@/app/componentes/experiencia";
import {Edu} from "@/app/componentes/educacion";

export function Inicio() {
    return(
        <div className="bg-amber-50 lg:p-16 sm:p-1 md:p-2 text-gray-800 w-4/4">
            <Experiencia></Experiencia>
            <Edu></Edu>
        </div>
    );
}