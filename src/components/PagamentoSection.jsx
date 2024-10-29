import React from "react";

const PagamentoSection = () => {

    return (
        <div className="flex flex-col justify-center items-center md:mt-10 md:mb-10">
            <h1 className="text-4xl font-bold mb-10 text-violet-700">Quero meu corpo dos sonhos agora!</h1>
            <div className="flex flex-col">
                <div className="flex flex-row justify-center items-center gap-5 md:gap-20 mb-6">
                    <div className="font-bold text-xl md:text-2xl">
                        <p className="mb-4">R$ 197,00 à vista (no Pix ou no Cartão)</p>
                        <p className="mb-4">ou até</p>
                        <p className="mb-4">6x de R$ 40,00</p>
                    </div>
                    
                </div>
                <h1 className="text-4xl font-bold mb-6 text-violet-700">Forma de pagameto:</h1>
                <a
                    href="#video-explicativo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-3xl mb-6 py-3 font-semibold bg-yellow-500 hover:bg-yellow-600 border-black text-center border-2 rounded-xl w-full max-w-md">
                        PIX
                </a>
                <a
                    href="#video-explicativo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-3xl mb-6 py-3 font-semibold bg-yellow-500 hover:bg-yellow-600 border-black text-center border-2 rounded-xl w-full max-w-md">
                        Cartão à vista
                </a>
                <a
                    href="#video-explicativo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl md:text-3xl mb-6 py-3 font-semibold bg-yellow-500 hover:bg-yellow-600 border-black text-center border-2 rounded-xl w-full max-w-md">
                        Cartão em vezes
                </a>
            </div>
            <div className="text-2xl font-bold text-yellow-500 bg-purple-500 mt-8 px-3 rounded-xl" style={{ maxWidth: '900px' }}>
                <h3 className="mt-4">
                    Vamos juntas no Despertar 40+ onde você irá ampliar o seu conhecimento e tomar as rédeas da sua vida.
                </h3>
                <h3 className="mt-6 mb-4">
                    Porque o conhecimento é libertador!
                </h3>
            </div>
        </div>
    );
};

export default PagamentoSection;