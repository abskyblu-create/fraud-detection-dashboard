
import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  ResponsiveContainer, PieChart, Pie, Cell, AreaChart, Area 
} from 'recharts';

const DataAnalysis: React.FC = () => {
  const fraudDistribution = [
    { name: 'Legitimate', value: 988971, color: '#10b981' },
    { name: 'Fraudulent', value: 11029, color: '#ef4444' },
  ];

  const featureImportance = [
    { name: 'device_os_win', score: 0.85, category: 'Technical' },
    { name: 'credit_risk_score', score: 0.78, category: 'Financial' },
    { name: 'proposed_credit_limit', score: 0.72, category: 'Financial' },
    { name: 'customer_age', score: 0.65, category: 'Demographic' },
    { name: 'income', score: 0.58, category: 'Demographic' },
    { name: 'velocity_24h', score: 0.52, category: 'Behavioral' },
    { name: 'session_length', score: 0.45, category: 'Behavioral' },
  ];

  const behaviorData = [
    { hour: '00', legit: 400, fraud: 10 },
    { hour: '04', legit: 150, fraud: 15 },
    { hour: '08', legit: 600, fraud: 25 },
    { hour: '12', legit: 850, fraud: 40 },
    { hour: '16', legit: 950, fraud: 35 },
    { hour: '20', legit: 700, fraud: 20 },
    { hour: '23', legit: 450, fraud: 12 },
  ];

  return (
    <div className="space-y-8 pb-12">
      <h2 className="text-3xl font-bold text-slate-800">Exploratory Data Analysis</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Class Imbalance */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-emerald-500 rounded-full"></div>
            Target Variable Distribution
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={fraudDistribution}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                  label={({name, percent}) => `${name} ${(percent * 100).toFixed(1)}%`}
                >
                  {fraudDistribution.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-sm text-slate-500 italic text-center">
            Dataset contains 1 million records with high class imbalance.
          </p>
        </div>

        {/* Feature Importance */}
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
            XGBoost Feature Importance (Global)
          </h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={featureImportance} layout="vertical" margin={{ left: 50 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#f1f5f9" />
                <XAxis type="number" hide />
                <YAxis dataKey="name" type="category" width={140} tick={{ fontSize: 11, fontWeight: 500 }} />
                <Tooltip 
                  cursor={{fill: '#f8fafc'}}
                  contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                />
                <Bar dataKey="score" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={20} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Behavioral Analysis */}
      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
          <div className="w-1 h-6 bg-purple-500 rounded-full"></div>
          Transaction Volume Over Time (Legit vs Fraud)
        </h3>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={behaviorData}>
              <defs>
                <linearGradient id="colorLegit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="colorFraud" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="hour" label={{ value: 'Hour of Day', position: 'bottom', offset: 0, fontSize: 12 }} />
              <YAxis fontSize={12} />
              <Tooltip />
              <Legend verticalAlign="top" height={36}/>
              <Area type="monotone" dataKey="legit" name="Legitimate" stroke="#10b981" fillOpacity={1} fill="url(#colorLegit)" strokeWidth={2} />
              <Area type="monotone" dataKey="fraud" name="Fraudulent" stroke="#ef4444" fillOpacity={1} fill="url(#colorFraud)" strokeWidth={2} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold mb-4">EDA Key Insights</h3>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
            <span className="w-6 h-6 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center font-bold text-sm">1</span>
            <p className="text-sm text-slate-600"><strong>Class Imbalance:</strong> With only 1.1% fraud, accuracy is irrelevant. F1 and Recall are our primary compasses.</p>
          </li>
          <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
            <span className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center font-bold text-sm">2</span>
            <p className="text-sm text-slate-600"><strong>Device Signature:</strong> Windows users showed a statistically significant higher correlation with synthetic identities.</p>
          </li>
          <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
            <span className="w-6 h-6 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center font-bold text-sm">3</span>
            <p className="text-sm text-slate-600"><strong>Credit Behavior:</strong> Proposed credit limits peaking at specific round numbers (e.g. $5000) often coincided with fraudulent bursts.</p>
          </li>
          <li className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg">
            <span className="w-6 h-6 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center font-bold text-sm">4</span>
            <p className="text-sm text-slate-600"><strong>Email Similarity:</strong> Similarity between name and email proved to be a weak signal, surprisingly surpassed by velocity metrics.</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DataAnalysis;
