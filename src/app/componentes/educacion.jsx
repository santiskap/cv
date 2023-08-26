import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";

export function Edu() {
    return(
        <div className="mt-10">
            <FontAwesomeIcon className="w-10 float-left mr-6 hidden lg:block" icon={faGraduationCap} size="xs" />
            <h2 className="ml-4 mb-3 lg:mb-10 sm:ml-0 text-2xl lg:text-4xl">Education</h2>
            <section>
                <div className="ml-4 lg:ml-16 pb-2">
                    <h3 className="mb-2 mt-6 font-semibold">Universitario - Licenciado en Artes Multimediales</h3>
                    <h2>U.N.A - Universidad Nacional de las Artes | 2010 - 2021</h2>
                </div>

                <div className="ml-4 lg:ml-16 pb-2">
                    <h3  className="mb-2 mt-6 font-semibold">Carrera terciaria - Producción Multimedia</h3>
                    <h2>EMBA. Escuela de Música de Buenos Aires | 2007 - 2010</h2>
                </div>

            </section>
        </div>

    );
}