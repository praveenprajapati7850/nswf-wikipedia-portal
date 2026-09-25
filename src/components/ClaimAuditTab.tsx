import React, { useState } from 'react';
import { CLAIM_AUDIT_DATA, ClaimAuditItem } from '../data/wikipediaDraft';
import { 
  Scale, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  FileText, 
  Info,
  Check,
  Edit3,
  Trash2
} from 'lucide-react';

export const ClaimAuditTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [actionFilter, setActionFilter] = useState('All');
  const [verifiedFilter, setVerifiedFilter] = useState('All');

  const actions = ['All', 'Keep', 'Revise & Attribute', 'Find Better Source', 'Remove', 'Verify Manually'];
  const verificationOptions = ['All', 'VERIFIED', 'PARTIALLY VERIFIED', 'UNVERIFIED'];

  const filteredClaims = CLAIM_AUDIT_DATA.filter(c => {
    const matchesSearch = 
      c.claim.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.section.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.source.toLowerCase().includes(searchQuery.toLowerCase()) ||
      c.editorialNotes.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesAction = actionFilter === 'All' || c.action === actionFilter;
    const matchesVerified = verifiedFilter === 'All' || c.verified === verifiedFilter;

    return matchesSearch && matchesAction && matchesVerified;
  });

  const getActionBadge = (action: string) => {
    switch (action) {
      case 'Keep':
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded">
            <Check className="w-3 h-3 text-emerald-600" />
            Keep
          </span>
        );
      case 'Revise & Attribute':
        return (
          <span className="inline-flex items-center gap-1 bg-amber-100 text-amber-800 border border-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
            <Edit3 className="w-3 h-3 text-amber-600" />
            Revise & Attribute
          </span>
        );
      case 'Remove':
        return (
          <span className="inline-flex items-center gap-1 bg-rose-100 text-rose-800 border border-rose-300 text-[10px] font-bold px-2 py-0.5 rounded">
            <Trash2 className="w-3 h-3 text-rose-600" />
            Remove
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 bg-sky-100 text-sky-800 border border-sky-300 text-[10px] font-bold px-2 py-0.5 rounded">
            <Info className="w-3 h-3 text-sky-600" />
            {action}
          </span>
        );
    }
  };

  const getVerifiedBadge = (status: string) => {
    switch (status) {
      case 'VERIFIED':
        return (
          <span className="inline-flex items-center gap-1 bg-emerald-50 text-emerald-800 border border-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            [VERIFIED]
          </span>
        );
      case 'PARTIALLY VERIFIED':
        return (
          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-800 border border-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">
            <AlertTriangle className="w-3 h-3 text-amber-600" />
            [PARTIALLY VERIFIED]
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 bg-rose-50 text-rose-800 border border-rose-300 text-[10px] font-bold px-2 py-0.5 rounded">
            <XCircle className="w-3 h-3 text-rose-600" />
            [UNVERIFIED]
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Matrix Header */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                <Scale className="w-5 h-5" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">Claim Verification Matrix</h2>
            </div>
            <p className="text-xs text-slate-600 mt-1">
              Rigorous line-by-line editorial audit of all claims regarding Nisarg Srishti Welfare Foundation, evaluating source independence, verifiability, and recommended editorial action per Wikipedia policies.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 font-mono font-bold">
              Total Audited Claims: {CLAIM_AUDIT_DATA.length}
            </span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-3 border-t border-slate-100">
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search claim text, section, source..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          <div>
            <select
              value={actionFilter}
              onChange={(e) => setActionFilter(e.target.value)}
              className="w-full py-2 px-3 bg-white border border-slate-300 rounded-lg text-xs text-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-medium cursor-pointer"
            >
              {actions.map(act => (
                <option key={act} value={act}>Filter Action: {act}</option>
              ))}
            </select>
          </div>

          <div>
            <select
              value={verifiedFilter}
              onChange={(e) => setVerifiedFilter(e.target.value)}
              className="w-full py-2 px-3 bg-white border border-slate-300 rounded-lg text-xs text-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-medium cursor-pointer"
            >
              {verificationOptions.map(vo => (
                <option key={vo} value={vo}>Verification: {vo}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Main Audit Table */}
      <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-xs">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead className="bg-white text-slate-700 uppercase text-[10px] tracking-wider border-b-2 border-slate-200">
              <tr>
                <th className="py-3.5 px-4 font-bold w-16">ID</th>
                <th className="py-3.5 px-4 font-bold min-w-[220px]">Claim Statement</th>
                <th className="py-3.5 px-4 font-bold w-36">Draft Section</th>
                <th className="py-3.5 px-4 font-bold min-w-[160px]">Source & Type</th>
                <th className="py-3.5 px-4 font-bold w-24">Verified?</th>
                <th className="py-3.5 px-4 font-bold w-24">Independent?</th>
                <th className="py-3.5 px-4 font-bold w-36">Editorial Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 bg-white">
              {filteredClaims.map((item) => (
                <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                  <td className="py-3.5 px-4 font-mono font-bold text-slate-500 text-[11px] align-top">
                    {item.id}
                  </td>
                  <td className="py-3.5 px-4 text-slate-900 align-top">
                    <p className="font-semibold leading-relaxed">{item.claim}</p>
                    <div className="text-[11px] text-amber-900 mt-2 bg-amber-50 p-2.5 rounded-lg border border-amber-200 leading-normal">
                      <strong className="text-amber-950">Editorial Note: </strong>
                      {item.editorialNotes}
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-slate-600 align-top font-medium">
                    {item.section}
                  </td>
                  <td className="py-3.5 px-4 align-top">
                    <div className="text-slate-900 font-semibold">{item.source}</div>
                    <div className="text-[10px] text-slate-500 mt-0.5">{item.sourceType}</div>
                  </td>
                  <td className="py-3.5 px-4 align-top">
                    {getVerifiedBadge(item.verified)}
                  </td>
                  <td className="py-3.5 px-4 align-top">
                    <span className={`text-[11px] font-bold ${
                      item.independent === 'Yes' 
                        ? 'text-emerald-700' 
                        : item.independent === 'Partial'
                        ? 'text-amber-700'
                        : 'text-rose-700'
                    }`}>
                      {item.independent}
                    </span>
                  </td>
                  <td className="py-3.5 px-4 align-top">
                    {getActionBadge(item.action)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
