import Image from "next/image";

export default function Proyectos() {
    return (
        <div className="px-4 py-10">
            <h1 className="text-4xl text-gray-600 font-light mb-5 text-center pb-10">PROYECTOS - REACT JS</h1>

            {/* E-commerce Project */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center">
                    <Image
                        alt="Ecommerce"
                        className="rounded-xl"
                        width={650}
                        height={100}
                        src="/proyectos/ecommerce.png"
                    />
                </div>
                <div>
                    <h1 className="text-4xl text-pink-500 pb-4">E-commerce</h1>
                    <p className="text-gray-700 text-blue-500 pb-4">
                        Esta aplicación comercio electrónico está realizada íntegramente en React, Next js y Chakra Ui. <br />
                        El mismo muestra una serie de productos cuyos datos son obtenidos a partir de una API de jsonplaceholder.typicode.com. Lo mismo ocurre con las publicaciones, las cuales se listan en forma de grilla.
                    </p>
                    <ul className="mb-4">
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            React
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Next Js
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Chakra UI
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Git
                        </li>
                    </ul>
                    <a
                        href="https://ecommerce-pi-eosin-21.vercel.app/"
                        target="_blank"
                        className="inline-flex items-center justify-center h-12 w-full md:w-96 px-6 font-semibold tracking-wide bg-pink-500 text-white mt-2 transition duration-200 rounded shadow-md hover:text-white hover:bg-gray-800"
                    >
                        Ver proyecto
                    </a>
                </div>
            </section>

            {/* Agenda de Contactos */}
            <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center">
                    <Image alt="Agenda de contactos" className="rounded-xl" width={230} height={100} src="/proyectos/userlist.gif" />
                </div>
                <div>
                    <h1 className="text-4xl text-pink-500 pb-4">Listado de contactos</h1>
                    <p className="text-gray-700 text-blue-500 pb-4">
                        Esta aplicación está realizada íntegramente en React con Next Js y Tailwind CSS. Permite al usuario la carga de diferentes contactos que se van cargando automáticamente en una lista.
                    </p>
                    <p className="text-gray-700 text-blue-500 pb-4">
                        La aplicación permite incorporar datos como imágenes, un nombre, la profesión y el teléfono de cada contacto.
                    </p>
                    <ul className="mb-4">
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            React
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Next Js
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Tailwind CSS
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            Git
                        </li>
                    </ul>
                    <a
                        href="https://users-git-main-santiskaps-projects.vercel.app/"
                        target="_blank"
                        className="inline-flex items-center justify-center h-12 w-full md:w-96 px-6 font-semibold tracking-wide bg-pink-500 text-white mt-2 transition duration-200 rounded shadow-md hover:text-white hover:bg-gray-800"
                    >
                        Ver proyecto
                    </a>
                </div>
            </section>

            {/* To Do List */}
            <section className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex justify-center">
                    <Image alt="To Do List" className="rounded-xl" width={500} height={300} src="/proyectos/todo.gif" />
                </div>
                <div>
                    <h1 className="text-4xl text-pink-500 pb-4">To Do List</h1>
                    <p className="text-gray-700 text-blue-500 pb-4">
                        Esta aplicación permite crear, marcar como completadas y eliminar tareas en una lista. Está realizada con React, y hace uso del localStorage para persistir las tareas entre sesiones.
                    </p>
                    <ul className="mb-4">
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            React
                        </li>
                        <li className="flex items-center">
                            <svg className="w-3.5 h-3.5 mr-2 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                            </svg>
                            LocalStorage
                        </li>
                    </ul>
                    <a
                        href="https://todolist-eight-beige.vercel.app/"
                        target="_blank"
                        className="inline-flex items-center justify-center h-12 w-full md:w-96 px-6 font-semibold tracking-wide bg-pink-500 text-white mt-2 transition duration-200 rounded shadow-md hover:text-white hover:bg-gray-800"
                    >
                        Ver proyecto
                    </a>
                </div>
            </section>
        </div>
    );
}
