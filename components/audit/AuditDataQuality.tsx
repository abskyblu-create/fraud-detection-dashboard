
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { Info } from 'lucide-react';

const AuditDataQuality: React.FC = () => {
  const qualityData = [
    { name: 'Annex4', rows: 161, missingDate: 0.0, missingAmount: 1.86, color: '#d97706' },
    { name: 'SENED', rows: 318, missingDate: 0.0, missingAmount: 0.0, color: '#059669' },
    { name: 'QuickReport', rows: 354, missingDate: 7.63, missingAmount: 0.0, color: '#4b5563' },
  ];

  return (
    <div className="space-y-8 pb-12">
      <h2 className="text-3xl font-bold text-stone-800">Source Integrity Matrix</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6">Record Counts per Source</h3>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={qualityData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip cursor={{fill: '#f5f5f4'}} />
                <Bar dataKey="rows" barSize={50} radius={[8, 8, 0, 0]}>
                  {qualityData.map((entry, index) => (
                    <Cell key={index} fill={entry.color} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-stone-200 shadow-sm">
          <h3 className="text-lg font-bold mb-6">Key Missing Fields (%)</h3>
          <div className="space-y-6">
            {qualityData.map((item, idx) => (
              <div key={idx} className="space-y-2">
                <div className="flex justify-between text-xs font-bold uppercase text-stone-500">
                  <span>{item.name} Report</span>
                  <span>{Math.max(item.missingDate, item.missingAmount).toFixed(2)}% Critical Leakage</span>
                </div>
                <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-amber-500 rounded-full transition-all duration-1000" 
                    style={{ width: `${Math.max(item.missingDate, item.missingAmount) * 5}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-4 bg-stone-50 rounded-xl border border-stone-100 flex gap-4">
             <Info className="text-stone-400 shrink-0" size={18} />
             <p className="text-[11px] text-stone-500 leading-tight">
               QuickReport shows 7.6% missing dates, primarily due to footer artifacts and summary rows in the raw Excel export.
             </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuditDataQuality;
