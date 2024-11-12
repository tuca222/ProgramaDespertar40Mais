import React, { useState, useRef } from "react";
// import PagamentoSection from "./PagamentoSection";

const DadosSection = () => {
    const [privacidadeExpanded, setPrivacidadeExpanded] = useState(false);
    const [consenso, setConsenso] = useState(false);
    const [cadastrarClicked, setCadastrarClicked] = useState(false);
    const [nomeCompleto, setNomeCompleto] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [errors, setErrors] = useState({ nomeCompleto: '', whatsapp: '' });

    const [showPagamentoSection, setShowPagamentoSection] = useState(false);

    const sectionRef = useRef(null);

    const privacidadeClickedExpand = (event) => {
        event.stopPropagation()
        setPrivacidadeExpanded(!privacidadeExpanded);
    }

    const handleConsenso = (event) => {
        setConsenso(event.target.checked);
        setErrors((prev) => ({ ...prev, consenso: '' }));
    }

    const handleNomeCompletoChange = (event) => {
        const value = event.target.value;
        const regex = /^[a-zA-Z\s]*$/;
        if (regex.test(value) && value.length <= 50) {
            setNomeCompleto(value);
            setErrors((prev) => ({ ...prev, nomeCompleto: '' }));
        }
    };

    const handleWhatsappChange = (event) => {
        let value = event.target.value.replace(/\D/g, '');

        if (value.length <= 11) {
            if (value.length > 2) value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
            if (value.length > 7) value = `${value.slice(0, 10)}-${value.slice(10)}`;

            setWhatsapp(value);

            setErrors((prev) => ({ ...prev, whatsapp: '' }));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        let valid = true;

        if (nomeCompleto.trim().length < 8) {
            setErrors((prev) => ({ ...prev, nomeCompleto: 'Nome completo é obrigatório!' }));
            valid = false;
        } else {
            setErrors((prev) => ({ ...prev, nomeCompleto: '' }));
        }

        if (whatsapp.replace(/\D/g, '').length < 11) {
            setErrors((prev) => ({ ...prev, whatsapp: 'Número de WhatsApp é obrigatório e precisa ter 11 dígitos!' }));
            valid = false;
        } else {
            setErrors((prev) => ({ ...prev, whatsapp: '' }));
        }

        if (!consenso) {
            setErrors((prev) => ({ ...prev, consenso: 'Você precisa concordar com a Política de Privacidade!' }));
            valid = false;
        } else {
            setErrors((prev) => ({ ...prev, consenso: '' }));
        }

        if (valid) {
            try {
                setCadastrarClicked(true);

                const response = await fetch('/api/proxy', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({ nomeCompleto, whatsapp })
                  });

                const data = await response.json();
                console.log('Dados enviados com sucesso:', data.message);

                
                setShowPagamentoSection(true);
                // sectionRef.current.scrollIntoView({ behavior: 'smooth' });
            } catch (error) {
                console.error('Erro ao enviar os dados:', error);
            }
        }
    };

    // if (showPagamentoSection) {
    //     window.history.pushState({}, '', '/#cadastro');
    //     return <PagamentoSection />;
    // }

    return (
        <div ref={sectionRef} className="flex flex-col justify-center items-center md:mt-2 md:mb-10">
            <h1 className="text-3xl font-bold mb-6 text-violet-700">Quero meu corpo dos sonhos agora!</h1>

            <div className="text-lg font-semibold text-gray-700" style={{ maxWidth: '600px'}}>
                {/* <h3>
                    Falta pouco para você fazer parte do <span className="font-bold text-gray-900">Despertar 40+</span>!!
                </h3> */}
                <h3>
                    Infelzente as inscrições para participar do <span className="font-bold text-gray-900">Despertar 40+</span> foram encerradas!
                </h3>
                <h3 className="mt-4">
                    Porém se você tem interesse nesse programa, deixe seu contato abaixo que iremos te avisar quando abrirmos novas turmas e ajudaremos você a iniciar essa <span className="font-bold text-gray-800">jornada transformadora</span>.
                </h3>
                {/* <h3 className="mt-4">
                    Precisamos de alguns dados seus para ajudar você a iniciar essa <span className="font-bold text-gray-800">jornada transformadora</span>.
                </h3> */}
                {/* <h3 className="mt-4">
                    Seus dados são coletados com o único propósito de facilitar nossa comunicação e somente membros da nossa equipe terão acesso a eles.
                </h3> */}
                <h3 className="mt-4 mb-4">
                    Levamos sua privacidade e segurança a sério. Para saber mais sobre nossa{' '}
                    <span className="text-violet-700 font-bold"
                    >
                        Política de Privacidade{' '}
                    <span
                        onClick={privacidadeClickedExpand}
                        className="underline decoration-violet-700 cursor-pointer"
                    >
                        clique aqui!
                    </span>
                    </span>
                </h3>
                {privacidadeExpanded && (
                    <div className="mt-4 p-4 mb-4 bg-gray-100 text-gray-700 rounded-lg">
                        <h3 className="text-violet-700 font-bold">
                            Nossa Política de Privacidade:
                        </h3>
                        <p className="mt-2">
                            Seus dados serão utilizados exclusivamente para melhorar nossa comunicação e facilitar a sua inclusão no programa <strong>Despertar 40+</strong>.
                        </p>
                        <p className="mt-2">
                            Os dados coletados serão utilizados exclusivamente pela nossa equipe para o contato direto com você via WhatsApp, garantindo a inclusão no grupo exclusivo do programa. Em hipótese alguma, seus dados serão vendidos, compartilhados ou divulgados para terceiros fora da nossa equipe.
                        </p>
                        <p className="mt-2">
                            Nos comprometemos a protegê-los e medidas de segurança adequadas foram implementadas para mantê-los seguro.
                        </p>
                        <p className="mt-2 text-violet-700">
                            Se você ficou com alguma dúvida sobre nossa Política de Privacidade, entre em contato conosco pelo{' '}
                            <a 
                                href="https://wa.me/5548999694084?text=Oi,%20fiquei%20com%20dúvida%20na%20Política%20de%20Privacidade%20do%20Despertar%2040%2B"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-green-600 underline"
                            >
                                WhatsApp
                            </a>.
                        </p>
                    </div>
                )}
            </div>

            <form className="flex flex-col justify-center items-center">
                <label className="text-violet-700 mb-2 font-bold text-xl mr-2">Nome Completo:</label>
                <input
                    id="nomeCompleto"
                    type="text"
                    value={nomeCompleto}
                    onChange={handleNomeCompletoChange}
                    placeholder="Digite seu nome e sobrenome"
                    className="p-2 border border-gray-300 rounded-xl w-64"
                    minLength={8}
                    required
                />
                {errors.nomeCompleto && <p className="text-red-500  min-h-[1rem]">{errors.nomeCompleto}</p>}

                <label className="text-violet-700 mt-6 mb-2 font-bold text-xl mr-2">WhatsApp (com DDD):</label>
                <input
                    id="whatsapp"
                    type="tel"
                    value={whatsapp}
                    onChange={handleWhatsappChange}
                    placeholder="Digite seu WhatsApp"
                    className="p-2 border border-gray-300 rounded-xl w-64"
                    required
                />
                {errors.whatsapp && <p className="text-red-500">{errors.whatsapp}</p>}

            </form>
            {!cadastrarClicked && (
                <>
                    <div className="mt-4 ml-4">
                        <input
                            id="consenso"
                            type="checkbox"
                            checked={consenso}
                            onChange={handleConsenso}
                        />
                        <label htmlFor="consenso" className="text-gray-800 ml-2">
                            Estou de acordo com a Política de Privacidade!
                        </label>
                        {errors.consenso && <p className="text-red-500">{errors.consenso}</p>}
                    </div>
                    <button 
                        onClick={handleSubmit} 
                        className="bg-yellow-500 text-violet-700 font-bold py-2 px-4 rounded-full mt-6">
                            Quero fazer parte do Despertar 40+!
                    </button>
                </>
            )}
            {cadastrarClicked && !showPagamentoSection &&(
                <>
                    <div
                        className="h-12 w-12 border-4 border-t-white  border-b-white  border-l-white border-r-purple-400 
                                animate-spin rounded-full ease-linear mt-6">
                    </div>
                </>
            )}
            {cadastrarClicked && showPagamentoSection &&(
                <>
                    <p className=" h-32 w-96 border-2 mt-6 p-2 border-purple-700 text-white font-bold text-lg">
                        Não se preocupe, seus dados foram enviados com sucesso e você acabou de dar o primeiro passo para mudar a sua vida.
                    </p>
                </>
            )}

            {/* <div className="flex flex-row justify-center items-center gap-5 md:gap-20 mt-6 mb-6">
                <div className="font-bold text-xl md:text-2xl">
                    <p className="mt-5 mb-4">R$ 197,00 à vista (no Pix ou no Cartão)</p>
                    <p className="mb-4">ou até</p>
                    <p>6x de R$ 40,00</p>
                </div>
            </div> */}
            <div className="text-2xl font-bold text-yellow-500 bg-purple-500 px-3 rounded-xl mt-6" style={{ maxWidth: '900px' }}>
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