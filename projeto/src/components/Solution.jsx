import React, { useState } from 'react';
import FlowStep from './FlowStep';

function Solution() {
  const flowchartData = [
    {
      id: 1,
      title: "Entrada de Dados",
      text: "Coleta de atividades pedagógicas realizadas pelos alunos, como provas e redações. Este material é digitalizado para ser a fonte primária de análise do sistema.",
    },
    {
      id: 2,
      title: "Processamento Linguístico",
      text: "As respostas dos alunos são submetidas a modelos de IA avançados (como GPT-4 ou Gemini) que, aliados a técnicas de PLN, processam e estruturam os textos.",
    },
    {
      id: 3,
      title: "Análise Psicopedagógica",
      text: "A IA aplica parâmetros e regras da literatura psicopedagógica para detectar padrões, como trocas de grafemas, dificuldades estruturais e erros conceituais.",
    },
    {
      id: 4,
      title: "Classificação Inicial",
      text: "O sistema emite uma classificação preliminar, identificando possíveis dificuldades (ex: Possível Dislexia) ou a ausência de indícios significativos.",
    },
    {
      id: 5,
      title: "Geração de Relatórios",
      text: "Para casos sinalizados, são gerados relatórios técnicos para o pedagogo com as evidências detectadas e recomendações de atividades de reforço ou encaminhamento.",
    },
    {
      id: 6,
      title: "Armazenamento e Acompanhamento",
      text: "Todo o histórico é mantido em banco de dados, permitindo o acompanhamento evolutivo do estudante e subsidiando futuras decisões educacionais.",
    },
  ];

  const tabsData = [
    {
      name: "Leitura e Escrita",
      content:
        "<strong>Possível Dislexia/Disortografia:</strong> Trocas de letras ou sílabas, inversões e omissões, escrita ilegível ou muito fragmentada.",
    },
    {
      name: "Interpretação",
      content:
        "<strong>Dificuldades de Interpretação:</strong> Incapacidade de identificar ideias principais, respostas desconexas, dificuldade de inferência e compreensão.",
    },
    {
      name: "Expressão Escrita",
      content:
        "<strong>Problemas Estruturais:</strong> Coerência e coesão textual comprometidas, pouco vocabulário e falta de estrutura textual (início, meio e fim).",
    },
    {
      name: "Lógico-Matemática",
      content:
        "<strong>Possível Discalculia:</strong> Dificuldade com conceitos básicos (adição, subtração), erros em sequência lógica e confusão com sinais ou ordens de operação.",
    },
    {
      name: "Atenção/Cognitivo",
      content:
        "<strong>Déficit de Atenção/Desorganização:</strong> Respostas incompletas ou fora do contexto, mudança abrupta de foco, raciocínio sem conexão lógica clara.",
    },
    {
      name: "Relatório (JSON)",
      content: `<pre class="bg-gray-800 text-white p-4 rounded-lg text-sm overflow-x-auto"><code>{
  "classificacao": "Possível dislexia",
  "grau_de_confianca": "Moderado",
  "evidencias_identificadas": [
    "Trocas de letras ('b' por 'd')",
    "Dificuldade em organizar ideias"
  ],
  "recomendacoes_para_o_pedagogo": [
    "Aplicar atividades de reforço em leitura",
    "Sugerir avaliação com psicopedagogo"
  ]
}</code></pre>`,
    },
  ];

  const [activeStepId, setActiveStepId] = useState(1);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeStep = flowchartData.find((step) => step.id === activeStepId);

  return (
    <section id="solucao" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            A Solução Proposta
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            A solução é um sistema de apoio que usa IA para analisar as
            atividades dos alunos e fornecer insights valiosos aos
            educadores. O processo é projetado para ser simples e eficaz.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 items-start mb-16">
          <div className="w-full lg:w-1/2">
            <h4 className="text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
              Fluxo Operacional Interativo
            </h4>
            <div id="flowchart" className="space-y-2">
              {flowchartData.map((step) => (
                <FlowStep
                  key={step.id}
                  step={step}
                  active={step.id === activeStepId}
                  onClick={setActiveStepId}
                />
              ))}
            </div>
          </div>
          <div className="w-full lg:w-1/2 p-8 bg-gray-50 rounded-lg shadow-inner sticky top-24 min-h-[300px]">
            <h4 className="text-2xl font-bold text-gray-800 mb-4" id="details-title">
              {activeStep.title}
            </h4>
            <p className="text-gray-600" id="details-text">
              {activeStep.text}
            </p>
          </div>
        </div>

        <div className="mt-16 pt-12 border-t">
          <h4 className="text-2xl font-bold text-gray-800 mb-8 text-center">
            O Que a IA Pode Identificar?
          </h4>
          <div className="max-w-4xl mx-auto">
            <div className="border-b border-gray-200">
              <nav
                id="tabs"
                className="-mb-px flex space-x-6"
                aria-label="Tabs"
              >
                {tabsData.map((tab, index) => (
                  <button
                    key={tab.name}
                    className={
                      "tab py-2 px-1 border-b-2 text-sm md:text-base whitespace-nowrap " +
                      (index === activeTabIndex
                        ? "active border-blue-600 text-blue-600 font-semibold"
                        : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700")
                    }
                    onClick={() => setActiveTabIndex(index)}
                    type="button"
                    role="tab"
                    aria-selected={index === activeTabIndex}
                    aria-controls={`tab-content-${index}`}
                    id={`tab-${index}`}
                  >
                    {tab.name}
                  </button>
                ))}
              </nav>
            </div>
            <div id="tab-contents" className="mt-5">
              {tabsData.map((tab, index) => (
                <div
                  key={tab.name}
                  id={`tab-content-${index}`}
                  role="tabpanel"
                  aria-labelledby={`tab-${index}`}
                  className={
                    "tab-content p-4 bg-gray-50 rounded-lg " +
                    (index === activeTabIndex ? "block" : "hidden")
                  }
                  dangerouslySetInnerHTML={{ __html: `<p class="text-gray-700">${tab.content}</p>` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Solution;