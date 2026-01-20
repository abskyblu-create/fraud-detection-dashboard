
import React from 'react';
import { Check, ShieldAlert, Zap, Search } from 'lucide-react';

const ModelsOverview: React.FC = () => {
  const modelCards = [
    {
      title: "Logistic Regression",
      description: "Linear baseline used for interpretability. Best at finding general linear relationships between credit score and fraud.",
      icon: <Search />,
      color: "blue",
      keyMetric: "Recall: 78.4%",
      advantage: "Very fast prediction time"
    },
    {
      title: "Random Forest",
      description: "Non-linear bagging ensemble. Handles high-dimensional data well and provides feature importance rankings.",
      icon: <Zap />,
      color: "purple",
      keyMetric: "Recall: 69.1%",
      advantage: "Robust to outliers"
    },
    {
      title: "XGBoost",
      description: "Optimized gradient boosting. Focuses on minimizing errors of previous steps. Strongest performance on raw data.",
      icon: <ShieldAlert />,
      color: "orange",
      keyMetric: "Recall: 78.8%",
      advantage: "High precision-recall balance"
    },
    {
      title: "LightGBM",
      description: "Histogram-based boosting. Faster training on large datasets (1M rows). Highest overall ranking quality (PR-AUC).",
      icon: <Check />,
      color: "emerald",
      keyMetric: "Recall: 77.5%",
      advantage: "Best computational efficiency"
    }
  ];

  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-slate-800">Model Architectures</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {modelCards.map((card, idx) => (
          <div key={idx} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
            <div className={`text-${card.color}-600 mb-4`}>
              {card.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{card.title}</h3>
            <p className="text-sm text-slate-600 mb-6 leading-relaxed">{card.description}</p>
            <div className="flex justify-between items-center py-2 px-3 bg-slate-50 rounded-lg">
              <span className="text-xs font-bold text-slate-500 uppercase">Key Result</span>
              <span className="text-sm font-bold text-slate-900">{card.keyMetric}</span>
            </div>
            <p className="mt-3 text-xs text-slate-400 font-medium italic">
              Major Advantage: {card.advantage}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ModelsOverview;
