import React from 'react';
import '../App.css';
import DespertarInicioImg from '../assets/Despertar40+Inicio.png';
import ProgramaSection from './ProgramaSection';
import SobreMimImg from '../assets/SobreMim.JPG';
import MaisSobreMimImg from '../assets/MaisSobreMim.png';
import FAQImg from '../assets/ImagemFAQ.png';
import FaqSection from './FaqSection';
import DepoimentosSection from './DepoimentosSection';
import PrecoSection from './PrecoSection';

const LandingPage = () => {
  return (
    <div className="font-sans">
      {/* Cabeçalho */}
      <header className='bg-gradient-r-purple-yellow border-b-2 border-gray-300 w-full'>
        <div className='flex flex-col sm:flex-row justify-between items-center p-4 sm:px-8 lg:max-w-4xl lg:mx-auto'>
          <h1 className='text-white font-semibold text-lg mb-4 sm:mb-0 sm:text-left'>
            Nutricionista Gerusa Lorenzetti
          </h1>
          <a
            href="#preco"
            className="bg-violet-700 hover:bg-lightPurple text-white px-4 py-2 rounded-full transition duration-300 breathing text-center"
          >
            Garanta sua vaga!
          </a>
        </div>
      </header>

      {/* Intro */}
      <section className="bg-gradient-r-purple-yellow flex flex-col lg:flex-row justify-center items-center gap-3 text-center px-6 md:px-20 shadow-2xl" style={{ height: 'auto' }}>
        <div className='flex flex-col mt-3'>
          <h1 className="text-5xl md:text-5xl font-bold mt-6 mb-6 text-yellow-600">Despertar 40+</h1>
          <p className="text-lg md:text-lg mt-2 mb-2 text-white max-w-sm">
            Redescubra sua vitalidade e bem-estar!
          </p>
          <p className="text-lg md:text-lg mt-2 mb-2 text-white max-w-sm">
            Vamos juntas criar novos hábitos que trarão saúde, confiança, disposição e o tão sonhado corpo dos sonhos!
          </p>
          <p className="text-lg md:text-lg mt-2 mb-2 text-white max-w-sm">
            Está pronta para transformar sua vida?
          </p>
          <a
            href="#video-explicativo"
            className="bg-yellow-600 hover:bg-yellow-700 text-violet-700 font-bold text-lg md:text-xl py-2 px-5 md:py-5 mt-5 mb-5 rounded-full transition duration-300"
          >
            Faça parte do Despertar 40+
          </a>
        </div>
        <div className='flex py-6 md:py-2'>
          <img src={DespertarInicioImg} alt="Despertar 40+ Início" className='rounded-lg w-full h-auto sm:max-w-lg md:max-w-md lg:max-w-md mx-auto object-cover'/>
        </div>
      </section>

      {/* Vídeo Explicativo */}
      <section id="video-explicativo" className="py-2 bg-video-r-purple-yellow-opacity shadow-2xl">
        <div className="flex flex-col justify-center items-center gap-6 py-4 px-4 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-violet-700">Assista ao Vídeo Explicativo do Despertar 40+</h2>
            <div className="flex justify-center relative mt-6 mb-6" style={{ aspectRatio: '1080 / 1920' }}>
                <iframe
                  title="Despertar 40+ - Vídeo Explicativo"
                  className="h-full rounded-lg shadow-lg object-cover w-full max-w-sm md:max-w-lg mx-auto"
                  src="https://www.youtube.com/embed/H-rY0cDLt8Y"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  style={{ maxHeight: '700px' }}
                  loading="lazy"
                >
                </iframe>
            </div>
          {/* <a
            href="#sobre-o-programa"
            className="bg-yellow-600 hover:bg-yellow-700 text-violet-700 font-bold ml-5 mr-5 text-lg py-2 md:py-3 px-4 rounded-full transition duration-300 breathing"
          >
            Conheça mais sobre o Despertar 40+
          </a>  */}
        </div>
      </section>

      {/* O que é o Programa */}
      <section id="sobre-o-programa" className=" bg-gradient-r-purple-yellow-opacity px-4">
        <div className="flex flex-col justify-center items-center max-w-4xl mx-auto font-semibold">
          <h2 className="text-3xl font-bold mt-8 mb-8 text-violet-700 text-center">O Que é o Despertar 40+?</h2>
          <p className="text-lg text-gray-700 mb-5">
            É um compilado de técnicas e práticas pensadas para que você consiga, de fato, ter o corpo dos sonhos.
          </p>
          <p className="text-lg text-gray-700">
            Com estratégias nutricionais e comportamentais você ganhará autonomia para nunca mais sofrer com efeito sanfona e outros sintomas da menopausa.
          </p>
        </div>
      </section>

      {/* Benefícios */}
      <section className="flex flex-col justify-center items-center py-12 bg-gradient-r-purple-yellow-opacity">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-10 text-violet-700">Benefícios que o Despertar 40+ trará para sua vida:</h2>
          <div className="flex flex-wrap justify-center gap-6 px-4">
            <div className="flex flex-col items-center mb-6">
              <div className="px-5 py-4 rounded-lg shadow-lg border border-gray-500 h-72 w-56 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-semibold mb-2">Nutrição Consciente</h3>
                <p className="text-gray-700">Descubra como se alimentar de forma equilibrada e inteligente, aprendendo sobre alimentação saudável e como fazer boas escolhas que beneficiam sua saúde a longo prazo.</p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-6">
              <div className="px-5 py-4 rounded-lg shadow-lg border border-gray-500 h-72 w-56 flex flex-col items-center justify-around text-center">
                <h3 className="text-xl font-semibold">Melhora na Saúde</h3>
                <p className="text-gray-700">Aumente sua disposição, fortaleça sua imunidade e sinta-se mais saudável todos os dias, melhorando sua qualidade de vida.</p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-6">
              <div className="px-5 py-4 rounded-lg shadow-lg border border-gray-500 h-72 w-56 flex flex-col items-center justify-around text-center">
                <h3 className="text-xl font-semibold mb-2">Cardápios Semanais</h3>
                <p className="text-gray-700">Receba orientações exclusivas ajudando você a atingir suas metas de forma eficaz, acompanhando minha rotina.</p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-6">
              <div className="px-5 py-4 rounded-lg shadow-lg border border-gray-500 h-72 w-56 flex flex-col items-center justify-around text-center">
                <h3 className="text-xl font-semibold mb-2">Transformação Comportamental</h3>
                <p className="text-gray-700">Desenvolva uma mentalidade positiva e hábitos saudáveis que impactam diretamente no seu bem-estar emocional e físico.</p>
              </div>
            </div>
            <div className="flex flex-col items-center mb-6">
              <div className="px-5 py-4 rounded-lg shadow-lg border border-gray-500 h-72 w-56 flex flex-col items-center justify-center text-center">
                <h3 className="text-xl font-semibold mb-2">Gestão de Organização e Planejamento</h3>
                <p className="text-gray-700">Aprenda a organizar e planejar sua semana com facilidade, desde a alimentação até os exercícios, criando uma rotina que funcione para você.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como irá funcionar? */}
      <section className="flex justify-center items-center bg-gradient-to-r from-purple-600 via-yellow-600 to-purple-600 shadow-2xl">
        <div className="flex justify-center items-center w-full">
          <ProgramaSection id="como-ira-funcionar" />
        </div>
      </section>      
      
      {/* Pra quem é? */}
      <section id='pra-quem' className="py-10 bg-orange-100 px-4 shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-violet-700 text-center">Pra quem é o Despertar 40+?</h2>
          <p className="text-lg text-gray-700">
            Você já começou várias vezes a tentar mudar, mas a motivação sempre acaba antes de alcançar seus objetivos?
          </p>
          <p className="text-lg m-3 text-gray-700">
            Você já tentou de tudo, mas ainda não conseguiu alcançar o seu corpo dos sonhos?
          </p>
          <p className="text-lg m-3 text-gray-700">
            Eu te entendo, eu também já passei por isso. Após anos lutando contra a balança, eu finalmente alcancei o meu corpo dos sonhos. E através das estratégias que mudaram a minha vida, eu quero te ajudar a mudar a sua também!
          </p>
          <h3 className="text-lg font-bold mt-5 text-violet-700">
            Venha fazer parte do Despertar 40+, que foi pensado especialmente para você, mulher que:
          </h3>
          <div className='flex justify-center'>
            <ul className="list-disc text-left pl-6 md:pl-12 lg:pl-20 text-lg font-medium mt-5 text-gray-600 space-y-4">
              {/* pl-48 w-auto */}
                <li>Vive uma rotina agitada, com pouco tempo e se sente constantemente sem energia.</li>
                <li>Está acima do peso e enfrenta problemas de saúde causados por maus hábitos.</li>
                <li>Acredita que emagrecer é mais difícil por causa da idade.</li>
                <li>Encontra dificuldade em seguir uma dieta por longos períodos.</li>
                <li>Sofre com os sintomas da menopausa e acha que emagrecer ficou impossível.</li>
                <li>Sente a barriga estufada e sofre com gases constantes.</li>
                <li>Tem dificuldade para ir ao banheiro e enfrentam dor ao evacuar.</li>
            </ul>
          </div>
          
          <h3 className="text-lg font-bold mt-5 text-violet-700">
            Se você se sente assim e quer alcançar o seu corpo dos sonhos, adquirir bons hábitos e aprender a se manter em forma, o Despertar 40+ é para você!
          </h3>
        </div>
      </section>

      {/* Entregáveis */}
      <section id="materiais" className="bg-gradient-to-r from-indigo-500 via-yellow-300 to-indigo-500 py-10 shadow-2xl">
        <div className="flex flex-col justify-center items-center mx-auto max-w-6xl px-4">
          <h2 className="text-3xl font-bold mb-8 text-violet-700 text-center">O Que Você Vai Receber?</h2>
          <div className="flex justify-center w-full px-4">
            <ul className="list-disc max-w-md text-left text-lg font-medium text-gray-700 space-y-4 mx-auto pl-4 sm:pl-6">
              <li>Acesso exclusivo ao Instagram Despertar 40+</li>
              <li>Acompanhamento de Progresso</li>
              <li>Controle de Hábitos</li>
              <li>Guia de Compras</li>
              <li>Guia de Suplementação</li>
              <li>Guia Intestino Feliz</li>
              <li>Estratégias Nutricionais e Comportamentais</li>
              <li>Ebook Com Receitas Saudáveis e Exclusivas</li>
              <li>Ebook Com Estratégias para Aproveitar o Findi</li>
              <li>Ebook Entrando na Menopausa</li>
              <li>Plano Alimentar Semanal</li>
              <li>Manual de Organização e Planejamento</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Preço */}
      <section id='preco' className="bg-orange-100 px-4 py-8 shadow-2xl">
        <PrecoSection />
      </section>

      {/* Depoimentos */}
      <section className="py-10 bg-white shadow-2xl">
        <DepoimentosSection id="depoimentos" />
      </section>

      {/* FAQ e Botões */}
      <section className='flex flex-col bg-violet-200 justify-between gap-8 p-4 md:p-8 shadow-2xl'>  
        <div className="w-full flex flex-col lg:flex-row items-center lg:justify-center gap-8">
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-6 py-1 text-gray-600 bg-violet-400 border-2 border-dashed rounded-full border-yellow-700 text-center w-full max-w-md">
              Ficou com alguma dúvida?
            </h2>
            <img
              src={FAQImg}
              alt="Um pouco mais sobre mim"
              className="rounded-lg shadow-lg object-cover w-full max-w-sm md:max-w-lg mx-auto"
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col items-center lg:justify-center px-2">
            <FaqSection />
          </div>
        </div>
      </section>

      {/* Sobre Mim */}
      <section id='sobre-mim' className="py-5 bg-cyan-200 px-4 shadow-2xl">
        <div>
         <h2 className="text-3xl font-bold mb-4 text-violet-700 py-2">Sobre Mim</h2>
        </div>
        <div className="max-w-4xl mx-auto flex flex-col lg:flex-row justify-center items-center">
          <div className="md:w-2/3 mb-6 md:mb-0">
            <img
              src={SobreMimImg}
              alt="Sobre Mim"
              className="rounded-lg shadow-lg object-cover w-full max-w-sm lg:max-w-lg mx-auto mb-5"
            />
          </div>
          <div className="md:w-4/5 md:pl-6">
            <p className="text-lg text-gray-700 mb-4">
              Me chamo Gerusa Lorenzetti e sou nutricionista especializada em doenças autoimune e intestino, e durante toda a minha vida segui dietas restritivas em busca de emagrecimento.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Quando eu era mais nova, fui diagnosticada com uma doença autoimune que me causava diversas dores abdominais e constipação, além de diversos outros sintomas. 
              A partir da busca por alternativas para a melhora da minha saúde, descobri a nutrição, que me levou a me dedicar a ajudar outras mulheres a alcançar o seu “corpo dos sonhos”, saúde intestinal e 
              a passar pela menopausa de maneira leve e saudável. Hoje esse é o meu propósito, e eu estou pronta para te ajudar.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Por isso criei o Despertar 40+ que tem como objetivo inserir hábitos saudáveis, criar disciplina e motivar você a alcançar seu corpo perfeito em qualquer fase da sua vida!
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Adotei como missão pessoal ajudar você a desenvolver hábitos saudáveis sem terrorismo nutricional, de forma simples, prazerosa e baseado em ciência!
            </p>
          </div>
        </div>
      </section>

      {/* Um Pouco Mais Sobre Minha História */}
      <section className="bg-cyan-200 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-violet-700 text-center">Conheça um pouco mais sobre a minha história</h2>
          <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-center items-center md:items-end gap-5">
            {/* <div className="flex justify-center relative mt-6 mb-6" style={{ aspectRatio: '1080 / 1920' }}>
                <video
                  className="h-full rounded-lg shadow-lg object-cover w-full max-w-sm md:max-w-lg mx-auto"
                  controls
                  style={{ maxHeight: '700px' }} 
                >
                  <source src={} type="video/mp4" />
                  Seu navegador não suporta a tag de vídeo.
                </video>
            </div> */}
            <div className="mb-6 md:mb-3 py-3">
              <img
                src={MaisSobreMimImg}
                alt="Um pouco mais sobre mim"
                className="rounded-lg shadow-lg object-cover w-full max-w-sm md:max-w-lg mx-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-violet-700 text-white text-center px-4 py-2">
        <p>Nutricionista Gerusa Lorenzetti.</p>
        <p>&copy; {new Date().getFullYear()}</p>
        <p>Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default LandingPage;
