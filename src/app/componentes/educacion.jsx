import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";

export function Edu() {
    return(
        <div className="mt-10">
            <FontAwesomeIcon className="w-10 float-left mr-6 md:block sm:hidden" icon={faGraduationCap} size="xs" />
            <h2 className="ml-4 text-4xl mb-4 sm:ml-0">Education</h2>
            <section>
                <div className="ml-16 sm:ml-0">
                    <h3  className="mb-2 mt-6 font-semibold">College degree - MULTIMEDIAL Arts</h3>
                    <h2>U.N.A - Universidad Nacional de las Artes | 2010 - 2021</h2>
                </div>

                <div className="ml-16 sm:ml-0">
                    <h3  className="mb-2 mt-6 font-semibold">Tertiary degree - MULTIMEDIA Production</h3>
                    <h2>EMBA. Escuela de Música de Buenos Aires | 2007 - 2010</h2>
                </div>

            </section>
        </div>

    );
}