import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase, faGraduationCap} from "@fortawesome/free-solid-svg-icons";

export function Edu2() {
    return(

        <div className="container mx-auto">
            <div className="bg-primary text-primary-foreground mb-4 rounded-lg">
                <FontAwesomeIcon className="w-10 float-left mr-6" icon={faGraduationCap} size="xs" />
                <h2 className="lg:mb-10 sm:ml-0 text-4xl">Educación</h2>
            </div>        
        <div className="flex flex-col md:flex-row gap-4">
          {/* Columna Izquierda */}
          <div className="w-full md:w-1/2 bg-primary text-primary-foreground rounded-lg">
                    <h3 className="font-semibold text-2xl rosa">Licenciado en Artes Multimediales</h3>
                    <h3 className="mb-2 font-semibold 2text-gray-800 text-lg">2010 - 2021</h3>
                    <p><strong>U.N.A</strong> - Universidad Nacional de las Artes</p>
          </div>
          
          {/* Columna Derecha */}
          <div className="w-full md:w-1/2 bg-secondary text-secondary-foreground rounded-lg">
            <h3  className="font-semibold text-2xl rosa">Carrera terciaria - Producción Multimedia</h3>
            <h3 className="mb-2 font-semibold 2text-gray-800 text-lg">2007 - 2010</h3>
            <p><strong>EMBA.</strong> Escuela de Música de Buenos Aires</p>
          </div>
        </div>
      </div>

    );
}