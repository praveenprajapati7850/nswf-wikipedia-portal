/**
 * Wikipedia Draft and Editorial Audit Suite for
 * Nisarg Srishti Welfare Foundation (NSWF)
 * Adheres strictly to WP:NPOV, WP:V, WP:NOR, WP:RS, WP:ORG, WP:COI, WP:PAID
 */

export interface ClaimAuditItem {
  id: string;
  claim: string;
  section: string;
  source: string;
  sourceType: 'Government Registry' | 'Primary / Self-Published' | 'PR Distribution Wire' | 'Broadcast Interview' | 'Directory Aggregator';
  verified: 'VERIFIED' | 'PARTIALLY VERIFIED' | 'UNVERIFIED';
  independent: 'Yes' | 'No' | 'Partial';
  action: 'Keep' | 'Revise & Attribute' | 'Find Better Source' | 'Remove' | 'Verify Manually';
  editorialNotes: string;
}

export interface EditorialChecklistItem {
  id: string;
  category: string;
  check: string;
  description: string;
  status: 'Pass' | 'Fail' | 'Needs Attention' | 'Warning';
  recommendation: string;
}

export const WIKIPEDIA_DRAFT_METADATA = {
  articleTitle: 'Nisarg Srishti Welfare Foundation',
  suggestedNamespace: 'Draft:Nisarg_Srishti_Welfare_Foundation',
  status: 'Incomplete Draft (Pending Independent Secondary Sources)',
  submissionStatus: 'Not Ready for Mainspace (AfC Sandbox Only)',
  lastAuditDate: '2026-09-24',
  reviewCategory: 'Non-profit organizations in Maharashtra'
};

export const WIKITEXT_RAW = `{{Draft}}
{{Infobox non-profit
| name               = Nisarg Srishti Welfare Foundation
| native_name        = निसर्ग सृष्टी वेल्फेअर फाउंडेशन
| image              = 
| caption            = 
| type               = Section 8 Non-profit company
| founded            = {{Start date and age|2023|01|11}}
| location           = [[Pune]], [[Maharashtra]], India
| coordinates        = 
| founder            = [[Dr. Garima Kavathekar]]
| key_people         = Dr. Garima Gaurav Kavathekar (Founder Director & CEO)<br />Deepali Kayathekar (Director)
| focus              = [[Noise pollution]] awareness, [[environmental education]], sustainable living, [[electronic waste]]
| area_served        = Pune district, Maharashtra
| revenue            = < ₹10 crore (FY 2024–25)
| website            = {{URL|https://nisargsrishti.org}}
}}

The '''Nisarg Srishti Welfare Foundation''' ('''NSWF''') is an Indian non-profit organization headquartered in [[Pune]], [[Maharashtra]]. Incorporated in January 2023, the organization conducts environmental advocacy, educational programs, and community awareness drives, primarily focusing on [[noise pollution]] mitigation, sustainable lifestyle practices, and student environmental literacy.<ref name="mca-master">{{cite web |title=Company Master Data: Nisarg Srishti Welfare Foundation |url=https://www.mca.gov.in |publisher=Ministry of Corporate Affairs, Government of India |date=2023-01-11 |access-date=2026-09-24}}</ref><ref name="indiachronicle-bankar">{{cite news |title=Nisarg Srishti Welfare Foundation Signs MoU with Late Ramchandra Bankar English Primary School, PMC |newspaper=India Chronicle |date=August 2026}}</ref>

== History ==
Nisarg Srishti Welfare Foundation was legally incorporated on 11 January 2023 under Section 8 of the [[Companies Act, 2013]], registered with the [[Registrar of Companies]] in Pune with Corporate Identification Number (CIN) U85300PN2023NPL217884.<ref name="mca-master" /><ref name="tracxn-report">{{cite web |title=Company Profile: Nisarg Srishti Welfare Foundation |url=https://tracxn.com |publisher=Tracxn Technologies |date=2025-03-31 |access-date=2026-09-24}}</ref> The organization was founded by Dr. Garima Gaurav Kavathekar, an environmental educator and public speaker.<ref name="bharatgoodtimes">{{cite news |title=Social Advocacy Profile: Dr. Garima Kavathekar |newspaper=Bharat Good Times |date=2025}}</ref>

On 14 December 2024, the foundation opened its first regional operating office in Pune to coordinate its school outreach and acoustic monitoring activities.<ref name="nswf-regional">{{cite web |title=Inauguration of Pune Regional Office |url=https://nisargsrishti.org |publisher=Nisarg Srishti Welfare Foundation |date=2024-12-14 |access-date=2026-09-24}}</ref> The foundation held its annual general meeting on 27 January 2025.<ref name="tracxn-report" />

== Mission and programs ==
The foundation's stated objective is to foster noise-conscious and environmentally sustainable communities, with particular focus on auditory health and civic behavioral change.<ref name="nswf-about">{{cite web |title=About Us |url=https://nisargsrishti.org |publisher=Nisarg Srishti Welfare Foundation |access-date=2026-09-24}}</ref>

=== Noise pollution awareness in education ===
NSWF conducts interactive workshops and demonstrative sessions in schools and collegiate institutions in the Pune metropolitan area. The sessions address the physiological and psychological impacts of elevated decibel levels, vehicular honking, and festive sound amplification. Participating institutions have included Pune Municipal Corporation (PMC) schools, PDEA's College of Engineering in Manjari, and Dnyan Prabodhini Madhyamik Mahavidyalaya.<ref name="stayfeatured-pdea">{{cite web |title=PDEA College of Engineering Hosts Noise Pollution Sensitization Workshop |url=https://stayfeatured.com |publisher=StayFeatured |date=February 2025}}</ref><ref name="indiachronicle-bankar" /> In August 2026, the foundation signed a Memorandum of Understanding (MoU) with the PMC Late Ramchandra Bankar English Primary School in Hadapsar to deliver year-round acoustic education modules for middle-school grades.<ref name="indiachronicle-bankar" />

=== Festival acoustic monitoring ===
During the [[Ganesh Chaturthi]] festivities in Pune in September 2025, the foundation, in collaboration with student volunteers from the [[Gokhale Institute of Politics and Economics|Gokhale Institute]], conducted informal field measurements of ambient sound levels across major immersion corridors to raise public awareness of festive decibel levels.<ref name="nswf-ganesh">{{cite web |title=Ganesh Utsav Acoustic Monitoring Report |url=https://nisargsrishti.org |publisher=Nisarg Srishti Welfare Foundation |date=September 2025}}</ref>

=== Environmental collaborations ===
* '''E-waste recycling:''' In November 2025, the foundation executed an agreement with Electrofine Recycling Pvt. Ltd. to incorporate consumer electronic waste collection and responsible disposal awareness into its campus noise seminars.<ref name="indiachronicle-electrofine">{{cite news |title=Electrofine Recycling Partners with Nisarg Srishti Welfare Foundation |newspaper=India Chronicle |date=November 2025}}</ref>
* '''Youth outreach:''' In February 2025, the foundation partnered with youth initiative Ecoserve Development to coordinate volunteer-driven urban sustainability and noise abatement campaigns.<ref name="neelwrites-ecoserve">{{cite web |title=Youth Movement for Sound Environment |url=https://neelwrites.com |website=NeelWrites |date=February 2025}}</ref>

== Leadership and governance ==
The organization is governed by a board of directors comprising Founder Director Dr. Garima Gaurav Kavathekar and Director Deepali Kayathekar.<ref name="mca-master" /> In early 2026, Dr. Kavathekar was interviewed by [[BBC Audio]] for its documentary series ''People Fixing the World'' in an episode exploring civic efforts to mitigate urban noise.<ref name="bbc-audio">{{cite episode |title=People Fixing the World: Making Cities Feel Quieter |series=People Fixing the World |network=BBC Audio |url=https://www.bbc.co.uk/programmes/p04gr521 |date=February 2026}}</ref>

== Organization-reported impact ==
As of August 2026, the foundation reported having conducted over 48 educational sessions reaching approximately 15,400 participants.<ref name="indiachronicle-bankar" /> These figures have not been verified through independent statistical audits.

== Sourcing limitations and notability note ==
''Editorial note: As of September 2026, independent secondary coverage in mainstream Indian national newspapers (such as [[The Times of India]], [[The Indian Express]], or [[The Hindu]]) remains limited. A substantial portion of published coverage consists of syndicated press releases or self-published organizational reports, and additional reliable secondary sources are required to meet Wikipedia's general notability standards.''

== References ==
{{reflist}}

== External links ==
* {{official website|https://nisargsrishti.org}}

[[Category:Environmental organizations based in India]]
[[Category:Organizations based in Pune]]
[[Category:Organizations established in 2023]]
[[Category:Pollution control in India]]
`;

export const CLAIM_AUDIT_DATA: ClaimAuditItem[] = [
  {
    id: 'CLM-01',
    claim: 'Nisarg Srishti Welfare Foundation was legally incorporated on 11 January 2023 under Section 8 of the Companies Act 2013 with CIN U85300PN2023NPL217884.',
    section: 'History / Infobox',
    source: 'Ministry of Corporate Affairs (MCA) / ROC Pune',
    sourceType: 'Government Registry',
    verified: 'VERIFIED',
    independent: 'Yes',
    action: 'Keep',
    editorialNotes: 'Supported by official statutory records; factual and non-promotional.'
  },
  {
    id: 'CLM-02',
    claim: 'Dr. Garima Gaurav Kavathekar is the Founder Director & CEO, and Deepali Kayathekar is Director.',
    section: 'Leadership and governance',
    source: 'MCA Registry Director Index / Official filings',
    sourceType: 'Government Registry',
    verified: 'VERIFIED',
    independent: 'Yes',
    action: 'Keep',
    editorialNotes: 'Verified via statutory MCA registry.'
  },
  {
    id: 'CLM-03',
    claim: 'The organization operates out of Pune, Maharashtra, with its registered address in Manjari BK, and opened a regional office on 14 December 2024.',
    section: 'History',
    source: 'MCA filings & nisargsrishti.org announcement',
    sourceType: 'Directory Aggregator',
    verified: 'VERIFIED',
    independent: 'Yes',
    action: 'Keep',
    editorialNotes: 'Registered address confirmed via MCA; opening date of regional office attributed to foundation.'
  },
  {
    id: 'CLM-04',
    claim: 'NSWF has reached over 15,400 beneficiaries across 48 sessions.',
    section: 'Organization-reported impact',
    source: 'India Chronicle (indiachronicle.in) release',
    sourceType: 'PR Distribution Wire',
    verified: 'PARTIALLY VERIFIED',
    independent: 'No',
    action: 'Revise & Attribute',
    editorialNotes: 'CRITICAL: Must NOT be stated as an objective fact. Must explicitly state "As of August 2026, the foundation reported..." with an explicit disclaimer that figures lack third-party verification.'
  },
  {
    id: 'CLM-05',
    claim: 'Signed an MoU with PMC Late Ramchandra Bankar English Primary School, Hadapsar in August 2026 for Classes 5-8 noise curriculum.',
    section: 'Programs - School awareness',
    source: 'India Chronicle / School administrative release',
    sourceType: 'PR Distribution Wire',
    verified: 'PARTIALLY VERIFIED',
    independent: 'No',
    action: 'Revise & Attribute',
    editorialNotes: 'Verify with municipal gazette if possible. In draft, attribute neutrally as an MoU reported between the parties.'
  },
  {
    id: 'CLM-06',
    claim: 'Conducted noise level monitoring during Ganesh Utsav 2025 in Pune with Gokhale Institute students.',
    section: 'Programs - Festival monitoring',
    source: 'nisargsrishti.org / student social media reports',
    sourceType: 'Primary / Self-Published',
    verified: 'PARTIALLY VERIFIED',
    independent: 'No',
    action: 'Revise & Attribute',
    editorialNotes: 'Describe as an informal citizen science drive; avoid implying official Pune Municipal or CPCB monitoring status.'
  },
  {
    id: 'CLM-07',
    claim: 'Collaborates with Electrofine Recycling Pvt. Ltd. on e-waste awareness.',
    section: 'Environmental collaborations',
    source: 'India Chronicle November 2025 release',
    sourceType: 'PR Distribution Wire',
    verified: 'PARTIALLY VERIFIED',
    independent: 'No',
    action: 'Keep',
    editorialNotes: 'State as an agreement signed to promote awareness; avoid unsubstantiated claims regarding recycling tonnage.'
  },
  {
    id: 'CLM-08',
    claim: 'Dr. Garima Kavathekar was featured in BBC Audio\'s "People Fixing the World: Making Cities Feel Quieter".',
    section: 'Leadership and governance',
    source: 'BBC Audio / World Service programme listing',
    sourceType: 'Broadcast Interview',
    verified: 'VERIFIED',
    independent: 'Yes',
    action: 'Keep',
    editorialNotes: 'Verified broadcast program. Note that it interviewed the founder personally on urban acoustics; cite accurately.'
  },
  {
    id: 'CLM-09',
    claim: 'NSWF is a "leading environmental organization in Asia transforming noise pollution".',
    section: 'Lead / Promotional statements (Found in PR copy)',
    source: 'India Chronicle / Bharat Good Times PR text',
    sourceType: 'PR Distribution Wire',
    verified: 'UNVERIFIED',
    independent: 'No',
    action: 'Remove',
    editorialNotes: 'STRICTLY PROHIBITED under WP:NPOV and WP:PEACOCK. Exclude completely from encyclopedic draft.'
  },
  {
    id: 'CLM-10',
    claim: 'Awarded revolutionary ISO 14001 certification and nationwide environmental excellence accolades.',
    section: 'Impact / Unverified awards',
    source: 'nisargsrishti.org claims',
    sourceType: 'Primary / Self-Published',
    verified: 'UNVERIFIED',
    independent: 'No',
    action: 'Remove',
    editorialNotes: 'No accrediting body certificates or independent press coverage confirmed. Must be omitted until documentary proof is provided.'
  }
];

export const EDITORIAL_CHECKLIST: EditorialChecklistItem[] = [
  {
    id: 'chk-1',
    category: 'Notability (WP:ORG / WP:GNG)',
    check: 'Sustained, significant independent secondary coverage in reliable news media',
    description: 'Subject must be covered in-depth by independent, reputable journalistic outlets (e.g. Times of India, Indian Express, Sakal, The Hindu) rather than press releases.',
    status: 'Fail',
    recommendation: 'Do NOT submit directly to mainspace. Retain as a draft. Wait until mainstream regional or national publications produce in-depth investigative profiles.'
  },
  {
    id: 'chk-2',
    category: 'Source Independence (WP:RS / WP:PSTS)',
    check: 'Exclusion of PR syndication networks and self-published blogs',
    description: 'Sites such as India Chronicle, Bharat Good Times, NeelWrites, and StayFeatured appear to reproduce submitted promotional copy.',
    status: 'Fail',
    recommendation: 'Clearly mark these citations as primary/syndicated in the editorial audit. Replace with neutral attribution.'
  },
  {
    id: 'chk-3',
    category: 'Neutral Point of View (WP:NPOV)',
    check: 'Elimination of puffery, superlatives, and marketing claims',
    description: 'All peacock terms ("pioneering", "leading", "transformative", "revolutionary") must be excised.',
    status: 'Pass',
    recommendation: 'Draft version complies with WP:NPOV by using dry, objective, factual wording.'
  },
  {
    id: 'chk-4',
    category: 'Verifiability of Metrics (WP:V / WP:NOR)',
    check: 'Attribution of unverified statistics and impact numbers',
    description: 'Beneficiary numbers (15,400) and session counts (48+) cannot be presented as factual truth without external audits.',
    status: 'Pass',
    recommendation: 'Addressed by isolating figures in an "Organization-reported impact" section with explicit attribution.'
  },
  {
    id: 'chk-5',
    category: 'Conflict of Interest (WP:COI & WP:PAID)',
    check: 'Disclosure of paid or institutional ties prior to submission',
    description: 'Any editor acting on behalf of NSWF or receiving compensation must disclose affiliations on their user page and talk page per WMF Terms of Use.',
    status: 'Needs Attention',
    recommendation: 'Provide mandatory disclosure statement template for any future AfC submission.'
  },
  {
    id: 'chk-6',
    category: 'Copyright & Media (WP:IMAGE / Commons)',
    check: 'Free licensing verification for logos, photos, and media assets',
    description: 'Photos downloaded from social media or nisargsrishti.org cannot be uploaded to Wikimedia Commons without verified CC-BY-SA 4.0 authorization via VRT.',
    status: 'Needs Attention',
    recommendation: 'Do not upload media to Wikimedia Commons until official email release is confirmed through permissions-commons@wikimedia.org.'
  }
];

export const COI_DISCLOSURE_TEMPLATE = `== Mandatory Conflict of Interest Disclosure ==
Pursuant to the Wikimedia Foundation Terms of Use and English Wikipedia guidelines (WP:COI and WP:PAID):

* '''User Affiliation:''' If this draft is submitted by an officer, employee, contractor, or compensated researcher of Nisarg Srishti Welfare Foundation, this affiliation MUST be formally declared.
* '''Submission Queue:''' This article must ONLY be submitted through the [[Wikipedia:Articles for creation|Articles for Creation (AfC)]] process where independent, un-affiliated volunteer reviewers will evaluate notability.
* '''Declaration Format:'''
  "I have a conflict of interest regarding the subject of this draft (Nisarg Srishti Welfare Foundation). I have received compensation / have an organizational relationship to prepare this research dossier and draft. I have submitted this draft through the Articles for Creation process for neutral peer review."
`;
