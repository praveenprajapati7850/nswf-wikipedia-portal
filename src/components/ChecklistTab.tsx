import React, { useState } from 'react';
import { 
  EDITORIAL_CHECKLIST, 
  COI_DISCLOSURE_TEMPLATE,
  EditorialChecklistItem 
} from '../data/wikipediaDraft';
import { 
  CheckSquare, 
  AlertTriangle, 
  ShieldAlert, 
  ShieldCheck, 
  Copy, 
  Check, 
  Info,
  ExternalLink,
  HelpCircle,
  XCircle
} from 'lucide-react';

export const ChecklistTab: React.FC = () => {
  const [checklist, setChecklist] = useState<EditorialChecklistItem[]>(EDITORIAL_CHECKLIST);
  const [completedItems, setCompletedItems] = useState<Record<string, boolean>>({
    'chk-3': true, // Neutral Point of View passed
    'chk-4': true, // Metric attribution passed
  });
  const [copiedCOI, setCopiedCOI] = useState(false);

  const toggleCheck = (id: string) => {
    setCompletedItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const completedCount = Object.values(completedItems).filter(Boolean).length;
  const readinessPercent = Math.round((completedCount / checklist.length) * 100);

  const handleCopyCOI = () => {
    navigator.clipboard.writeText(COI_DISCLOSURE_TEMPLATE);
    setCopiedCOI(true);
    setTimeout(() => setCopiedCOI(false), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                <CheckSquare className="w-5 h-5" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">Human Editorial Review & COI Gatekeeper</h2>
            </div>
            <p className="text-xs text-slate-600 mt-1">
              Final pre-submission vetting checklist to protect Wikipedia's encyclopedic integrity and avoid CSD G11 deletion or editor sanctions.
            </p>
          </div>

          {/* Dynamic Readiness Score */}
          <div className="bg-white p-3.5 rounded-xl border border-slate-200 shadow-xs flex items-center gap-4 text-xs">
            <div>
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-bold">
                Submission Readiness
              </div>
              <div className="flex items-baseline gap-1 mt-0.5">
                <span className={`text-2xl font-black ${
                  readinessPercent >= 80 ? 'text-emerald-700' : 'text-amber-700'
                }`}>
                  {readinessPercent}%
                </span>
                <span className="text-slate-500 font-medium">({completedCount}/{checklist.length} verified)</span>
              </div>
            </div>
            <span className={`px-2.5 py-1 rounded text-[10px] font-bold border ${
              readinessPercent >= 80 
                ? 'bg-emerald-100 text-emerald-800 border-emerald-300' 
                : 'bg-amber-100 text-amber-800 border-amber-300'
            }`}>
              {readinessPercent >= 80 ? 'Ready for AfC' : 'Hold Submission'}
            </span>
          </div>
        </div>
      </div>

      {/* Interactive Checklist Cards */}
      <div className="space-y-3">
        {checklist.map(item => {
          const isChecked = !!completedItems[item.id];
          return (
            <div 
              key={item.id}
              className={`p-5 rounded-2xl border transition-all ${
                isChecked
                  ? 'bg-emerald-50/40 border-emerald-300 shadow-xs'
                  : 'bg-white border-slate-200 hover:border-slate-300 shadow-xs'
              }`}
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-3.5">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => toggleCheck(item.id)}
                    className="mt-1 h-4 w-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500 bg-white cursor-pointer"
                  />
                  <div className="space-y-1.5">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-mono text-emerald-800 font-bold bg-emerald-100 px-2 py-0.5 rounded">{item.category}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        item.status === 'Pass'
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : item.status === 'Fail'
                          ? 'bg-rose-100 text-rose-800 border-rose-300'
                          : 'bg-amber-100 text-amber-800 border-amber-300'
                      }`}>
                        Current Status: {item.status}
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-900">{item.check}</h4>
                    <p className="text-xs text-slate-700 leading-relaxed">{item.description}</p>
                    
                    <div className="bg-white p-3 rounded-xl border border-slate-200 text-xs text-slate-700 mt-2 shadow-xs">
                      <strong className="text-slate-900">Actionable Editorial Guidance: </strong>
                      {item.recommendation}
                    </div>
                  </div>
                </div>

                <div className="shrink-0 hidden sm:block">
                  {isChecked ? (
                    <span className="text-xs font-bold text-emerald-700 flex items-center gap-1 bg-emerald-100 px-2 py-1 rounded-md">
                      <Check className="w-4 h-4" /> Passed
                    </span>
                  ) : (
                    <span className="text-xs font-medium text-slate-400 bg-slate-100 px-2 py-1 rounded-md">Unchecked</span>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mandatory Conflict of Interest (COI) & Paid Editing Disclosure */}
      <div className="bg-white border border-amber-300 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="p-2 bg-amber-100 text-amber-700 rounded-xl">
              <ShieldAlert className="w-5 h-5" />
            </span>
            <h3 className="font-bold text-slate-900 text-base">Mandatory WP:COI & WP:PAID Disclosure Statement</h3>
          </div>
          <button
            onClick={handleCopyCOI}
            className="flex items-center gap-1 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 border border-slate-200 transition-colors cursor-pointer"
          >
            {copiedCOI ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedCOI ? 'Copied Disclosure!' : 'Copy Template'}</span>
          </button>
        </div>

        <div className="text-xs text-slate-700 leading-relaxed space-y-3">
          <p>
            Under the <strong>Wikimedia Foundation Terms of Use</strong>, any individual who writes, edits, or submits an article for which they have received or expect to receive compensation (monetary, employment, or contractual) MUST disclose their employer, client, and affiliation.
          </p>
          <div className="bg-slate-900 p-5 rounded-xl font-mono text-emerald-300 text-xs whitespace-pre-wrap border border-slate-800">
            {COI_DISCLOSURE_TEMPLATE}
          </div>
          <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-amber-950 text-xs leading-relaxed">
            <strong>Warning:</strong> Undisclosed paid editing (UPE) is strictly prohibited on English Wikipedia and typically results in an immediate indef-block of the submitting user account and speedy deletion (CSD G11) of the created article.
          </div>
        </div>
      </div>
    </div>
  );
};
