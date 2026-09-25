import React from 'react';
import { 
  EXECUTIVE_SUMMARY, 
  NOTABILITY_ASSESSMENT, 
  ORG_PROFILE, 
  SOURCES_DATABASE 
} from '../data/dossierData';
import { 
  AlertTriangle, 
  CheckCircle2, 
  XCircle, 
  HelpCircle, 
  ShieldAlert, 
  ArrowRight, 
  FileText, 
  Scale, 
  Building, 
  Calendar, 
  Users, 
  MapPin, 
  ExternalLink,
  ShieldCheck,
  Award,
  Database
} from 'lucide-react';
import { TabType } from './Header';

interface OverviewTabProps {
  onNavigate: (tab: TabType) => void;
}

export const OverviewTab: React.FC<OverviewTabProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-6">
      {/* Hero Executive Card with clean white background */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold">
              <Building className="w-3.5 h-3.5 text-emerald-600" />
              <span>Section 8 Registered Non-Profit • Registrar of Companies (ROC) Pune</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Investigative Research Dossier & Wikipedia Standards Evaluation
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              This dossier objectively examines and fact-checks <strong>Nisarg Srishti Welfare Foundation (NSWF)</strong> using statutory Ministry of Corporate Affairs filings, municipal school collaboration records, and broadcast appearances. It evaluates whether current public evidence satisfies Wikipedia's <strong>General Notability Guideline (WP:GNG)</strong> and <strong>Organizations Guideline (WP:ORG)</strong>.
            </p>
          </div>

          {/* Notability Gauge card */}
          <div className="bg-white border-2 border-amber-300 rounded-xl p-5 min-w-[290px] w-full lg:w-auto shadow-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-bold text-slate-600 uppercase tracking-wider">Wikipedia Notability Score</span>
              <span className="px-2 py-0.5 rounded text-[11px] font-bold bg-amber-100 text-amber-800 border border-amber-200">
                Below Threshold
              </span>
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-4xl font-extrabold text-amber-700">38</span>
              <span className="text-xs text-slate-500 font-semibold">/ 100 points</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2.5 mb-3 overflow-hidden">
              <div className="bg-amber-500 h-2.5 rounded-full" style={{ width: '38%' }}></div>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              <strong>Evaluation Verdict:</strong> Does not currently meet WP:GNG or WP:ORG requirements. Retain in Draft / Sandbox mode; avoid direct mainspace publication.
            </p>
          </div>
        </div>

        {/* Fact Sheet Quick Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mt-6 pt-6 border-t border-slate-200 text-xs">
          <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
            <span className="text-slate-500 block mb-0.5 font-medium">Legal Status</span>
            <span className="font-bold text-slate-900">Active Section 8 Non-Profit</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
            <span className="text-slate-500 block mb-0.5 font-medium">Incorporation Date</span>
            <span className="font-bold text-slate-900">11 January 2023</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
            <span className="text-slate-500 block mb-0.5 font-medium">Corporate ID (CIN)</span>
            <span className="font-mono text-emerald-700 font-bold">U85300PN2023NPL217884</span>
          </div>
          <div className="bg-white p-3 rounded-lg border border-slate-200 shadow-xs">
            <span className="text-slate-500 block mb-0.5 font-medium">Founder & CEO</span>
            <span className="font-bold text-slate-900">Dr. Garima Kavathekar</span>
          </div>
        </div>
      </div>

      {/* Two-Column Comparison: Verified Facts vs Editorial Limitations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Verified Strengths */}
        <div className="bg-white border border-emerald-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-emerald-100">
            <div className="h-7 w-7 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Independently Verified Facts</h3>
          </div>
          <ul className="space-y-3 text-xs text-slate-700">
            {EXECUTIVE_SUMMARY.keyVerifiedFacts.map((fact, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                  ✓
                </span>
                <span className="leading-relaxed">{fact}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <button 
              onClick={() => onNavigate('dossier')}
              className="text-xs text-emerald-700 hover:text-emerald-800 font-bold inline-flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Examine full 11-section research dossier</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Limitations and Red Flags */}
        <div className="bg-white border border-rose-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2.5 pb-3 border-b border-rose-100">
            <div className="h-7 w-7 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center font-bold">
              <ShieldAlert className="w-4 h-4" />
            </div>
            <h3 className="font-bold text-slate-900 text-base">Wikipedia Editorial Obstacles & Red Flags</h3>
          </div>
          <ul className="space-y-3 text-xs text-slate-700">
            {EXECUTIVE_SUMMARY.keyLimitations.map((limit, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="h-5 w-5 rounded-full bg-rose-100 text-rose-800 border border-rose-200 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                  !
                </span>
                <span className="leading-relaxed">{limit}</span>
              </li>
            ))}
          </ul>
          <div className="pt-2">
            <button 
              onClick={() => onNavigate('checklist')}
              className="text-xs text-rose-700 hover:text-rose-800 font-bold inline-flex items-center gap-1.5 group cursor-pointer"
            >
              <span>Review Wikipedia pre-submission checklist</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>

      {/* Critical Editorial Insight: Why PR Syndication Fails WP:ORG */}
      <div className="bg-amber-50/70 border border-amber-300 rounded-2xl p-6 text-xs text-amber-950 leading-relaxed space-y-3 shadow-xs">
        <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
          <AlertTriangle className="w-4 h-4 text-amber-600 shrink-0" />
          <span>Special Investigation: The "PR Syndication Trap" in NSWF Coverage</span>
        </div>
        <p className="text-slate-700">
          A common misconception among organizations seeking Wikipedia representation is that any published online article qualifies as an independent reliable source. Our investigation revealed that while NSWF has dozens of articles on portals such as <strong>India Chronicle (indiachronicle.in)</strong>, <strong>Bharat Good Times (bharatgoodtimes.com)</strong>, <strong>NeelWrites (neelwrites.com)</strong>, and <strong>StayFeatured (stayfeatured.com)</strong>, these portals are open PR distribution channels, sponsored release publishers, or un-moderated contributor blogs.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
          <div className="bg-white p-3.5 rounded-xl border border-amber-200">
            <span className="font-bold text-slate-900 block mb-1">WP:RS (Reliability)</span>
            <p className="text-[11px] text-slate-600">
              PR syndication platforms lack editorial fact-checking and publish verbatim press releases submitted by the foundation.
            </p>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-amber-200">
            <span className="font-bold text-slate-900 block mb-1">WP:INDEPENDENT</span>
            <p className="text-[11px] text-slate-600">
              Sources funded by or submitted by the organization are NOT independent, even if hosted on an external third-party domain.
            </p>
          </div>
          <div className="bg-white p-3.5 rounded-xl border border-amber-200">
            <span className="font-bold text-slate-900 block mb-1">WP:CSD G11 Risk</span>
            <p className="text-[11px] text-slate-600">
              Submitting an article reliant on promotional links invites speedy deletion under Wikipedia's Unambiguous Advertising rule.
            </p>
          </div>
        </div>
      </div>

      {/* Navigation Quick Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
        <div 
          onClick={() => onNavigate('dossier')}
          className="bg-white hover:bg-emerald-50/40 border border-slate-200 hover:border-emerald-300 p-5 rounded-2xl cursor-pointer transition-all shadow-xs group"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="h-9 w-9 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center">
              <FileText className="w-5 h-5" />
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-700 group-hover:translate-x-1 transition-all" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Full Research Dossier</h4>
          <p className="text-xs text-slate-600 mt-1">
            Browse all 11 verified sections including timeline, program dossiers, partnerships, and impact audit.
          </p>
        </div>

        <div 
          onClick={() => onNavigate('draft')}
          className="bg-white hover:bg-sky-50/40 border border-slate-200 hover:border-sky-300 p-5 rounded-2xl cursor-pointer transition-all shadow-xs group"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="h-9 w-9 rounded-lg bg-sky-100 text-sky-700 flex items-center justify-center">
              <Scale className="w-5 h-5" />
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-sky-700 group-hover:translate-x-1 transition-all" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Wikipedia Draft Studio</h4>
          <p className="text-xs text-slate-600 mt-1">
            Toggle between standard Wikipedia Vector theme layout and raw copyable Wikitext code.
          </p>
        </div>

        <div 
          onClick={() => onNavigate('audit')}
          className="bg-white hover:bg-amber-50/40 border border-slate-200 hover:border-amber-300 p-5 rounded-2xl cursor-pointer transition-all shadow-xs group"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="h-9 w-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5" />
            </div>
            <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-amber-700 group-hover:translate-x-1 transition-all" />
          </div>
          <h4 className="font-bold text-slate-900 text-sm">Claim Verification Matrix</h4>
          <p className="text-xs text-slate-600 mt-1">
            Audit every factual statement, source independence, verification status, and editorial action.
          </p>
        </div>
      </div>
    </div>
  );
};
