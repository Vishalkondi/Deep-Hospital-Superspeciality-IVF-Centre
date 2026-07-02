# CLAUDE.md — Deep Superspeciality Hospital & Solapur Test Tube Baby Centre

## Mission

Build the **world's best hospital website** for a superspeciality centre in Solapur, Maharashtra. This is a high-trust, high-stakes digital presence for patients seeking advanced critical care, surgical care, IVF, fertility treatments, and urology services. Every design and content decision must reinforce three brand pillars:

> **Expertise. Technology. Compassion.**

---

## Business Overview

**Name:** Deep Superspeciality Hospital And Solapur Test Tube Baby Centre  
**Tagline:** Healing with expertise, technology & compassion  
**Location:** Bhavani Peth, Solapur, Maharashtra  
**Phone:** 0217-2727224  
**Google Maps:** https://maps.app.goo.gl/qcX5HNgiiW78Fgzc7

### Core Specialities

1. **Advanced Critical & Surgical Care** — ICU, trauma, emergency surgery, post-operative care
2. **IVF & Assisted Reproduction** — Test tube baby, embryo transfer, fertility treatments
3. **Male & Female Fertility** — Hormonal evaluation, semen analysis, egg freezing, PCOS management
4. **Urology Care** — Kidney stones, prostate, urinary disorders, minimally invasive procedures

### Target Audience
- Couples struggling with infertility across Maharashtra (Solapur, Pune, Latur belt)
- Patients needing critical care or planned surgery in Tier-2 city with hospital-grade infrastructure
- Families seeking trusted local specialists without travelling to Mumbai/Pune

---

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS + custom CSS variables
- **Language:** TypeScript
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Fonts:** Google Fonts (specify below)
- **Maps:** Google Maps Embed API (use the provided link)
- **Forms:** React Hook Form + Zod validation
- **Deployment:** Vercel-ready (include `vercel.json` if needed)

---

## Design System

### Palette
```
--deep-navy:     #0A1628   /* Primary dark — trust, depth */
--medical-blue:  #1B4FD8   /* CTA buttons, links, highlights */
--teal-heal:     #0D9488   /* IVF/fertility accent — life, growth */
--warm-white:    #F8FAFC   /* Page backgrounds */
--soft-grey:     #E2E8F0   /* Cards, dividers */
--text-primary:  #0F172A   /* Body copy */
--text-muted:    #64748B   /* Labels, captions */
--gold-trust:    #D97706   /* Awards, badges, trust signals */
--emergency-red: #DC2626   /* Emergency CTA only */
```

### Typography
```
Display (headings H1–H2): "Playfair Display" — gravitas, medical authority
Body (paragraphs, UI):    "Inter" — clean, clinical precision
Accent (labels, tags):    "Inter" 600 weight, uppercase, tracked
```

### Design Signature
A **breathing hero** — the homepage opens with a full-width dark-navy section where a large typographic headline ("New Life Begins Here") slowly fades in alongside a soft ambient pulse animation (CSS keyframe, no video needed). This single animated moment sets emotional tone before clinical information appears. Everything else is restrained and precise.

### Rules
- Border radius: `8px` for cards, `4px` for buttons — clinical, not playful
- Shadows: subtle `0 1px 3px rgba(0,0,0,0.08)` — never heavy drop shadows
- Motion: scroll-triggered fade-ups only (Framer Motion `whileInView`), `prefers-reduced-motion` respected
- Images: Use placeholder images via `https://picsum.photos` with medical/hospital seeds during build; leave clear `// TODO: Replace with real photos` comments

---

## Site Architecture — Pages & Sections

### 1. `/` — Homepage

**Sections (in order):**

1. **Sticky Navbar**
   - Logo: "Deep Hospital" wordmark left-aligned
   - Nav links: Home | About | Services | IVF Centre | Doctors | Patient Info | Contact
   - Right: `📞 0217-2727224` pill + `Book Appointment` CTA button (medical-blue)
   - Mobile: hamburger menu with slide-in drawer
   - Scroll behavior: white background with shadow after 80px scroll

2. **Hero Section**
   - Dark navy background
   - H1: "Healing with Expertise,\nTechnology & Compassion"
   - Subtext: "Solapur's premier destination for Advanced Critical Care, IVF & Urology"
   - Two CTAs: `Book Appointment` (filled blue) + `Explore Services` (ghost white)
   - Ambient breathing circle animation behind text (CSS, teal-heal color, 4s loop)
   - Bottom: 3 quick-trust stats in a horizontal band: `15+ Years Experience | 5000+ Successful IVF Cycles | 24/7 Critical Care`

3. **Services Overview** — 4 icon cards
   - Advanced Critical & Surgical Care
   - IVF & Test Tube Baby
   - Fertility (Male & Female)
   - Urology Care
   - Each card: icon + title + 2-line description + "Learn More →" link
   - Hover: teal-heal left border animation

4. **Why Choose Deep Hospital** — 3-column trust section
   - `🏥 Advanced Infrastructure` — Modern ICU, operation theatres, diagnostics
   - `👨‍⚕️ Expert Specialists` — Experienced surgeons, embryologists, urologists
   - `❤️ Compassionate Care` — Patient-first approach, Marathi/Hindi communication

5. **IVF Spotlight Section** — Full-width teal-to-navy gradient
   - Headline: "Begin Your Journey to Parenthood"
   - Short paragraph about IVF success rates and personalised care
   - CTA: `Talk to Our Fertility Expert`
   - Right side: animated counter showing success stat (e.g. "5000+ Babies Born")

6. **Testimonials** — Horizontal scroll carousel (3 cards visible desktop, 1 mobile)
   - Patient name (anonymised: "Mrs. P., Solapur"), treatment type, quote, star rating
   - 6 dummy testimonials across IVF, surgery, urology

7. **Doctors Preview** — 3 doctor cards with photo placeholder, name, designation, speciality
   - CTA: `Meet All Doctors`

8. **Emergency Banner** — Red background strip
   - "24/7 Emergency Care Available"
   - Big phone number: `0217-2727224`
   - `Get Directions` button linking to Google Maps

9. **Footer**
   - 4 columns: Logo+tagline | Quick Links | Services | Contact+Hours
   - Hours: Mon–Sat 9AM–8PM, Emergency 24/7
   - Google Maps embed (iframe using provided URL)
   - Social media icons row: Instagram → `https://www.instagram.com/deepsuperspecialityhospital/`
   - Copyright: © 2025 Deep Superspeciality Hospital & Solapur Test Tube Baby Centre. All rights reserved.

---

### 2. `/about` — About Us

**Sections:**
1. Page hero: "About Deep Superspeciality Hospital" — navy background, breadcrumb
2. Our Story — Founding, mission, growth in Solapur
3. Vision & Mission cards
4. Infrastructure highlights: ICU beds count, OT count, equipment callouts
5. Accreditations / Awards section (placeholder badges)
6. Location map embed + address block

---

### 3. `/services` — Services Overview

**Sections:**
1. Page hero with services grid overview
2. Four detailed service blocks (expandable or anchor-linked):
   - **Critical & Surgical Care**: ICU, ventilator support, emergency surgery, trauma care
   - **IVF & ART**: IVF, ICSI, IUI, embryo freezing, egg donation
   - **Fertility**: Female (PCOS, blocked tubes, hormonal) + Male (azoospermia, low motility)
   - **Urology**: Kidney stones (PCNL/RIRS), prostate (TURP), laparoscopic urology
3. Each block: heading, icon, 4–6 bullet points, `Book Consultation` CTA

---

### 4. `/ivf-centre` — IVF & Fertility Centre (Dedicated Page)

This is a high-priority page — IVF is a key revenue and emotional differentiator.

**Sections:**
1. Hero: "Solapur Test Tube Baby Centre — Hope, Science & Life"
2. IVF Process Steps (numbered, horizontal timeline on desktop):
   - Initial Consultation → Ovarian Stimulation → Egg Retrieval → Fertilisation → Embryo Transfer → Pregnancy Test
3. Treatments Offered: IVF, ICSI, IUI, Frozen Embryo Transfer, Egg/Sperm Donation, Surrogacy Info
4. Success Rate section with animated counter
5. Lab & Technology section — embryology lab highlights
6. Patient FAQ accordion (8–10 common IVF questions)
7. CTA section: "Take the First Step" — appointment form

---

### 5. `/doctors` — Our Medical Team

**Sections:**
1. Page hero
2. Filter tabs: All | Surgeons | Fertility Specialists | Urologists | Critical Care
3. Doctor cards grid (3 per row desktop, 1 mobile):
   - Photo placeholder, Name, Qualification (MBBS, MS, MCh etc.), Speciality, Experience badge, `View Profile` button
4. Individual doctor modal or subpage `/doctors/[slug]`:
   - Full bio, education, publications, patient reviews

**Real Doctors (use exact details below — no placeholders):**

```ts
// In lib/constants.ts — DOCTORS array
{
  slug: "dr-archana-shah",
  name: "Dr. Archana S. Shah",
  qualifications: "MBBS, MD (OBG)",
  designation: "Obstetrician, Gynaecologist & Infertility Specialist",
  speciality: "Obstetrics & Gynaecology",
  department: "Fertility Specialists",
  experience: "Senior Consultant",
  bio: "Dr. Archana S. Shah is a highly rated and experienced Gynecologist, Obstetrician, and Infertility Specialist practicing in Solapur. She specializes in high-risk pregnancies, cosmetic gynecology, and test-tube baby (IVF) treatments. She is the lead specialist at the Solapur Test Tube Baby Centre, guiding couples through their fertility journey with expertise and compassion.",
  highlights: [
    "High-Risk Pregnancy Management",
    "IVF & Test Tube Baby Treatments",
    "Cosmetic Gynaecology",
    "Infertility Evaluation & Treatment",
    "Laparoscopic Gynaecological Surgery"
  ]
},
{
  slug: "dr-harshit-shah",
  name: "Dr. Harshit Shah",
  qualifications: "MBBS, MS (General Surgery), DNB (Urology / Genitourinary Surgery)",
  designation: "Senior Urologist & Head of Urology Division",
  speciality: "Urology",
  department: "Urologists",
  experience: "26+ Years",
  bio: "Dr. Harshit Shah is a highly experienced Urologist with over 26 years in medical practice and 10+ years leading the Urology Division at Deep Superspeciality Hospital. He holds an MBBS, MS in General Surgery, and DNB in Urology (Genitourinary Surgery). He is an expert in advanced endourological procedures and handles complex cases with precision.",
  highlights: [
    "Advanced Endourology (PCNL, RIRS, URS)",
    "Kidney Stone Management",
    "Prostate Surgery (TURP, HoLEP)",
    "Male Infertility Treatment",
    "Uro-Oncology (Urinary Tract Cancers)",
    "Laparoscopic Urology"
  ]
},
{
  slug: "dr-sonia-gandhi",
  name: "Dr. Sonia Gandhi",
  qualifications: "MBBS, MD (Anaesthesiology)",
  designation: "Consultant Anaesthetist",
  speciality: "Anaesthesiology & Pain Management",
  department: "Critical Care",
  experience: "Consultant",
  bio: "Dr. Sonia Gandhi is a skilled Anaesthetist who works closely with the surgical and maternity teams at Deep Superspeciality Hospital. She ensures safe, pain-free experiences for patients undergoing surgeries, deliveries, and interventional procedures.",
  highlights: [
    "General & Regional Anaesthesia",
    "Obstetric Anaesthesia (Epidural, Spinal)",
    "Pain Management",
    "Critical Care Anaesthesia",
    "Post-Operative Pain Protocols"
  ]
}
```

**Individual doctor pages `/doctors/[slug]`** must include:
- Full bio paragraph
- Qualifications + Experience prominently displayed
- Highlights/Specialties as a styled bullet list
- A "Book Appointment with Dr. [Name]" CTA pre-filling the doctor field in the appointment form

---

### 6. `/patient-info` — Patient Information Hub

**Sections:**
1. Appointment booking process (3 steps)
2. OPD timings table
3. Insurance / CGHS / ESI acceptance info (placeholder)
4. Patient rights & responsibilities
5. Pre-surgery / Pre-IVF checklist downloads (placeholder PDF links)
6. Visiting hours and ward info
7. FAQ accordion (general hospital questions)

---

### 7. `/contact` — Contact & Location

**Sections:**
1. 3-column layout:
   - Address card with Google Maps link
   - Phone / WhatsApp card
   - Email card (placeholder: info@deephospital.in)
2. Full-width Google Maps embed
3. Contact form: Name, Phone, Email, Department (dropdown), Message, Submit
   - Form validation with React Hook Form + Zod
   - Success toast on submit
4. Emergency contact prominently at bottom

---

### 8. `/appointment` — Book Appointment

- Dedicated appointment page (also reachable from CTA buttons site-wide)
- Multi-step form:
  - Step 1: Personal details (Name, Age, Phone, Email)
  - Step 2: Select Department + Preferred Doctor (dropdown)
  - Step 3: Date picker + Time slot + Message
  - Step 4: Confirmation summary
- Progress bar across top
- On submit: show confirmation message with reference number (mock)

---

## Components to Build

```
/components
  /layout
    Navbar.tsx
    Footer.tsx
    MobileMenu.tsx
  /ui
    Button.tsx          — variants: primary, ghost, emergency, outline
    Card.tsx
    Badge.tsx
    Accordion.tsx       — for FAQs
    Carousel.tsx        — for testimonials
    CounterAnimation.tsx — animated number counter
    SectionHeader.tsx   — consistent section heading style
    MapEmbed.tsx        — wraps Google Maps iframe
  /forms
    AppointmentForm.tsx
    ContactForm.tsx
  /sections
    HeroSection.tsx
    ServicesGrid.tsx
    TestimonialsSection.tsx
    DoctorsGrid.tsx
    IVFProcess.tsx
    EmergencyBanner.tsx
    StatsBar.tsx
```

---

## SEO & Meta

Each page must have:
```tsx
export const metadata: Metadata = {
  title: "Deep Superspeciality Hospital | [Page Title] | Solapur",
  description: "[Page-specific description]",
  keywords: ["IVF Solapur", "Test Tube Baby Centre Solapur", "hospital Solapur", ...],
  openGraph: { ... }
}
```

Homepage title: `Deep Superspeciality Hospital & Solapur Test Tube Baby Centre | Expert Care in Solapur`

Include `sitemap.xml` and `robots.txt`.

---

## Accessibility & Performance

- All images: `alt` text describing content
- All interactive elements: keyboard navigable, visible focus ring
- ARIA labels on icon-only buttons
- `prefers-reduced-motion` on all animations
- Lazy load images below the fold
- Font preload for Playfair Display and Inter
- Target Lighthouse score: 90+ across all categories

---

## File Structure

```
/
├── app/
│   ├── layout.tsx              # Root layout with Navbar + Footer
│   ├── page.tsx                # Homepage
│   ├── about/page.tsx
│   ├── services/page.tsx
│   ├── ivf-centre/page.tsx
│   ├── doctors/
│   │   ├── page.tsx
│   │   └── [slug]/page.tsx
│   ├── patient-info/page.tsx
│   ├── contact/page.tsx
│   └── appointment/page.tsx
├── components/                 # (see above)
├── lib/
│   ├── constants.ts            # NAV_LINKS, SERVICES, DOCTORS, TESTIMONIALS data
│   └── utils.ts
├── public/
│   └── images/                 # Placeholder or real images
├── styles/
│   └── globals.css             # CSS variables + base styles
├── tailwind.config.ts
├── next.config.ts
└── CLAUDE.md                   # This file
```

---

## Content Data File

Create `lib/constants.ts` with all static data arrays:
- `SERVICES[]` — 4 service objects with icon, title, description, slug
- `DOCTORS[]` — 3 real doctors (Dr. Archana Shah, Dr. Harshit Shah, Dr. Sonia Gandhi) — full data defined in the `/doctors` section above
- `TESTIMONIALS[]` — 6 patient testimonials
- `IVF_STEPS[]` — 6 process steps
- `FAQS[]` — 10 IVF FAQs + 8 general FAQs
- `NAV_LINKS[]` — navigation items with href and label
- `HOSPITAL_INFO` — single object: `{ name, tagline, address, phone, phoneHref, email, mapUrl, mapEmbed, instagram: "https://www.instagram.com/deepsuperspecialityhospital/", hours: { opd, emergency } }`

---

## Quality Bar

This website must look and feel **indistinguishable from a private corporate hospital in Mumbai or Pune** — professional, modern, and emotionally reassuring. A patient arriving from a rural area near Solapur should feel they are accessing world-class care. Every pixel, every word, every interaction must reinforce that trust.

**Do not ship:**
- Generic blue medical stock photos without alt context
- Lorem ipsum text anywhere
- Broken responsive layouts below 375px
- Forms without validation
- Missing hover states on interactive elements

**Do ship:**
- A homepage that makes someone feel hope and confidence in 3 seconds
- Clean, fast, mobile-first experience
- Consistent spacing using Tailwind's spacing scale
- A site that a doctor would be proud to show patients

---

## Start Here

1. Scaffold Next.js 14 project with TypeScript + Tailwind
2. Install dependencies: `framer-motion`, `lucide-react`, `react-hook-form`, `zod`, `@hookform/resolvers`
3. Set up `globals.css` with all CSS variables from the design system
4. Create `lib/constants.ts` with all data
5. Build shared components (Navbar, Footer, Button, Card)
6. Build Homepage end-to-end first
7. Then build remaining pages in order: About → Services → IVF Centre → Doctors → Contact → Appointment → Patient Info
8. Add metadata to every page
9. Final pass: accessibility, motion preferences, mobile QA
