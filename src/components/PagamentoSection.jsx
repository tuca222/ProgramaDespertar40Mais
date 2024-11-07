import React, { useState } from "react";

const PagamentoSection = () => {
    const [pixClicked, setPixClicked] = useState(false);
    const [copySuccess, setCopySuccess] = useState('');

    const handleClickPix = () => {
        setPixClicked(true);
        window.history.pushState({}, '', '/#pix');
    }

    const handleCopyToClipboard = () => {
        const pixKey = "00020101021226860014BR.GOV.BCB.PIX2564qrpix.bradesco.com.br/qr/v2/1774a35b-d13a-410f-8a31-6b29d5d6d8835204000053039865406197.005802BR5925GERUSA LORENZETTI DA ROSA6013FLORIANOPOLIS62070503***63047EF4";
        navigator.clipboard.writeText(pixKey).then(() => {
            setCopySuccess('Chave PIX copiada!');
            setTimeout(() => setCopySuccess(''), 2000);
        }, (err) => {
            setCopySuccess('Falha ao copiar a chave PIX');
        });
    }

    const handleClickVoltar = () => {
        setPixClicked(false);
        window.history.pushState({}, '', '/');
    }

    const handleClickCartaoVista = () => {
        window.history.pushState({}, '', '/#cartaoAvista');
    }

    const handleClickCartaoParcelado = () => {
        window.history.pushState({}, '', '/#cartaoParcelado');
    }

    return (
        <div className="flex flex-col justify-center items-center md:mt-3 md:mb-10">
            <h1 className="text-3xl font-bold mb-10 text-violet-700">Quero meu corpo dos sonhos agora!</h1>
            <div className="flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-5 md:gap-20">
                    <div className="font-bold text-xl">
                        <p className="mb-4">R$ 197,00 à vista (no Pix ou no Cartão)</p>
                        <p className="mb-4">ou até</p>
                        <p className="mb-4">6x de R$ 40,00</p>
                    </div>
                    
                </div>
                <div className="text-lg font-semibold text-gray-700 " style={{ maxWidth: '600px'}}>
                    <h3 className="mt-4">
                        Finalize seu pagamento para fazer parte desse <span className="font-bold text-gray-900">Despertar</span> que mudará a sua vida!!
                    </h3>
                    <h3 className="mt-4 mb-4">
                        Assim que possível entraremos em contato pelo <span className="font-bold text-gray-900">WhatsApp</span> para te dar as boas vindas e te passar todas as informações.
                    </h3>
                </div>
                <h1 className="text-3xl font-bold mb-6 mt-6 text-violet-700">Forma de pagamento:</h1>
                <button
                    onClick={handleClickPix}
                    className="text-xl mb-6 py-2 font-semibold bg-yellow-500 hover:bg-yellow-600 border-black text-center border-2 rounded-xl w-44">
                        PIX
                </button>
                {!pixClicked && (
                    <>
                        <a
                            href="https://www.asaas.com/c/g0jp71ttdrcprpyb"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="text-xl mb-6 py-2 font-semibold bg-yellow-500 hover:bg-yellow-600 border-black text-center border-2 rounded-xl w-44"
                            onClick={handleClickCartaoVista}
                        >
                                Cartão à vista
                        </a>
                        <a
                            href="https://www.asaas.com/c/c5lpxfdvwtt60741"
                            rel="noopener noreferrer"
                            target="_blank"
                            className="text-xl mb-6 py-2 font-semibold bg-yellow-500 hover:bg-yellow-600 border-black text-center border-2 rounded-xl w-44"
                            onClick={handleClickCartaoParcelado}
                        >
                                Cartão em vezes
                        </a>
                    </>
                )}
                {pixClicked && (
                    <div className="mb-6 py-3 text-center max-w-md">
                        <p className="text-violet-700 font-bold">
                            PIX copia e cola.
                        </p>
                        <p className="text-violet-700 font-bold mt-2">
                            Clique no link para copiar a chave:
                        </p>
                        <p 
                            className="font-semibold mt-4 break-all border-2 rounded-lg px-2 py-2 border-violet-700 bg-orange-200 text-gray-800 cursor-pointer"
                            onClick={handleCopyToClipboard}
                        >
                            00020101021226860014BR.GOV.BCB.PIX2564qrpix.bradesco.com.br/qr/v2/1774a35b-d13a-410f-8a31-6b29d5d6d8835204000053039865406197.005802BR5925GERUSA LORENZETTI DA ROSA6013FLORIANOPOLIS62070503***63047EF4
                        </p>
                        {copySuccess && (
                            <p className="text-green-500 mt-2 text-lg font-semibold">{copySuccess}</p>
                        )}
                        <button
                            onClick={handleClickVoltar}
                            className="mt-10 bg-violet-400 px-4 py-2 rounded-lg font-semibold text-xl"
                        >
                            Voltar
                        </button>
                    </div>
                )}
            </div>
            <div className="text-xl font-bold text-yellow-500 bg-purple-500 mt-4 rounded-xl" style={{ maxWidth: '600px' }}>
                <h3 className="mt-4">
                    Vamos juntas no Despertar 40+ onde você irá ampliar o seu conhecimento e tomar as rédeas da sua vida.
                </h3>
                <h3 className="mt-4 mb-4">
                    Porque o conhecimento é libertador!
                </h3>
            </div>
        </div>
    );
};

export default PagamentoSection;