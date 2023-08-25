import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBriefcase} from "@fortawesome/free-solid-svg-icons";

export function Experiencia() {
    return(
        <div className="mt-10">
            <FontAwesomeIcon className="w-10 float-left mr-6 md:block sm:hidden" icon={faBriefcase} size="xs" />
            <h2 className="ml-4 text-4xl mb-10 sm:ml-0">Experience</h2>
            <section>
                <div className="ml-16 sm:ml-0 pb-2">
                    <h3 className="mb-2 mt-6 font-semibold">2021 - REACT FRONT-END DEVELOPER</h3>
                    <p> Freelace | January 2015 - Present<br />
                        Frontend developer, React js, CSS, HTML, Javascript and Typescript.<br />
                        Designed front-end components using React, HTML, CSS and Javascript code to create a responsive web aplications that works across desktops, tablets, and other devices.
                    </p>
                </div>
            </section>
            <section>
                <div className="ml-16 pb-2 sm:ml-0">
                    <h3 className="mb-2 mt-6 font-semibold">2021 - REACT FRONT-END DEVELOPER</h3>
                    <p> Freelace | January 2015 - Present<br />
                        Frontend developer, React js, CSS, HTML, Javascript and Typescript.<br />
                        Designed front-end components using React, HTML, CSS and Javascript code to create a responsive web aplications that works across desktops, tablets, and other devices.
                    </p>
                </div>
            </section>

            <section>
                <div className="ml-16 pb-2 sm:ml-0">
                    <h3 className="mb-2 mt-6 font-semibold">2021 - REACT FRONT-END DEVELOPER</h3>
                    <p> Freelace | January 2015 - Present<br />
                        Frontend developer, React js, CSS, HTML, Javascript and Typescript.<br />
                        Designed front-end components using React, HTML, CSS and Javascript code to create a responsive web aplications that works across desktops, tablets, and other devices.
                    </p>
                </div>
            </section>

        </div>

    );
}