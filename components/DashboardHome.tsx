
import React from 'react';
import { AlertTriangle, Users, Database, Globe } from 'lucide-react';

const DashboardHome: React.FC = () => {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold text-slate-800">Problem Statement</h2>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <p className="text-slate-600 leading-relaxed text-lg">
            Bank credit fraud poses a significant challenge to financial institutions, 
            resulting in substantial financial losses and erosion of customer trust. 
            Fraudsters use synthetic identities or stolen credentials to open new accounts 
            for money laundering or illegal transactions. 
          </p>
          <div className="mt-6 flex items-start gap-4 p-4 bg-amber-50 rounded-lg border border-amber-200">
            <AlertTriangle className="text-amber-600 shrink-0" size={24} />
            <p className="text-amber-800 text-sm italic">
              <strong>The Challenge:</strong> Severe class imbalance. With only 1.1% of transactions being fraudulent, 
              detecting them without overwhelming legitimate customers (False Positives) requires advanced modeling.
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
          <div className="bg-blue-100 p-3 rounded-full text-blue-600 mb-4">
            <Database size={32} />
          </div>
          <h3 className="text-2xl font-bold">1,000,000</h3>
          <p className="text-slate-500 text-sm">Total Records</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
          <div className="bg-purple-100 p-3 rounded-full text-purple-600 mb-4">
            <Users size={32} />
          </div>
          <h3 className="text-2xl font-bold">32</h3>
          <p className="text-slate-500 text-sm">Features/Variables</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center text-center">
          <div className="bg-emerald-100 p-3 rounded-full text-emerald-600 mb-4">
            <Globe size={32} />
          </div>
          <h3 className="text-2xl font-bold">1.1%</h3>
          <p className="text-slate-500 text-sm">Fraud Rate</p>
        </div>
      </div>

      <div className="space-y-4">
        <h3 className="text-xl font-bold text-slate-800">Dataset Attributes Highlights</h3>
        <div className="bg-white overflow-hidden rounded-xl border border-slate-200 shadow-sm">
          <table className="min-w-full divide-y divide-slate-200">
            <thead className="bg-slate-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Category</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase">Key Features</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-slate-200">
              <tr>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">Demographic</td>
                <td className="px-6 py-4 text-sm text-slate-600">income, customer_age, employment_status, housing_status</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">Transaction</td>
                <td className="px-6 py-4 text-sm text-slate-600">payment_type, proposed_credit_limit, intended_balcon_amount</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">Behavioral/Velocity</td>
                <td className="px-6 py-4 text-sm text-slate-600">velocity_6h, velocity_24h, session_length_in_minutes, keep_alive_session</td>
              </tr>
              <tr>
                <td className="px-6 py-4 text-sm font-semibold text-slate-900">Technical</td>
                <td className="px-6 py-4 text-sm text-slate-600">device_os, device_distinct_emails_8w, source, name_email_similarity</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
