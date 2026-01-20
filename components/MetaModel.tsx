
import React from 'react';
import { Layers, Database, Cpu, PieChart as PieIcon, Info } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';

const MetaModel: React.FC = () => {
  const modelWeights = [
    { name: 'LightGBM', value: 0.52, color: '#10b981' },
    { name: 'XGBoost', value: 0.38, color: '#3b82f6' },
    { name: 'Logistic Reg', value: 0.10, color: '#8b5cf6' },
  ];

  return (
    <div className="space-y-8 pb-12">
      <h2 className="text-3xl font-bold text-slate-800">Stacking Meta-Model</h2>
      
      <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm">
        <div className="flex flex-col items-center gap-6">
          <div className="text-center mb-4">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1">Layer 1: Base Models</h4>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="px-5 py-3 bg-emerald-50 border-2 border-emerald-100 rounded-xl text-sm font-bold text-emerald-700 shadow-sm">LightGBM</div>
              <div className="px-5 py-3 bg-blue-50 border-2 border-blue-100 rounded-xl text-sm font-bold text-blue-700 shadow-sm">XGBoost</div>
              <div className="px-5 py-3 bg-slate-50 border-2 border-slate-100 rounded-xl text-sm font-bold text-slate-700 shadow-sm">Random Forest</div>
            </div>
          </div>
          
          <div className="w-1 h-12 bg-gradient-to-b from-slate-200 to-indigo-400 rounded-full"></div>
          
          <div className="text-center">
             <h4 className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Layer 2: Meta-Learner</h4>
             <div className="flex items-center gap-3 p-6 bg-indigo-600 text-white rounded-2xl shadow-xl ring-4 ring-indigo-50">
               <Layers className="animate-pulse" />
               <div className="text-left">
                 <p className="text-[10px] uppercase font-bold text-indigo-200 leading-none mb-1">Stacking Ensemble</p>
                 <span className="font-bold text-lg">Logistic Regression</span>
               </div>
             </div>
          </div>
          
          <div className="w-1 h-12 bg-gradient-to-b from-indigo-400 to-emerald-400 rounded-full"></div>
          
          <div className="px-8 py-4 bg-emerald-500 text-white rounded-full font-bold shadow-lg flex items-center gap-2">
            <PieIcon size={18} />
            Final Fraud Prediction
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Confusion Matrix Section */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-bold">Confusion Matrix (Meta-Model)</h3>
            <div className="text-[10px] font-bold text-slate-400 bg-slate-100 px-2 py-1 rounded">N=199,999 (Test Set)</div>
          </div>
          
          <div className="grid grid-cols-2 gap-4 h-64">
            <div className="relative group flex flex-col justify-center items-center bg-emerald-50 border border-emerald-100 rounded-2xl p-4 transition-all hover:shadow-inner">
              <span className="text-xs font-bold text-emerald-500 uppercase absolute top-3 left-3">True Legit</span>
              <span className="text-3xl font-black text-emerald-700 tracking-tight">162,489</span>
              <span className="text-[10px] text-emerald-600/60 font-medium">98.1% of Legit Samples</span>
            </div>
            
            <div className="relative group flex flex-col justify-center items-center bg-orange-50 border border-orange-100 rounded-2xl p-4">
              <span className="text-xs font-bold text-orange-500 uppercase absolute top-3 left-3">False Fraud</span>
              <span className="text-3xl font-black text-orange-700 tracking-tight">35,305</span>
              <span className="text-[10px] text-orange-600/60 font-medium">False Positive (False Alarm)</span>
            </div>

            <div className="relative group flex flex-col justify-center items-center bg-rose-50 border border-rose-100 rounded-2xl p-4">
              <span className="text-xs font-bold text-rose-500 uppercase absolute top-3 left-3">False Legit</span>
              <span className="text-3xl font-black text-rose-700 tracking-tight">489</span>
              <span className="text-[10px] text-rose-600/60 font-medium">Missed Fraud (Dangerous)</span>
            </div>

            <div className="relative group flex flex-col justify-center items-center bg-blue-50 border border-blue-100 rounded-2xl p-4">
              <span className="text-xs font-bold text-blue-500 uppercase absolute top-3 left-3">True Fraud</span>
              <span className="text-3xl font-black text-blue-700 tracking-tight">1,717</span>
              <span className="text-[10px] text-blue-600/60 font-medium">78% of Total Fraud Cases</span>
            </div>
          </div>
          
          <div className="mt-4 flex gap-4 p-3 bg-slate-50 rounded-lg text-xs text-slate-500 italic border border-slate-100">
            <Info size={14} className="shrink-0 text-slate-400" />
            <p>Note: The threshold for the Meta-learner was optimized to maximize Recall at 0.78, accepting a higher False Positive rate for safety.</p>
          </div>
        </div>

        {/* Model Weight Distribution */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4">Meta-Learner Coefficient Weight</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={modelWeights}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={90}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {modelWeights.map((e, i) => <Cell key={i} fill={e.color} />)}
                </Pie>
                <Tooltip />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-slate-600 mt-4 leading-relaxed">
            The Logistic Regression meta-learner places the most trust (<strong>52% weight</strong>) in <strong>LightGBM</strong>'s 
            probability predictions, followed closely by XGBoost.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MetaModel;
