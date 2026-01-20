
import React from 'react';
import { Target, FileText, CheckCircle } from 'lucide-react';

const AuditTakeaways: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <h2 className="text-3xl font-bold text-stone-800">Audit Insights</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-sm">
          <Target className="text-amber-600 mb-4" />
          <h4 className="font-bold text-stone-900 mb-2">Benford Compliance</h4>
          <p className="text-xs text-stone-500 leading-relaxed">
            Annex4 shows strong compliance with the Benford curve (R-squared &gt; 0.9), suggesting natural organic transaction amounts. 
            However, QuickReport shows a heavy spike in digits '2' and '3', potentially indicating fixed-fee standardizations or repetitive billing thresholds.
          </p>
        </div>

        <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-sm">
          <FileText className="text-stone-700 mb-4" />
          <h4 className="font-bold text-stone-900 mb-2">Duplicate Identification</h4>
          <p className="text-xs text-stone-500 leading-relaxed">
            Over 400 candidate duplicates were flagged across the combined database. 
            The majority appear to be PTT transfer fees and recurring staff salaries, which are naturally identical. 
            Removing these systemic duplicates leaves ~15% high-risk outliers.
          </p>
        </div>

        <div className="p-6 bg-white border border-stone-200 rounded-2xl shadow-sm">
          <CheckCircle className="text-emerald-600 mb-4" />
          <h4 className="font-bold text-stone-900 mb-2">Audit Readiness</h4>
          <p className="text-xs text-stone-500 leading-relaxed">
            The data pipelines successfully harmonized three heterogeneous Excel structures into a single forensic view. 
            The system is now ready for semi-automated monthly donor report validation.
          </p>
        </div>
      </div>

      <div className="bg-stone-800 text-white p-12 rounded-3xl text-center space-y-4">
        <h3 className="text-2xl font-bold">Conclusion</h3>
        <p className="text-stone-400 max-w-xl mx-auto text-sm">
          The Financial Audit Context provides a historical and deterministic view of transaction validity. 
          By combining this with the Predictive ML Context, the organization can both catch old mistakes and predict new fraud before it occurs.
        </p>
      </div>
    </div>
  );
};

export default AuditTakeaways;
