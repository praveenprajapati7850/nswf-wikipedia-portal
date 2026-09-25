import React, { useState } from 'react';
import { SOURCES_DATABASE, SourceItem } from '../data/dossierData';
import { 
  Database, 
  Search, 
  Filter, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ExternalLink,
  ShieldCheck,
  ShieldAlert,
  Info
} from 'lucide-react';

export const SourcesTab: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('All');
  const [independenceFilter, setIndependenceFilter] = useState('All');
  const [statusFilter, setStatusFilter] = useState('All');

  const categories = ['All', 'Government/Registry', 'Directory/Aggregator', 'Broadcast Media', 'PR/Syndicated Portal', 'Primary/Official'];
  const independenceOptions = ['All', 'Yes', 'No', 'Partial'];
  const statusOptions = ['All', 'VERIFIED', 'PARTIALLY VERIFIED', 'UNVERIFIED'];

  const filteredSources = SOURCES_DATABASE.filter(src => {
    const matchesSearch = 
      src.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      src.publisher.toLowerCase().includes(searchQuery.toLowerCase()) ||
      src.claimsSupported.toLowerCase().includes(searchQuery.toLowerCase()) ||
      src.url.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = categoryFilter === 'All' || src.category === categoryFilter;
    const matchesIndependence = independenceFilter === 'All' || src.independent === independenceFilter;
    const matchesStatus = statusFilter === 'All' || src.verificationStatus === statusFilter;

    return matchesSearch && matchesCategory && matchesIndependence && matchesStatus;
  });

  const getReliabilityBadge = (rel: string) => {
    if (rel.includes('High')) {
      return <span className="bg-emerald-100 text-emerald-800 border border-emerald-300 text-[10px] font-bold px-2 py-0.5 rounded">High Reliability</span>;
    }
    if (rel.includes('Medium')) {
      return <span className="bg-amber-100 text-amber-800 border border-amber-300 text-[10px] font-bold px-2 py-0.5 rounded">Medium (Self-Claim)</span>;
    }
    if (rel.includes('Directory')) {
      return <span className="bg-sky-100 text-sky-800 border border-sky-300 text-[10px] font-bold px-2 py-0.5 rounded">Directory / DB Only</span>;
    }
    return <span className="bg-rose-100 text-rose-800 border border-rose-300 text-[10px] font-bold px-2 py-0.5 rounded">Low (PR / Sponsored)</span>;
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'VERIFIED':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-emerald-50 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-3 h-3 text-emerald-600" />
            [VERIFIED]
          </span>
        );
      case 'PARTIALLY VERIFIED':
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-300">
            <AlertTriangle className="w-3 h-3 text-amber-600" />
            [PARTIALLY VERIFIED]
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 text-[10px] font-bold px-2 py-0.5 rounded bg-rose-50 text-rose-800 border border-rose-300">
            <XCircle className="w-3 h-3 text-rose-600" />
            [UNVERIFIED]
          </span>
        );
    }
  };

  return (
    <div className="space-y-6">
      {/* Sources Header Box */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                <Database className="w-5 h-5" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">Source Database & Verification Hub</h2>
            </div>
            <p className="text-xs text-slate-600 mt-1">
              Every source accessed in this investigation evaluated against Wikipedia's guidelines: <strong>WP:RS</strong> (Reliable Sources), <strong>WP:PSTS</strong> (Primary/Secondary), and <strong>WP:INDEPENDENT</strong>.
            </p>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <span className="bg-slate-100 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 font-mono font-medium">
              Total Sources: {SOURCES_DATABASE.length}
            </span>
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1.5 rounded-lg border border-emerald-300 font-bold">
              Filtered: {filteredSources.length}
            </span>
          </div>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-3 border-t border-slate-100">
          {/* Search */}
          <div className="relative">
            <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              placeholder="Search title, publisher, claims..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 bg-white border border-slate-300 rounded-lg text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
            />
          </div>

          {/* Category */}
          <div>
            <select
              value={categoryFilter}
              onChange={(e) => setCategoryFilter(e.target.value)}
              className="w-full py-2 px-3 bg-white border border-slate-300 rounded-lg text-xs text-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-medium cursor-pointer"
            >
              {categories.map(cat => (
                <option key={cat} value={cat}>Category: {cat}</option>
              ))}
            </select>
          </div>

          {/* Independence */}
          <div>
            <select
              value={independenceFilter}
              onChange={(e) => setIndependenceFilter(e.target.value)}
              className="w-full py-2 px-3 bg-white border border-slate-300 rounded-lg text-xs text-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-medium cursor-pointer"
            >
              {independenceOptions.map(ind => (
                <option key={ind} value={ind}>Independent? {ind}</option>
              ))}
            </select>
          </div>

          {/* Verification Status */}
          <div>
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="w-full py-2 px-3 bg-white border border-slate-300 rounded-lg text-xs text-slate-700 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 font-medium cursor-pointer"
            >
              {statusOptions.map(st => (
                <option key={st} value={st}>Status: {st}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Sources List Table & Cards */}
      <div className="space-y-4">
        {filteredSources.length === 0 ? (
          <div className="bg-white border border-slate-200 rounded-2xl p-8 text-center text-slate-500 text-xs">
            No sources match the selected filters.
          </div>
        ) : (
          filteredSources.map(src => (
            <div 
              key={src.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3 hover:border-slate-300 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <span className="font-mono text-xs font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
                    {src.id}
                  </span>
                  <h3 className="font-bold text-slate-900 text-sm">{src.title}</h3>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  {getReliabilityBadge(src.reliability)}
                  {getStatusBadge(src.verificationStatus)}
                </div>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs text-slate-600 bg-white p-3 rounded-xl border border-slate-200 shadow-xs">
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium">Publisher</span>
                  <span className="font-semibold text-slate-900">{src.publisher}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium">Publication Date</span>
                  <span className="font-mono font-medium text-slate-800">{src.date}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium">Source Category</span>
                  <span className="text-slate-800 font-medium">{src.category}</span>
                </div>
                <div>
                  <span className="text-slate-400 block text-[11px] font-medium">Independent?</span>
                  <span className={`font-bold ${
                    src.independent === 'Yes' 
                      ? 'text-emerald-700' 
                      : src.independent === 'Partial'
                      ? 'text-amber-700'
                      : 'text-rose-700'
                  }`}>
                    {src.independent}
                  </span>
                </div>
              </div>

              {/* Supported Claims */}
              <div className="bg-white p-3.5 rounded-xl border border-slate-200 text-xs shadow-xs">
                <span className="text-slate-700 font-bold block mb-1">What Information This Source Supports:</span>
                <p className="text-slate-700 leading-relaxed">{src.claimsSupported}</p>
              </div>

              {/* Editorial Limitations / Wikipedia Policy Warning */}
              <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-xl text-xs text-amber-950 leading-relaxed">
                <div className="flex items-center gap-1.5 text-amber-900 font-bold mb-0.5">
                  <Info className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                  <span>Wikipedia Editorial Evaluation & Sourcing Limitations:</span>
                </div>
                <p>{src.limitations}</p>
              </div>

              {/* URL */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1">
                <span className="truncate max-w-lg font-mono">{src.url}</span>
                <a
                  href={src.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-emerald-700 hover:text-emerald-800 font-bold shrink-0 ml-2"
                >
                  <span>Open verified reference</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
