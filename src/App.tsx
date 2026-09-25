import React, { useState } from 'react';
import { Header, TabType } from './components/Header';
import { OverviewTab } from './components/OverviewTab';
import { DossierTab } from './components/DossierTab';
import { SourcesTab } from './components/SourcesTab';
import { WikipediaDraftTab } from './components/WikipediaDraftTab';
import { ClaimAuditTab } from './components/ClaimAuditTab';
import { ChecklistTab } from './components/ChecklistTab';
import { ExportTab } from './components/ExportTab';
import { Scale, BookOpen, ExternalLink, ShieldCheck, CheckCircle2, AlertTriangle, FileText, Database } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');

  return (
    <div className="min-h-screen bg-white text-slate-900 flex flex-col font-sans selection:bg-emerald-200 selection:text-emerald-950">
      {/* Navigation Header with all options */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Viewport */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 bg-white">
        {activeTab === 'overview' && <OverviewTab onNavigate={setActiveTab} />}
        {activeTab === 'dossier' && <DossierTab />}
        {activeTab === 'sources' && <SourcesTab />}
        {activeTab === 'draft' && <WikipediaDraftTab />}
        {activeTab === 'audit' && <ClaimAuditTab />}
        {activeTab === 'checklist' && <ChecklistTab />}
        {activeTab === 'export' && <ExportTab />}
      </main>

      {/* Clean White Footer */}
      <footer className="border-t border-slate-200 bg-white text-xs text-slate-500 py-6 mt-12 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <Scale className="w-4 h-4 text-emerald-600" />
            <span className="font-semibold text-slate-800">
              NSWF Investigative Fact-Checking & Wikipedia Research Portal
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-slate-600 text-[11px]">
            <span className="font-mono font-medium text-slate-700">MCA Verification: RoC Pune (CIN: U85300PN2023NPL217884)</span>
            <span className="text-slate-300">•</span>
            <a 
              href="https://en.wikipedia.org/wiki/Wikipedia:Notability_(organizations_and_companies)" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-700 font-medium transition-colors flex items-center gap-1"
            >
              <span>WP:ORG Policy</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
            <span className="text-slate-300">•</span>
            <a 
              href="https://en.wikipedia.org/wiki/Wikipedia:Conflict_of_interest" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-slate-600 hover:text-emerald-700 font-medium transition-colors flex items-center gap-1"
            >
              <span>WP:COI Guidelines</span>
              <ExternalLink className="w-2.5 h-2.5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
