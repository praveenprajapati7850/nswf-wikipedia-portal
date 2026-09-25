import React, { useState } from 'react';
import { 
  ORG_PROFILE, 
  TIMELINE_EVENTS, 
  PROGRAMS, 
  SOURCES_DATABASE, 
  NOTABILITY_ASSESSMENT, 
  MEDIA_RECORDS, 
  MISSING_INFO_CHECKLIST,
  EXECUTIVE_SUMMARY
} from '../data/dossierData';
import { 
  Building, 
  Calendar, 
  FolderGit2, 
  Users, 
  Award, 
  Database, 
  Scale, 
  Image, 
  HelpCircle, 
  FileCheck2, 
  CheckCircle2, 
  AlertTriangle, 
  XCircle, 
  ExternalLink,
  Info,
  ChevronDown,
  ChevronRight,
  ShieldAlert
} from 'lucide-react';

export const DossierTab: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>('sec-1');
  const [timelineFilter, setTimelineFilter] = useState<string>('All');
  const [expandedProgram, setExpandedProgram] = useState<string | null>('prog-1');

  const sections = [
    { id: 'sec-1', label: '1. Executive Summary', icon: Info },
    { id: 'sec-2', label: '2. Organization Profile', icon: Building },
    { id: 'sec-3', label: '3. Chronological Timeline', icon: Calendar },
    { id: 'sec-4', label: '4. Programs & Initiatives', icon: FolderGit2 },
    { id: 'sec-5', label: '5. Outreach & Collaborations', icon: Users },
    { id: 'sec-6', label: '6. Impact & Achievements', icon: Award },
    { id: 'sec-7', label: '7. Source Database Summary', icon: Database },
    { id: 'sec-8', label: '8. Wikipedia Notability Assessment', icon: Scale },
    { id: 'sec-9', label: '9. Media Documentation', icon: Image },
    { id: 'sec-10', label: '10. Missing Information & Gaps', icon: HelpCircle },
    { id: 'sec-11', label: '11. Research Readiness Assessment', icon: FileCheck2 },
  ];

  const filteredTimeline = timelineFilter === 'All' 
    ? TIMELINE_EVENTS 
    : TIMELINE_EVENTS.filter(e => e.category === timelineFilter);

  const renderStatusBadge = (status: string) => {
    switch (status) {
      case 'VERIFIED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            [VERIFIED]
          </span>
        );
      case 'PARTIALLY VERIFIED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-amber-50 text-amber-800 border border-amber-300">
            <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
            [PARTIALLY VERIFIED]
          </span>
        );
      case 'UNVERIFIED':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-rose-50 text-rose-800 border border-rose-300">
            <XCircle className="w-3.5 h-3.5 text-rose-600" />
            [UNVERIFIED]
          </span>
        );
      case 'CONFLICTING':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[11px] font-bold bg-purple-50 text-purple-800 border border-purple-300">
            <AlertTriangle className="w-3.5 h-3.5 text-purple-600" />
            [CONFLICTING]
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Mini Index Sidebar */}
      <div className="lg:col-span-1 space-y-4">
        <div className="bg-white border border-slate-200 rounded-2xl p-4 sticky top-28 shadow-xs">
          <h3 className="text-xs font-bold text-slate-500 uppercase tracking-wider px-2 mb-2">
            Dossier Table of Contents
          </h3>
          <nav className="space-y-1">
            {sections.map(sec => {
              const Icon = sec.icon;
              const isActive = activeSection === sec.id;
              return (
                <button
                  key={sec.id}
                  onClick={() => {
                    setActiveSection(sec.id);
                    const element = document.getElementById(sec.id);
                    if (element) {
                      element.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold transition-colors text-left cursor-pointer ${
                    isActive 
                      ? 'bg-emerald-600 text-white shadow-xs' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  <Icon className="w-3.5 h-3.5 shrink-0" />
                  <span className="truncate">{sec.label}</span>
                </button>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 text-[11px] text-slate-600 px-2 space-y-2">
            <div className="flex justify-between font-medium">
              <span>Verified Facts:</span>
              <span className="text-emerald-700 font-bold">12 entries</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Primary / PR Sources:</span>
              <span className="text-amber-700 font-bold">8 entries</span>
            </div>
            <div className="flex justify-between font-medium">
              <span>Independent News:</span>
              <span className="text-rose-700 font-bold">0 in mainstream</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Dossier Content */}
      <div className="lg:col-span-3 space-y-8">
        {/* SECTION 1: Executive Summary */}
        <section id="sec-1" className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                <Info className="w-4 h-4" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">SECTION 1: Executive Summary</h2>
            </div>
            {renderStatusBadge('VERIFIED')}
          </div>

          <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
            <p className="text-sm">
              <strong>Nisarg Srishti Welfare Foundation (NSWF)</strong> is a registered non-profit corporate entity incorporated under Section 8 of the Indian Companies Act, 2013, with its registered jurisdiction under the Registrar of Companies (ROC), Pune, Maharashtra (CIN: <code className="bg-slate-100 px-1.5 py-0.5 rounded font-mono font-bold text-emerald-800">U85300PN2023NPL217884</code>). Founded by environmental educator Dr. Garima Gaurav Kavathekar on 11 January 2023, the organization’s stated mandate encompasses environmental protection, human welfare, and ecological sustainability, with a specialized operational focus on <em>noise pollution awareness, civic acoustic stewardship, and student environmental literacy</em>.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
              <div className="bg-emerald-50/50 p-4 rounded-xl border border-emerald-200">
                <h4 className="font-bold text-emerald-900 text-xs mb-2 flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  What Was Verifiably Established:
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-slate-700">
                  <li>Active corporate registration with Ministry of Corporate Affairs (MCA).</li>
                  <li>Opening of dedicated Pune Regional Office on 14 December 2024.</li>
                  <li>Formal institutional MoUs with PMC Late Ramchandra Bankar English Primary School and Ecoserve Development.</li>
                  <li>E-waste recycling partnership with Electrofine Recycling Pvt. Ltd.</li>
                  <li>Founder featured in BBC Audio’s <em>People Fixing the World: Making Cities Feel Quieter</em> episode.</li>
                </ul>
              </div>

              <div className="bg-amber-50/50 p-4 rounded-xl border border-amber-200">
                <h4 className="font-bold text-amber-900 text-xs mb-2 flex items-center gap-1.5">
                  <AlertTriangle className="w-4 h-4 text-amber-600" />
                  Main Research Limitations & Disclaimers:
                </h4>
                <ul className="space-y-1.5 list-disc list-inside text-slate-700">
                  <li><strong>Zero coverage in Tier-1 mainstream newspapers</strong> (Times of India, Indian Express, Sakal, The Hindu, Hindustan Times).</li>
                  <li>Predominance of syndicated PR portals (India Chronicle, Bharat Good Times, StayFeatured) that republish organizational press releases without independent investigation.</li>
                  <li>Claimed operational metrics (e.g., 48+ sessions, 15,400+ beneficiaries) are self-reported and un-audited.</li>
                  <li><strong>Does not currently meet Wikipedia’s WP:ORG / WP:GNG thresholds</strong>.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 2: Organization Profile */}
        <section id="sec-2" className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-sky-100 text-sky-700 rounded-xl">
                <Building className="w-4 h-4" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">SECTION 2: Organization Profile</h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">Structured Verification Registry</span>
          </div>

          <div className="overflow-x-auto border border-slate-200 rounded-xl">
            <table className="w-full text-left text-xs">
              <thead className="bg-slate-50 text-slate-700 uppercase text-[10px] tracking-wider border-b border-slate-200">
                <tr>
                  <th className="py-3 px-4 font-bold">Field</th>
                  <th className="py-3 px-4 font-bold">Verified Information</th>
                  <th className="py-3 px-4 font-bold">Verification Status</th>
                  <th className="py-3 px-4 font-bold">Source & Notes</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ORG_PROFILE.map((item, idx) => (
                  <tr key={idx} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3 px-4 font-semibold text-slate-900 whitespace-nowrap">{item.field}</td>
                    <td className="py-3 px-4 text-slate-700 font-mono text-[11px]">{item.information}</td>
                    <td className="py-3 px-4">{renderStatusBadge(item.verificationStatus)}</td>
                    <td className="py-3 px-4 text-slate-600 text-[11px]">
                      <div className="font-medium text-slate-800">{item.source}</div>
                      {item.notes && <div className="text-[10px] text-slate-500 mt-0.5 italic">{item.notes}</div>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SECTION 3: Chronological Timeline */}
        <section id="sec-3" className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-amber-100 text-amber-700 rounded-xl">
                <Calendar className="w-4 h-4" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">SECTION 3: Chronological Timeline</h2>
            </div>
            
            {/* Category filter pills */}
            <div className="flex flex-wrap gap-1 text-[11px]">
              {['All', 'Legal/Incorporation', 'Infrastructure', 'Campaign', 'Partnership', 'Media'].map(cat => (
                <button
                  key={cat}
                  onClick={() => setTimelineFilter(cat)}
                  className={`px-2.5 py-1 rounded-lg transition-colors cursor-pointer ${
                    timelineFilter === cat
                      ? 'bg-emerald-600 text-white font-bold shadow-xs'
                      : 'bg-slate-100 text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            {filteredTimeline.map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white border border-slate-200 rounded-xl p-4 flex flex-col md:flex-row md:items-start justify-between gap-4 hover:border-slate-300 shadow-xs transition-colors"
              >
                <div className="space-y-1.5 max-w-2xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded">{item.date}</span>
                    <span className="text-[10px] uppercase tracking-wider px-2 py-0.5 rounded bg-white text-slate-700 border border-slate-200 font-bold">
                      {item.category}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-900">{item.event}</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">{item.description}</p>
                  <div className="text-[11px] text-slate-500 pt-1">
                    <span className="text-slate-700 font-semibold">Source:</span> {item.source}
                  </div>
                </div>
                <div className="shrink-0 self-start md:self-center">
                  {renderStatusBadge(item.verificationStatus)}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4: Programs & Initiatives */}
        <section id="sec-4" className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-purple-100 text-purple-700 rounded-xl">
                <FolderGit2 className="w-4 h-4" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">SECTION 4: Documented Programs & Initiatives</h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">4 Documented Modules</span>
          </div>

          <div className="space-y-3">
            {PROGRAMS.map(prog => {
              const isExpanded = expandedProgram === prog.id;
              return (
                <div 
                  key={prog.id} 
                  className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setExpandedProgram(isExpanded ? null : prog.id)}
                    className="w-full p-4 flex items-center justify-between text-left hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-mono text-emerald-700 font-bold">{prog.dateOrDuration}</span>
                        <span className="text-[10px] text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200 font-medium">{prog.location}</span>
                      </div>
                      <h4 className="text-sm font-bold text-slate-900">{prog.name}</h4>
                    </div>
                    {isExpanded ? <ChevronDown className="w-4 h-4 text-slate-600" /> : <ChevronRight className="w-4 h-4 text-slate-600" />}
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-3 border-t border-slate-200 text-xs text-slate-700 space-y-3 bg-white">
                      <div>
                        <strong className="text-slate-900 block mb-1">Purpose & Mandate:</strong>
                        <p>{prog.purpose}</p>
                      </div>

                      <div>
                        <strong className="text-slate-900 block mb-1">Activities Conducted:</strong>
                        <ul className="list-disc list-inside space-y-1 text-slate-700">
                          {prog.activitiesConducted.map((act, i) => (
                            <li key={i}>{act}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                        <div className="bg-white p-3 rounded-lg border border-slate-200">
                          <strong className="text-slate-900 block mb-1">Collaborators / Partners:</strong>
                          <ul className="list-disc list-inside space-y-0.5 text-slate-600">
                            {prog.collaborators.map((c, i) => (
                              <li key={i}>{c}</li>
                            ))}
                          </ul>
                        </div>

                        <div className="bg-white p-3 rounded-lg border border-slate-200">
                          <strong className="text-slate-900 block mb-1">Documented Outcomes:</strong>
                          <p className="text-slate-600">{prog.documentedOutcomes}</p>
                        </div>
                      </div>

                      <div className="bg-amber-50 border border-amber-200 p-3.5 rounded-lg text-amber-900 text-xs leading-relaxed">
                        <strong className="text-amber-950 block mb-0.5">Editorial Fact-Check Assessment:</strong>
                        {prog.editorialAssessment}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 5: Outreach & Collaborations */}
        <section id="sec-5" className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-blue-100 text-blue-700 rounded-xl">
                <Users className="w-4 h-4" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">SECTION 5: Outreach & Collaborations</h2>
            </div>
            {renderStatusBadge('PARTIALLY VERIFIED')}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-200">
                Municipal Education
              </span>
              <h4 className="font-bold text-slate-900 text-sm">PMC Late Ramchandra Bankar English Primary School</h4>
              <p className="text-slate-700">
                <strong>Documented Action:</strong> Signed a formal Memorandum of Understanding (MoU) in August 2026 to deliver year-round noise pollution modules for students in Classes 5 to 8 in Hadapsar, Pune.
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                <strong>Evidence:</strong> Institutional announcement & India Chronicle press coverage. Official PMC municipal gazette entry pending.
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-sky-800 bg-sky-100 px-2 py-0.5 rounded border border-sky-200">
                Corporate Recycling
              </span>
              <h4 className="font-bold text-slate-900 text-sm">Electrofine Recycling Pvt. Ltd.</h4>
              <p className="text-slate-700">
                <strong>Documented Action:</strong> Signed an MoU in November 2025 to pair electronic waste recycling education with noise awareness in school and community workshops.
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                <strong>Evidence:</strong> Joint corporate release. Quantified electronic waste collected has not been audited.
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-100 px-2 py-0.5 rounded border border-amber-200">
                Youth Non-Profit
              </span>
              <h4 className="font-bold text-slate-900 text-sm">Ecoserve Development</h4>
              <p className="text-slate-700">
                <strong>Documented Action:</strong> MoU executed in February 2025 focusing on youth mobilization, citizen acoustic reporting, and urban greening campaigns.
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                <strong>Evidence:</strong> Partner press statements (NeelWrites).
              </div>
            </div>

            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-purple-800 bg-purple-100 px-2 py-0.5 rounded border border-purple-200">
                Higher Education & Research
              </span>
              <h4 className="font-bold text-slate-900 text-sm">PDEA College of Engineering & Gokhale Institute</h4>
              <p className="text-slate-700">
                <strong>Documented Action:</strong> Campus workshop at PDEA College of Engineering (Feb 2025) and festival noise measurement drive during Ganesh Utsav 2025 with Gokhale Institute student volunteers.
              </p>
              <div className="text-[11px] text-slate-500 pt-1">
                <strong>Evidence:</strong> Institutional bulletins & foundation photographic documentation.
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6: Impact & Achievements */}
        <section id="sec-6" className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                <Award className="w-4 h-4" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">SECTION 6: Impact & Achievements Audit</h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">Fact vs Claim Separation</span>
          </div>

          <div className="space-y-4 text-xs">
            {/* Category A: Independently Reported Facts */}
            <div className="bg-emerald-50/40 p-5 rounded-xl border border-emerald-200 space-y-2">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <h4 className="font-bold text-emerald-900 text-sm">1. Independently Reported / Documented Facts</h4>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
                <li>Founder Dr. Garima Kavathekar was interviewed in a BBC Audio broadcast episode titled <em>People Fixing the World: Making Cities Feel Quieter</em> (aired Feb 2026), discussing noise consciousness in Pune and urban India.</li>
                <li>Legally recognized Section 8 non-profit status with Registrar of Companies, Pune (Ministry of Corporate Affairs) since January 2023.</li>
                <li>Physical operational presence established at Kunjir Colony, Manjari BK, Pune, with regional office launched in December 2024.</li>
              </ul>
            </div>

            {/* Category B: Organization-Reported Claims */}
            <div className="bg-amber-50/40 p-5 rounded-xl border border-amber-200 space-y-2">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-amber-600" />
                <h4 className="font-bold text-amber-900 text-sm">2. Organization-Reported Claims (Primary / PR Sources)</h4>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
                <li><strong>Claimed Metric:</strong> "Over 48 awareness sessions conducted, reaching 15,400+ direct beneficiaries" (Source: India Chronicle / nisargsrishti.org, August 2026).</li>
                <li><strong>Claimed Metric:</strong> "Active network of goodwill ambassadors leading noise mitigation drives across educational institutions."</li>
                <li><em>Editorial rule:</em> On Wikipedia, these numbers MUST be explicitly labeled as self-reported claims, e.g., <em>"According to figures published by the foundation..."</em> rather than established objective facts.</li>
              </ul>
            </div>

            {/* Category C: Unverified / Disputed Claims */}
            <div className="bg-rose-50/40 p-5 rounded-xl border border-rose-200 space-y-2">
              <div className="flex items-center gap-2">
                <XCircle className="w-4 h-4 text-rose-600" />
                <h4 className="font-bold text-rose-900 text-sm">3. Unverified or Exaggerated Promotional Claims (Do NOT Include)</h4>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-700 leading-relaxed">
                <li>Claims on PR portals describing NSWF as "Asia's foremost noise pollution NGO" or "transforming environmental governance nationwide". (Violates WP:PEACOCK / WP:NPOV).</li>
                <li>Unverified references to proprietary ISO 14001 certification and national excellence awards, which lack verifiable accrediting registry documentation.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 8: Wikipedia Notability Assessment */}
        <section id="sec-8" className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-amber-100 text-amber-700 rounded-xl">
                <Scale className="w-4 h-4" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">SECTION 8: Wikipedia Notability Assessment (WP:GNG / WP:ORG)</h2>
            </div>
            {renderStatusBadge('UNVERIFIED')}
          </div>

          <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
            <div className="bg-amber-50/60 p-5 rounded-xl border border-amber-300">
              <div className="flex items-center justify-between mb-2">
                <span className="font-bold text-amber-900 text-sm">Editorial Notability Verdict:</span>
                <span className="px-2.5 py-1 rounded bg-amber-100 text-amber-800 font-bold text-xs border border-amber-300">
                  FAILS WP:ORG & WP:GNG
                </span>
              </div>
              <p className="text-slate-700">
                An exhaustive systematic search across major Indian national and regional newspapers of record (The Times of India, The Indian Express, The Hindu, Hindustan Times, Pune Mirror, Sakal, Lokmat) yielded <strong>zero independent feature articles</strong> examining Nisarg Srishti Welfare Foundation. While the organization is a valid legal entity and actively engages local schools, Wikipedia strictly requires <em>sustained, significant coverage in reliable secondary sources independent of the subject</em>.
              </p>
            </div>

            {/* Criteria breakdown */}
            <div className="space-y-3">
              <h4 className="font-bold text-slate-900 text-xs uppercase tracking-wider">Policy-by-Policy Evaluation</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {NOTABILITY_ASSESSMENT.criteriaBreakdown.map((item, idx) => (
                  <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900 text-xs">{item.criterion}</span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded border ${
                        item.status === 'Pass' 
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-200' 
                          : item.status === 'Partially Met'
                          ? 'bg-amber-100 text-amber-800 border-amber-200'
                          : item.status === 'Warning Required'
                          ? 'bg-purple-100 text-purple-800 border-purple-200'
                          : 'bg-rose-100 text-rose-800 border-rose-200'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-600 leading-normal">{item.analysis}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Deletion Risks */}
            <div className="bg-rose-50 border border-rose-200 rounded-xl p-5 space-y-2">
              <div className="flex items-center gap-2 text-rose-800 font-bold">
                <ShieldAlert className="w-4 h-4 text-rose-600" />
                <span>Probable Deletion Vectors if Submitted to Mainspace Today:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-slate-700 text-xs">
                {NOTABILITY_ASSESSMENT.deletionRisks.map((risk, idx) => (
                  <li key={idx}>{risk}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* SECTION 9: Media Documentation */}
        <section id="sec-9" className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-pink-100 text-pink-700 rounded-xl">
                <Image className="w-4 h-4" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">SECTION 9: Media Documentation (Wikimedia Commons)</h2>
            </div>
            <span className="text-xs text-slate-500 font-medium">Copyright & Licensing Analysis</span>
          </div>

          <div className="space-y-3">
            {MEDIA_RECORDS.map(med => (
              <div key={med.id} className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-2 text-xs">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded font-bold">{med.id}</span>
                    <h4 className="font-bold text-slate-900 text-sm">{med.title}</h4>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded border self-start ${
                    med.commonsSuitability.includes('Not Suitable')
                      ? 'bg-rose-100 text-rose-800 border-rose-200'
                      : 'bg-amber-100 text-amber-800 border-amber-200'
                  }`}>
                    {med.commonsSuitability}
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-slate-600 text-[11px] pt-1">
                  <div><strong>Original Source:</strong> {med.originalSource}</div>
                  <div><strong>Date:</strong> {med.date}</div>
                  <div><strong>Copyright Holder:</strong> {med.copyrightHolder}</div>
                </div>

                <div className="bg-white p-3 rounded-lg border border-slate-200 text-[11px] text-slate-700">
                  <span className="font-bold text-slate-900 block mb-0.5">Licensing & Wikimedia Commons Rules:</span>
                  {med.permissionRequirements}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 10: Missing Information */}
        <section id="sec-10" className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-yellow-100 text-yellow-800 rounded-xl">
                <HelpCircle className="w-4 h-4" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">SECTION 10: Missing Information & Open Fact-Checking Questions</h2>
            </div>
            {renderStatusBadge('UNVERIFIED')}
          </div>

          <div className="space-y-3">
            {MISSING_INFO_CHECKLIST.map((item, idx) => (
              <div key={idx} className="bg-white p-4 rounded-xl border border-slate-200 shadow-xs flex items-start justify-between gap-4 text-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-slate-900">{item.item}</span>
                    <span className={`text-[10px] px-2 py-0.5 rounded font-bold border ${
                      item.importance === 'High' 
                        ? 'bg-rose-100 text-rose-800 border-rose-200' 
                        : 'bg-amber-100 text-amber-800 border-amber-200'
                    }`}>
                      {item.importance} Priority
                    </span>
                  </div>
                  <p className="text-slate-600">{item.description}</p>
                </div>
                <span className="text-[11px] text-slate-500 italic shrink-0 font-medium">{item.status}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 11: Final Research Readiness Assessment */}
        <section id="sec-11" className="bg-white border border-slate-200 rounded-2xl p-6 md:p-8 shadow-xs space-y-4">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100">
            <div className="flex items-center gap-2">
              <span className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                <FileCheck2 className="w-4 h-4" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">SECTION 11: Final Research Readiness Assessment</h2>
            </div>
            <span className="text-xs text-amber-800 font-bold bg-amber-100 border border-amber-300 px-2 py-0.5 rounded">Editorial Conclusion</span>
          </div>

          <div className="space-y-4 text-xs text-slate-700 leading-relaxed">
            <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs space-y-3">
              <h4 className="font-bold text-slate-900 text-sm">Direct Answers to Investigative Dossier Prompts:</h4>

              <div className="space-y-3">
                <div>
                  <strong className="text-emerald-800 block mb-1">
                    1. Is there enough verified information to begin a Wikipedia draft?
                  </strong>
                  <p className="text-slate-700">
                    <strong>Yes, for an internal AfC review draft, but NO for mainspace publication.</strong> The basic institutional facts (legal incorporation under ROC Pune, registered address, CIN, founding officers, school MoUs, and BBC Audio interview) are verified through statutory government records and primary releases. However, external secondary sourcing needed to satisfy Wikipedia’s notability criteria is currently lacking.
                  </p>
                </div>

                <div>
                  <strong className="text-emerald-800 block mb-1">
                    2. Which sections have strong source support?
                  </strong>
                  <p className="text-slate-700">
                    <strong>Organization Profile, Legal History, and Leadership</strong> have strong statutory support directly from the Ministry of Corporate Affairs (MCA), ROC Pune, and Tracxn financial intelligence filings. The BBC Audio appearance is also independently verified via BBC World Service broadcast archives.
                  </p>
                </div>

                <div>
                  <strong className="text-amber-800 block mb-1">
                    3. Which sections require more research?
                  </strong>
                  <p className="text-slate-700">
                    <strong>Programmatic Impact, Decibel Monitoring Outcomes, and Collaborations</strong> require independent academic or journalistic verification. Currently, the Ganesh Utsav noise study and school workshops rely exclusively on primary foundation claims or syndicated PR releases.
                  </p>
                </div>

                <div>
                  <strong className="text-rose-800 block mb-1">
                    4. Which claims should NOT be included without further verification?
                  </strong>
                  <p className="text-slate-700">
                    The claimed "15,400+ direct beneficiaries" across "48 sessions" must not be presented as an audited fact. All claims of "nationwide leadership" or "revolutionary initiatives" must be completely omitted under WP:PEACOCK and WP:NPOV.
                  </p>
                </div>

                <div>
                  <strong className="text-purple-800 block mb-1">
                    5. What are the main risks of promotional or non-neutral writing?
                  </strong>
                  <p className="text-slate-700">
                    Immediate <strong>Speedy Deletion under CSD G11</strong> (Unambiguous advertising) or <strong>CSD A7</strong> (No indication of importance). Any promotional editing by individuals associated with NSWF without explicit WP:COI and WP:PAID disclosure violates the Wikimedia Terms of Use and will result in article tagging, blacklisting of promotional domains, or administrative blocks.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
