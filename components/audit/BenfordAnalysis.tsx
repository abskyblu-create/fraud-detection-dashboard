
import React from 'react';
import { 
  ComposedChart, Bar, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

const BenfordAnalysis: React.FC = () => {
  // Data reconstructed from the user's provided HTML data results
  const annex4Data = [
    { digit: '1', obs: 0.297, exp: 0.301 },
    { digit: '2', obs: 0.139, exp: 0.176 },
    { digit: '3', obs: 0.095, exp: 0.125 },
    { digit: '4', obs: 0.133, exp: 0.097 },
    { digit: '5', obs: 0.025, exp: 0.079 },
    { digit: '6', obs: 0.133, exp: 0.067 },
    { digit: '7', obs: 0.019, exp: 0.058 },
    { digit: '8', obs: 0.114, exp: 0.051 },
    { digit: '9', obs: 0.044, exp: 0.046 },
  ];

  const quickReportData = [
    { digit: '1', obs: 0.164, exp: 0.301 },
    { digit: '2', obs: 0.218, exp: 0.176 },
    { digit: '3', obs: 0.251, exp: 0.125 },
    { digit: '4', obs: 0.172, exp: 0.097 },
    { digit: '5', obs: 0.105, exp: 0.079 },
    { digit: '6', obs: 0.017, exp: 0.067 },
    { digit: '7', obs: 0.023, exp: 0.058 },
    { digit: '8', obs: 0.037, exp: 0.051 },
    { digit: '9', obs: 0.014, exp: 0.046 },
  ];

  return (
    <div className="space-y-8 pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-stone-800">Benford's Law Analysis</h2>
          <p className="text-stone-500 text-sm mt-1">Comparison of first-digit frequencies in transaction amounts.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        {/* Annex4 Chart */}
        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h3 className="text-lg font-bold mb-8 flex items-center gap-3">
             <div className="w-1.5 h-6 bg-amber-500 rounded-full"></div>
             Annex4 Transaction Journal (Observed vs Expected)
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={annex4Data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                <XAxis dataKey="digit" label={{ value: 'First Significant Digit', position: 'bottom', offset: 0 }} />
                <YAxis label={{ value: 'Proportion', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                   formatter={(v: number) => (v * 100).toFixed(1) + '%'}
                />
                <Legend verticalAlign="top" height={36}/>
                <Bar name="Observed Frequency" dataKey="obs" fill="#d97706" radius={[4, 4, 0, 0]} barSize={40} />
                <Line name="Benford Expected" type="monotone" dataKey="exp" stroke="#4b5563" strokeWidth={3} dot={{ r: 6, fill: '#4b5563' }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* QuickReport Chart */}
        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
          <h3 className="text-lg font-bold mb-8 flex items-center gap-3">
             <div className="w-1.5 h-6 bg-emerald-500 rounded-full"></div>
             QuickReport Ledger (Observed vs Expected)
          </h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={quickReportData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f5f5f4" />
                <XAxis dataKey="digit" label={{ value: 'First Significant Digit', position: 'bottom', offset: 0 }} />
                <YAxis label={{ value: 'Proportion', angle: -90, position: 'insideLeft' }} />
                <Tooltip 
                   contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                   formatter={(v: number) => (v * 100).toFixed(1) + '%'}
                />
                <Legend verticalAlign="top" height={36}/>
                <Bar name="Observed Frequency" dataKey="obs" fill="#059669" radius={[4, 4, 0, 0]} barSize={40} />
                <Line name="Benford Expected" type="monotone" dataKey="exp" stroke="#4b5563" strokeWidth={3} dot={{ r: 6, fill: '#4b5563' }} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BenfordAnalysis;
