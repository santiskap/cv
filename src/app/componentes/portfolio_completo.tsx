"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

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
            <div className="fixed inset-0 bg-black opacity-75" onClick={onClose}></div>
            <div className="bg-white p-4 shadow-md rounded-lg z-10 relative">
                <Image src={imageUrl} width={500} height={500} alt="Modal" className="w-full h-auto" />
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 bg-transparent text-black text-2xl font-bold"
                >
                    &times;
                </button>
                <button
                    onClick={onPrev}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-transparent text-black text-2xl font-bold"
                >
                    &#8249;
                </button>
                <button
                    onClick={onNext}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent text-black text-2xl font-bold"
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
            {/* Repite las secciones para las demás categorías de imágenes */}
        </div>
    );
};

export default ImageModal;