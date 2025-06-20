import React from 'react';

function FlowStep({ step, active, onClick }) {
  return (
    <div
      className={
        "flow-step p-4 border-2 rounded-lg cursor-pointer transition-all duration-300 " +
        (active
          ? "border-blue-600 bg-blue-50 scale-105 shadow-[0_4px_14px_0_rgba(37,99,235,0.1)]"
          : "border-gray-200")
      }
      onClick={() => onClick(step.id)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick(step.id);
        }
      }}
      aria-pressed={active}
      aria-label={`Selecionar etapa ${step.title}`}
    >
      <div className="flex items-center">
        <div className="flex-shrink-0 w-8 h-8 bg-gray-200 text-gray-600 flex items-center justify-center rounded-full font-bold mr-4">
          {step.id}
        </div>
        <h5 className="text-lg font-semibold text-gray-700">{step.title}</h5>
      </div>
    </div>
  );
}

export default FlowStep;