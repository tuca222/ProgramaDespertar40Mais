import React, { useState, useRef }  from "react";
import PagamentoSection from "./PagamentoSection";

const DadosSection = () => {
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [showPagamentoSection, setShowPagamentoSection] = useState(false);

    const handleNomeChange = (event) => {
        setNome(event.target.value);
    };

    const handleCelularChange = (event) => {
        setCelular(event.target.value);
    };

    const sectionRef = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Nome enviado:', nome);
        console.log('Celular enviado:', celular);
        setShowPagamentoSection(true);
        // Rolar até o início da seção
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    if (showPagamentoSection) {
        return <PagamentoSection />;
    }

    return (
        <div ref={sectionRef} className="flex flex-col justify-center items-center md:mt-10 md:mb-10">
            <h1 className="text-4xl font-bold mb-10 text-violet-700">Quero meu corpo dos sonhos agora!</h1>
            <div>
                <h2 className="text-violet-700 mb-2 font-bold text-xl">Seu Nome:</h2>
                <input
                    type="text"
                    value={nome}
                    onChange={handleNomeChange}
                    placeholder="Digite seu nome"
                    className="p-2 border border-gray-300 rounded-xl"
                    required
                />
                <h2 className="text-violet-700 mt-6 mb-2 font-bold text-xl">Seu WhatsApp:</h2>
                <input
                    type="tel"
                    value={celular}
                    onChange={handleCelularChange}
                    placeholder="Digite seu WhatsApp"
                    className="p-2 border border-gray-300 rounded-xl mb-4"
                    required
                />

            </div>
            <button onClick={handleSubmit} className="bg-yellow-500 text-violet-700 font-bold py-2 px-4 rounded-full mt-6">Quero fazer parte do Despertar 40+!</button>
            
            <div className="flex flex-row justify-center items-center gap-5 md:gap-20 mt-6 mb-6">
                <div className="font-bold text-xl md:text-2xl">
                    <p className="mt-5 mb-4">R$ 197,00 à vista (no Pix ou no Cartão)</p>
                    <p className="mb-4">ou até</p>
                    <p className="mb-4">6x de R$ 40,00</p>
                </div>
                
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

export default DadosSection;