import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faGraduationCap} from "@fortawesome/free-solid-svg-icons";

export function Edu2() {
    return(
    <div>
        <div className="mt-10">
            <FontAwesomeIcon className="w-10 float-left mr-6" icon={faGraduationCap} size="xs" />
            <h2 className="ml-4 mb:2 lg:mb-10 sm:ml-0 sm:text-2xl md:text-3xl lg:text-4xl">Educación</h2>
        </div>

        <div className="flex flex-row">
            <div className="basis-1/10">
                <div className="ml-4 lg:ml-16 pb-2">
                    <h3 className="mb-2 mt-6 font-semibold pt-6 text-gray-800 text-lg">2010 al 2021</h3>
                </div>
            </div>

            <div className="basis-9/10">
                <div className="ml-4 lg:ml-16 pb-2">
                    <h3 className="mb-2 mt-6 font-semibold text-2xl rosa">Licenciado en Artes Multimediales</h3>
                    <p><strong>U.N.A</strong> - Universidad Nacional de las Artes</p>
                </div>
            </div>
        </div>


        <div className="flex flex-row">
            <div className="basis-1/10">
                <div className="ml-4 lg:ml-16 pb-2">
                    <h3 className="mb-2 mt-6 font-semibold pt-6 text-gray-800 text-lg">2007 al 2010</h3>
                </div>
            </div>

            <div className="basis-9/10">
                <div className="ml-4 lg:ml-16 pb-2">
                    <h3  className="mb-2 mt-6 font-semibold text-2xl rosa">Carrera terciaria - Producción Multimedia</h3>
                    <p><strong>EMBA.</strong> Escuela de Música de Buenos Aires | 2007 - 2010</p>
                </div>
        </div>
</div>


    )
}