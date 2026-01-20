
import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Database, 
  Wrench, 
  Cpu, 
  BarChart3, 
  Layers, 
  Lightbulb,
  ShieldCheck,
  ClipboardCheck,
  FileSearch,
  Activity,
  CalendarDays,
  FileWarning
} from 'lucide-react';
import DashboardHome from './components/DashboardHome';
import DataAnalysis from './components/DataAnalysis';
import Preprocessing from './components/Preprocessing';
import ModelsOverview from './components/ModelsOverview';
import ModelComparison from './components/ModelComparison';
import MetaModel from './components/MetaModel';
import Takeaways from './components/Takeaways';

// New Context Components
import AuditOverview from './components/audit/AuditOverview';
import AuditDataQuality from './components/audit/AuditDataQuality';
import BenfordAnalysis from './components/audit/BenfordAnalysis';
import AnomalyDetection from './components/audit/AnomalyDetection';
import AuditTakeaways from './components/audit/AuditTakeaways';

type AppMode = 'predictive' | 'audit';

const App: React.FC = () => {
  const [appMode, setAppMode] = useState<AppMode>('predictive');
  const [activeTab, setActiveTab] = useState<string>('home');

  const predictiveTabs = [
    { id: 'home', label: 'Problem & Overview', icon: LayoutDashboard },
    { id: 'data', label: 'Data Exploration', icon: Database },
    { id: 'preprocessing', label: 'Preprocessing', icon: Wrench },
    { id: 'models', label: 'ML Models', icon: Cpu },
    { id: 'comparison', label: 'All Model Comparison', icon: BarChart3 },
    { id: 'meta', label: 'Meta Model', icon: Layers },
    { id: 'insights', label: 'Takeaways', icon: Lightbulb },
  ];

  const auditTabs = [
    { id: 'audit-home', label: 'Audit Overview', icon: ClipboardCheck },
    { id: 'audit-quality', label: 'Data Integrity', icon: FileSearch },
    { id: 'audit-benford', label: "Benford's Law", icon: Activity },
    { id: 'audit-anomalies', label: 'Anomaly Flags', icon: FileWarning },
    { id: 'audit-takeaways', label: 'Audit Insights', icon: Lightbulb },
  ];

  const handleModeChange = (mode: AppMode) => {
    setAppMode(mode);
    setActiveTab(mode === 'predictive' ? 'home' : 'audit-home');
  };

  const renderContent = () => {
    if (appMode === 'predictive') {
      switch (activeTab) {
        case 'home': return <DashboardHome />;
        case 'data': return <DataAnalysis />;
        case 'preprocessing': return <Preprocessing />;
        case 'models': return <ModelsOverview />;
        case 'comparison': return <ModelComparison />;
        case 'meta': return <MetaModel />;
        case 'insights': return <Takeaways />;
        default: return <DashboardHome />;
      }
    } else {
      switch (activeTab) {
        case 'audit-home': return <AuditOverview />;
        case 'audit-quality': return <AuditDataQuality />;
        case 'audit-benford': return <BenfordAnalysis />;
        case 'audit-anomalies': return <AnomalyDetection />;
        case 'audit-takeaways': return <AuditTakeaways />;
        default: return <AuditOverview />;
      }
    }
  };

  const currentTabs = appMode === 'predictive' ? predictiveTabs : auditTabs;

  return (
    <div className={`min-h-screen flex flex-col font-sans transition-colors duration-300 ${appMode === 'predictive' ? 'bg-slate-50 text-slate-900' : 'bg-stone-50 text-stone-900'}`}>
      {/* Header */}
      <header className={`p-4 shadow-lg sticky top-0 z-50 transition-colors duration-300 ${appMode === 'predictive' ? 'bg-slate-900' : 'bg-stone-800'} text-white`}>
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg ${appMode === 'predictive' ? 'bg-blue-600' : 'bg-amber-600'}`}>
              {appMode === 'predictive' ? <ShieldCheck size={28} /> : <ClipboardCheck size={28} />}
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-tight">
                {appMode === 'predictive' ? 'Project 70: Bank Fraud Detection' : 'Project 70: Finance Audit Analytics'}
              </h1>
              <p className="text-xs opacity-70 font-medium uppercase tracking-widest">
                {appMode === 'predictive' ? 'Machine Learning Context' : 'Finance Integrity Context'}
              </p>
            </div>
          </div>
          <div className="flex items-center bg-black/20 p-1 rounded-xl border border-white/10">
             <button 
                onClick={() => handleModeChange('predictive')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${appMode === 'predictive' ? 'bg-blue-600 text-white shadow-lg' : 'text-white/50 hover:text-white'}`}
             >
               ML PREDICTIVE
             </button>
             <button 
                onClick={() => handleModeChange('audit')}
                className={`px-4 py-1.5 rounded-lg text-xs font-bold transition-all ${appMode === 'audit' ? 'bg-amber-600 text-white shadow-lg' : 'text-white/50 hover:text-white'}`}
             >
               FINANCE AUDIT
             </button>
          </div>
        </div>
      </header>

      <div className="flex flex-1 container mx-auto">
        {/* Navigation Sidebar */}
        <nav className="w-64 bg-white border-r border-slate-200 hidden md:block py-6 px-4">
          <ul className="space-y-2">
            <div className="px-4 mb-4 text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Navigation</div>
            {currentTabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => setActiveTab(tab.id)}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 ${
                    activeTab === tab.id 
                    ? (appMode === 'predictive' ? 'bg-blue-50 text-blue-700 shadow-sm' : 'bg-amber-50 text-amber-700 shadow-sm')
                    : 'text-slate-500 hover:bg-slate-50'
                  }`}
                >
                  <tab.icon size={20} />
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </nav>

        {/* Main Content Area */}
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
            {renderContent()}
          </div>
        </main>
      </div>

      <footer className="bg-white border-t border-slate-200 p-4 text-center text-slate-400 text-[10px] uppercase tracking-widest font-bold">
        &copy; 2024 Project 70 - Team 439 | {appMode === 'predictive' ? 'ML Predictive Modeling' : 'Financial Forensics'}
      </footer>
    </div>
  );
};

export default App;
