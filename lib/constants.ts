export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "IVF Centre", href: "/ivf-centre" },
  { label: "Doctors", href: "/doctors" },
  { label: "Patient Info", href: "/patient-info" },
  { label: "Contact", href: "/contact" },
];

export const HOSPITAL_INFO = {
  name: "Deep Superspeciality Hospital",
  fullName: "Deep Superspeciality Hospital & Solapur Test Tube Baby Centre",
  tagline: "Healing with expertise, technology & compassion",
  address: "Bhavani Peth, Solapur, Maharashtra",
  phone: "0217-2727224",
  phoneHref: "tel:02172727224",
  // TODO: 0217-2727224 is a landline (Solapur STD code) and likely can't receive WhatsApp messages.
  // Replace with a real WhatsApp-enabled mobile number, e.g. "919876543210" (country code + number, no symbols).
  whatsappNumber: "919876543210",
  whatsapp: "https://wa.me/919876543210",
  email: "info@deephospital.in",
  mapUrl: "https://maps.app.goo.gl/qcX5HNgiiW78Fgzc7",
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.4!2d75.9!3d17.69!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc5dc3eed4db47d%3A0x5cc0619282e11b2b!2sBhavani%20Peth%2C%20Solapur%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",
  instagram: "https://www.instagram.com/deepsuperspecialityhospital/",
  hours: {
    opd: "Mon–Sat: 9:00 AM – 8:00 PM",
    emergency: "24/7 Emergency Care",
    sunday: "Sunday: Emergency Only",
  },
};

export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  icon: string;
  description: string;
  longDescription: string;
  features: string[];
  cta: string;
}

export interface Treatment {
  name: string;
  desc: string;
  ideal: string;
  image: string;
}

export const IVF_TREATMENTS: Treatment[] = [
  {
    name: "IVF (In Vitro Fertilisation)",
    desc: "The gold-standard fertility treatment. Eggs and sperm are combined in our lab and resulting embryos are transferred to the uterus.",
    ideal: "Blocked tubes, unexplained infertility, failed IUI cycles",
    image: "/images/ivf/ivf-injection-2.jpg",
  },
  {
    name: "ICSI (Intracytoplasmic Sperm Injection)",
    desc: "A single healthy sperm is directly injected into the egg. Used for severe male infertility or when standard IVF fertilisation fails.",
    ideal: "Low sperm count, poor motility, previous fertilisation failure",
    image: "/images/ivf/ivf-injection-1.jpg",
  },
  {
    name: "IUI (Intrauterine Insemination)",
    desc: "Prepared sperm is placed directly in the uterus around ovulation time. A simpler, lower-cost first-line fertility treatment.",
    ideal: "Mild male infertility, cervical factor, unexplained infertility",
    image: "/images/ivf/ivf-petri-droplets.jpg",
  },
  {
    name: "Frozen Embryo Transfer (FET)",
    desc: "Cryopreserved embryos from a previous IVF cycle are thawed and transferred. Excellent success rates with vitrification technology.",
    ideal: "Remaining embryos from IVF cycle, patients needing uterine rest",
    image: "/images/ivf/ivf-embryo-cluster.jpg",
  },
  {
    name: "Egg & Sperm Donation",
    desc: "Where one or both partners cannot produce viable gametes, donor eggs or sperm are used to achieve pregnancy.",
    ideal: "Premature ovarian failure, severe male factor, age-related infertility",
    image: "/images/ivf/ivf-dna-helix.jpg",
  },
  {
    name: "Egg Freezing",
    desc: "Mature eggs are vitrified for future use. Allows women to preserve fertility before cancer treatment or for social reasons.",
    ideal: "Cancer patients, women delaying pregnancy, fertility preservation",
    image: "/images/ivf/ivf-test-tubes.jpg",
  },
];

export const SERVICES: Service[] = [
  {
    slug: "critical-surgical-care",
    title: "Advanced Critical & Surgical Care",
    shortTitle: "Critical Care",
    icon: "activity",
    description:
      "Round-the-clock ICU, trauma management, and advanced surgical procedures with a dedicated team of specialists.",
    longDescription:
      "Our Critical and Surgical Care unit is equipped with state-of-the-art ICU facilities, advanced monitoring systems, and experienced intensivists available 24/7. We handle the most complex cases with precision and speed.",
    features: [
      "Advanced ICU with ventilator support",
      "Emergency trauma surgery",
      "Laparoscopic and minimally invasive surgery",
      "Post-operative intensive monitoring",
      "Multi-specialty surgical team",
      "24/7 emergency response",
    ],
    cta: "Book Surgical Consultation",
  },
  {
    slug: "ivf-test-tube-baby",
    title: "IVF & Test Tube Baby",
    shortTitle: "IVF & ART",
    icon: "heart",
    description:
      "Solapur's premier fertility centre offering IVF, ICSI, IUI, and complete assisted reproductive treatments.",
    longDescription:
      "At the Solapur Test Tube Baby Centre, we combine cutting-edge embryology lab technology with compassionate, personalised care. Our fertility specialists guide couples through every step of their parenthood journey.",
    features: [
      "In Vitro Fertilisation (IVF)",
      "Intracytoplasmic Sperm Injection (ICSI)",
      "Intrauterine Insemination (IUI)",
      "Frozen Embryo Transfer (FET)",
      "Egg & Sperm Donation",
      "Embryo cryopreservation",
    ],
    cta: "Talk to Fertility Expert",
  },
  {
    slug: "fertility",
    title: "Fertility (Male & Female)",
    shortTitle: "Fertility",
    icon: "users",
    description:
      "Comprehensive fertility evaluation and treatment for both male and female reproductive health challenges.",
    longDescription:
      "Our fertility programme addresses the full spectrum of reproductive health concerns. From hormonal imbalances to structural issues, we provide targeted, evidence-based treatment for both partners.",
    features: [
      "Female hormonal evaluation",
      "PCOS management & treatment",
      "Blocked tube diagnosis & correction",
      "Male semen analysis & treatment",
      "Azoospermia & low motility care",
      "Egg freezing & fertility preservation",
    ],
    cta: "Book Fertility Assessment",
  },
  {
    slug: "urology",
    title: "Urology Care",
    shortTitle: "Urology",
    icon: "shield",
    description:
      "Expert urological care including kidney stones, prostate conditions, and minimally invasive urological procedures.",
    longDescription:
      "Our Urology Division, led by Dr. Harshit Shah with 26+ years of experience, offers comprehensive management of all urological conditions using the latest endourological and laparoscopic techniques.",
    features: [
      "Kidney stone treatment (PCNL, RIRS, URS)",
      "Prostate surgery (TURP, HoLEP)",
      "Laparoscopic urology",
      "Male infertility treatment",
      "Uro-oncology care",
      "Urinary tract disorder management",
    ],
    cta: "Book Urology Consultation",
  },
];

export interface Doctor {
  slug: string;
  name: string;
  initials: string;
  qualifications: string;
  designation: string;
  speciality: string;
  department: string;
  experience: string;
  bio: string;
  highlights: string[];
  // No real headshots supplied yet — DoctorAvatar renders an initials monogram
  // when imageUrl is left undefined. Set imageUrl once real photos are available.
  imageUrl?: string;
}

export const DOCTORS: Doctor[] = [
  {
    slug: "dr-archana-shah",
    name: "Dr. Archana S. Shah",
    initials: "AS",
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
      "Laparoscopic Gynaecological Surgery",
    ],
  },
  {
    slug: "dr-harshit-shah",
    name: "Dr. Harshit Shah",
    initials: "HS",
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
      "Laparoscopic Urology",
    ],
  },
  {
    slug: "dr-sonia-gandhi",
    name: "Dr. Sonia Gandhi",
    initials: "SG",
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
      "Post-Operative Pain Protocols",
    ],
  },
];

export const TESTIMONIALS = [
  {
    id: 1,
    name: "Mrs. P., Solapur",
    treatment: "IVF Treatment",
    quote:
      "After years of struggle, Dr. Archana Shah and the IVF team gave us the greatest gift — our baby girl. The care and support throughout the process was exceptional. We felt heard and guided every step of the way.",
    rating: 5,
  },
  {
    id: 2,
    name: "Mr. & Mrs. K., Latur",
    treatment: "IVF & Fertility",
    quote:
      "We had tried other centres before coming to Deep Hospital. The difference in personalised care and communication was remarkable. Today we are proud parents of twin boys, thanks to this wonderful team.",
    rating: 5,
  },
  {
    id: 3,
    name: "Mr. D., Pune",
    treatment: "Kidney Stone Surgery (PCNL)",
    quote:
      "Dr. Harshit Shah performed my kidney stone procedure with exceptional skill. Minimal pain, fast recovery, and the staff was incredibly attentive. I was back home within 2 days feeling completely fine.",
    rating: 5,
  },
  {
    id: 4,
    name: "Mrs. S., Solapur",
    treatment: "High-Risk Pregnancy",
    quote:
      "My pregnancy was high-risk and I was terrified. Dr. Archana Shah monitored me so closely and I delivered a healthy baby boy. I cannot thank the team enough for their constant reassurance and expert care.",
    rating: 5,
  },
  {
    id: 5,
    name: "Mr. R., Osmanabad",
    treatment: "Prostate Surgery (TURP)",
    quote:
      "Dr. Harshit Shah explained my condition clearly and the procedure went smoothly. The ICU team under Dr. Sonia Gandhi ensured I felt no pain. The entire hospital staff treated me like family.",
    rating: 5,
  },
  {
    id: 6,
    name: "Mrs. N., Barshi",
    treatment: "PCOS & Fertility Treatment",
    quote:
      "I was diagnosed with severe PCOS and told I might never conceive naturally. After 8 months of treatment at Deep Hospital, I conceived naturally. Dr. Archana Shah's approach is both scientific and deeply human.",
    rating: 5,
  },
];

export const IVF_STEPS = [
  {
    step: 1,
    title: "Initial Consultation",
    description:
      "Comprehensive evaluation of both partners — medical history, hormonal tests, semen analysis, and ultrasound assessment to design your personalised treatment plan.",
    icon: "clipboard-list",
  },
  {
    step: 2,
    title: "Ovarian Stimulation",
    description:
      "Carefully monitored hormone injections stimulate the ovaries to produce multiple eggs. Regular ultrasound and blood tests ensure optimal response and timing.",
    icon: "activity",
  },
  {
    step: 3,
    title: "Egg Retrieval",
    description:
      "A minimally invasive, ultrasound-guided procedure performed under sedation to collect mature eggs from the ovaries. Typically takes 20–30 minutes.",
    icon: "circle-dot",
  },
  {
    step: 4,
    title: "Fertilisation",
    description:
      "Eggs are fertilised with prepared sperm in our state-of-the-art embryology lab using IVF or ICSI. Embryo development is monitored over 3–5 days.",
    icon: "dna",
  },
  {
    step: 5,
    title: "Embryo Transfer",
    description:
      "The best quality embryo(s) are gently transferred into the uterus using a thin catheter. This is a painless procedure requiring no anaesthesia.",
    icon: "move-right",
  },
  {
    step: 6,
    title: "Pregnancy Test",
    description:
      "A blood pregnancy test (beta-hCG) is performed 14 days after embryo transfer to confirm pregnancy. Our team supports you through every emotion of this waiting period.",
    icon: "heart-pulse",
  },
];

export const FAQS_IVF = [
  {
    question: "What is IVF and how does it work?",
    answer:
      "IVF (In Vitro Fertilisation) is a fertility treatment where eggs are retrieved from the ovaries and fertilised with sperm in a laboratory. The resulting embryo is then transferred into the uterus. The process typically takes 2–3 weeks per cycle.",
  },
  {
    question: "What is the success rate of IVF at Deep Hospital?",
    answer:
      "Our IVF success rates depend on individual factors such as age, ovarian reserve, and the cause of infertility. We have helped over 5,000 couples achieve successful pregnancies. During your consultation, Dr. Archana Shah will discuss realistic expectations based on your specific case.",
  },
  {
    question: "Who is a good candidate for IVF?",
    answer:
      "IVF is recommended for couples with blocked fallopian tubes, severe male infertility, unexplained infertility, endometriosis, PCOS not responding to other treatments, or those who have not succeeded with IUI. Age above 35 years may also be a factor.",
  },
  {
    question: "How many IVF cycles might I need?",
    answer:
      "Many couples achieve pregnancy in the first or second cycle. However, some may require 3 or more cycles. Your fertility specialist will review results after each cycle and adjust the protocol as needed to maximise your chances of success.",
  },
  {
    question: "What is the difference between IVF and ICSI?",
    answer:
      "In standard IVF, eggs and sperm are combined in a dish and fertilisation occurs naturally. In ICSI (Intracytoplasmic Sperm Injection), a single sperm is directly injected into each egg. ICSI is recommended when there are severe male infertility issues or previous fertilisation failures.",
  },
  {
    question: "Is IVF painful?",
    answer:
      "The hormone injections used for ovarian stimulation may cause mild discomfort. The egg retrieval procedure is performed under sedation so you will feel little to no pain. The embryo transfer is generally painless and takes only a few minutes.",
  },
  {
    question: "How much does IVF cost in Solapur?",
    answer:
      "IVF costs vary based on the treatment protocol, number of cycles, and additional procedures required. We offer transparent pricing and will provide a detailed cost estimate after your initial consultation. We also guide patients on financing and insurance options.",
  },
  {
    question: "Can I freeze my embryos for future use?",
    answer:
      "Yes. Excess good-quality embryos from your IVF cycle can be cryopreserved (frozen) for future use. Frozen embryo transfers have high success rates and are a cost-effective option for subsequent attempts.",
  },
  {
    question: "What lifestyle changes can improve IVF success?",
    answer:
      "Maintaining a healthy BMI, quitting smoking and alcohol, reducing stress, taking prescribed supplements (folic acid, vitamin D), and following a balanced diet can all improve IVF outcomes. Our team provides comprehensive pre-IVF lifestyle counselling.",
  },
  {
    question: "Does Deep Hospital offer IVF for patients from outside Solapur?",
    answer:
      "Yes, we regularly treat patients from Pune, Latur, Osmanabad, Barshi, and across Maharashtra. We offer remote consultation for initial queries and help coordinate travel and stay arrangements for patients coming from distant locations.",
  },
];

export const FAQS_GENERAL = [
  {
    question: "How do I book an appointment at Deep Hospital?",
    answer:
      "You can book an appointment online through our website, call us at 0217-2727224, or visit us directly at Bhavani Peth, Solapur. Our OPD runs Monday to Saturday from 9 AM to 8 PM.",
  },
  {
    question: "Does the hospital provide 24/7 emergency services?",
    answer:
      "Yes. Deep Superspeciality Hospital has a fully equipped 24/7 Emergency department with immediate access to ICU, surgical team, and specialist on-call support for all medical emergencies.",
  },
  {
    question: "What departments are available at Deep Hospital?",
    answer:
      "We have specialist departments in Obstetrics & Gynaecology, IVF & Fertility, Urology, Critical Care & General Surgery, and Anaesthesiology. We continue to expand our services to meet Solapur's growing healthcare needs.",
  },
  {
    question: "Do you accept health insurance?",
    answer:
      "We accept CGHS, ESI, and several other insurance schemes. Please contact our billing department at the time of registration to verify your coverage. Our patient services team will assist you with pre-authorisation requirements.",
  },
  {
    question: "What are the visiting hours for admitted patients?",
    answer:
      "General visiting hours are 10 AM – 12 PM and 5 PM – 7 PM daily. ICU visits are restricted to 15 minutes per visit, twice a day. Special arrangements can be made for patients in critical condition in consultation with the treating doctor.",
  },
  {
    question: "Is the hospital equipped with diagnostic services?",
    answer:
      "Yes. We have in-house diagnostic facilities including pathology lab, digital X-ray, ultrasound, and echocardiography. For advanced imaging, we coordinate with trusted diagnostic partners in Solapur.",
  },
  {
    question: "What languages do your doctors and staff speak?",
    answer:
      "Our team communicates fluently in Marathi, Hindi, and English, ensuring that patients from across Maharashtra feel comfortable discussing their health concerns in their preferred language.",
  },
  {
    question: "How do I get to Deep Superspeciality Hospital?",
    answer:
      "We are located in Bhavani Peth, Solapur, Maharashtra — a well-known and centrally accessible area in the city. Use our Google Maps link for turn-by-turn directions. Parking is available on premises.",
  },
];

export const DEPARTMENTS = [
  "All",
  "Fertility Specialists",
  "Urologists",
  "Critical Care",
  "Surgeons",
];

export interface GalleryImage {
  src: string;
  alt: string;
  caption: string;
}

export const FACILITY_GALLERY: GalleryImage[] = [
  {
    src: "/images/facility/embryology-lab.jpg",
    alt: "Embryologist at work in the IVF laboratory at Deep Hospital",
    caption: "Embryology Lab",
  },
  {
    src: "/images/facility/ultrasound-consultation.jpg",
    alt: "Patient consultation with ultrasound monitoring",
    caption: "Antenatal Consultation",
  },
  {
    src: "/images/facility/facility-reception.jpg",
    alt: "Hospital reception and lobby area",
    caption: "Reception & Lobby",
  },
  {
    src: "/images/facility/facility-room.jpg",
    alt: "Comfortable patient recovery room",
    caption: "Patient Rooms",
  },
  {
    src: "/images/facility/facility-ot.jpg",
    alt: "Fully equipped operation theatre",
    caption: "Operation Theatre",
  },
  {
    src: "/images/facility/facility-garden.jpg",
    alt: "Outdoor recovery and waiting garden area",
    caption: "Patient Garden",
  },
];

// JSON-LD structured data for SEO (schema.org Hospital). Rendered in app/layout.tsx.
export const HOSPITAL_STRUCTURED_DATA = {
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: HOSPITAL_INFO.fullName,
  alternateName: HOSPITAL_INFO.name,
  description:
    "Solapur's premier superspeciality hospital offering Advanced Critical Care, IVF & Fertility treatment, and Urology — combining medical expertise, technology, and compassionate care.",
  url: "https://deephospital.in",
  telephone: HOSPITAL_INFO.phoneHref.replace("tel:", "+91-"),
  email: HOSPITAL_INFO.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Bhavani Peth",
    addressLocality: "Solapur",
    addressRegion: "Maharashtra",
    addressCountry: "IN",
  },
  medicalSpecialty: [
    "Critical Care",
    "Reproductive Medicine",
    "Urology",
    "Surgery",
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "09:00",
      closes: "20:00",
    },
  ],
  sameAs: [HOSPITAL_INFO.instagram],
};
