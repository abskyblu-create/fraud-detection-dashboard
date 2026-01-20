
import React from 'react';
import { Search, ShieldAlert, FileCheck, Landmark } from 'lucide-react';

const AuditOverview: React.FC = () => {
  return (
    <div className="space-y-8 pb-12">
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold text-stone-800">Financial Integrity Audit</h2>
        <div className="bg-white p-8 rounded-2xl border border-stone-200 shadow-sm">
          <p className="text-stone-600 leading-relaxed text-lg italic">
            "While predictive models look for future risk, audit analytics look for historical manipulation."
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <h4 className="font-bold text-stone-800 flex items-center gap-2 text-sm uppercase tracking-wider">
                <Search className="text-amber-500" size={18} />
                Audit Scope
              </h4>
              <p className="text-sm text-stone-500 leading-relaxed">
                This analysis focuses on the verification of three distinct financial sources: the Annex4 Finance Report, 
                SENED Budget Solidarity logs, and the QuickReport Journal. We investigate numerical distributions 
                and chronological anomalies to ensure donor transparency.
              </p>
            </div>
            <div className="space-y-3">
              <h4 className="font-bold text-stone-800 flex items-center gap-2 text-sm uppercase tracking-wider">
                <ShieldAlert className="text-amber-500" size={18} />
                Fraud Indicators
              </h4>
              <p className="text-sm text-stone-500 leading-relaxed">
                We utilize Benford's Law (First Digit Test) to identify artificial numbering, 
                and custom scripts to flag identical Date+Amount collisions which often indicate 
                double-billing or clerical fraud.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Annex4 Report", desc: "Finance Transaction Journal", rows: "161 Entries", icon: <Landmark /> },
          { label: "SENED Logs", desc: "Budget & Solidarity Syria/Turkey", rows: "318 Entries", icon: <FileCheck /> },
          { label: "QuickReport", desc: "Internal General Ledger", rows: "354 Entries", icon: <Search /> }
        ].map((item, i) => (
          <div key={i} className="bg-stone-800 text-white p-6 rounded-2xl shadow-xl">
            <div className="text-amber-400 mb-4">{item.icon}</div>
            <h3 className="font-bold text-lg mb-1">{item.label}</h3>
            <p className="text-stone-400 text-xs mb-4">{item.desc}</p>
            <div className="inline-block px-3 py-1 bg-white/10 rounded-lg text-xs font-bold text-amber-200 uppercase tracking-tighter">
              {item.rows}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AuditOverview;
