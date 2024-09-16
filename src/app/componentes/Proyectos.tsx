import Image from "next/image";
export default function Proyectos() {
    return(
        <div className="p-10">
            <h1 className="text-4xl text-gray-600 font-light ml-2 mb-5">PROYECTOS - REACT JS</h1>
            <section className="lg:flex flex-row md:grid">
                <div className="basis-1/2">
                <Image alt="Ecommerce" className="rounded-xl" width={510} height={100} src="/proyectos/ecommerce.png" />

                </div>
                <div className="xl:pt-4 basis-1/2">
                    <h1 className="text-4xl text-pink-500 pb-4"> E-commerce</h1>
                    <p className="text-gray-700 text-blue-500 pb-4">Esta aplicación comercio electrónico está realizada íntegramente en React, Next js y Chakra Ui. <br /> El mismo muestra una serie de productos cuyos datos son obtenidos a partir de una API de jsonplaceholder.typicode.com. Lo mismo ocurre con las publicaciones, las cuales se listan en forma de grilla.</p>
                    <ul className="mb-4">
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            React
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Next Js
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Chakra UI
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Git
                        </li>
                    </ul>
                    <a
                        href="#"
                        className="inline-flex items-center justify-center h-12 w-96 px-6 font-semibold tracking-wide bg-pink-500 text-white mt-2 transition duration-200 rounded shadow-md hover:text-white bg-teal-accent-400 hover:bg-gray-800 focus:shadow-outline focus:outline-none"
                    >
                        En desarrollo
                    </a>
                </div>

            </section>




            <section className="mt-10 lg:flex flex-row md:grid">
                <div className="flex mr-10 justify-center basis-1/2">
                    <div className="xl:pt-8">
                        <Image alt="Agenda de contactos" className="rounded-xl" width={230} height={100} src="/proyectos/userlist.gif" />

                    </div>
                    <div className="xl:pt-4 ml-8">
                    <Image alt="Agenda de contactos" className="rounded-xl" width={280} height={80} src="/proyectos/user_list.png" />
                        
                    </div>
                </div>
                <div className="pr-4 mt-4 basis-1/2">
                    <h1 className="text-4xl text-pink-500 pb-4"> Listado de contactos</h1>
                    <p className="text-gray-700 text-blue-500 pb-4">Esta aplicación está realizada íntegramente en React con Next Js y Tailwind CSS. Permite al usuario la carga de diferentes contactos que se van cargando automáticamente en una lista.</p>
                    <p className="text-gray-700 text-blue-500 pb-4">La aplicación permite incorporar datos como imágenes, un nombre, la profesión y el teléfono de cada contacto.</p>
                    <ul className="mb-4">
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            React
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Next Js
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Tailwind CSS
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Git
                        </li>
                    </ul>
                    <a
                        href="https://users-git-main-santiskaps-projects.vercel.app/" target="_blank"
                        className="inline-flex items-center justify-center h-12 w-96 px-6 font-semibold tracking-wide bg-pink-500 text-white mt-2 transition duration-200 rounded shadow-md hover:text-white bg-teal-accent-400 hover:bg-gray-800 focus:shadow-outline focus:outline-none"
                    >
                        Ver proyecto
                    </a>
                </div>
            </section>

            <section className="mt-10 lg:flex flex-row md:grid">
                <div className="flex basis-1/2 justify-center">
                
                    <Image alt="Todo list" className="rounded-xl" width={500} height={300} src="/proyectos/tdlist.gif" />
                </div>
                <div className="basis-1/2">
                    <h1 className="text-4xl text-pink-500 pb-4"> To do List</h1>
                    <p className="text-gray-700 text-blue-500 pb-4">Esta aplicación está realizada íntegramente en React, Next js y Chakra Ui. <br /> El mismo permite cargar productos a una aplicación con los datos de nombre, cantidad e imagen del producto. </p>
                    <ul className="mb-4">
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            React
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Next Js
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Chakra UI
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
                            </svg>
                            Git
                        </li>
                    </ul>
                    <a
                        href="https://todolist-eight-beige.vercel.app/"
                        className="inline-flex items-center justify-center h-12 w-96 px-6 font-semibold tracking-wide bg-pink-500 text-white mt-2 transition duration-200 rounded shadow-md hover:text-white bg-teal-accent-400 hover:bg-gray-800 focus:shadow-outline focus:outline-none"
                    >
                        Ver proyecto
                    </a>
                </div>



            </section>



        </div>
    );
}
