import React, { useState, useRef } from "react";
import DadosSection from './DadosSection';

const PrecoSection = () => {
    // State para mostrar ou não o pagamento
    const [showDadosSection, setShowDadosSection] = useState(false);

    // Referência para a seção
    const sectionRef = useRef(null);

    const handleButtonClick = () => {
        setShowDadosSection(true);
        // Rolar até o início da seção
        sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    };

    if (showDadosSection) {
        return <DadosSection />;
    }

    return (
        <div ref={sectionRef}>
            <div className="max-w-4xl mx-auto text-center text-lg text-gray-700">
                <h2 className="text-3xl font-bold mb-6 text-violet-700">E qual será o valor do seu investimento?</h2>
                <p className="mb-6">
                    O Despertar 40+ é muito mais do que um programa de nutrição, ele é um verdadeiro caminho para transformar a sua vida! Com orientação especializada, acompanhamento personalizado e conteúdo de altíssimo valor, você terá em mãos tudo o que precisa para alcançar mais saúde, longevidade e bem-estar.
                </p>
                <p className='mb-6'>
                    Apesar de ser difícil calcular exatamente o valor do Despertar 40+, os conhecimentos e materiais que você receberá valem minimamente
                    <span className="font-bold"> R$ 699,00</span>.
                </p>
                <p className="mb-6">
                    Mas queremos que você tenha acesso à transformação que você merece por uma condição super acessível!
                </p>
                <p className="mb-4">
                    Serão mais de 50 horas de conteúdo, 12 materiais complementares e lives com profissionais da área.
                </p>
                <p className='mb-4 text-xl'>
                    Por apenas <span className="text-yellow-600 font-bold text-3xl">R$ 197,00 </span> 
                </p>
                <p className='mb-3'>
                    <span className="font-bold text-xl">à vista (no Pix ou no Cartão)</span>
                </p>
                <p className="mb-3 text-xl">
                    ou até 
                </p>
                <p className="mb-6">
                    <span className="text-yellow-600 font-bold text-3xl">6 x de R$ 40,00 </span>
                </p>
                <p className="mb-6">
                    você garante sua vaga e começa a jornada para o seu novo eu.
                </p>
                <p className=" mb-6">
                    Não perca essa chance!
                </p>
                <p className=" mb-6">
                    Inscreva-se agora e descubra o poder do Despertar 40+
                </p>
            </div>
            <div className='flex justify-center'>
                <button
                    onClick={handleButtonClick}
                    className="bg-yellow-600 hover:bg-yellow-700 text-violet-700 font-bold m-5 py-3 px-6 rounded-full transition duration-300 breathing"
                >
                    QUERO MEU CORPO DOS SONHOS AGORA!
                </button>
            </div>
        </div>
    )
}

export default PrecoSection;