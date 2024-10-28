import React from 'react';
import PacienteSilvana from '../assets/pacientes/Silvana.jpg';

const DepoimentosSection = ({ id }) => {
  return (
    <section id={id} className="">
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-8 text-violet-700">Depoimentos de Pacientes</h2>
        <div className="flex flex-wrap gap-5 justify-center items-start">
          <div className="bg-lightGreen p-2 rounded-lg shadow-lg flex flex-col h-auto w-72 ml-4 mr-4">
            <p className="text-gray-700 italic">
              Bom dia, Gerusa. Ontem quando nos falamos eu estava indo dormir, acabei não te dizendo o quanto eu estou curtindo esse processo. 
              Já havia ido a outras nutricionistas antes, mas sempre me parecia que as dietas eram muito difíceis de aplicar no meu dia a dia, caso eu não cozinhasse, e ainda tinha um 
              milhão de receitas que eu tinha que fazer todos os fins de semana pra semana. Hoje eu aprendi a montar meu prato, pensando no que devo incluir e as quantidades. Não que eu 
              esteja seguindo a risca todos os dias. Mas tem sido fácil 'voltar' p dieta depois de uma jacada. hehe Aprendi também a comer mais frutas, agora eu tenho horário para comê-las. 
              Antes eu comia qdo tinha vontade, mas aí as vezes até tinha vontade da fruta, mas não queria descascar... Acho que tudo isso me ajudou a persistir no processo. É claro que ainda 
              fico inchada diversas vezes, mas não é mais permanente como costumava ser. Queria muito te agradecer pelo suporte tão presente - e por não ter me colocado numa dieta low carb, eu 
              não aguentaria 30 dias. hehe"
            </p>
            <div className="flex flex-row justify-center items-center mt-4">
              <img src="https://via.placeholder.com/50" alt="User Icon" className="w-12 h-12 rounded-full ml-4 mr-4" />
              <p className="mt-4 font-semibold">- Lu Brasil</p>
            </div>
          </div>

          <div className="bg-lightGreen p-2 rounded-lg shadow-lg flex flex-col h-auto w-72 ml-4 mr-4">
            <p className="text-gray-700 italic">
              "Valeu Ge, valeu muito a pena investir na minha saúde e no cuidado com a minha alimentação. Juntando a atividade física então, nem se fala… já 
              me sinto muito melhor mesmo. E eu adoro o seu jeito leve e descomplicado, fez tudo ficar muito mais fácil de aplicar e seguir. Você é fera!!! 🤩🙏🏽🙏🏽"
            </p>
            <div className="flex flex-row justify-center items-center mt-4">
              <img src="https://via.placeholder.com/50" alt="User Icon" className="w-12 h-12 rounded-full ml-4 mr-4" />
              <p className="mt-4 font-semibold">- Gui</p>
            </div>
          </div>

          <div className="bg-lightGreen p-2 rounded-lg shadow-lg flex flex-col h-auto w-72 ml-4 mr-4">
            <p className="text-gray-700 italic">
              "Ge, desde Julho de 2020 quando você fez a minha reeducação alimentar, pois não conseguia baixar meu triglicerídeo e colesterol, com 49 anos de idade, que meu modo de me alimentar 
              e minha maneira de viver mudou. Tenho animo e disposição para fazer minhas refeições, minha e do meu esposo, pois ele é bem parceiro, vontade de fazer minha atividade física, e olha 
              que sou um pouco molenga, as vezes estou cansada, mas faço com vontade. Desde lá, Julho de 2020, que aprendi o que é comer bem, não deixo de comer as besteirinhas kkkkkkkkk mas tudo 
              no equilíbrio. Agradeço muito a Deus por ter te colocado no meu caminho, muito obrigada por seu profissionalismo"
            </p>
            <div className="flex flex-row justify-center items-center mt-4">
              <img 
                src={PacienteSilvana} 
                alt="User Icon" 
                className="w-12 h-12 rounded-full ml-4 mr-4" 
                style={{ filter: 'blur(1px)' }}
              />
              <p className="mt-4 font-semibold">- Silvana Cecília Beber</p>
            </div>
          </div>

          <div className="bg-lightGreen p-2 rounded-lg shadow-lg flex flex-col h-auto w-72 ml-4 mr-4">
            <p className="text-gray-700 italic">
              "Bom diaaa vou tentar bater a foto de biquíni hj mas to bem mais sequinha na barriga é perceptível 🫠🙃 tudo isso devo a ti. Me sinto mais bonita e minha auto estima está mtmt melhor,
              não só pela estética mas por saber que consigo me cuidar, comer bem, saudável, com limites sem precisar descontar minhas emoções na alimentação. E vc me inspira mto ♥️♥️♥️ só agradeço por ter te encontrado!🥰"
            </p>
            <div className="flex flex-row justify-center items-center mt-4">
              <img src="https://via.placeholder.com/50" alt="User Icon" className="w-12 h-12 rounded-full ml-4 mr-4" />
              <p className="mt-4 font-semibold">- Maria Lygia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DepoimentosSection;
