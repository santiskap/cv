import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faGraduationCap} from "@fortawesome/free-solid-svg-icons";

export function Edu() {
    return(
        <div>
            <div className="mt-10">
                <FontAwesomeIcon className="w-10 float-left mr-6" icon={faGraduationCap} size="xs" />
                <h2 className="ml-4 mb:2 lg:mb-10 sm:ml-0 sm:text-2xl md:text-3xl lg:text-4xl">Educación</h2>
            </div>

                <div className="flex flex-row">

                    <div className="mr-20">
                        <div className="ml-4 pb-2">
                            <h3 className="mb-2 mt-6 font-semibold text-2xl rosa">Licenciado en Artes Multimediales</h3>
                            <p><strong>U.N.A</strong> - Universidad Nacional de las Artes</p>
                            <h3 className="mb-2 font-semibold 2text-gray-800 text-lg">2010 - 2021</h3>
                        </div>
                    </div>

                    <div>
                        <div className="ml-4 pb-2">
                            <h3  className="mb-2 mt-6 font-semibold text-2xl rosa">Carrera terciaria - Producción Multimedia</h3>
                            <p><strong>EMBA.</strong> Escuela de Música de Buenos Aires</p>
                            <h3 className="mb-2 font-semibold 2text-gray-800 text-lg">2007 - 2010</h3>

                        </div>
                    </div>

                </div>





        </div>

    );
}