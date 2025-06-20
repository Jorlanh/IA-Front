import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const barOptions = {
  indexAxis: 'y',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: { display: false },
    tooltip: {
      callbacks: {
        label: (c) => `${c.raw}%`,
      },
    },
  },
  scales: {
    x: { beginAtZero: true, grid: { display: false } },
    y: { grid: { display: false } },
  },
};

const chartColors = ['#2563EB', '#60A5FA', '#93C5FD', '#BFDBFE'];

function BarChart({ id, labels, data }) {
  const canvasRef = useRef(null);
  const chartRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;
    if (chartRef.current) {
      chartRef.current.destroy();
    }
    chartRef.current = new Chart(canvasRef.current.getContext('2d'), {
      type: 'bar',
      data: {
        labels,
        datasets: [
          {
            data,
            backgroundColor: chartColors.slice(0, 2),
          },
        ],
      },
      options: barOptions,
    });
    return () => {
      if (chartRef.current) chartRef.current.destroy();
    };
  }, [labels, data]);

  return (
    <div className="chart-container relative mx-auto w-full h-[280px]">
      <canvas id={id} ref={canvasRef} />
    </div>
  );
}

export default BarChart;