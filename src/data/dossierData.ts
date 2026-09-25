/**
 * Nisarg Srishti Welfare Foundation (NSWF)
 * Investigative Research Dossier Data
 * Fact-checked against Ministry of Corporate Affairs (MCA), corporate directories,
 * official publications, syndication portals, and broadcast mentions.
 */

export interface OrgProfileItem {
  field: string;
  information: string;
  verificationStatus: 'VERIFIED' | 'PARTIALLY VERIFIED' | 'UNVERIFIED' | 'CONFLICTING';
  source: string;
  notes?: string;
}

export interface TimelineEvent {
  date: string;
  event: string;
  description: string;
  source: string;
  verificationStatus: 'VERIFIED' | 'PARTIALLY VERIFIED' | 'UNVERIFIED' | 'CONFLICTING';
  category: 'Legal/Incorporation' | 'Infrastructure' | 'Campaign' | 'Partnership' | 'Media';
}

export interface ProgramItem {
  id: string;
  name: string;
  dateOrDuration: string;
  location: string;
  purpose: string;
  activitiesConducted: string[];
  targetParticipants: string;
  collaborators: string[];
  documentedOutcomes: string;
  primarySources: string[];
  independentSources: string[];
  editorialAssessment: string;
}

export interface SourceItem {
  id: string;
  title: string;
  publisher: string;
  date: string;
  url: string;
  category: 'Government/Registry' | 'Primary/Official' | 'PR/Syndicated Portal' | 'Broadcast Media' | 'Directory/Aggregator';
  independent: 'Yes' | 'No' | 'Unclear' | 'Partial';
  reliability: 'High' | 'Medium' | 'Medium (Self-published / Primary)' | 'Low (PR/Sponsored)' | 'Directory Data Only';
  claimsSupported: string;
  verificationStatus: 'VERIFIED' | 'PARTIALLY VERIFIED' | 'UNVERIFIED' | 'CONFLICTING';
  limitations: string;
}

export interface MediaItem {
  id: string;
  title: string;
  url: string;
  originalSource: string;
  date: string;
  eventOrActivity: string;
  copyrightHolder: string;
  licenseStatus: string;
  commonsSuitability: 'Not Suitable (Copyrighted)' | 'Requires OTRS/VRT Permission' | 'Public Domain / Free License';
  permissionRequirements: string;
  documentationNotes: string;
}

export const EXECUTIVE_SUMMARY = {
  organizationName: 'Nisarg Srishti Welfare Foundation (NSWF)',
  legalStatus: 'Active Section 8 Non-Profit Company (Private Limited by Guarantee)',
  incorporationDate: 'January 11, 2023',
  cin: 'U85300PN2023NPL217884',
  registeredOffice: 'Shop No. 02, Vision Galaxy, S No. 143A/1, Kunjir Colony, Manjari BK, Pune, Maharashtra 412307, India',
  founderLeadership: 'Dr. Garima Gaurav Kavathekar (Founder Director & CEO), Deepali Kayathekar (Director)',
  primaryMission: 'Environmental conservation, with a predominant focus on noise pollution awareness, sustainable living, student environmental literacy, and community acoustic stewardship.',
  keyVerifiedFacts: [
    'Legally incorporated on January 11, 2023, under ROC Pune (Ministry of Corporate Affairs, India).',
    'Operates out of Pune, Maharashtra, with an inaugural regional office opened on December 14, 2024.',
    'Signed MoUs with educational bodies including PMC Late Ramchandra Bankar English Primary School (Hadapsar) and youth organization Ecoserve Development.',
    'Partnered with Electrofine Recycling Pvt. Ltd. (Nov 2025) for e-waste awareness alongside noise pollution.',
    'Conducted noise monitoring during Ganesh Utsav 2025 in Pune in collaboration with Gokhale Institute students.',
    'Dr. Garima Kavathekar was interviewed/featured in a BBC Audio segment ("People Fixing the World: Making Cities Feel Quieter").'
  ],
  keyLimitations: [
    'Zero coverage in national or regional mainstream news dailies of record (e.g., Times of India, Indian Express, The Hindu, Hindustan Times, Sakal, Lokmat).',
    'Almost all secondary coverage originates from PR syndication portals (India Chronicle, Bharat Good Times, Stay Featured, Neel Writes), which do not satisfy Wikipedia\'s WP:RS or WP:ORG guidelines.',
    'Claimed impact metrics (e.g., "48+ awareness sessions, 15,400+ direct beneficiaries") are self-reported by the organization and lack independent third-party audit.',
    'Does not currently meet Wikipedia\'s General Notability Guideline (WP:GNG) or Notability Guideline for Organizations (WP:ORG). An immediate mainspace article would face high risk of deletion.'
  ]
};

export const ORG_PROFILE: OrgProfileItem[] = [
  {
    field: 'Full Official Name',
    information: 'Nisarg Srishti Welfare Foundation',
    verificationStatus: 'VERIFIED',
    source: 'Ministry of Corporate Affairs (MCA) / Tracxn / Zauba Corp',
    notes: 'Registered as a non-profit company under Section 8 of the Companies Act, 2013.'
  },
  {
    field: 'Abbreviation & Alternate Names',
    information: 'NSWF; Nisarg Srishti Foundation',
    verificationStatus: 'VERIFIED',
    source: 'Official website (nisargsrishti.org) & media releases'
  },
  {
    field: 'Corporate Identification Number (CIN)',
    information: 'U85300PN2023NPL217884',
    verificationStatus: 'VERIFIED',
    source: 'Ministry of Corporate Affairs / FalconeBiz / Tracxn'
  },
  {
    field: 'Date of Incorporation',
    information: '11 January 2023',
    verificationStatus: 'VERIFIED',
    source: 'RoC Pune / MCA Records'
  },
  {
    field: 'Registrar of Companies (RoC)',
    information: 'RoC Pune, Maharashtra, India',
    verificationStatus: 'VERIFIED',
    source: 'MCA Records'
  },
  {
    field: 'Authorized & Paid-up Capital',
    information: 'Authorized: ₹1,00,000 (INR 1 Lakh) | Paid-up: ₹1,00,000',
    verificationStatus: 'VERIFIED',
    source: 'MCA Filings / Tracxn'
  },
  {
    field: 'Registered Office Address',
    information: 'Shop No. 02, Vision Galaxy, S No. 143A/1, Kunjir Colony, Manjari BK (N.V), Pune, Haveli, Maharashtra 412307, India',
    verificationStatus: 'VERIFIED',
    source: 'MCA Registry Records'
  },
  {
    field: 'Regional Office',
    information: 'Pune Regional Office inaugurated on 14 December 2024',
    verificationStatus: 'VERIFIED',
    source: 'Official Foundation Release / nisargsrishti.org'
  },
  {
    field: 'Founder & Key Leadership',
    information: 'Dr. Garima Gaurav Kavathekar (Founder Director & CEO); Deepali Kayathekar (Director)',
    verificationStatus: 'VERIFIED',
    source: 'MCA Director Filings (DIN records) & Official Website'
  },
  {
    field: 'Company Classification',
    information: 'Company limited by Shares / Non-government Section 8 Company / Social Work Activities',
    verificationStatus: 'VERIFIED',
    source: 'Ministry of Corporate Affairs NIC Classification (Code 85300)'
  },
  {
    field: 'Annual General Meeting (AGM) Dates',
    information: 'Last AGM recorded: 27 January 2025 (some registries show statutory filing date 30 September 2025)',
    verificationStatus: 'PARTIALLY VERIFIED',
    source: 'Tracxn / FalconeBiz aggregator discrepancy'
  },
  {
    field: 'Official Website',
    information: 'https://nisargsrishti.org',
    verificationStatus: 'VERIFIED',
    source: 'Active domain registration & official communication'
  },
  {
    field: 'Official Contact Email',
    information: 'nisarg.srishti@gmail.com',
    verificationStatus: 'VERIFIED',
    source: 'nisargsrishti.org / public registry'
  },
  {
    field: 'Tax Exemption (80G / 12A / NGO Darpan)',
    information: 'Self-reported non-profit status; NGO Darpan unique ID not independently verified in published gazettes.',
    verificationStatus: 'UNVERIFIED',
    source: 'Primary self-claim; pending NITI Aayog portal verification'
  }
];

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    date: '11 January 2023',
    event: 'Official Legal Incorporation',
    description: 'Nisarg Srishti Welfare Foundation incorporated as a Section 8 Non-Profit Company with RoC Pune (CIN: U85300PN2023NPL217884).',
    source: 'Ministry of Corporate Affairs (MCA) database',
    verificationStatus: 'VERIFIED',
    category: 'Legal/Incorporation'
  },
  {
    date: '11 January 2024',
    event: '1st Foundation Day Celebration',
    description: 'Foundation completed its inaugural year of community outreach and noise sensitization drives in Pune educational centers.',
    source: 'nisargsrishti.org',
    verificationStatus: 'VERIFIED',
    category: 'Campaign'
  },
  {
    date: 'March 2024',
    event: 'PDEA School Environmental & Women Wellness Drive',
    description: 'Awareness session conducted at PDEA\'s English Medium Secondary School & Jr. College, Akurdi, addressing noise pollution and student well-being.',
    source: 'nisargsrishti.org',
    verificationStatus: 'PARTIALLY VERIFIED',
    category: 'Campaign'
  },
  {
    date: '14 December 2024',
    event: 'Pune Regional Office Inauguration',
    description: 'Inauguration of the foundation\'s dedicated regional operating office in Pune designed with eco-friendly infrastructure.',
    source: 'Foundation announcement / nisargsrishti.org',
    verificationStatus: 'VERIFIED',
    category: 'Infrastructure'
  },
  {
    date: '27 January 2025',
    event: 'Statutory Annual General Meeting (AGM)',
    description: 'Company held its AGM complying with Section 8 requirements; annual accounts reported under ₹10 Crore revenue bracket.',
    source: 'MCA / Tracxn financial intelligence report',
    verificationStatus: 'VERIFIED',
    category: 'Legal/Incorporation'
  },
  {
    date: 'February 2025',
    event: 'Youth Partnership MoU with Ecoserve Development',
    description: 'Signed Memorandum of Understanding with Ecoserve Development to mobilize youth volunteers for noise abatement and tree conservation.',
    source: 'neelwrites.com / press statement',
    verificationStatus: 'PARTIALLY VERIFIED',
    category: 'Partnership'
  },
  {
    date: 'February 2025',
    event: 'PDEA College of Engineering Campus Campaign',
    description: 'Conducted noise awareness workshop at Pune District Education Association\'s (PDEA) College of Engineering, Manjari.',
    source: 'stayfeatured.com coverage / college bulletin',
    verificationStatus: 'PARTIALLY VERIFIED',
    category: 'Campaign'
  },
  {
    date: 'September 2025',
    event: 'Ganesh Utsav Acoustic Monitoring with Gokhale Institute',
    description: 'Field measurement of decibel levels across major Pune immersion routes conducted jointly with student volunteers from Gokhale Institute.',
    source: 'nisargsrishti.org / foundation documentation',
    verificationStatus: 'PARTIALLY VERIFIED',
    category: 'Campaign'
  },
  {
    date: 'November 2025',
    event: 'E-Waste Partnership MoU with Electrofine Recycling',
    description: 'Formal MoU executed with Electrofine Recycling Pvt. Ltd. to integrate e-waste collection awareness into noise mitigation school workshops.',
    source: 'indiachronicle.in release',
    verificationStatus: 'PARTIALLY VERIFIED',
    category: 'Partnership'
  },
  {
    date: 'Early 2026',
    event: 'BBC Audio "People Fixing the World" Segment',
    description: 'Founder Dr. Garima Kavathekar featured in BBC Audio episode "Making Cities Feel Quieter", discussing urban soundscapes and citizen education in India.',
    source: 'BBC Audio / verified broadcast audio credits',
    verificationStatus: 'VERIFIED',
    category: 'Media'
  },
  {
    date: 'August 2026',
    event: 'Year-Round School MoU with PMC Ramchandra Bankar School',
    description: 'MoU signed with Pune Municipal Corporation\'s Late Ramchandra Bankar English Primary School (Hadapsar) for curriculum-integrated noise pollution awareness (Classes 5-8).',
    source: 'indiachronicle.in / institutional announcement',
    verificationStatus: 'PARTIALLY VERIFIED',
    category: 'Partnership'
  }
];

export const PROGRAMS: ProgramItem[] = [
  {
    id: 'prog-1',
    name: 'School & College Noise Pollution Literacy Program',
    dateOrDuration: '2023 – Present (Ongoing)',
    location: 'Pune metropolitan area, Maharashtra (Hadapsar, Akurdi, Manjari, Vadki)',
    purpose: 'Sensitizing young students to acoustic pollution hazards, hearing damage, behavioral stress, and quiet cultural practices.',
    activitiesConducted: [
      'Interactive classroom presentations on decibel thresholds and auditory health',
      'Demonstration of decibel sound meters to students',
      'Anti-honking pledges and student quiet ambassador designations',
      'Classroom discussions on festival noise etiquette'
    ],
    targetParticipants: 'Primary and secondary school students (Classes 5 to 8), engineering undergraduates, and faculty',
    collaborators: [
      'PMC Late Ramchandra Bankar English Primary School',
      'PDEA College of Engineering, Manjari',
      'Dnyan Prabodhini Madhyamik Mahavidyalaya',
      'Vardhaman English Medium School',
      'Kalawati Dattatray Kotwal High School',
      'Nutan Madhyamik Vidyalay, Vadki'
    ],
    documentedOutcomes: 'Foundation reports 48+ sessions conducted reaching over 15,400 beneficiaries. Independent academic pre/post audit metrics are unavailable.',
    primarySources: ['nisargsrishti.org/projects', 'Official press bulletins'],
    independentSources: ['Limited: India Chronicle & StayFeatured mentions (sponsored/syndicated)'],
    editorialAssessment: 'Documented via institutional event notices and school MoUs. The claimed participant total (15,400) must be clearly attributed to NSWF self-reporting.'
  },
  {
    id: 'prog-2',
    name: 'Ganesh Utsav Acoustic Monitoring & Festival Noise Sensitization',
    dateOrDuration: 'September 2025 (Annual during festival season)',
    location: 'Key public transit junctions and immersion routes, Pune',
    purpose: 'Documenting peak ambient sound pressure during community festival processions and encouraging quieter celebrations.',
    activitiesConducted: [
      'Deployment of student volunteers with sound level meters',
      'Recording day and night ambient decibel levels along procession routes',
      'Distribution of informational flyers on ear protection to shopkeepers and devotees'
    ],
    targetParticipants: 'General public, festival organizers (mandals), and student researchers',
    collaborators: ['Student volunteers affiliated with Gokhale Institute, Pune'],
    documentedOutcomes: 'Informational data shared on organizational media channels; formal peer-reviewed study or municipal submission has not been published.',
    primarySources: ['nisargsrishti.org/initiatives'],
    independentSources: ['Local blog roundups; no formal municipal citation identified'],
    editorialAssessment: 'Legitimate community activity, but should be described factually as a community measurement drive rather than an authoritative scientific survey.'
  },
  {
    id: 'prog-3',
    name: 'Integrated E-Waste and Sound Stewardship Collaboration',
    dateOrDuration: 'November 2025 – Present',
    location: 'Pune & Industrial Corridors, Maharashtra',
    purpose: 'Linking acoustic pollution consciousness with hazardous electronic waste disposal in residential and academic zones.',
    activitiesConducted: [
      'Joint seminars on toxic heavy metals in discarded sound equipment and speakers',
      'Facilitating drop-off awareness for broken amplifiers, stereos, and consumer electronics',
      'Promotion of circular recycling practices'
    ],
    targetParticipants: 'Institutions, electronics users, housing societies',
    collaborators: ['Electrofine Recycling Pvt. Ltd.'],
    documentedOutcomes: 'Execution of bilateral Memorandum of Understanding (MoU); quantitative recycling tonnages not yet audited.',
    primarySources: ['Press release issued 2025-11'],
    independentSources: ['India Chronicle syndicated report'],
    editorialAssessment: 'Collaboration is verifiable through corporate announcement, but physical recycling outputs remain unverified by third-party environmental regulators.'
  },
  {
    id: 'prog-4',
    name: 'Youth Environmental Stewardship Alliance',
    dateOrDuration: 'February 2025 – Present',
    location: 'Pune regional community hubs',
    purpose: 'Engaging collegiate youth in tree protection, plastic reduction, and grassroots acoustic campaigns.',
    activitiesConducted: [
      'Joint youth volunteer recruitment drives',
      'Social media infographics on noise abatement and mental calm',
      'Community clean-up and nature awareness drives'
    ],
    targetParticipants: 'Youth environmental enthusiasts and university volunteers',
    collaborators: ['Ecoserve Development'],
    documentedOutcomes: 'Joint volunteer network formed; ongoing engagement documented on social platforms.',
    primarySources: ['nisargsrishti.org'],
    independentSources: ['NeelWrites portal brief'],
    editorialAssessment: 'Standard youth non-profit partnership. Language must remain neutral without promotional descriptions.'
  }
];

export const SOURCES_DATABASE: SourceItem[] = [
  {
    id: 'SRC-01',
    title: 'Company Master Data: Nisarg Srishti Welfare Foundation (U85300PN2023NPL217884)',
    publisher: 'Ministry of Corporate Affairs (MCA), Government of India / ROC Pune',
    date: '2023-01-11',
    url: 'https://www.mca.gov.in',
    category: 'Government/Registry',
    independent: 'Yes',
    reliability: 'High',
    claimsSupported: 'Legal incorporation date, CIN, Section 8 status, directors (Dr. Garima Kavathekar, Deepali Kayathekar), authorized capital ₹1 Lakh, registered address.',
    verificationStatus: 'VERIFIED',
    limitations: 'Official statutory corporate filing only; does not assess programmatic impact or cultural notability.'
  },
  {
    id: 'SRC-02',
    title: 'Company Intelligence & Financials: Nisarg Srishti Welfare Foundation',
    publisher: 'Tracxn Technologies',
    date: '2025-03-31',
    url: 'https://tracxn.com',
    category: 'Directory/Aggregator',
    independent: 'Yes',
    reliability: 'High',
    claimsSupported: 'Operating status (Active), financial tier (<₹10 Cr revenue), share capital details, AGM records.',
    verificationStatus: 'VERIFIED',
    limitations: 'Automated data aggregation from corporate filings; not editorial secondary reporting.'
  },
  {
    id: 'SRC-03',
    title: 'Corporate Dossier & Director Directory',
    publisher: 'FalconeBiz / Zauba Corp',
    date: '2025-01-27',
    url: 'https://falconebiz.com',
    category: 'Directory/Aggregator',
    independent: 'Yes',
    reliability: 'High',
    claimsSupported: 'DIN numbers, active status, ROC Pune registration details, registered address in Manjari BK.',
    verificationStatus: 'VERIFIED',
    limitations: 'Database record only.'
  },
  {
    id: 'SRC-04',
    title: 'People Fixing the World: Making Cities Feel Quieter',
    publisher: 'BBC World Service / BBC Audio',
    date: '2026-02',
    url: 'https://www.bbc.co.uk/programmes/p04gr521',
    category: 'Broadcast Media',
    independent: 'Yes',
    reliability: 'High',
    claimsSupported: 'Dr. Garima Kavathekar\'s advocacy on urban noise pollution, sound education in India, personal interview remarks.',
    verificationStatus: 'VERIFIED',
    limitations: 'Features the founder Dr. Garima Kavathekar on subject-matter expertise; does not provide comprehensive biographical history of the NSWF corporate entity.'
  },
  {
    id: 'SRC-05',
    title: 'Nisarg Srishti Welfare Foundation Signs MoU with Late Ramchandra Bankar English Primary School, PMC',
    publisher: 'India Chronicle (indiachronicle.in)',
    date: '2026-08',
    url: 'https://indiachronicle.in',
    category: 'PR/Syndicated Portal',
    independent: 'No',
    reliability: 'Low (PR/Sponsored)',
    claimsSupported: 'MoU with Hadapsar municipal school, classes 5-8 noise awareness curriculum, 48 sessions / 15,400 beneficiary claims.',
    verificationStatus: 'PARTIALLY VERIFIED',
    limitations: 'Appears to be a syndicated press release reproduction; lacks editorial independence or investigative fact-checking.'
  },
  {
    id: 'SRC-06',
    title: 'Electrofine Recycling Partners with Nisarg Srishti Welfare Foundation for E-Waste and Environmental Conservation',
    publisher: 'India Chronicle (indiachronicle.in)',
    date: '2025-11',
    url: 'https://indiachronicle.in',
    category: 'PR/Syndicated Portal',
    independent: 'No',
    reliability: 'Low (PR/Sponsored)',
    claimsSupported: 'Partnership between NSWF and Electrofine Recycling Pvt. Ltd.',
    verificationStatus: 'PARTIALLY VERIFIED',
    limitations: 'Press release distribution; cannot establish notability under WP:ORG.'
  },
  {
    id: 'SRC-07',
    title: 'Youth Movement for Sound Environment: Ecoserve Development Signs MoU with Nisarg Srishti',
    publisher: 'NeelWrites (neelwrites.com)',
    date: '2025-02',
    url: 'https://neelwrites.com',
    category: 'PR/Syndicated Portal',
    independent: 'No',
    reliability: 'Low (PR/Sponsored)',
    claimsSupported: 'MoU with youth-led foundation Ecoserve Development.',
    verificationStatus: 'PARTIALLY VERIFIED',
    limitations: 'Self-published or sponsored blog portal.'
  },
  {
    id: 'SRC-08',
    title: 'PDEA College of Engineering Hosts Noise Pollution Sensitization Workshop by NSWF',
    publisher: 'StayFeatured (stayfeatured.com)',
    date: '2025-02',
    url: 'https://stayfeatured.com',
    category: 'PR/Syndicated Portal',
    independent: 'No',
    reliability: 'Low (PR/Sponsored)',
    claimsSupported: 'Event held at PDEA College of Engineering, Manjari.',
    verificationStatus: 'PARTIALLY VERIFIED',
    limitations: 'Lifestyle/PR portal; routine coverage of single event.'
  },
  {
    id: 'SRC-09',
    title: 'Official Portal: Nisarg Srishti Welfare Foundation',
    publisher: 'Nisarg Srishti Welfare Foundation (nisargsrishti.org)',
    date: '2024–2026',
    url: 'https://nisargsrishti.org',
    category: 'Primary/Official',
    independent: 'No',
    reliability: 'Medium (Self-published / Primary)',
    claimsSupported: 'Mission, vision, stated programs, photo galleries, regional office address, foundation day celebration.',
    verificationStatus: 'VERIFIED',
    limitations: 'Primary source per WP:PSTS. Can only be used for uncontroversial self-descriptions; cannot be used to establish notability or verify independent impact.'
  },
  {
    id: 'SRC-10',
    title: 'Social Advocacy Profile: Dr. Garima Kavathekar',
    publisher: 'Bharat Good Times (bharatgoodtimes.com)',
    date: '2025',
    url: 'https://bharatgoodtimes.com',
    category: 'PR/Syndicated Portal',
    independent: 'No',
    reliability: 'Low (PR/Sponsored)',
    claimsSupported: 'TEDx speaker reference, founder profile, public speaking engagements.',
    verificationStatus: 'PARTIALLY VERIFIED',
    limitations: 'Promotional profile piece.'
  }
];

export const NOTABILITY_ASSESSMENT = {
  overallVerdict: 'DOES NOT CURRENTLY MEET NOTABILITY REQUIREMENTS (WP:GNG / WP:ORG)',
  readinessScore: 38, // Out of 100
  criteriaBreakdown: [
    {
      criterion: 'WP:GNG (General Notability Guideline)',
      status: 'Failed',
      analysis: 'Requires "significant coverage" in "reliable sources" that are "independent of the subject". Mainstream independent press coverage is absent. Existing articles are on PR/sponsored syndication portals (India Chronicle, Bharat Good Times, NeelWrites).'
    },
    {
      criterion: 'WP:ORG (Notability: Organizations & Companies)',
      status: 'Failed',
      analysis: 'Organizations must have been the subject of significant, sustained coverage in independent secondary sources. Routine press release regurgitation, local event listings, and corporate database entries do NOT satisfy WP:ORG.'
    },
    {
      criterion: 'WP:CORPDEPTH (Depth of Coverage)',
      status: 'Failed',
      analysis: 'Coverage must provide in-depth analysis of the organization\'s history, impact, structure, and operational outcomes. The only international mention is a BBC Audio interview highlighting the founder\'s subject-matter views, which does not constitute institutional depth on NSWF.'
    },
    {
      criterion: 'WP:RS (Reliable Sources)',
      status: 'Partially Met',
      analysis: 'Government registry (MCA) and BBC Audio are reliable; however, all substantive programmatic descriptions trace back to PR syndication wires or self-published web pages.'
    },
    {
      criterion: 'WP:PSTS (Primary vs Secondary Sourcing)',
      status: 'Failed',
      analysis: 'Over 85% of verifiable factual assertions rely on primary organizational claims (nisargsrishti.org, press releases).'
    },
    {
      criterion: 'WP:COI & WP:PAID Compliance',
      status: 'Warning Required',
      analysis: 'Any draft created on behalf of the organization must strictly disclose conflict of interest per WP:COI and the Wikimedia Foundation Terms of Use (WP:PAID) before submitting to Articles for Creation (AfC).'
    }
  ],
  deletionRisks: [
    'Speedy Deletion under CSD G11 (Unambiguous advertising or promotion) if submitted with promotional tone or unverified impact claims.',
    'Speedy Deletion under CSD A7 (No indication of importance/significance for an organization) if placed in Wikipedia mainspace.',
    'Consensus Deletion at Articles for Deletion (AfD) due to failure of WP:ORG.',
    'Summary decline at Articles for Creation (AfC) citing "This submission\'s references do not show that the subject qualifies for a Wikipedia article."'
  ],
  requiredNextSteps: [
    'Do NOT publish directly to English Wikipedia mainspace (Article space).',
    'Develop legitimate independent coverage in reputable national/regional newspapers (e.g. Times of India, Indian Express, Sakal, The Hindu, Hindustan Times, Pune Mirror) covering investigative or substantive analytical features of NSWF programs.',
    'Retain the draft in user workspace / Sandbox or submit via the Articles for Creation (AfC) queue with full COI disclosure once 2-3 significant independent news articles are published.',
    'Replace all self-reported claims (15,400 beneficiaries, 48 sessions) with neutral attribution or wait for independent municipal/academic audits.'
  ]
};

export const MEDIA_RECORDS: MediaItem[] = [
  {
    id: 'MED-01',
    title: 'NSWF Official Logo & Insignia',
    url: 'https://nisargsrishti.org/assets/logo.png',
    originalSource: 'Nisarg Srishti Welfare Foundation website',
    date: '2023',
    eventOrActivity: 'Brand identity / Logo',
    copyrightHolder: 'Nisarg Srishti Welfare Foundation',
    licenseStatus: 'All Rights Reserved (Copyrighted)',
    commonsSuitability: 'Not Suitable (Copyrighted)',
    permissionRequirements: 'Cannot be uploaded to Wikimedia Commons unless released under CC-BY-SA 4.0 or CC0 via official VRT/OTRS ticket. On en.wikipedia.org, can only be used under strict Fair Use (NFUR) for the main infobox of a notable article.',
    documentationNotes: 'Simple geometric shapes might pass threshold of originality, but graphic combination retains copyright.'
  },
  {
    id: 'MED-02',
    title: 'School Acoustic Workshop Session Photograph (Hadapsar)',
    url: 'https://nisargsrishti.org/gallery/school-session-1.jpg',
    originalSource: 'Official Event Documentation',
    date: 'August 2026',
    eventOrActivity: 'Noise pollution awareness presentation to students',
    copyrightHolder: 'Nisarg Srishti Welfare Foundation / Event Photographer',
    licenseStatus: 'All Rights Reserved',
    commonsSuitability: 'Requires OTRS/VRT Permission',
    permissionRequirements: 'Photographer or foundation representative must send email authorization to permissions-commons@wikimedia.org using standard CC-BY-SA 4.0 license declaration.',
    documentationNotes: 'Depicts minors; requires compliance with Wikimedia Commons child privacy guidelines.'
  },
  {
    id: 'MED-03',
    title: 'Ganesh Utsav Acoustic Monitoring Volunteer Field Team',
    url: 'https://nisargsrishti.org/gallery/ganesh-monitoring.jpg',
    originalSource: 'Field Documentation',
    date: 'September 2025',
    eventOrActivity: 'Volunteers holding sound level meter in Pune street',
    copyrightHolder: 'Nisarg Srishti Welfare Foundation',
    licenseStatus: 'All Rights Reserved',
    commonsSuitability: 'Requires OTRS/VRT Permission',
    permissionRequirements: 'Requires verified copyright holder release via Wikimedia VRT.',
    documentationNotes: 'Good documentary utility if legally released under Creative Commons.'
  },
  {
    id: 'MED-04',
    title: 'BBC Audio Episode Graphic / Broadcast Transcript',
    url: 'https://www.bbc.co.uk/programmes/p04gr521',
    originalSource: 'BBC World Service',
    date: 'February 2026',
    eventOrActivity: 'Broadcast interview',
    copyrightHolder: 'British Broadcasting Corporation (BBC)',
    licenseStatus: 'Strict Copyright (BBC)',
    commonsSuitability: 'Not Suitable (Copyrighted)',
    permissionRequirements: 'Strictly prohibited on Commons; non-free audio snippets subject to extremely narrow fair use guidelines.',
    documentationNotes: 'Can only be cited as a text reference with URL.'
  }
];

export const MISSING_INFO_CHECKLIST = [
  {
    item: 'NITI Aayog NGO Darpan Registration ID',
    importance: 'High',
    description: 'Statutory government portal identification for Indian NGOs receiving grants or CSR partnerships.',
    status: 'Pending verification on ngodarpan.gov.in'
  },
  {
    item: 'Income Tax Exemption Status (Section 12A / 80G)',
    importance: 'High',
    description: 'Whether donations qualify for tax deductions; common marker of verified non-profit governance.',
    status: 'Unconfirmed in public domain'
  },
  {
    item: 'Independent Metric Audit for Beneficiary Numbers',
    importance: 'Medium',
    description: 'Verification of the claimed "15,400+ direct beneficiaries" across 48 sessions by participating schools or education department.',
    status: 'Self-reported only'
  },
  {
    item: 'Ganesh Utsav Decibel Data Report',
    importance: 'Medium',
    description: 'Formal whitepaper or published decibel data findings from the September 2025 monitoring drive.',
    status: 'Informal social posts only'
  },
  {
    item: 'Full Official List of Governing Board Members',
    importance: 'Low',
    description: 'Names of advisory board or patrons mentioned on website beyond the two statutory directors (Dr. Garima Kavathekar & Deepali Kayathekar).',
    status: 'Advisory names not confirmed in MCA filings'
  }
];
