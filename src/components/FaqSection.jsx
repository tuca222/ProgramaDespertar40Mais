import React, { useState } from 'react';

const FaqSection = () => {
  // State para armazenar qual FAQ está aberta
  const [openFaq, setOpenFaq] = useState(null);

  // Função para alternar a pergunta aberta
  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      question: 'O que é o Despertar 40+',
      answer: 'O Despertar 40+ é um programa de nutrição focado em mulheres acima de 40 anos, promovendo uma transformação física e mental através de hábitos saudáveis, para que você consigda adquirir seu corpo do sonhos.',
    },
    {
      question: 'Quando é o início do programa e qual a sua duração?',
      answer: (
        <>
         O programa já iniciou, então as inscrições estão encerradas. Porém deixe seu contato, clicando no botão acima: {' '}
          <span
            className="underline decoration-violet-500"
          >
            Garanta sua Vaga
          </span>
          , para ser avisada da próxima turma. O programa Despertar 40+ tem duração de 4 semanas.
        </>
      ),
      // answer: 'O programa inicia oficialmente no dia 11 de novembro de 2024 e tem duração de 4 semanas. Sendo do dia 11/11/2024 a 08/12/2024 e 09/12/2024 teremos nossa Live de encerramento.',
    },
    {
      question: 'Como funciona o acompanhamento?',
      answer: 'O acompanhamento do Despertar 40+ será feito através do Instagram Secreteo e do Grupo do WhatsApp, onde você terá acesso a conteúdos exclusivos e dicas. Além disso, teremos lives semanais para tirar dúvidas e te ajudar a alcançar seus objetivos.',
    },
    {
      question: 'Como irei para o Grupo do Whats e para o Instagram Secreto?',
      answer: 'Após o seu pagamento ser confirmado, você será adicionada no Grupo do WhatsApp pela nossa equipe e um dia antes do início do programa você recebá um link no Grupo do Whats para entrar no Instagram Secreto.',
    },
    {
      question: 'Como vai funcionar o reembolso?',
      answer: (
        <>
          O reembolso poderá ser feito até um dia antes de iniciar o programa, pois após iniciado você já terá acesso aos materiais exclusivos do Despertar 40+. Para obter o reembolso, basta enviar uma mensagem no WhatsApp {' '}
          <a
            href="https://wa.me/5548999694084?text=Oi,%20gostaria%20de%20pedir%20o%20reembolso%20do%20Despertar%2040%2B"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-violet-500"
          >
            clicando aqui
          </a>.
        </>
      ),
    },
    {
      question: 'Preciso de ajuda, ainda tenho algumas dúvidas!',
      answer: (
        <>
          Se você ainda ficou com alguma dúvida, fale comigo {' '}
          <a
            href="https://wa.me/5548999694084?text=Oi,%20preciso%20de%20ajuda%20com%20o%20Despertar%2040%2B"
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-violet-700"
          >
            clicando aqui 
          </a>
          {' '} para me mandar uma mensagem no WhatsApp.
        </>
      ),
    },
  ];

  return (
    <section>
      <div>
        {/* Coluna FAQ */}
        <div>
          <h2 className="text-2xl text-center font-bold text-violet-700 lg:text-left mb-8">
            Leia o FAQ do Despertar40+
          </h2>
          <div className="space-y-4 px-2">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-200 pb-4"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left text-xl text-purple-900 font-semibold focus:outline-none flex justify-between items-center"
                >
                  {faq.question}
                  <span className="text-2xl text-right px-2">
                    {openFaq === index ? '-' : '+'}
                  </span>
                </button>
                {/* Exibe a resposta se a FAQ estiver aberta */}
                {openFaq === index && (
                  <p className="mt-3 text-gray-700 text-left">
                    {faq.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>        
      </div>
    </section>
  );
};

export default FaqSection;
