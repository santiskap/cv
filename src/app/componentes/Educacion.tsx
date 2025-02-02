import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGraduationCap} from "@fortawesome/free-solid-svg-icons";

export default function Educacion() {
    return (
      <div className="container mx-auto p-4">
        {/* Fila 1 */}
        <div className="bg-primary text-primary-foreground p-4 mb-4 rounded-lg">
        <FontAwesomeIcon className="w-10 float-left mr-6" icon={faGraduationCap} size="xs" />
        <h2 className="ml-4 mb:2 lg:mb-10 sm:ml-0 sm:text-2xl md:text-3xl lg:text-4xl">Educación</h2>
        </div>
  
        {/* 2 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div className="bg-secondary text-secondary-foreground p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Columna 1</h2>
          </div>
          <div className="bg-accent text-accent-foreground p-4 rounded-lg">
            <h2 className="text-xl font-semibold">Columna 2</h2>
          </div>
        </div>
  
        {/* Fila 2 */}
        <div className="bg-muted text-muted-foreground p-4 mb-4 rounded-lg">
          <h2 className="text-xl font-semibold">Fila 2</h2>
        </div>
  
        {/* 5 secciones de 2 columnas (15-20% | 80-85%) */}
        {[1, 2, 3, 4, 5].map((section) => (
          <div key={section} className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="w-full md:w-1/5 bg-primary text-primary-foreground p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Columna Izquierda {section}</h2>
            </div>
            <div className="w-full md:w-4/5 bg-secondary text-secondary-foreground p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Columna Derecha {section}</h2>
            </div>
          </div>
        ))}
      </div>
    )
  }