"use client"
import Link from 'next/link'
export function Navegacion() {
    return(

        <nav className="border-gray-200 dark:bg-gray-800">

            <div className="max-w-screen-xxl flex flex-wrap items-center justify-between mx-auto p-4">
                <div>
                    <h1><span className="font-extrabold">Santiago Tula</span> - React Frontend Developer & UX Designer</h1>
                </div>
                <div className="w-full md:block md:w-auto" id="navbar-default">
                    <ul className="font-light flex flex-col md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:bg-gray-800 dark:border-gray-700">
                        <li className="m-0 p-0">
                            <Link href="/" className="block py-2 pl-3 pr-4 m-0 text-gray-800 bg-amber-400 rounded md:bg-transparent dark:text-white md:dark:text-amber-400" aria-current="page">Home</Link>
                        </li>
                        <li className="m-0">
                            <Link href="/portfolio" className="block py-2 pl-3 pr-4 m-0" aria-current="page">Trabajos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}
