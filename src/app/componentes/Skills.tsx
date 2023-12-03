"use client";
import {Progress} from "@chakra-ui/react";

export default function Skills() {
    return (
        <div>
            <h1 className="w-full text-4xl my-6">My Skills</h1>
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
                </ul>
            </div>
        </div>

        )
}