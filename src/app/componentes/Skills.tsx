"use client";
import {Progress} from "@chakra-ui/react";

export default function Skills() {
    return (
        <div>
            <h1 className="w-full text-4xl my-6">Mis Skills</h1>
            <div className="mb-10">
                <p>🖌️ Diseño UI/UX: Diseño de interfaces, prototipado en Figma, wireframes, sistemas de diseño y Design Thinking.</p>
                <p>🔍 Experiencia de Usuario (UX): Arquitectura de información, user flows, heurísticas de usabilidad y pruebas con usuarios.</p>
                <p>💻 Frontend Development: Desarrollo de componentes reutilizables con React.js, Next.js y TypeScript.</p>
                <p>🎨 Estilos y Animaciones: Tailwind CSS, Sass, Bootstrap, Motion UI, microinteracciones y transiciones fluidas.</p>
                <p>📌 Colaboración y Procesos: Metodologías ágiles (Scrum, Kanban), herramientas de gestión como Trello, Jira y trabajo en equipos multidisciplinarios con desarrolladores y stakeholders.</p>
                <p>🚀 Deploy y Versionado: Git, GitHub, CI/CD con Vercel, Netlify, optimización de performance y accesibilidad.</p>
            </div>
            <div className="flex">
                <ul className="w-full md:columns-2">
                    <li className="mb-6">
                        <div>
                            <h2 className="text-lg font-bold">HTML5
                            <span className="font-light">
                            - 95%
                            </span>
                            </h2>
                        </div>
                        <div>
                            <Progress value={95} size='xs' colorScheme='pink' />
                        </div>
                    </li>
                    <li className="mb-6">
                        <div>
                            <h2 className="text-lg font-bold">CSS3 -
                                <span className="font-light text-lg pl-2">
                             95%
                            </span>
                            </h2>
                        </div>
                        <div>
                            <Progress value={95} size='xs' colorScheme='pink' />
                        </div>
                    </li>
                    <li className="mb-6">
                        <div>
                            <h2 className="text-lg font-bold">Javascript -
                                <span className="font-light text-lg pl-2">
                             75%
                            </span>
                            </h2>
                        </div>
                        <div>
                            <Progress value={75} size='xs' colorScheme='pink' />
                        </div>
                    </li>
                    <li className="mb-6">
                        <div>
                            <h2 className="text-lg font-bold"> React Js -
                                <span className="font-light text-lg pl-2">
                             70%
                            </span>
                            </h2>
                        </div>
                        <div>
                            <Progress value={70} size='xs' colorScheme='pink' />
                        </div>
                    </li>
                    <li className="mb-6">
                        <div>
                            <h2 className="text-lg font-bold">Next Js -
                                <span className="font-light text-lg pl-2">
                             75%
                            </span>
                            </h2>
                        </div>
                        <div>
                            <Progress value={75} size='xs' colorScheme='pink' />
                        </div>
                    </li>
                    <li className="mb-6">
                        <div>
                            <h2 className="text-lg font-bold">Tailwind CSS -
                                <span className="font-light text-lg pl-2">
                             95%
                            </span>
                            </h2>
                        </div>
                        <div>
                            <Progress value={95} size='xs' colorScheme='pink' />
                        </div>
                    </li>
                    <li className="mb-6">
                        <div>
                            <h2 className="text-lg font-bold">Typescript -
                                <span className="font-light text-lg pl-2">
                             65%
                            </span>
                            </h2>
                        </div>
                        <div>
                            <Progress value={65} size='xs' colorScheme='pink' />
                        </div>
                    </li>
                    <li className="mb-6">
                        <div>
                            <h2 className="text-lg font-bold">Vercel
                                <span className="font-light text-lg pl-2">
                             100%
                            </span>
                            </h2>
                        </div>
                        <div>
                            <Progress value={100} size='xs' colorScheme='pink' />
                        </div>
                    </li>
                    <li className="mb-6">
                        <div>
                            <h2 className="text-lg font-bold">Git
                                <span className="font-light text-lg pl-2">
                             100%
                            </span>
                            </h2>
                        </div>
                        <div>
                            <Progress value={100} size='xs' colorScheme='pink' />
                        </div>
                    </li>
                    <li className="mb-6">
                        <div>
                            <h2 className="text-lg font-bold">Chakra UI
                                <span className="font-light text-lg pl-2">
                             70%
                            </span>
                            </h2>
                        </div>
                        <div>
                            <Progress value={70} size='xs' colorScheme='pink' />
                        </div>
                    </li>
                    <li className="mb-6">
                        <div>
                            <h2 className="text-lg font-bold">Material UI
                                <span className="font-light text-lg pl-2">
                             70%
                            </span>
                            </h2>
                        </div>
                        <div>
                            <Progress value={70} size='xs' colorScheme='pink' />
                        </div>
                    </li>
                    <li className="mb-6">
                        <div>
                            <h2 className="text-lg font-bold">Figma
                                <span className="font-light text-lg pl-2">
                             80%
                            </span>
                            </h2>
                        </div>
                        <div>
                            <Progress value={80} size='xs' colorScheme='pink' />
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        )
}