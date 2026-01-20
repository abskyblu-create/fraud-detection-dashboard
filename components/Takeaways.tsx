
import React from 'react';
import { Target, TrendingUp, Zap, Clock } from 'lucide-react';

const Takeaways: React.FC = () => {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold text-slate-800">Insights & Takeaways</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl border-l-4 border-l-blue-500 shadow-sm space-y-3">
          <div className="flex items-center gap-3 text-blue-600">
            <Target size={24} />
            <h3 className="font-bold">Imbalance Management</h3>
          </div>
          <p className="text-sm text-slate-600">
            SMOTE-Tomek was essential for deep learning of the fraud pattern. However, the models trained on the "Base" imbalanced set 
            with <code>class_weight='balanced'</code> actually maintained higher ranking metrics (PR-AUC) than pure SMOTE models, 
            showing that synthetic data generation must be used with caution.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-l-emerald-500 shadow-sm space-y-3">
          <div className="flex items-center gap-3 text-emerald-600">
            <TrendingUp size={24} />
            <h3 className="font-bold">Business Impact</h3>
          </div>
          <p className="text-sm text-slate-600">
            Our meta-model captures ~78% of all fraud attempts (Recall). While it triggers flags on ~18% of legitimate customers, 
            the high financial risk of bank opening fraud justifies a manual review or two-factor authentication challenge for these flagged users.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-l-purple-500 shadow-sm space-y-3">
          <div className="flex items-center gap-3 text-purple-600">
            <Zap size={24} />
            <h3 className="font-bold">Feature Importance</h3>
          </div>
          <p className="text-sm text-slate-600">
            The technical metadata (OS, Emails) and financial trust (Credit Score) were much more predictive than simple demographic data (Age, Income). 
            This suggests that fraudsters vary their demographics but struggle to fake long-term device history.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl border-l-4 border-l-amber-500 shadow-sm space-y-3">
          <div className="flex items-center gap-3 text-amber-600">
            <Clock size={24} />
            <h3 className="font-bold">Real-time Readiness</h3>
          </div>
          <p className="text-sm text-slate-600">
            LightGBM and XGBoost demonstrated sub-second prediction times for batches of 100,000 records. 
            This makes them highly suitable for deployment in a live bank production environment.
          </p>
        </div>
      </div>

      <div className="bg-slate-900 text-white p-10 rounded-2xl text-center space-y-6">
        <h3 className="text-3xl font-bold">Conclusion</h3>
        <p className="max-w-2xl mx-auto text-slate-300">
          The project successfully built a high-performance detection pipeline capable of analyzing millions of bank applications. 
          By prioritizing recall and using an ensemble of gradient-boosted trees, we achieved a stable and robust solution for the bank opening fraud problem.
        </p>
      </div>
    </div>
  );
};

export default Takeaways;
