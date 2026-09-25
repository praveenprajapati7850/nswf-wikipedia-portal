import React, { useState } from 'react';
import { 
  WIKITEXT_RAW, 
  WIKIPEDIA_DRAFT_METADATA 
} from '../data/wikipediaDraft';
import { 
  BookOpen, 
  Code, 
  Copy, 
  Check, 
  Download, 
  AlertTriangle, 
  ExternalLink,
  Info,
  Globe,
  FileCode
} from 'lucide-react';

export const WikipediaDraftTab: React.FC = () => {
  const [viewMode, setViewMode] = useState<'preview' | 'wikitext'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(WIKITEXT_RAW);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownload = () => {
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

  return (
    <div className="space-y-6">
      {/* Studio Bar */}
      <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="p-2 bg-emerald-100 text-emerald-700 rounded-xl">
              <BookOpen className="w-5 h-5" />
            </span>
            <h2 className="text-xl font-bold text-slate-900">Wikipedia Draft & Wikitext Studio</h2>
          </div>
          <p className="text-xs text-slate-600 mt-1">
            Target Namespace: <code className="text-emerald-800 font-mono font-bold bg-slate-100 px-1.5 py-0.5 rounded">Draft:Nisarg_Srishti_Welfare_Foundation</code> • Formatted strictly to WP:MOS and WP:NPOV
          </p>
        </div>

        {/* View Toggle & Action Buttons */}
        <div className="flex flex-wrap items-center gap-2">
          <div className="bg-slate-100 p-1 rounded-xl border border-slate-200 flex text-xs">
            <button
              onClick={() => setViewMode('preview')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                viewMode === 'preview'
                  ? 'bg-white text-emerald-800 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Globe className="w-3.5 h-3.5 text-emerald-600" />
              <span>Vector Article Preview</span>
            </button>
            <button
              onClick={() => setViewMode('wikitext')}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold transition-colors cursor-pointer ${
                viewMode === 'wikitext'
                  ? 'bg-white text-emerald-800 shadow-xs border border-slate-200'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Code className="w-3.5 h-3.5 text-sky-600" />
              <span>Raw Wikitext (.wiki)</span>
            </button>
          </div>

          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-800 transition-colors cursor-pointer border border-slate-200"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-700" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Code!' : 'Copy Wikitext'}</span>
          </button>

          <button
            onClick={handleDownload}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-xs font-bold text-white shadow-xs transition-colors cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .wiki</span>
          </button>
        </div>
      </div>

      {/* Main Container */}
      {viewMode === 'wikitext' ? (
        /* RAW WIKITEXT CODE VIEW */
        <div className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden font-mono text-xs shadow-md">
          <div className="bg-slate-950 px-5 py-3 border-b border-slate-800 flex items-center justify-between text-slate-400 text-[11px]">
            <div className="flex items-center gap-2">
              <FileCode className="w-4 h-4 text-emerald-400" />
              <span>MediaWiki Markup (.wiki) • UTF-8</span>
            </div>
            <div className="flex items-center gap-3">
              <span>{WIKITEXT_RAW.length} characters</span>
              <span>{WIKITEXT_RAW.split(/\s+/).length} words</span>
            </div>
          </div>
          <div className="p-6 overflow-x-auto text-emerald-300 whitespace-pre leading-relaxed max-h-[700px] overflow-y-auto selection:bg-emerald-800 selection:text-white">
            {WIKITEXT_RAW}
          </div>
        </div>
      ) : (
        /* WIKIPEDIA VECTOR UI ARTICLE PREVIEW */
        <div className="bg-white text-slate-900 rounded-2xl shadow-xs border border-slate-200 overflow-hidden font-sans">
          {/* Top Wikipedia Draft Notice Box */}
          <div className="bg-[#f8f9fa] border-b border-[#a2a9b1] px-6 py-3 text-xs text-slate-700 flex flex-wrap items-center justify-between gap-2">
            <div className="flex items-center gap-2">
              <span className="font-serif italic font-bold text-slate-800 text-sm">W</span>
              <span className="text-slate-600 font-medium">Wikipedia Draft Namespace</span>
              <span className="text-slate-300">•</span>
              <span className="bg-amber-100 text-amber-900 px-2 py-0.5 rounded border border-amber-300 text-[11px] font-bold">
                AfC Review Sandbox (Not in Mainspace)
              </span>
            </div>
            <span className="text-[11px] text-slate-500 font-medium">Talk • Contributions • Read • Edit • View history</span>
          </div>

          <div className="p-6 sm:p-10 space-y-6">
            {/* Draft Banner Callout */}
            <div className="bg-[#fff9ea] border-l-4 border-[#ffcc33] p-4 text-xs text-slate-800 space-y-1 rounded-r-md">
              <div className="flex items-center gap-2 font-bold text-slate-900">
                <AlertTriangle className="w-4 h-4 text-[#d97706] shrink-0" />
                <span>This is a draft article created for human review and Articles for Creation (AfC) assessment.</span>
              </div>
              <p className="text-slate-600 pl-6 leading-relaxed">
                It is not currently indexed in Wikipedia’s main article namespace. Do not promote this page as an official or published Wikipedia article. Prior to submitting to AfC, independent secondary citations must be expanded to meet <strong>WP:ORG</strong> and <strong>WP:GNG</strong>.
              </p>
            </div>

            {/* Wikipedia Article Title Header */}
            <div className="border-b border-[#a2a9b1] pb-2">
              <h1 className="font-serif text-3xl font-normal text-slate-900">
                Nisarg Srishti Welfare Foundation
              </h1>
              <p className="text-xs text-slate-500 mt-1">
                From Wikipedia, the free encyclopedia
              </p>
            </div>

            {/* Content Body with Infobox float */}
            <div className="space-y-4 text-[13px] leading-relaxed text-[#202122] overflow-hidden">
              
              {/* Infobox Non-Profit (Float Right) */}
              <div className="w-full sm:w-[290px] sm:float-right sm:ml-6 mb-4 bg-[#f8f9fa] border border-[#a2a9b1] rounded p-3 text-xs space-y-3 font-sans shadow-xs">
                <div className="text-center font-bold text-sm border-b border-[#a2a9b1] pb-2 text-slate-900">
                  Nisarg Srishti Welfare Foundation
                  <div className="text-xs font-normal text-slate-600 mt-0.5 font-serif">निसर्ग सृष्टी वेल्फेअर फाउंडेशन</div>
                </div>

                <div className="bg-slate-100 border border-slate-200 h-28 flex flex-col items-center justify-center text-slate-500 text-[11px] p-2 text-center rounded">
                  <span className="font-bold text-slate-700 mb-1">Organization Insignia / Logo</span>
                  <span>Requires CC-BY-SA 4.0 authorization via Wikimedia VRT prior to upload</span>
                </div>

                <table className="w-full text-left text-[11px]">
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <th className="py-1.5 font-bold text-slate-700 w-24">Type</th>
                      <td className="py-1.5 text-slate-800">Section 8 Non-profit company</td>
                    </tr>
                    <tr>
                      <th className="py-1.5 font-bold text-slate-700">Founded</th>
                      <td className="py-1.5 text-slate-800">11 January 2023 (3 years ago)</td>
                    </tr>
                    <tr>
                      <th className="py-1.5 font-bold text-slate-700">Location</th>
                      <td className="py-1.5 text-slate-800">Pune, Maharashtra, India</td>
                    </tr>
                    <tr>
                      <th className="py-1.5 font-bold text-slate-700">Founder</th>
                      <td className="py-1.5 text-slate-800">Dr. Garima Kavathekar</td>
                    </tr>
                    <tr>
                      <th className="py-1.5 font-bold text-slate-700">Key people</th>
                      <td className="py-1.5 text-slate-800">
                        Dr. Garima Gaurav Kavathekar (CEO)<br />
                        Deepali Kayathekar (Director)
                      </td>
                    </tr>
                    <tr>
                      <th className="py-1.5 font-bold text-slate-700">Focus</th>
                      <td className="py-1.5 text-slate-800">Noise pollution awareness, environmental education, e-waste</td>
                    </tr>
                    <tr>
                      <th className="py-1.5 font-bold text-slate-700">Area served</th>
                      <td className="py-1.5 text-slate-800">Pune district, Maharashtra</td>
                    </tr>
                    <tr>
                      <th className="py-1.5 font-bold text-slate-700">Revenue</th>
                      <td className="py-1.5 text-slate-800">&lt; ₹10 crore (FY 2024–25)</td>
                    </tr>
                    <tr>
                      <th className="py-1.5 font-bold text-slate-700">Website</th>
                      <td className="py-1.5">
                        <a href="https://nisargsrishti.org" target="_blank" rel="noopener noreferrer" className="text-[#3366cc] hover:underline flex items-center gap-1 font-medium">
                          <span>nisargsrishti.org</span>
                          <ExternalLink className="w-2.5 h-2.5 inline" />
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Lead Paragraph */}
              <p>
                The <strong>Nisarg Srishti Welfare Foundation</strong> (<strong>NSWF</strong>) is an Indian non-profit organization headquartered in Pune, Maharashtra. Incorporated in January 2023, the organization conducts environmental advocacy, educational programs, and community awareness drives, primarily focusing on noise pollution mitigation, sustainable lifestyle practices, and student environmental literacy.<sup className="text-[#3366cc] font-semibold cursor-pointer">[1]</sup><sup className="text-[#3366cc] font-semibold cursor-pointer">[2]</sup>
              </p>

              {/* Table of Contents Mini Box */}
              <div className="bg-[#f8f9fa] border border-[#a2a9b1] rounded p-3.5 w-64 my-4 font-sans text-xs">
                <div className="font-bold text-slate-800 border-b border-slate-200 pb-1 mb-2 text-center">
                  Contents [hide]
                </div>
                <ol className="space-y-1 text-[#3366cc] list-decimal list-inside">
                  <li className="hover:underline cursor-pointer">History</li>
                  <li className="hover:underline cursor-pointer">Mission and programs</li>
                  <ol className="pl-4 space-y-0.5 list-[decimal] text-[11px]">
                    <li className="hover:underline cursor-pointer">Noise pollution awareness in education</li>
                    <li className="hover:underline cursor-pointer">Festival acoustic monitoring</li>
                    <li className="hover:underline cursor-pointer">Environmental collaborations</li>
                  </ol>
                  <li className="hover:underline cursor-pointer">Leadership and governance</li>
                  <li className="hover:underline cursor-pointer">Organization-reported impact</li>
                  <li className="hover:underline cursor-pointer">Sourcing limitations and notability note</li>
                  <li className="hover:underline cursor-pointer">References</li>
                  <li className="hover:underline cursor-pointer">External links</li>
                </ol>
              </div>

              {/* Section 1: History */}
              <h2 className="font-serif text-xl font-normal text-slate-900 border-b border-[#a2a9b1] pb-1 pt-4">
                History
              </h2>
              <p>
                Nisarg Srishti Welfare Foundation was legally incorporated on 11 January 2023 under Section 8 of the Companies Act, 2013, registered with the Registrar of Companies in Pune with Corporate Identification Number (CIN) U85300PN2023NPL217884.<sup className="text-[#3366cc] font-semibold">[1]</sup><sup className="text-[#3366cc] font-semibold">[3]</sup> The organization was founded by Dr. Garima Gaurav Kavathekar, an environmental educator and public speaker.<sup className="text-[#3366cc] font-semibold">[4]</sup>
              </p>
              <p>
                On 14 December 2024, the foundation opened its first regional operating office in Pune to coordinate its school outreach and acoustic monitoring activities.<sup className="text-[#3366cc] font-semibold">[5]</sup> The foundation held its annual general meeting on 27 January 2025.<sup className="text-[#3366cc] font-semibold">[3]</sup>
              </p>

              {/* Section 2: Mission and programs */}
              <h2 className="font-serif text-xl font-normal text-slate-900 border-b border-[#a2a9b1] pb-1 pt-4">
                Mission and programs
              </h2>
              <p>
                The foundation's stated objective is to foster noise-conscious and environmentally sustainable communities, with particular focus on auditory health and civic behavioral change.<sup className="text-[#3366cc] font-semibold">[6]</sup>
              </p>

              <h3 className="font-serif text-base font-bold text-slate-900 pt-2">
                Noise pollution awareness in education
              </h3>
              <p>
                NSWF conducts interactive workshops and demonstrative sessions in schools and collegiate institutions in the Pune metropolitan area. The sessions address the physiological and psychological impacts of elevated decibel levels, vehicular honking, and festive sound amplification. Participating institutions have included Pune Municipal Corporation (PMC) schools, PDEA's College of Engineering in Manjari, and Dnyan Prabodhini Madhyamik Mahavidyalaya.<sup className="text-[#3366cc] font-semibold">[7]</sup><sup className="text-[#3366cc] font-semibold">[2]</sup> In August 2026, the foundation signed a Memorandum of Understanding (MoU) with the PMC Late Ramchandra Bankar English Primary School in Hadapsar to deliver year-round acoustic education modules for middle-school grades.<sup className="text-[#3366cc] font-semibold">[2]</sup>
              </p>

              <h3 className="font-serif text-base font-bold text-slate-900 pt-2">
                Festival acoustic monitoring
              </h3>
              <p>
                During the Ganesh Chaturthi festivities in Pune in September 2025, the foundation, in collaboration with student volunteers from the Gokhale Institute of Politics and Economics, conducted informal field measurements of ambient sound levels across major immersion corridors to raise public awareness of festive decibel levels.<sup className="text-[#3366cc] font-semibold">[8]</sup>
              </p>

              <h3 className="font-serif text-base font-bold text-slate-900 pt-2">
                Environmental collaborations
              </h3>
              <ul className="list-disc list-inside space-y-1.5 pl-2">
                <li>
                  <strong>E-waste recycling:</strong> In November 2025, the foundation executed an agreement with Electrofine Recycling Pvt. Ltd. to incorporate consumer electronic waste collection and responsible disposal awareness into its campus noise seminars.<sup className="text-[#3366cc] font-semibold">[9]</sup>
                </li>
                <li>
                  <strong>Youth outreach:</strong> In February 2025, the foundation partnered with youth initiative Ecoserve Development to coordinate volunteer-driven urban sustainability and noise abatement campaigns.<sup className="text-[#3366cc] font-semibold">[10]</sup>
                </li>
              </ul>

              {/* Section 3: Leadership and governance */}
              <h2 className="font-serif text-xl font-normal text-slate-900 border-b border-[#a2a9b1] pb-1 pt-4">
                Leadership and governance
              </h2>
              <p>
                The organization is governed by a board of directors comprising Founder Director Dr. Garima Gaurav Kavathekar and Director Deepali Kayathekar.<sup className="text-[#3366cc] font-semibold">[1]</sup> In early 2026, Dr. Kavathekar was interviewed by BBC Audio for its documentary series <em>People Fixing the World</em> in an episode exploring civic efforts to mitigate urban noise.<sup className="text-[#3366cc] font-semibold">[11]</sup>
              </p>

              {/* Section 4: Organization-reported impact */}
              <h2 className="font-serif text-xl font-normal text-slate-900 border-b border-[#a2a9b1] pb-1 pt-4">
                Organization-reported impact
              </h2>
              <p>
                As of August 2026, the foundation reported having conducted over 48 educational sessions reaching approximately 15,400 participants.<sup className="text-[#3366cc] font-semibold">[2]</sup> These figures have not been verified through independent statistical audits.
              </p>

              {/* Sourcing note */}
              <h2 className="font-serif text-xl font-normal text-slate-900 border-b border-[#a2a9b1] pb-1 pt-4">
                Sourcing limitations and notability note
              </h2>
              <p className="italic text-slate-700 bg-white p-4 border border-slate-300 rounded-lg shadow-xs">
                Editorial note: As of September 2026, independent secondary coverage in mainstream Indian national newspapers (such as The Times of India, The Indian Express, or The Hindu) remains limited. A substantial portion of published coverage consists of syndicated press releases or self-published organizational reports, and additional reliable secondary sources are required to meet Wikipedia's general notability standards.
              </p>

              {/* References Section */}
              <h2 className="font-serif text-xl font-normal text-slate-900 border-b border-[#a2a9b1] pb-1 pt-6">
                References
              </h2>
              <ol className="text-[11px] text-slate-700 space-y-1.5 list-decimal list-inside pt-2">
                <li>
                  <span className="font-bold">Ministry of Corporate Affairs, Government of India.</span> (2023-01-11). "Company Master Data: Nisarg Srishti Welfare Foundation". MCA Portal.
                </li>
                <li>
                  <span className="font-bold">India Chronicle.</span> (August 2026). "Nisarg Srishti Welfare Foundation Signs MoU with Late Ramchandra Bankar English Primary School, PMC".
                </li>
                <li>
                  <span className="font-bold">Tracxn Technologies.</span> (2025-03-31). "Company Profile: Nisarg Srishti Welfare Foundation".
                </li>
                <li>
                  <span className="font-bold">Bharat Good Times.</span> (2025). "Social Advocacy Profile: Dr. Garima Kavathekar".
                </li>
                <li>
                  <span className="font-bold">Nisarg Srishti Welfare Foundation.</span> (2024-12-14). "Inauguration of Pune Regional Office". Official Portal.
                </li>
                <li>
                  <span className="font-bold">Nisarg Srishti Welfare Foundation.</span> "About Us". nisargsrishti.org.
                </li>
                <li>
                  <span className="font-bold">StayFeatured.</span> (February 2025). "PDEA College of Engineering Hosts Noise Pollution Sensitization Workshop".
                </li>
                <li>
                  <span className="font-bold">Nisarg Srishti Welfare Foundation.</span> (September 2025). "Ganesh Utsav Acoustic Monitoring Report".
                </li>
                <li>
                  <span className="font-bold">India Chronicle.</span> (November 2025). "Electrofine Recycling Partners with Nisarg Srishti Welfare Foundation".
                </li>
                <li>
                  <span className="font-bold">NeelWrites.</span> (February 2025). "Youth Movement for Sound Environment".
                </li>
                <li>
                  <span className="font-bold">BBC Audio.</span> (February 2026). "People Fixing the World: Making Cities Feel Quieter". BBC World Service.
                </li>
              </ol>

              {/* External Links */}
              <h2 className="font-serif text-xl font-normal text-slate-900 border-b border-[#a2a9b1] pb-1 pt-4">
                External links
              </h2>
              <ul className="list-disc list-inside text-xs text-[#3366cc] font-medium">
                <li>
                  <a href="https://nisargsrishti.org" target="_blank" rel="noopener noreferrer" className="hover:underline">
                    Official website (nisargsrishti.org)
                  </a>
                </li>
              </ul>

              {/* Bottom Categories Box */}
              <div className="bg-[#f8f9fa] border border-[#a2a9b1] rounded p-2.5 text-xs text-slate-600 mt-6">
                <span className="font-bold text-slate-800">Categories: </span>
                <span className="text-[#3366cc] hover:underline cursor-pointer">Environmental organizations based in India</span> | 
                <span className="text-[#3366cc] hover:underline cursor-pointer"> Organizations based in Pune</span> | 
                <span className="text-[#3366cc] hover:underline cursor-pointer"> Organizations established in 2023</span> | 
                <span className="text-[#3366cc] hover:underline cursor-pointer"> Pollution control in India</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
