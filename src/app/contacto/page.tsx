"use client";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function Contacto() {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_uy6e2l1', 'template_xnarxbd', form.current, 'Y_ZdufVrpSUYf1AEV')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return(
        <main className="flex flex-col items-center justify-between">
            <div>
                <main className="flex container">
                    <h1>Contacto</h1>
                </main>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="text" name="user_name" />
                <label className="block text-gray-700 text-sm font-bold mb-2">Email</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" type="email" name="user_email" />
                <label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
                <textarea  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mb-4" name="message" />
                <div className="g-recaptcha" data-sitekey="6LdlLnMoAAAAAHNM0bqecoQoRMvcKyJP7lZgW-bI"></div>
                <input className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" type="submit" value="Send" />
            </form>
        </main>
    );
}
