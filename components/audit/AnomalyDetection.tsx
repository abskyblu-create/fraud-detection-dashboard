
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell, Legend } from 'recharts';
import { AlertTriangle, Clock } from 'lucide-react';

const AnomalyDetection: React.FC = () => {
  const anomalyData = [
    { name: 'Annex4', duplicates: 80, weekend: 47 },
    { name: 'SENED', duplicates: 108, weekend: 49 },
    { name: 'QuickReport', duplicates: 230, weekend: 74 },
  ];

  return (
    <div className="space-y-8 pb-12">
      <h2 className="text-3xl font-bold text-stone-800">Anomaly & Fraud Flags</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <AlertTriangle className="text-amber-500" />
            <h3 className="text-lg font-bold">Identical Date + Amount Pairs</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={anomalyData} layout="vertical" margin={{ left: 20 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" />
                <YAxis dataKey="name" type="category" width={100} fontSize={12} />
                <Tooltip />
                <Bar dataKey="duplicates" fill="#d97706" radius={[0, 6, 6, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-[11px] text-stone-400 italic">
            QuickReport shows the highest overlap (230 instances), suggesting repeated ledger entries for individual line items.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
          <div className="flex items-center gap-3 mb-6">
            <Clock className="text-stone-500" />
            <h3 className="text-lg font-bold">Weekend Activity (Sat/Sun)</h3>
          </div>
          <div className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={anomalyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="name" fontSize={12} />
                <YAxis fontSize={12} />
                <Tooltip />
                <Bar dataKey="weekend" fill="#4b5563" radius={[6, 6, 0, 0]} barSize={40} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-4 text-[11px] text-stone-400 italic">
            Weekend transactions are high in Annex4 (47) and QuickReport (74), warranting process review for off-hours financial approval.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnomalyDetection;
