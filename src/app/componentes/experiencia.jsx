import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

export function Experiencia() {
    return(
        <div>
            <div className="mt-10">
                <FontAwesomeIcon className="w-8 float-left mr-6" icon={faBriefcase} size="xs" />
                <h2 className=" lg:mb-10 sm:ml-0 text-4xl">Experiencia</h2>
            </div>

                <div className="flex flex-row">
                    <div>
                        <div className="pb-2">
                            <h3 className="font-semibold pt-6 text-gray-800 text-lg">Desde 2017</h3>
                            <h3 className="font-semibold text-2xl rosa">Front-end Developer / React Js</h3>
                            <p> <strong>Freelace</strong> | Enero 2017 al presente. Desarrollo de sitios web responsivos y de componentes funcionales en React Js y Next Js. Figma to React js.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div>
                        <div className="pb-2">
                            <h3 className="font-semibold pt-6 text-gray-800 text-lg">2019-2022</h3>
                            <h3 className="font-semibold text-2xl rosa">UX Designer - Frontend Developer</h3>
                            <p> <strong>FLACSO</strong> - Facultad Latinoamericana de Ciencias Sociales. Frontend developer utilizando CSS, HTML, Javascript y Wordpress</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row"> 
                    <div>
                        <div className="pb-2">
                            <h3 className="font-semibold pt-6 text-gray-800 text-lg">2010-2012</h3>
                            <h3 className="font-semibold text-2xl rosa">Project Manager</h3>
                            <p> <strong>Agencia Selnet</strong>. Project Manager de diversos sitios y aplicaciones web desarrollados en HTML5, CSS3, Bootstrap y Wordpress.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div>
                        <div className="pb-2">
                            <h3 className="font-semibold pt-6 text-gray-800 text-lg">2012-2013</h3>
                            <h3 className="font-semibold text-2xl rosa">Front-end Developer</h3>
                            <p> <strong>CMD - Grupo Clarín</strong>. Frontend developer, Pixel Perfect, PSD to HTML, CSS3, HTML5, Javascript y Jquery.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div>
                        <div className="pb-2">
                            <h3 className="font-semibold pt-6 text-gray-800 text-lg">2012-2013</h3>
                            <h3 className="font-semibold text-2xl rosa">Front-end Developer</h3>
                            <p> <strong>Latinlingua</strong> | 2011 y 2012. Frontend developer, Pixel Perfect, CSS3, HTML5, Javascript y Jquery.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div>
                        <div className="pb-2">
                            <h3 className="font-semibold pt-6 text-gray-800 text-lg">2009 - 2012</h3> 
                            <h3 className="font-semibold text-2xl rosa">Front-end Developer</h3>
                            <p> <strong>Agencia 451</strong>. Frontend developer, CSS animation, Javascript y Jquery.</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row">
                    <div>
                        <div className="pb-2">
                            <h3 className="font-semibold pt-6 text-gray-800 text-lg">2009-2010</h3>
                            <h3 className="font-semibold text-2xl rosa">PSD to HTML</h3>
                            <p> <strong>Escuela Argentina de Negocios</strong>. Frontend developer, CSS animation, Javascript y Jquery.
                            </p>
                        </div>
                    </div>
                </div>
        </div>

    );
}