import React from 'react';

function Risks() {
  return (
    <section id="riscos" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            Riscos e Desafios Éticos
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            O projeto reconhece e se propõe a debater os desafios inerentes ao
            uso da IA na educação, conforme apontado pelos próprios professores.
          </p>
        </div>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg">
            <h4 className="font-bold text-red-800 text-lg mb-2">
              Pensamento Crítico
            </h4>
            <p className="text-red-700">
              O risco de os alunos usarem a IA como um atalho, diminuindo o
              desenvolvimento de suas próprias habilidades de raciocínio e
              análise.
            </p>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded-r-lg">
            <h4 className="font-bold text-yellow-800 text-lg mb-2">
              Qualidade e Viés
            </h4>
            <p className="text-yellow-700">
              A possibilidade de a IA gerar respostas superficiais ou com
              vieses, e a dificuldade do professor em identificar tais falhas
              em larga escala.
            </p>
          </div>
          <div className="bg-purple-50 border-l-4 border-purple-500 p-6 rounded-r-lg">
            <h4 className="font-bold text-purple-800 text-lg mb-2">
              Papel do Professor
            </h4>
            <p className="text-purple-700">
              A necessidade de redefinir o papel do docente, não como um mero
              transmissor, mas como um curador crítico do conhecimento e
              mediador do processo de aprendizagem.
            </p>
          </div>
          <div className="bg-gray-100 border-l-4 border-gray-500 p-6 rounded-r-lg">
            <h4 className="font-bold text-gray-800 text-lg mb-2">
              Equidade e Acesso
            </h4>
            <p className="text-gray-700">
              A exclusão digital é um grande obstáculo. A falta de
              infraestrutura em muitas escolas pode aprofundar as
              desigualdades existentes se não for tratada.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Risks;