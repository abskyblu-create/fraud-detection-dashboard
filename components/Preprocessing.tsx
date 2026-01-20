
import React from 'react';
import { ArrowRight, CheckCircle2, Sliders, Database, Zap, PieChart as PieIcon } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const Preprocessing: React.FC = () => {
  const beforeSampling = [
    { name: 'Legit', value: 98.9, color: '#10b981' },
    { name: 'Fraud', value: 1.1, color: '#ef4444' }
  ];

  const afterSampling = [
    { name: 'Legit', value: 50.0, color: '#10b981' },
    { name: 'Fraud', value: 50.0, color: '#ef4444' }
  ];

  return (
    <div className="space-y-8 pb-12">
      <h2 className="text-3xl font-bold text-slate-800">The Preprocessing Pipeline</h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-4">
        <div className="w-full md:w-1/4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
          <Database className="mx-auto text-blue-500 mb-2" />
          <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-1">Step 1</h4>
          <h4 className="font-bold text-sm">Data Cleaning</h4>
          <p className="text-xs text-slate-500">Duplicate removal & type checking</p>
        </div>
        <ArrowRight className="hidden md:block text-slate-300" />
        <div className="w-full md:w-1/4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-center">
          <Sliders className="mx-auto text-purple-500 mb-2" />
          <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-1">Step 2</h4>
          <h4 className="font-bold text-sm">Normalization</h4>
          <p className="text-xs text-slate-500">StandardScaler on 32 features</p>
        </div>
        <ArrowRight className="hidden md:block text-slate-300" />
        <div className="w-full md:w-1/4 p-4 bg-white border border-slate-200 rounded-xl shadow-sm text-center border-t-4 border-t-emerald-500">
          <Zap className="mx-auto text-emerald-500 mb-2" />
          <h4 className="font-bold text-sm uppercase tracking-wider text-slate-400 mb-1">Step 3</h4>
          <h4 className="font-bold text-sm">SMOTE-Tomek</h4>
          <p className="text-xs text-slate-500">Hybrid Resampling Strategy</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center">
          <h3 className="text-lg font-bold mb-4 self-start">Class Balance: Before</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={beforeSampling} dataKey="value" innerRadius={40} outerRadius={60} paddingAngle={5}>
                  {beforeSampling.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm font-bold text-slate-700 mt-2">1.1% Minority Class</p>
          <p className="text-xs text-slate-400">Extreme skew makes learning difficult</p>
        </div>

        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center border-emerald-100">
          <h3 className="text-lg font-bold mb-4 self-start">Class Balance: After SMOTE</h3>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={afterSampling} dataKey="value" innerRadius={40} outerRadius={60} paddingAngle={5}>
                  {afterSampling.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm font-bold text-emerald-600 mt-2">50.0% Minority Class</p>
          <p className="text-xs text-slate-400">Balanced for model training</p>
        </div>
      </div>

      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
        <div>
          <h3 className="text-xl font-bold flex items-center gap-2 mb-3">
            <CheckCircle2 className="text-blue-600" size={24} />
            The Hybrid Approach
          </h3>
          <p className="text-slate-600 leading-relaxed">
            Standard random oversampling often creates overfitting by duplicating existing records. 
            Our <strong>SMOTE-Tomek</strong> pipeline creates synthetic new data points while simultaneously 
            cleaning "noisy" decision boundaries.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
            <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-r-lg">
              <h5 className="font-bold text-blue-700 mb-1">Synthetic Minority (SMOTE)</h5>
              <p className="text-sm text-slate-600">Interpolates between existing fraud cases to generate realistic synthetic transactions.</p>
            </div>
            <div className="p-4 bg-emerald-50 border-l-4 border-emerald-500 rounded-r-lg">
              <h5 className="font-bold text-emerald-700 mb-1">Boundary Cleaning (Tomek)</h5>
              <p className="text-sm text-slate-600">Removes overlapping samples that confuse the model's decision between legit and fraud.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preprocessing;
