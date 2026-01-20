
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, LabelList, ReferenceLine 
} from 'recharts';

const ModelComparison: React.FC = () => {
  const data = [
    { name: 'XGBoost', recall: 0.788, pr_auc: 0.161, roc_auc: 0.888 },
    { name: 'LightGBM', recall: 0.775, pr_auc: 0.166, roc_auc: 0.893 },
    { name: 'Logistic Reg', recall: 0.784, pr_auc: 0.128, roc_auc: 0.873 },
    { name: 'Random Forest', recall: 0.691, pr_auc: 0.125, roc_auc: 0.870 },
    { name: 'LR (SMOTE)', recall: 0.632, pr_auc: 0.130, roc_auc: 0.872 },
    { name: 'XGB (SMOTE)', recall: 0.396, pr_auc: 0.152, roc_auc: 0.886 },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Performance Leaderboard</h2>
          <p className="text-slate-500 text-sm mt-1">Side-by-side comparison of recall-focused metrics.</p>
        </div>
        <div className="flex items-center gap-4 text-xs font-semibold">
          <div className="flex items-center gap-1"><div className="w-3 h-3 bg-rose-500 rounded-sm"></div> Recall</div>
          <div className="flex items-center gap-1"><div className="w-3 h-3 bg-blue-500 rounded-sm"></div> PR-AUC</div>
          <div className="flex items-center gap-1"><div className="w-3 h-3 bg-slate-400 rounded-sm"></div> ROC-AUC</div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <div className="h-[500px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} layout="vertical" margin={{ left: 50, right: 30 }}>
              <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
              <XAxis type="number" domain={[0, 1]} hide />
              <YAxis dataKey="name" type="category" width={120} tick={{ fontSize: 13, fontWeight: 'bold' }} />
              <Tooltip 
                cursor={{fill: '#f8fafc'}}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
              />
              <Legend verticalAlign="top" align="right" height={36}/>
              <Bar dataKey="recall" name="Recall" fill="#f43f5e" radius={[0, 4, 4, 0]} barSize={15}>
                 <LabelList dataKey="recall" position="right" formatter={(v: number) => v.toFixed(3)} style={{ fontSize: 10 }} />
              </Bar>
              <Bar dataKey="pr_auc" name="PR-AUC" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={15}>
                <LabelList dataKey="pr_auc" position="right" formatter={(v: number) => v.toFixed(3)} style={{ fontSize: 10 }} />
              </Bar>
              <Bar dataKey="roc_auc" name="ROC-AUC" fill="#94a3b8" radius={[0, 4, 4, 0]} barSize={15}>
                <LabelList dataKey="roc_auc" position="right" formatter={(v: number) => v.toFixed(3)} style={{ fontSize: 10 }} />
              </Bar>
              <ReferenceLine x={0.75} stroke="#cbd5e1" strokeDasharray="3 3" label={{ value: 'Target Recall', position: 'top', fill: '#94a3b8', fontSize: 10 }} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-white to-rose-50 p-6 rounded-xl border border-rose-100 shadow-sm">
          <h3 className="text-lg font-bold text-rose-900 mb-2">Priority: Recall</h3>
          <p className="text-sm text-rose-800 leading-relaxed">
            In financial safety, the cost of a <strong>False Negative</strong> (a fraudster slipping through) is magnitudes higher 
            than a False Positive. XGBoost leads here with a <strong>0.788</strong> recall.
          </p>
        </div>
        <div className="bg-gradient-to-br from-white to-blue-50 p-6 rounded-xl border border-blue-100 shadow-sm">
          <h3 className="text-lg font-bold text-blue-900 mb-2">Quality: PR-AUC</h3>
          <p className="text-sm text-blue-800 leading-relaxed">
            For imbalanced sets, ROC-AUC is over-optimistic. <strong>LightGBM</strong> shows the best precision-recall trade-off 
            with a PR-AUC of <strong>0.166</strong>, indicating superior ranking quality.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ModelComparison;
