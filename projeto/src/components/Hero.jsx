import React from 'react';

function Hero() {
  return (
    <section id="hero" className="py-20 md:py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
          Sistema de Diagnóstico de Dificuldades de Aprendizagem com IA
        </h2>
        <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Uma proposta para transformar a Inteligência Artificial em uma
          ferramenta de apoio ao professor, promovendo a identificação
          precoce de desafios e um ensino mais personalizado.
        </p>
        <div className="mt-8 text-sm text-gray-500">
          <p className="font-semibold mb-2">Autores do Projeto:</p>
          <p className="max-w-2xl mx-auto">
            Anna Luíza Moreira de Oliveira, Ana Paula Ramos Andrade, 
            Flávio Cerqueira da Silva, Jorlan Heider Da Fé Santos, 
            Maria Eduarda Souto Vasconcelos, Maria Fernanda Prandi Quintella Nunes, 
            Miquéias Ferreira de Jesus Santos, Rafael Rodrigues Santos e Victor da Rocha 
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;