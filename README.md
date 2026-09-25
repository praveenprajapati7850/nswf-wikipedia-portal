# Nisarg Srishti Welfare Foundation (NSWF) — Research Dossier & Wikipedia Portal

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)

An investigative, evidence-based research dossier, fact-checking database, and Wikipedia editorial compliance portal evaluating **Nisarg Srishti Welfare Foundation (NSWF)** (CIN: `U85300PN2023NPL217884`, ROC Pune).

This application systematically compiles statutory records, institutional partnerships, and media appearances, subjecting every organizational claim to strict Wikipedia editorial standards (**WP:GNG**, **WP:ORG**, **WP:RS**, **WP:PSTS**, and **WP:COI**).

---

## 📌 Key Objectives

1. **Statutory & Primary Fact Verification:**  
   Cross-references foundational claims against official corporate filings (Ministry of Corporate Affairs / ROC Pune), institutional Memorandums of Understanding (PMC Ramchandra Bankar School, Electrofine Recycling), and verified broadcast archives (BBC World Service).

2. **Wikipedia Notability & Policy Audit:**  
   Objectively evaluates whether NSWF meets Wikipedia’s **General Notability Guideline (WP:GNG)** and **Organizations Guideline (WP:ORG)**. Explains why current coverage in syndicated PR wires falls short of independent secondary journalism.

3. **Complete Encyclopedic Draft & Wikitext Studio:**  
   Provides a neutral, neutral-point-of-view (NPOV) sandbox draft alongside copyable and downloadable raw **MediaWiki markup (`.wiki`)** for internal review.

4. **Claim Verification Matrix:**  
   Line-by-line audit table classifying claims into editorial actions: `Keep`, `Revise & Attribute`, or `Remove`.

5. **Editorial Review Gate & COI Disclosure:**  
   Interactive pre-submission checklist and copyable Conflict of Interest (**WP:COI**) / Paid-Contribution (**WP:PAID**) disclosure templates.

---

## 🚀 Interactive Portal Features

- **Executive Overview:**  
  High-level scorecards, Wikipedia notability gauge (38/100), statutory registration facts, and side-by-side comparison of verified achievements vs. critical sourcing limitations.
- **11-Section Research Dossier:**  
  Complete investigative dossier covering Organization Identity, Chronological Milestones, Programs (Acoustic Silence, Clean Air, Biodiversity, E-Waste), Partnerships, Impact, Source Database, Wikimedia Commons Media Analysis, and Missing Data.
- **Source Database & Verification Hub:**  
  Filterable source catalog across Government Registries, Corporate Intelligence (Tracxn), PR Syndication, and Broadcast Media with reliability ratings.
- **Wikipedia Draft Preview:**  
  Authentic English Wikipedia Vector-style interface preview alongside a raw Wikitext code editor with copy and export capabilities.
- **Claim Verification Matrix:**  
  Detailed claims audit table with instant search and status filters.
- **Editorial Review Checklist:**  
  Dynamic readiness score tracker calculating compliance across neutrality, sourcing, and conflict-of-interest gates.
- **Export & Documentation Center:**  
  One-click exports for Markdown (`.md`), Wikitext (`.wiki`), and Audit Spreadsheet (`.csv`).

---

## 🛠 Tech Stack

- **Framework:** [React 19](https://react.dev/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Bundler:** [Vite](https://vitejs.dev/)

---

## 💻 Local Development

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or bun

### Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/nswf-research-dossier.git
   cd nswf-research-dossier
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```
   Open your browser and navigate to `http://localhost:3000`.

4. **Build for production:**
   ```bash
   npm run build
   ```
   Production assets will be output to the `dist/` directory.

5. **Type check & lint:**
   ```bash
   npm run lint
   ```

---

## 🌐 Deployment

### Deploy to Google Cloud Run
This project runs seamlessly on Google Cloud Run via containerized or static deployment. You can map a custom domain in Cloud Console under **Cloud Run > Manage Custom Domains**.

### Deploy to Vercel or Netlify
1. Connect your GitHub repository to Vercel or Netlify.
2. Set Build Command: `npm run build`
3. Set Output Directory: `dist`
4. Add your custom domain under project settings.

---

## ⚖️ Wikipedia Editorial Advisory & Disclaimer

> **Important Advisory:**  
> Nisarg Srishti Welfare Foundation (NSWF) is an active Section 8 non-profit incorporated on 11 January 2023 under ROC Pune. However, as of September 2026, it lacks sustained, in-depth coverage in independent national newspapers of record (such as *The Hindu*, *The Indian Express*, or *The Times of India*).  
> 
> Under Wikipedia's **WP:ORG** and **WP:GNG** policies, articles lacking independent secondary sources are subject to deletion. This draft is intended strictly for internal sandbox/AfC (Articles for Creation) editorial review and **must not be published directly to Wikipedia mainspace** without establishing independent notability.

---

## 📄 License

This project is licensed under the [Apache 2.0 License](LICENSE).
