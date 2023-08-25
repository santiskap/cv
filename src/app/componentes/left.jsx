import Image from "next/image";

export function ColumnaIzquierda() {
    return(
        <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 2xl:w-1/6 bg-gray-800 sm:p-4 md:p-4 xl:p-8 2xl:p-8 text-center bg-slate-800">
            <Image alt="Santiago Tula" title="Santiago Tula" height={500} width={500} className="rounded-full ml-auto mr-auto pt-16 sm:pt-4" src="/cv.jpg" />
            <h1 className="2xl:text-4xl xl:text-3xl md:text-3xl sm:text-2xl xl:pt-8 md:pt-8 sm:pt-10 font-extrabold">SANTIAGO TULA</h1>
            <h2 className="text-2xl leading-8 pt-8 pb-8 font-semibold">FRONTEND DEVELOPER & UIX DESIGNER</h2>
            <h3  className="text-1xl">PROFILE</h3>
            <p className="pt-2 pb-6 pl-0 md:text-sm md:pl-4 md:pr-4">Me dedico desde el 2009 al diseño UX y al desarrollo de Front-end.</p>
            <p>Me especializo en el maquetado CSS y estructuración HTML utilizando Typescript o XJS dentro del entorno de React.</p>
            <p>Utilizo Next Js y Tailwing CSS para trabajar con más velocidad.</p>
            <p>Actualmente estoy en busqueda de un trabajo part-time o full-time donde pueda aplicar mis conocimientos y perfeccionandome en React Js.</p>
            <br/>
            <h3>CONTACTO</h3>
            <p>(+54 9 11) 6455 7628 santiagotula1@gmail.com www.sitioincreible.com.ar</p>
        </div>
    );
}