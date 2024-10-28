import React from 'react';

const ProgramaSection = ({ id }) => {
  return (
    <section id={id} className=" py-12">
      <div className="container mx-auto text-center px-4 md:px-8 lg:px-16">
        <div className='px-5'>
          <h2 className="text-3xl font-bold text-violet-700 mb-6">
            Como irá funcionar?
          </h2>
          <p className="text-lg text-white mb-8">
            O Despertar 40+ serão 4 semanas da sua jornada para ganhar bons hábitos!
          </p>
        </div>
        

        <div className="flex flex-col justify-center items-center gap-6">
          
          {/* 1ª Semana */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 min-w-[300px] w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Semana 1: Arrumando a casa</h3>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">11/11 - 17/11</h3>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Início de uma alimentação para o resto da vida!</h3>
            <p className="text-gray-700 mt-5 text-lg">Na primeira semana, vamos iniciar a transformação. Criando uma base sólida para o seu novo estilo de vida, priorizando sono, hidratação e uma alimentação equilibrada, visando o seu bem-estar e o conforto.</p>
            <ul className='list-disc text-left pl-10 text-lg mt-5 text-gray-700 space-y-4'>
              <li>Rotina: Sono e Hidratação</li>
              <li>Organização e Planejamento</li>
              <li>Autonomia Alimentar</li>
              <li>Plano Alimentar e Primeiros Passos</li>
              <li>Controle Diário e Suporte</li>
              <li>Como Montar um Prato Saudável</li>
              <li>Live Inicial: Boas-Vindas e Converssa com Psicóloga</li>
            </ul>
          </div>

          {/* 2ª Semana */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 min-w-[300px] w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Semana 2: Intestino</h3>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">18/11 - 24/11</h3>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Cuidando do seu intestino e melhorando seu bem estar!</h3>
            <p className="text-gray-700 mt-5 text-lg">Aqui o foco será o intestino, um órgão fundamental para nossa saúde e bem-estar. Um intestino saudável contribui para uma digestão eficiente, melhora a absorção de nutrientes e pode até influenciar o humor.</p>
            <ul className="list-disc text-left pl-10 text-lg mt-5 text-gray-700 space-y-4">
              <li>Alimentos Fermentativos e FODMAPs</li>
              <li>Estratégias para Melhorar a Distensão Abdominal</li>
              <li>Microbiota: O Coração do Intestino Saudável</li>
              <li>TPM e Menopausa</li>
              <li>Plano Alimentar e Flexibilidade</li>
              <li>Escala da Fome e Saciedade</li>
              <li>Controle da Fome Emocional e Plano de Fuga</li>
              <li>Dicas para Refeições Livres com Consciência</li>
              <li>Consumo de Álcool: Moderação e Controle de Calorias</li>
              <li>Controle Diário e Suporte</li>
            </ul>
          </div>

          {/* 3ª Semana */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 min-w-[300px] w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
            <h3 className="text-xl font-semibold text-purple-800 mb-2">Semana 3: Otimizando a Queima de Gordura</h3>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">25/11 - 01/12</h3>
            <h3 className="text-xl font-semibold text-purple-800 mb-5">Seu corpo dos sonhos na menopausa!</h3>
            <p className="text-gray-700 mt-5 text-lg">Nesta semana, vamos focar em como alcançar o seu corpo dos sonhos durante a menopausa, utilizando estratégias que promovem a saúde e longevidade.</p>
            <ul className="list-disc text-left pl-10 text-lg mt-5 text-gray-700 space-y-4">
              <li>Controle de doenças crônicas</li>
              <li>Metabolismo acelerado</li>
              <li>Composição corporal e longevidade</li>
              <li>Como treinar de forma eficiente aos finais de semana</li>
              <li>Estratégias para resistir ao álcool</li>
              <li>Como encontrar prazeres além da comida</li>
              <li>Live com personal trainer</li>
              <li>Controle Diário e Suporte</li>
            </ul>
          </div>

          {/* 4ª Semana */}
          <div className="bg-white p-6 rounded-lg shadow-md flex-1 min-w-[300px] w-full md:w-3/4 lg:w-2/3 xl:w-1/2">
          <h3 className="text-xl font-semibold text-purple-800 mb-2">Semana 4: Menopausa</h3>
            <h3 className="text-xl font-semibold text-purple-800 mb-2">02/12 - 08/12</h3>
            <h3 className="text-xl font-semibold text-purple-800 mb-5">Compreendendo o que acontece no seu corpo durante a Menopausa!</h3>
            <p className="text-gray-700 mt-5 text-lg">Nesta última semana, vamos mergulhar em temas fundamentais para o bem-estar feminino durante e após a menopausa, abordando questões hormonais, de saúde e longevidade.</p>
            <ul className="list-disc text-left pl-10 text-lg mt-5 text-gray-700 space-y-4">
              <li>Controle do estresse</li>
              <li>Sintomas da TPM e endometriose</li>
              <li>Live com médica ginecologista</li>
              <li>Menopausa e envelhecimento feminino</li>
              <li>Prevenção e controle de osteoporose e osteopenia</li>
              <li>A importância da alimentação durante a menopausa</li>
              <li>Longevidade</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramaSection;
