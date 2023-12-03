import Image from "next/image";

export function Left() {
    return(
        <div className="p-4 xl:p-8 text-center text-white">
            <Image alt="Santiago Tula" title="Santiago Tula" height={500} width={500}
                   className="rounded-full ml-auto mr-auto pt-16 sm:pt-4" src="/cv.jpg" />
            <h1 className="2xl:text-4xl xl:text-3xl md:text-3xl sm:text-2xl xl:pt-8 md:pt-8 sm:pt-10 font-extrabold">SANTIAGO TULA</h1>
            <h2 className="text-2xl leading-8 pt-8 pb-8 font-semibold">FRONTEND DEVELOPER & UIX DESIGNER</h2>
            <h3  className="text-1xl">PERFIL:</h3>
            <p className="pt-2 pb-6 pl-0 text-base md:text-sm md:pl-4 md:pr-4">Me dedico desde el 2009 al diseño UX y al desarrollo de Front-end.</p>
            <p>Me especializo en el maquetado CSS y estructuración HTML utilizando Typescript o JSX dentro del entorno de React.</p>
            <p>Utilizo Next Js y Tailwing CSS.</p>
            <p>Actualmente estoy en busqueda de un trabajo part-time o full-time donde pueda aplicar mis conocimientos y perfeccionandome en React Js.</p>
            <br/>
            <h3>CONTACTO</h3>
            <p className="text-xs lg:text-base">(+54 9 11) 6455 7628 santiagotula1@gmail.com www.sitioincreible.com.ar</p>
        </div>
    );
}