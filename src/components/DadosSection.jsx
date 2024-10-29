import React, { useState, useRef }  from "react";
import PagamentoSection from "./PagamentoSection";

const DadosSection = () => {
    const [nome, setNome] = useState('');
    const [celular, setCelular] = useState('');
    const [errors, setErrors] = useState({ nome: '', celular: '' });
    
    const [showPagamentoSection, setShowPagamentoSection] = useState(false);

    const sectionRef = useRef(null);

    const handleNomeChange = (event) => {
        const value = event.target.value;
        const regex = /^[a-zA-Z\s]*$/;
        if (regex.test(value) && value.length <= 50) {
            setNome(value);
            setErrors((prev) => ({ ...prev, nome: '' }));
        }
    };

    const handleCelularChange = (event) => {
        let value = event.target.value.replace(/\D/g, '');
    
        if (value.length <= 11) {
            if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            if (value.length > 7) value = `${value.slice(0, 10)}-${value.slice(10)}`;
            
            setCelular(value);
    
            setErrors((prev) => ({ ...prev, celular: '' }));
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;
        if (nome.trim().length < 8) {
            setErrors((prev) => ({ ...prev, nome: 'Nome completo é obrigatório!' }));
            valid = false;
        } else {
            setErrors((prev) => ({ ...prev, nome: '' })); 
        }

        if (celular.replace(/\D/g, '').length < 11) {
            setErrors((prev) => ({ ...prev, celular: 'Número de WhatsApp é obrigatório e precisa ter 11 dígitos!' }));
            valid = false;
        } else {
            setErrors((prev) => ({ ...prev, celular: '' })); 
        }       
        
        if (valid) {
            console.log('Nome enviado:', nome);
            console.log('Celular enviado:', celular);
            setShowPagamentoSection(true);
            sectionRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (showPagamentoSection) {
        return <PagamentoSection />;
    }

    return (
        <div ref={sectionRef} className="flex flex-col justify-center items-center md:mt-10 md:mb-10">
            <h1 className="text-4xl font-bold mb-10 text-violet-700">Quero meu corpo dos sonhos agora!</h1>
            <div>
                <h2 className="text-violet-700 mb-2 font-bold text-xl">Nome Completo:</h2>
                <input
                    type="text"
                    value={nome}
                    onChange={handleNomeChange}
                    placeholder="Digite seu nome e sobrenome"
                    className="p-2 border border-gray-300 rounded-xl w-64"
                    minLength={8}
                    required
                />
                {errors.nome && <p className="text-red-500">{errors.nome}</p>}

                <h2 className="text-violet-700 mt-6 mb-2 font-bold text-xl">WhatsApp (com DDD):</h2>
                <input
                    type="tel"
                    value={celular}
                    onChange={handleCelularChange}
                    placeholder="Digite seu WhatsApp"
                    className="p-2 border border-gray-300 rounded-xl w-64"
                    required
                />
                {errors.celular && <p className="text-red-500">{errors.celular}</p>}

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