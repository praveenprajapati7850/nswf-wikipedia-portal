import React, { useState } from 'react';
import { 
  FileText, 
  BookOpen, 
  Database, 
  CheckSquare, 
  AlertTriangle, 
  Download, 
  ShieldCheck, 
  Scale,
  ExternalLink,
  ChevronDown,
  Layers,
  Sparkles
} from 'lucide-react';

export type TabType = 'overview' | 'dossier' | 'sources' | 'draft' | 'audit' | 'checklist' | 'export';

interface HeaderProps {
  activeTab: TabType;
  setActiveTab: (tab: TabType) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const tabs: { id: TabType; label: string; shortDesc: string; icon: React.ComponentType<{ className?: string }> }[] = [
    { 
      id: 'overview', 
      label: 'Executive Overview', 
      shortDesc: 'Key findings, verified vs unverified facts, notability rating', 
      icon: ShieldCheck 
    },
    { 
      id: 'dossier', 
      label: 'Full Research Dossier', 
      shortDesc: 'Sections 1 to 11: Profile, timeline, initiatives, governance', 
      icon: FileText 
    },
    { 
      id: 'sources', 
      label: 'Source Database & Verification Hub', 
      shortDesc: 'Filterable catalog of MCA, PR, BBC & primary references', 
      icon: Database 
    },
    { 
      id: 'draft', 
      label: 'Wikipedia Draft & Wikitext Studio', 
      shortDesc: 'Full encyclopedic draft preview & raw wikitext code', 
      icon: BookOpen 
    },
    { 
      id: 'audit', 
      label: 'Claim Verification Matrix', 
      shortDesc: 'Line-by-line audit: Keep, Revise, or Remove actions', 
      icon: Scale 
    },
    { 
      id: 'checklist', 
      label: 'Editorial Review & COI Checklist', 
      shortDesc: 'Pre-submission gates, WP:COI & WP:PAID disclosures', 
      icon: CheckSquare 
    },
    { 
      id: 'export', 
      label: 'Export & Documentation Center', 
      shortDesc: 'Download Markdown (.md), Wikitext (.wiki), or CSV spreadsheet', 
      icon: Download 
    },
  ];

  const currentTabObj = tabs.find(t => t.id === activeTab) || tabs[0];
  const CurrentIcon = currentTabObj.icon;

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
      {/* Top advisory warning bar */}
      <div className="bg-amber-50 border-b border-amber-200/80 px-4 py-2 text-xs text-amber-900">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2 font-medium">
            <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
            <span>
              <strong>Fact-Checking & Notability Advisory:</strong> NSWF lacks significant coverage in independent newspapers of record. Draft prepared strictly for sandbox review; <strong>do not publish directly to Wikipedia mainspace</strong> (violates WP:ORG / WP:GNG).
            </span>
          </div>
          <div className="flex items-center gap-2 text-slate-700 font-mono text-[11px]">
            <span className="bg-white px-2 py-0.5 rounded border border-amber-200 font-semibold text-emerald-800">
              CIN: U85300PN2023NPL217884
            </span>
            <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-2 py-0.5 rounded font-semibold">
              RoC Pune (Active)
            </span>
          </div>
        </div>
      </div>

      {/* Main clean white branding row */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          
          {/* Logo & title */}
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-sm shrink-0">
              <Scale className="w-5 h-5" />
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-xl font-bold tracking-tight text-slate-900">
                  Nisarg Srishti Welfare Foundation (NSWF)
                </h1>
                <span className="text-xs bg-emerald-100 text-emerald-800 border border-emerald-300 px-2.5 py-0.5 rounded-full font-semibold">
                  Section 8 Non-Profit
                </span>
                <span className="text-xs bg-amber-100 text-amber-800 border border-amber-300 px-2.5 py-0.5 rounded-full font-semibold">
                  Notability: 38/100 (Below Threshold)
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Investigative Research Dossier • Wikipedia Standards Audit • Fact-Checking Portal
              </p>
            </div>
          </div>

          {/* Quick links & Selector button */}
          <div className="flex items-center gap-2.5">
            <a 
              href="https://nisargsrishti.org" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-xs font-semibold text-slate-700 shadow-xs transition-colors"
            >
              <span>nisargsrishti.org</span>
              <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
            </a>

            {/* Dropdown Menu for fast switching on mobile/compact view */}
            <div className="relative md:hidden">
              <button
                onClick={() => setDropdownOpen(!dropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-emerald-600 text-white font-semibold text-xs shadow-xs"
              >
                <CurrentIcon className="w-4 h-4" />
                <span>{currentTabObj.label}</span>
                <ChevronDown className="w-3.5 h-3.5" />
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-xl shadow-xl border border-slate-200 py-1.5 z-50">
                  {tabs.map((tab) => {
                    const TabIcon = tab.icon;
                    const isActive = activeTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => {
                          setActiveTab(tab.id);
                          setDropdownOpen(false);
                        }}
                        className={`w-full text-left px-3.5 py-2.5 flex items-start gap-2.5 transition-colors ${
                          isActive ? 'bg-emerald-50 text-emerald-900 font-semibold' : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <TabIcon className={`w-4 h-4 mt-0.5 shrink-0 ${isActive ? 'text-emerald-600' : 'text-slate-500'}`} />
                        <div>
                          <div className="text-xs">{tab.label}</div>
                          <div className="text-[10px] text-slate-500 font-normal">{tab.shortDesc}</div>
                        </div>
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Clear Tab Navigation Bar - All options selectable to open details */}
        <div className="mt-4 pt-3 border-t border-slate-200">
          <div className="flex items-center gap-1.5 text-xs text-slate-500 mb-2 font-medium">
            <Layers className="w-3.5 h-3.5 text-slate-400" />
            <span>Select a view to examine details:</span>
          </div>

          <nav className="flex space-x-2 overflow-x-auto pb-1 scrollbar-none" aria-label="Tabs">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-3.5 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap border ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-400 shadow-xs ring-1 ring-emerald-300'
                      : 'bg-white text-slate-600 hover:text-slate-900 hover:bg-slate-50 border-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 shrink-0 ${isActive ? 'text-emerald-700' : 'text-slate-400'}`} />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};
