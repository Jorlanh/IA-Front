import React from 'react';

function NextSteps() {
  const steps = [
    {
      number: 1,
      title: "Apresentação do Protótipo",
      description:
        "Desenvolvimento e apresentação de um protótipo conceitual da solução para um grupo de professores e pedagogos.",
      top: "top-1",
    },
    {
      number: 2,
      title: "Engajamento e Validação",
      description:
        "Coleta de feedback dos profissionais da educação para refinar a ferramenta, garantindo que atenda às necessidades reais da sala de aula.",
      top: "top-32",
    },
    {
      number: 3,
      title: "Reflexão sobre Viabilidade",
      description:
        "Análise crítica, junto à comunidade escolar, sobre a viabilidade de aplicação da ferramenta, considerando a infraestrutura e os desafios apontados.",
      top: "top-64",
    },
    {
      number: 4,
      title: "Documentação e Treinamento",
      description:
        "Criação de manuais de uso e materiais de treinamento para garantir a correta adoção da ferramenta pelos professores.",
      top: "top-96",
    },
  ];

  return (
    <section id="passos" className="py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
            Próximos Passos: Da Teoria à Prática
          </h3>
          <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
            A implementação do projeto em um contexto real exige uma
            abordagem faseada e colaborativa para garantir que a solução
            atenda às necessidades da comunidade escolar.
          </p>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="relative border-l-2 border-blue-200 pl-10 space-y-12">
            {steps.map(({ number, title, description, top }, i) => (
              <React.Fragment key={number}>
                <div
                  className={`absolute w-3 h-3 bg-blue-500 rounded-full -left-[7px] ${top} border-4 border-white`}
                  aria-hidden="true"
                ></div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-500 text-white flex items-center justify-center rounded-full font-bold text-xl">
                    {number}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">
                      {title}
                    </h4>
                    <p className="mt-1 text-gray-600">{description}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default NextSteps;