import React, { useState } from 'react';
import { 
  EXECUTIVE_SUMMARY, 
  ORG_PROFILE, 
  TIMELINE_EVENTS, 
  PROGRAMS, 
  SOURCES_DATABASE, 
  NOTABILITY_ASSESSMENT, 
  MEDIA_RECORDS, 
  MISSING_INFO_CHECKLIST 
} from '../data/dossierData';
import { 
  WIKITEXT_RAW, 
  CLAIM_AUDIT_DATA 
} from '../data/wikipediaDraft';
import { 
  Download, 
  FileText, 
  Code, 
  Printer, 
  Copy, 
  Check, 
  FileSpreadsheet,
  CheckCircle2
} from 'lucide-react';

export const ExportTab: React.FC = () => {
  const [copiedType, setCopiedType] = useState<string | null>(null);

  const generateMarkdownDossier = (): string => {
    return `# Nisarg Srishti Welfare Foundation (NSWF) — Comprehensive Investigative Research Dossier
*Compiled & Fact-Checked per Wikipedia Editorial Standards (WP:GNG / WP:ORG / WP:V / WP:NPOV)*
*Date of Audit: 2026-09-24*

---

## SECTION 1: Executive Summary
- **Organization Name:** ${EXECUTIVE_SUMMARY.organizationName}
- **Corporate Identification Number (CIN):** ${EXECUTIVE_SUMMARY.cin}
- **Legal Status:** ${EXECUTIVE_SUMMARY.legalStatus}
- **Date of Incorporation:** ${EXECUTIVE_SUMMARY.incorporationDate}
- **Registered Office:** ${EXECUTIVE_SUMMARY.registeredOffice}
- **Founder & Leadership:** ${EXECUTIVE_SUMMARY.founderLeadership}
- **Primary Focus:** ${EXECUTIVE_SUMMARY.primaryMission}

### Independently Verified Facts:
${EXECUTIVE_SUMMARY.keyVerifiedFacts.map(f => `- ${f}`).join('\n')}

### Main Research Limitations & Sourcing Deficits:
${EXECUTIVE_SUMMARY.keyLimitations.map(l => `- ${l}`).join('\n')}

---

## SECTION 2: Organization Profile
| Field | Information | Status | Source |
| :--- | :--- | :--- | :--- |
${ORG_PROFILE.map(p => `| ${p.field} | ${p.information} | [${p.verificationStatus}] | ${p.source} |`).join('\n')}

---

## SECTION 3: Chronological Timeline
| Date | Milestone / Event | Category | Status | Source |
| :--- | :--- | :--- | :--- | :--- |
${TIMELINE_EVENTS.map(t => `| ${t.date} | **${t.event}** — ${t.description} | ${t.category} | [${t.verificationStatus}] | ${t.source} |`).join('\n')}

---

## SECTION 4: Documented Programs and Initiatives
${PROGRAMS.map(pr => `
### ${pr.name}
- **Date/Duration:** ${pr.dateOrDuration}
- **Location:** ${pr.location}
- **Purpose:** ${pr.purpose}
- **Activities:** ${pr.activitiesConducted.join('; ')}
- **Collaborators:** ${pr.collaborators.join(', ')}
- **Reported Outcomes:** ${pr.documentedOutcomes}
- **Editorial Assessment:** ${pr.editorialAssessment}
`).join('\n')}

---

## SECTION 5: Impact & Achievements Audit
1. **Independently Reported Facts:** BBC Audio interview segment ("People Fixing the World: Making Cities Feel Quieter"); statutory Ministry of Corporate Affairs (ROC Pune) active registration; dedicated Pune regional office inauguration.
2. **Organization-Reported Claims:** "Over 48 awareness sessions conducted, reaching 15,400+ direct beneficiaries" (Source: India Chronicle August 2026 release).
3. **Unverified / Exaggerated Claims:** Claims of "Asia's foremost noise NGO" or unconfirmed ISO 14001 certification; omitted under WP:PEACOCK and WP:NPOV.

---

## SECTION 6: Wikipedia Notability Assessment (WP:GNG / WP:ORG)
- **Overall Verdict:** ${NOTABILITY_ASSESSMENT.overallVerdict}
- **Readiness Score:** ${NOTABILITY_ASSESSMENT.readinessScore}/100
- **Primary Finding:** Zero independent feature coverage in Indian national or regional daily newspapers of record (The Times of India, The Indian Express, The Hindu, Hindustan Times, Sakal, Lokmat). Current secondary mentions are restricted to PR syndication wires (India Chronicle, Bharat Good Times, StayFeatured) which fail WP:RS and WP:INDEPENDENT.

---

## SECTION 7: Comprehensive Source Database
| ID | Title | Publisher | Date | Category | Independent? | Reliability | Verification |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- | :--- |
${SOURCES_DATABASE.map(s => `| ${s.id} | ${s.title} | ${s.publisher} | ${s.date} | ${s.category} | ${s.independent} | ${s.reliability} | [${s.verificationStatus}] |`).join('\n')}

---

## SECTION 8: Wikimedia Media Assessment
${MEDIA_RECORDS.map(m => `
- **${m.id}: ${m.title}**
  - Original Source: ${m.originalSource}
  - Copyright Holder: ${m.copyrightHolder}
  - Commons Suitability: ${m.commonsSuitability}
  - Requirements: ${m.permissionRequirements}
`).join('\n')}

---

## SECTION 9: Missing Information
${MISSING_INFO_CHECKLIST.map(mi => `- [${mi.importance} Priority] **${mi.item}:** ${mi.description} (Status: ${mi.status})`).join('\n')}
`;
  };

  const handleDownloadMarkdown = () => {
    const md = generateMarkdownDossier();
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'NSWF_Investigative_Research_Dossier.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadWikitext = () => {
    const blob = new Blob([WIKITEXT_RAW], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'Draft_Nisarg_Srishti_Welfare_Foundation.wiki';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleDownloadAuditCSV = () => {
    const headers = ['ID', 'Claim', 'Section', 'Source', 'Source Type', 'Verified', 'Independent', 'Action', 'Notes'];
    const rows = CLAIM_AUDIT_DATA.map(c => [
      `"${c.id}"`,
      `"${c.claim.replace(/"/g, '""')}"`,
      `"${c.section.replace(/"/g, '""')}"`,
      `"${c.source.replace(/"/g, '""')}"`,
      `"${c.sourceType}"`,
      `"${c.verified}"`,
      `"${c.independent}"`,
      `"${c.action}"`,
      `"${c.editorialNotes.replace(/"/g, '""')}"`
    ]);
    const csvContent = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'NSWF_Claim_Verification_Matrix.csv';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleCopyMarkdown = () => {
    navigator.clipboard.writeText(generateMarkdownDossier());
    setCopiedType('md');
    setTimeout(() => setCopiedType(null), 2500);
  };

  return (
    <div className="space-y-6">
      {/* Header Box */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
                <Download className="w-5 h-5" />
              </span>
              <h2 className="text-xl font-bold text-slate-900">Export & Documentation Center</h2>
            </div>
            <p className="text-xs text-slate-600 mt-1">
              Download the complete investigative research dossier, standards-compliant MediaWiki draft, or tabular audit matrix for human editorial board meetings.
            </p>
          </div>

          <button
            onClick={() => window.print()}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs font-bold text-slate-800 transition-colors cursor-pointer"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Dossier</span>
          </button>
        </div>
      </div>

      {/* Export Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Option 1: Markdown Dossier */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between hover:border-emerald-300 transition-colors">
          <div>
            <div className="h-10 w-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center mb-3">
              <FileText className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Full Research Dossier</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Complete 11-section markdown document containing executive summary, verified profiles, timeline, programs, impact audit, source evaluation, and notability verdict.
            </p>
          </div>

          <div className="pt-4 flex items-center gap-2">
            <button
              onClick={handleDownloadMarkdown}
              className="flex-1 flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .md</span>
            </button>
            <button
              onClick={handleCopyMarkdown}
              className="px-3.5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 border border-slate-200 text-xs text-slate-700 transition-colors cursor-pointer"
              title="Copy to clipboard"
            >
              {copiedType === 'md' ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          </div>
        </div>

        {/* Option 2: Wikipedia Wikitext */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between hover:border-sky-300 transition-colors">
          <div>
            <div className="h-10 w-10 rounded-xl bg-sky-100 text-sky-700 flex items-center justify-center mb-3">
              <Code className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Wikipedia MediaWiki (.wiki)</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Ready-to-paste Wikitext draft for Wikipedia Sandbox or Draft namespace, formatted with standard Infobox Non-profit, inline citations, categories, and NPOV attribution.
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={handleDownloadWikitext}
              className="w-full flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-700 text-xs font-bold text-white transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .wiki</span>
            </button>
          </div>
        </div>

        {/* Option 3: Claim Audit Matrix CSV */}
        <div className="bg-white border border-slate-200 rounded-2xl p-6 space-y-4 shadow-xs flex flex-col justify-between hover:border-amber-300 transition-colors">
          <div>
            <div className="h-10 w-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <h3 className="font-bold text-slate-900 text-sm">Claim Matrix Spreadsheet (.csv)</h3>
            <p className="text-xs text-slate-600 mt-1 leading-relaxed">
              Comprehensive spreadsheet containing all claims, section locations, verification status, source independence ratings, and editorial instructions (Keep/Revise/Remove).
            </p>
          </div>

          <div className="pt-4">
            <button
              onClick={handleDownloadAuditCSV}
              className="w-full flex items-center justify-center gap-1.5 px-3.5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-xs font-bold text-white transition-colors shadow-xs cursor-pointer"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .csv</span>
            </button>
          </div>
        </div>
      </div>

      {/* Markdown Preview Box */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs space-y-3">
        <div className="flex items-center justify-between pb-3 border-b border-slate-100">
          <div className="flex items-center gap-2">
            <span className="p-1.5 bg-slate-100 text-slate-700 rounded-lg">
              <FileText className="w-4 h-4" />
            </span>
            <h3 className="font-bold text-slate-900 text-sm">Live Dossier Markdown Preview</h3>
          </div>
          <span className="text-[11px] text-slate-500 font-mono font-medium">Rendered Plaintext</span>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-300 shadow-xs font-mono text-xs text-slate-800 max-h-96 overflow-y-auto whitespace-pre-wrap leading-relaxed">
          {generateMarkdownDossier()}
        </div>
      </div>
    </div>
  );
};
