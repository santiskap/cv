"use client"; // This is a client component
import { useState } from 'react';
import Image from "next/image";

const Modal = ({ imageUrl, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50">
            <div className="fixed inset-0 bg-black opacity-75"></div>
            <div className="bg-white p-4 shadow-md rounded-lg z-10">
                <Image src={imageUrl} width={500} height={500} alt="Modal" className="w-full h-auto" />
                <button
                    onClick={onClose}
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Cerrar
                </button>
            </div>
        </div>
    );
};

const ImageModal = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState('');

    const handleImageClick = (imageUrl) => {
        setSelectedImage(imageUrl);
        setModalOpen(true);
    };

    const closeModal = () => {
        setSelectedImage('');
        setModalOpen(false);
    };

    return (
        <div className="pt-6 pb-6 text-gray-900 text-center">
            <section>
                <div className="ml-4">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Heineken</h1>
                    <h2 className="ml-4 text-md mb-4 sm:ml-0 font-bold mb-4">Agencia: 451</h2>
                    <p className="text-sm">Frontend development: HTML / CSS / Javascript. W3C Certification.</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    <div
                        onClick={() => handleImageClick('/heineken/heineken1.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center justify-center"
                    >
                        
                        <Image
                            src="/heineken/heineken1.jpg"
                            alt="Imagen 1"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />

                    </div>
                    <div
                        onClick={() => handleImageClick('/heineken/heineken2.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/heineken/heineken2.jpg"
                            alt="Imagen 2"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/heineken/heineken3.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/heineken/heineken3.jpg"
                            alt="Imagen 3"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/heineken/heineken4.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/heineken/heineken4.jpg"
                            alt="Imagen 1"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    {modalOpen && (
                        <Modal imageUrl={selectedImage} onClose={closeModal} />
                    )}
                </div>
            </section>

            <section className="bg-gray-200 pt-2 pb-2">
                <div className="ml-4 mt-10">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Sudáfrica 2010</h1>
                    <h2 className="ml-4 text-md mb-4 sm:ml-0 font-bold mb-4">Agencia: 451</h2>
                    <p className="text-sm">Frontend development: HTML / CSS / Javascript.</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    <div
                        onClick={() => handleImageClick('/sudafrica/sudafrica1.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/sudafrica/sudafrica1.jpg"
                            alt="Imagen 1"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div
                        onClick={() => handleImageClick('/sudafrica/sudafrica2.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/sudafrica/sudafrica2.jpg"
                            alt="Imagen 2"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/sudafrica/sudafrica3.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/sudafrica/sudafrica3.jpg"
                            alt="Imagen 3"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/sudafrica/sudafrica4.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/sudafrica/sudafrica4.jpg"
                            alt="Imagen 4"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/sudafrica/sudafrica5.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/sudafrica/sudafrica5.jpg"
                            alt="Imagen 5"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div
                        onClick={() => handleImageClick('/sudafrica/sudafrica6.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/sudafrica/sudafrica6.jpg"
                            alt="Imagen 6"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div
                        onClick={() => handleImageClick('/sudafrica/sudafrica7.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/sudafrica/sudafrica7.jpg"
                            alt="Imagen 7"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    {modalOpen && (
                        <Modal imageUrl={selectedImage} onClose={closeModal} />
                    )}
                </div>
            </section>

            <section>
                <div className="ml-4 mt-10">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Visa - Yo pago</h1>
                    <h2 className="ml-4 text-md mb-4 sm:ml-0 font-bold mb-4">Agencia: 451</h2>
                    <p className="text-sm">Frontend development: HTML / CSS / Javascript.</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    <div
                        onClick={() => handleImageClick('/yopago/yopago1.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/yopago/yopago1.jpg"
                            alt="Imagen 1"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div
                        onClick={() => handleImageClick('/yopago/yopago2.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/yopago/yopago2.jpg"
                            alt="Imagen 2"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/yopago/yopago3.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/yopago/yopago3.jpg"
                            alt="Imagen 3"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/yopago/yopago4.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/yopago/yopago4.jpg"
                            alt="Imagen 4"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/yopago/yopago5.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/yopago/yopago5.jpg"
                            alt="Imagen 5"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>


                    <div
                        onClick={() => handleImageClick('/yopago/yopago7.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/yopago/yopago7.jpg"
                            alt="Imagen 6"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    {modalOpen && (
                        <Modal imageUrl={selectedImage} onClose={closeModal} />
                    )}
                </div>
            </section>

            <section className="bg-gray-200 pt-2 pb-2">
                <div className="ml-4 mt-10">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Visa Go</h1>
                    <h2 className="ml-4 text-md mb-4 sm:ml-0 font-bold mb-4">Agencia: 451</h2>
                    <p className="text-sm">Frontend development: HTML / CSS / Javascript.</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    <div
                        onClick={() => handleImageClick('/visago/go1.jpg')}
                        className="w-4/4 lg:w-1/2 p-2 cursor-pointer"
                    >
                        <Image
                            src="/visago/go1.jpg"
                            alt="Imagen 1"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div
                        onClick={() => handleImageClick('/visago/go2.jpg')}
                        className="w-4/4 lg:w-1/2 p-2 cursor-pointer"
                    >
                        <Image
                            src="/visago/go2.jpg"
                            alt="Imagen 2"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>



                    {modalOpen && (
                        <Modal imageUrl={selectedImage} onClose={closeModal} />
                    )}
                </div>
            </section>

            <section>
                <div className="ml-4 mt-10 p-4">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Radio La Red</h1>
                    <h2 className="ml-4 text-md mb-4 sm:ml-0 font-bold mb-4">Agencia: 451</h2>
                    <p className="text-sm">Frontend development: HTML / CSS / Javascript.</p>
                </div>
                <div className="flex flex-wrap mt-6">
                    <div
                        onClick={() => handleImageClick('/lared/lared1.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/lared/lared1.jpg"
                            alt="Imagen 1"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div
                        onClick={() => handleImageClick('/lared/lared2.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/lared/lared2.jpg"
                            alt="Imagen 2"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/lared/lared3.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/lared/lared3.jpg"
                            alt="Imagen 3"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/lared/lared4.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/lared/lared4.jpg"
                            alt="Imagen 4"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/lared/lared5.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/lared/lared5.jpg"
                            alt="Imagen 5"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/lared/lared6.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/lared/lared6.jpg"
                            alt="Imagen 6"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    {modalOpen && (
                        <Modal imageUrl={selectedImage} onClose={closeModal} />
                    )}
                </div>
            </section>

            <section className="bg-gray-200 pt-2 pb-2">
                <div className="ml-4 mt-10">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Megatone</h1>
                    <h2 className="ml-4 text-md mb-4 sm:ml-0 font-bold mb-4">Agencia: 451</h2>
                    <p className="text-sm">Frontend development: HTML / CSS / Javascript.</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    <div
                        onClick={() => handleImageClick('/megatone/megatone1.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/megatone/megatone1.jpg"
                            alt="Imagen 1"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div
                        onClick={() => handleImageClick('/megatone/megatone2.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/megatone/megatone2.jpg"
                            alt="Imagen 2"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/megatone/megatone3.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/megatone/megatone3.jpg"
                            alt="Imagen 3"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/megatone/megatone4.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/megatone/megatone4.jpg"
                            alt="Imagen 4"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/megatone/megatone5.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/megatone/megatone5.jpg"
                            alt="Imagen 5"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/megatone/megatone6.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/megatone/megatone6.jpg"
                            alt="Imagen 6"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    {modalOpen && (
                        <Modal imageUrl={selectedImage} onClose={closeModal} />
                    )}
                </div>
            </section>

            <section>
                <div className="ml-4 mt-10">
                    <h1 className="ml-4 text-3xl mb-4 sm:ml-0 font-extrabold">Todo Noticias</h1>
                    <h2 className="ml-4 text-md mb-4 sm:ml-0 font-bold mb-4">Agencia: 451</h2>
                    <p className="text-sm">Frontend development: HTML / CSS / Javascript.</p>
                </div>
                <div className="flex flex-wrap mt-6 p-4">
                    <div
                        onClick={() => handleImageClick('/tn/tn1.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/tn/tn1.jpg"
                            alt="Imagen 1"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div
                        onClick={() => handleImageClick('/tn/tn2.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/tn/tn2.jpg"
                            alt="Imagen 2"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/tn/tn3.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/tn/tn3.jpg"
                            alt="Imagen 3"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/tn/tn4.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/tn/tn4.jpg"
                            alt="Imagen 4"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    <div
                        onClick={() => handleImageClick('/tn/tn5.jpg')}
                        className="w-1/4 p-4 cursor-pointer"
                    >
                        <Image
                            src="/tn/tn5.jpg"
                            alt="Imagen 5"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div
                        onClick={() => handleImageClick('/tn/tn6.jpg')}
                        className="w-4/4 lg:w-1/4 p-2 cursor-pointer justify-center"
                    >
                        <Image
                            src="/tn/tn6.jpg"
                            alt="Imagen 6"
                            className="w-full h-auto rounded-md"
                            width={500}
                            height={500}
                        />
                    </div>

                    {modalOpen && (
                        <Modal imageUrl={selectedImage} onClose={closeModal} />
                    )}
                </div>
            </section>

        </div>
    );
};

export default ImageModal;
