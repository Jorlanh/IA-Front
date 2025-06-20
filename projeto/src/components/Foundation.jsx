import React from 'react';

function Foundation() {
  return (
    <section id="fundamentacao" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            Fundamentação e Evidências
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A proposta é fundamentada em experiências de sucesso e na
            literatura acadêmica que demonstram o impacto positivo da IA na
            personalização do ensino.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-semibold text-blue-600 mb-3">
              Personalização do Ensino
            </h4>
            <p className="text-gray-600">
              Algoritmos que ajustam trajetórias de aprendizagem ao
              identificar lacunas individuais favorecem progressões mais
              rápidas e precisas, alinhando-se a abordagens de{" "}
              <em>learning analytics</em>.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-semibold text-blue-600 mb-3">
              Caso Geekie (Brasil)
            </h4>
            <p className="text-gray-600">
              Estudantes que utilizaram a plataforma adaptativa apresentaram
              um ganho médio de 30% nas notas, beneficiando milhões de alunos,
              82% de escolas públicas.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
            <h4 className="text-xl font-semibold text-blue-600 mb-3">
              Decisões Guiadas por Dados
            </h4>
            <p className="text-gray-600">
              O projeto se alinha às práticas de <em>educational data mining</em>, que
              propõem o uso de dados para o professor replanejar atividades de
              modo mais direcionado e eficaz.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Foundation;