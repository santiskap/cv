"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ModalProps {
    imageUrl: string;
    onClose: () => void;
    onNext: () => void;
    onPrev: () => void;
}

const Modal: React.FC<ModalProps> = ({ imageUrl, onClose, onNext, onPrev }) => {
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            } else if (event.key === 'ArrowRight') {
                onNext();
            } else if (event.key === 'ArrowLeft') {
                onPrev();
            }
        };

        document.addEventListener('keydown', handleKeyDown);
        return () => {
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose, onNext, onPrev]);

    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 backdrop-blur-sm" onClick={onClose}></div>
            <div className="bg-white p-7 shadow-md rounded-lg z-10 relative">
                <Image src={imageUrl} width={500} height={500} alt="Modal" className="w-full h-auto" />
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-800 text-base font-bold rounded-md opacity-75 hover:opacity-100 transition-opacity"
                    style={{ fontSize: '22px' }}
                >
                    &times;
                </button>
                <button
                    onClick={onPrev}
                    className="absolute left-0 top-1/2 -ml-3 transform -translate-y-1/2 bg-gray-900 text-white text-base font-bold p-2 border border-white rounded-md opacity-90 hover:opacity-100 hover:bg-blue-500 transition-opacity"
                    style={{ fontSize: '32px' }}
                >
                    &#8249;
                </button>
                <button
                    onClick={onNext}
                    className="absolute right-0 top-1/2 -mr-3 transform -translate-y-1/2 bg-gray-900 text-white text-base font-bold p-2 border border-white rounded-md opacity-90 hover:opacity-100 hover:bg-blue-500 transition-opacity"
                    style={{ fontSize: '32px' }}
                >
                    &#8250;
                </button>
            </div>
        </div>
    );
};

const ImageModal: React.FC = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');
    const [currentIndex, setCurrentIndex] = useState(0);

    const images = [
        '/tufic/tufic1.jpg',
        '/tufic/tufic2.jpg',
        '/tufic/tufic3.jpg',
        '/tufic/tufic4.jpg',
        '/ludiclab/ludiclab1.jpg',
        '/ludiclab/ludiclab2.jpg',
        '/ludiclab/ludiclab3.jpg',
        '/credivico/credivico1.jpg',
        '/credivico/credivico2.jpg',
        '/credivico/credivico3.jpg',
        '/credivico/credivico4.jpg',
        '/arinoga/arinoga1.jpg',
        '/arinoga/arinoga2.jpg',
        '/mottos/mottos1.jpg',
        '/mottos/mottos2.jpg',
        '/mottos/mottos3.jpg',
        '/adai/adai1.jpg',
        '/adai/adai2.jpg',
        '/adai/adai3.jpg',
        '/adai/adai4.jpg',
        '/heineken/heineken1.jpg',
        '/heineken/heineken2.jpg',
        '/heineken/heineken3.jpg',
        '/heineken/heineken4.jpg',
        '/lared/lared1.jpg',
        '/lared/lared2.jpg',
        '/lared/lared3.jpg',
        '/lared/lared4.jpg',
        '/visago/go1.jpg',
        '/visago/go2.jpg',
        '/megatone/megatone1.jpg',
        '/megatone/megatone2.jpg',
        '/megatone/megatone3.jpg',
        '/megatone/megatone4.jpg',
        '/yopago/yopago1.jpg',
        '/yopago/yopago2.jpg',
        '/yopago/yopago3.jpg',
        '/yopago/yopago4.jpg',
        '/sudafrica/sudafrica1.jpg',
        '/sudafrica/sudafrica2.jpg',
        '/sudafrica/sudafrica3.jpg',
        '/sudafrica/sudafrica4.jpg',
        '/tn/tn1.jpg',
        '/tn/tn2.jpg',
        '/tn/tn3.jpg',
        '/tn/tn4.jpg',
    ];

    const handleImageClick = (index: number) => {
        setSelectedImage(images[index]);
        setCurrentIndex(index);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage('');
        setModalOpen(false);
    };

    const showNextImage = () => {
        const nextIndex = (currentIndex + 1) % images.length;
        setSelectedImage(images[nextIndex]);
        setCurrentIndex(nextIndex);
    };

    const showPrevImage = () => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        setSelectedImage(images[prevIndex]);
        setCurrentIndex(prevIndex);
    };

    return (
        <div className="pt-6 pb-6 text-gray-900 text-center" id='Portfolio'>
            <section>
                {modalOpen && (
                    <Modal imageUrl={selectedImage} onClose={closeModal} onNext={showNextImage} onPrev={showPrevImage} />
                )}
                <div className="mt-10 p-4">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Tufic Helados</h1>
                    <h2 className="ml-4 text-2xl mb-4 sm:ml-0 font-bold rosa">Agencia: Ceropixel</h2>
                    <p className="text-md rosa">UI Design: Figma</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    {images.slice(0, 4).map((image, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index)}
                            className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                        >
                            <Image
                                src={image}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-auto rounded-md"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                {modalOpen && (
                    <Modal imageUrl={selectedImage} onClose={closeModal} onNext={showNextImage} onPrev={showPrevImage} />
                )}
                <div className="mt-10 p-4">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold"><Link href="https://ludiclab.vercel.app/" target='_blank'>Ludiclab - Innovación educativa</Link></h1>
                    <h2 className="ml-4 text-2xl mb-4 sm:ml-0 font-bold rosa">Agencia: Ceropixel</h2>
                    <p className="text-md rosa">UI/UX Design (Figma) / React / Next / Tailwind / Typescript</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    {images.slice(4, 7).map((image, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index + 4)}
                            className="w-4/4 lg:w-1/3 p-2 cursor-pointer justify-center"
                        >
                            <Image
                                src={image}
                                alt={`Imagen ${index + 2}`}
                                className="w-full h-auto rounded-md"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                {modalOpen && (
                    <Modal imageUrl={selectedImage} onClose={closeModal} onNext={showNextImage} onPrev={showPrevImage} />
                )}
                <div className="mt-10 p-4">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold"><Link href="https://www.credivico.com.ar/" target='_blank'>Credivico</Link></h1>
                    <h2 className="ml-4 text-2xl mb-4 sm:ml-0 font-bold rosa">Agencia: Ceropixel</h2>
                    <p className="text-md rosa">UI Design (Figma) - Wordpress development</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    {images.slice(7, 11).map((image, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index + 7)}
                            className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                        >
                            <Image
                                src={image}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-auto rounded-md"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                {modalOpen && (
                    <Modal imageUrl={selectedImage} onClose={closeModal} onNext={showNextImage} onPrev={showPrevImage} />
                )}
                <div className="mt-10 p-4">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold"><Link href="https://www.arinoga.com.ar/" target="_blank" rel="noopener noreferrer">Arinoga Finance</Link> </h1>
                    <h2 className="ml-4 text-2xl mb-4 sm:ml-0 font-bold rosa">Agencia: Ceropixel</h2>
                    <p className="text-md rosa">Product Designer / UX-UI Design (Figma) / Wordpress development</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    {images.slice(11, 13).map((image, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index + 11)}
                            className="w-4/4 lg:w-1/2 p-2 cursor-pointer justify-center"
                        >
                            <Image
                                src={image}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-auto rounded-md"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                {modalOpen && (
                    <Modal imageUrl={selectedImage} onClose={closeModal} onNext={showNextImage} onPrev={showPrevImage} />
                )}
                 <div className="mt-10 p-4">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Mottos</h1>
                    <h2 className="ml-4 text-2xl mb-4 sm:ml-0 font-bold rosa">Agencia: Selnet</h2>
                    <p className="text-md rosa">UI Design: Photoshop</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    {images.slice(13, 16).map((image, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index + 13)}
                            className="w-4/4 lg:w-1/3 p-2 cursor-pointer justify-center"
                        >
                            <Image
                                src={image}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-auto rounded-md"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                {modalOpen && (
                    <Modal imageUrl={selectedImage} onClose={closeModal} onNext={showNextImage} onPrev={showPrevImage} />
                )}
                 <div className="mt-10 p-4">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Adai</h1>
                    <h2 className="ml-4 text-2xl mb-4 sm:ml-0 font-bold rosa">Agencia: Ceropixel</h2>
                    <p className="text-md rosa">Frontend development: HTML / CSS / Javascript / Wordpress</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    {images.slice(16, 20).map((image, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index + 16)}
                            className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                        >
                            <Image
                                src={image}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-auto rounded-md"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                {modalOpen && (
                    <Modal imageUrl={selectedImage} onClose={closeModal} onNext={showNextImage} onPrev={showPrevImage} />
                )}
                 <div className="mt-10 p-4">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Heineken</h1>
                    <h2 className="ml-4 text-2xl mb-4 sm:ml-0 font-bold rosa">Agencia: 451</h2>
                    <p className="text-md rosa">Frontend development: HTML / CSS / Javascript. W3C Certification.</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    {images.slice(20, 24).map((image, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index + 20)}
                            className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                        >
                            <Image
                                src={image}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-auto rounded-md"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                {modalOpen && (
                    <Modal imageUrl={selectedImage} onClose={closeModal} onNext={showNextImage} onPrev={showPrevImage} />
                )}
                 <div className="mt-10 p-4">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Radio La Red</h1>
                    <h2 className="ml-4 text-2xl mb-4 sm:ml-0 font-bold rosa">Agencia: 451</h2>
                    <p className="text-md rosa">Frontend development: HTML / CSS / Javascript.</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    {images.slice(24, 28).map((image, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index + 24)}
                            className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                        >
                            <Image
                                src={image}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-auto rounded-md"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                {modalOpen && (
                    <Modal imageUrl={selectedImage} onClose={closeModal} onNext={showNextImage} onPrev={showPrevImage} />
                )}
                 <div className="ml-4 mt-10">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Visa Go</h1>
                    <h2 className="ml-4 text-2xl mb-4 sm:ml-0 font-bold rosa">Agencia: 451</h2>
                    <p className="text-md rosa">Frontend development: HTML / CSS / Javascript.</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    {images.slice(28, 30).map((image, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index + 28)}
                            className="w-4/4 lg:w-1/2 p-2 cursor-pointer justify-center"
                        >
                            <Image
                                src={image}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-auto rounded-md"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                {modalOpen && (
                    <Modal imageUrl={selectedImage} onClose={closeModal} onNext={showNextImage} onPrev={showPrevImage} />
                )}
                 <div className="ml-4 mt-10">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Megatone</h1>
                    <h2 className="ml-4 text-2xl mb-4 sm:ml-0 font-bold rosa">Agencia: 451</h2>
                    <p className="text-md rosa">Frontend development: HTML / CSS / Javascript.</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    {images.slice(30, 34).map((image, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index + 30)}
                            className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                        >
                            <Image
                                src={image}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-auto rounded-md"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                {modalOpen && (
                    <Modal imageUrl={selectedImage} onClose={closeModal} onNext={showNextImage} onPrev={showPrevImage} />
                )}
                  <div className="ml-4 mt-10">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Visa - Yo pago</h1>
                    <h2 className="ml-4 text-2xl mb-4 sm:ml-0 font-bold rosa">Agencia: 451</h2>
                    <p className="text-md rosa">Frontend development: HTML / CSS / Javascript.</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    {images.slice(34, 37).map((image, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index + 34)}
                            className="w-4/4 lg:w-1/3 p-2 cursor-pointer justify-center"
                        >
                            <Image
                                src={image}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-auto rounded-md"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </section>
            <section>
                {modalOpen && (
                    <Modal imageUrl={selectedImage} onClose={closeModal} onNext={showNextImage} onPrev={showPrevImage} />
                )}
                  <div className="ml-4 mt-10">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Sudáfrica 2010</h1>
                    <h2 className="ml-4 text-2xl mb-4 sm:ml-0 font-bold rosa">Agencia: 451</h2>
                    <p className="text-md rosa">Frontend development: HTML / CSS / Javascript.</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    {images.slice(38, 42).map((image, index) => (
                        <div
                            key={index}
                            onClick={() => handleImageClick(index + 38)}
                            className="w-4/4 lg:w-1/2 p-2 cursor-pointer justify-center"
                        >
                            <Image
                                src={image}
                                alt={`Imagen ${index + 1}`}
                                className="w-full h-auto rounded-md"
                                width={500}
                                height={500}
                            />
                        </div>
                    ))}
                </div>
            </section>
            
            
            {/* Repite las secciones para las demás categorías de imágenes */}
        </div>
        
    );
};

export default ImageModal;