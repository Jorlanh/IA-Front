import React from 'react';
import DoughnutChart from './DoughnutChart';
import BarChart from './BarChart';

function Scenario() {
  return (
    <section id="cenario" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            O Cenário Atual na Educação Pública
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            Uma pesquisa com 19 professores da rede pública revela um panorama
            com grandes oportunidades para a IA, mas também com obstáculos em
            infraestrutura e formação. Explore os dados abaixo.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">
                Conhecimento sobre IA
              </h4>
              <DoughnutChart
                id="iaKnowledgeChart"
                labels={["Pouco ou Nenhum", "Possui Conhecimento"]}
                data={[63.2, 36.8]}
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">
                Infraestrutura Escolar
              </h4>
              <DoughnutChart
                id="infraChart"
                labels={["Não Possui", "Possui"]}
                data={[73.7, 26.3]}
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">
                Rede de Ensino
              </h4>
              <DoughnutChart
                id="schoolNetworkChart"
                labels={["Estadual", "Federal", "Municipal"]}
                data={[84.2, 10.5, 5.3]}
              />
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h4 className="text-lg font-semibold text-gray-700 mb-3">
                Tempo de Docência
              </h4>
              <BarChart
                id="experienceChart"
                labels={["<15 anos", ">15 anos"]}
                data={[57.9, 42.1]}
              />
            </div>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h4 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
              <i className="fas fa-comments text-blue-600"></i>Vozes dos
              Professores
            </h4>
            <div className="space-y-4">
              <blockquote className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 rounded-r-lg">
                <p className="text-gray-600 italic">
                  "O principal risco é de formar cidadãos sem pensamento
                  crítico e sem conhecimento básico e nem técnico."
                </p>
                <cite className="mt-2 block text-right text-sm font-semibold text-gray-700">
                  - Prof. Henderson Souza
                </cite>
              </blockquote>
              <p className="text-gray-700">
                A pesquisa revelou uma preocupação consensual sobre o uso da
                IA para evitar o esforço intelectual, o que poderia prejudicar
                o desenvolvimento do raciocínio lógico. Ao mesmo tempo, muitos
                veem a IA como uma ferramenta complementar poderosa, se bem
                utilizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Scenario;