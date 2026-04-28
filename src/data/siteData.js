export const partnerCompanies = [
  "Freshworks",
  "Zoho",
  "Amazon",
  "Paytm",
  "Razorpay",
  "Accenture",
  "Tiger Analytics",
  "TCS",
  "Infosys",
  "Chargebee"
];

export const mainNavLinks = [
  { label: "Courses", href: "/courses" },
  { label: "Bootcamps", href: "/bootcamps" },
  { label: "Learning Paths", href: "/learning-paths" },
  { label: "Mentors", href: "/mentors" },
  { label: "Pricing", href: "/pricing" },
  { label: "Admissions", href: "/admissions" }
];

export const secondaryNavLinks = [
  { label: "Frontend", href: "/programs/frontend-engineering" },
  { label: "Full Stack", href: "/programs/full-stack-development" },
  { label: "Data", href: "/programs/data-analytics" },
  { label: "AI", href: "/programs/ai-engineering" },
  { label: "UI/UX", href: "/programs/ui-ux-design" },
  { label: "Cybersecurity", href: "/programs/cybersecurity" }
];

export const programs = [
  {
    href: "/programs/frontend-engineering",
    title: "Frontend Engineering Accelerator",
    category: "Frontend",
    badge: "Popular with design-minded developers",
    duration: "16 weeks",
    format: "Live cohort + async studio",
    level: "Beginner to intermediate",
    rating: "4.9/5",
    students: "18,400 learners",
    tuition: "INR 69,000",
    startDate: "May 05",
    description:
      "Go from HTML and CSS fundamentals to interactive web experiences, motion, accessibility, testing, and recruiter-ready portfolio pieces.",
    heroStats: [
      { value: "12", label: "studio projects" },
      { value: "30+", label: "UI patterns covered" },
      { value: "1:12", label: "mentor review ratio" }
    ],
    syllabus: [
      "Responsive layout systems and modern CSS architecture",
      "JavaScript essentials, DOM flows, and state thinking",
      "Interactive apps, reusable UI patterns, and data workflows",
      "Accessibility, performance, testing, and deploy workflow"
    ],
    projects: [
      "Streaming dashboard with reusable chart cards",
      "E-commerce storefront with filters and cart flow",
      "Portfolio case study site with interactive storytelling"
    ],
    outcomes: [
      "Ship polished portfolio work",
      "Practice frontend interview rounds",
      "Present clean component architecture"
    ]
  },
  {
    href: "/programs/full-stack-development",
    title: "Full Stack Development Fellowship",
    category: "Full Stack",
    badge: "Career-switch favorite",
    duration: "24 weeks",
    format: "Weekend live + weekday labs",
    level: "Beginner to advanced",
    rating: "4.8/5",
    students: "24,900 learners",
    tuition: "INR 99,000",
    startDate: "May 19",
    description:
      "Build backend confidence with APIs, authentication, databases, and deployment while continuing to strengthen frontend product skills.",
    heroStats: [
      { value: "15", label: "portfolio builds" },
      { value: "8", label: "mock interviews" },
      { value: "120+", label: "coding drills" }
    ],
    syllabus: [
      "Frontend foundations and modern product patterns",
      "Node.js, Express, REST APIs, and authentication",
      "SQL, NoSQL, caching, queues, and deployment",
      "Capstone architecture, testing, and system design basics"
    ],
    projects: [
      "Hiring portal with auth and admin workflows",
      "Subscription analytics dashboard with role access",
      "Community platform with content feeds and APIs"
    ],
    outcomes: [
      "Understand end-to-end web architecture",
      "Build deployable production-style apps",
      "Prepare for full stack interviews"
    ]
  },
  {
    href: "/programs/data-analytics",
    title: "Data Analytics Launchpad",
    category: "Analytics",
    badge: "Built for operations and business roles",
    duration: "18 weeks",
    format: "Hybrid mentor-led sprint",
    level: "Beginner friendly",
    rating: "4.8/5",
    students: "11,300 learners",
    tuition: "INR 72,000",
    startDate: "June 02",
    description:
      "Learn spreadsheets, SQL, Python, visualization, and storytelling through business case studies that mirror real analyst work.",
    heroStats: [
      { value: "9", label: "case studies" },
      { value: "5", label: "dashboard builds" },
      { value: "25+", label: "mock datasets" }
    ],
    syllabus: [
      "Spreadsheet modeling and business metrics",
      "SQL for reporting, funnels, and retention analysis",
      "Python for data cleaning and exploration",
      "Power BI storytelling and stakeholder presentations"
    ],
    projects: [
      "E-commerce retention dashboard",
      "Sales forecast workbook with scenario planning",
      "Customer segmentation analysis in Python"
    ],
    outcomes: [
      "Read and explain KPI movement",
      "Deliver presentation-ready dashboards",
      "Solve interview business cases"
    ]
  },
  {
    href: "/programs/ui-ux-design",
    title: "UI/UX Product Design Studio",
    category: "Design",
    badge: "Loved by visual thinkers",
    duration: "14 weeks",
    format: "Studio critiques + self-paced tasks",
    level: "Beginner to intermediate",
    rating: "4.9/5",
    students: "9,700 learners",
    tuition: "INR 64,000",
    startDate: "May 12",
    description:
      "Research user problems, shape journeys, build wireframes, prototype solutions, and present portfolio-ready product design stories.",
    heroStats: [
      { value: "6", label: "portfolio case studies" },
      { value: "20+", label: "design critique sessions" },
      { value: "4", label: "usability testing rounds" }
    ],
    syllabus: [
      "Research methods, problem framing, and user flows",
      "Wireframing, layout systems, and content strategy",
      "Design systems, interaction states, and prototypes",
      "Portfolio storytelling and product design interviews"
    ],
    projects: [
      "Fintech onboarding redesign",
      "Learning app design system",
      "Healthcare booking experience prototype"
    ],
    outcomes: [
      "Present complete design case studies",
      "Document design reasoning clearly",
      "Practice whiteboard design rounds"
    ]
  },
  {
    href: "/programs/ai-engineering",
    title: "AI Engineering Lab",
    category: "AI",
    badge: "Fast-moving cohort for builders",
    duration: "20 weeks",
    format: "Cohort labs + experimentation blocks",
    level: "Intermediate",
    rating: "4.7/5",
    students: "7,900 learners",
    tuition: "INR 1,09,000",
    startDate: "June 09",
    description:
      "Explore Python, machine learning foundations, applied GenAI workflows, and product thinking for AI-powered applications.",
    heroStats: [
      { value: "10", label: "labs and mini systems" },
      { value: "4", label: "LLM app capstones" },
      { value: "50+", label: "prompt experiments" }
    ],
    syllabus: [
      "Python foundations and model evaluation basics",
      "Supervised learning, feature workflows, and metrics",
      "LLM prompting, retrieval concepts, and agent patterns",
      "Responsible AI, deployment, and productization"
    ],
    projects: [
      "Knowledge assistant with document search flow",
      "Support ticket summarization pipeline",
      "Prompt experimentation tracker for product teams"
    ],
    outcomes: [
      "Understand practical AI architecture choices",
      "Prototype useful GenAI products",
      "Communicate tradeoffs with confidence"
    ]
  },
  {
    href: "/programs/cybersecurity",
    title: "Cybersecurity Analyst Path",
    category: "Security",
    badge: "Hands-on and lab focused",
    duration: "18 weeks",
    format: "Weekend labs + guided drills",
    level: "Beginner to intermediate",
    rating: "4.8/5",
    students: "6,600 learners",
    tuition: "INR 78,000",
    startDate: "June 16",
    description:
      "Learn network fundamentals, security monitoring, risk thinking, and incident response through guided simulations and labs.",
    heroStats: [
      { value: "14", label: "security labs" },
      { value: "5", label: "simulation weeks" },
      { value: "3", label: "incident response projects" }
    ],
    syllabus: [
      "Networking basics, logs, and security principles",
      "Threat modeling, vulnerabilities, and hardening",
      "Monitoring workflows, triage, and incident response",
      "Governance basics and analyst interview prep"
    ],
    projects: [
      "SOC analyst alert investigation workflow",
      "Incident postmortem and remediation plan",
      "Security hygiene audit dashboard"
    ],
    outcomes: [
      "Think like a junior analyst",
      "Document investigations clearly",
      "Build interview-ready lab stories"
    ]
  }
];

export const bootcamps = [
  {
    title: "Zero-to-Developer Bootcamp",
    pace: "Full-time",
    duration: "20 weeks",
    format: "Daily live instruction",
    promise: "Ideal for career switchers who want structure and pace."
  },
  {
    title: "Weekend Career Sprint",
    pace: "Part-time",
    duration: "28 weeks",
    format: "Weekend live + weekday practice",
    promise: "Built for working professionals learning after hours."
  },
  {
    title: "Product Builder Residency",
    pace: "Intensive",
    duration: "12 weeks",
    format: "Project studio + critique",
    promise: "Fast-moving sprint for learners with basic foundations."
  }
];

export const pricingPlans = [
  {
    name: "Starter",
    price: "INR 3,999/mo",
    audience: "Self-paced learners",
    features: [
      "Access to recordings and templates",
      "Weekly doubt-clearing session",
      "Portfolio starter kit"
    ]
  },
  {
    name: "Pro Cohort",
    price: "INR 8,999/mo",
    audience: "Mentor-led learners",
    features: [
      "Live classes and studio reviews",
      "Assignment feedback from mentors",
      "Mock interviews and resume review"
    ]
  },
  {
    name: "Career Plus",
    price: "INR 12,999/mo",
    audience: "Placement-focused learners",
    features: [
      "Everything in Pro Cohort",
      "Priority career coaching",
      "Hiring week and recruiter sessions"
    ]
  }
];

export const mentorProfiles = [
  {
    name: "Aparna Shah",
    role: "Principal Frontend Engineer",
    company: "Freshworks",
    specialty: "Frontend systems, performance, accessibility"
  },
  {
    name: "Nikhil Rao",
    role: "Data Science Lead",
    company: "Tiger Analytics",
    specialty: "Business cases, dashboards, experimentation"
  },
  {
    name: "Sadia Khan",
    role: "Staff Product Designer",
    company: "Razorpay",
    specialty: "Design systems and case study storytelling"
  },
  {
    name: "Rahul Menon",
    role: "Engineering Manager",
    company: "Amazon",
    specialty: "Backend architecture and interviews"
  },
  {
    name: "Meera Joseph",
    role: "AI Product Lead",
    company: "Zoho",
    specialty: "GenAI product thinking and prompt workflows"
  },
  {
    name: "Karthik Iyer",
    role: "Security Analyst Mentor",
    company: "Accenture",
    specialty: "Threat response and analyst readiness"
  }
];

export const successStories = [
  {
    name: "Lavanya",
    role: "Frontend Developer",
    outcome: "Moved from support to product engineering in 7 months.",
    highlight: "Built three polished UI case studies and cleared two frontend rounds."
  },
  {
    name: "Praveen",
    role: "Data Analyst",
    outcome: "Switched from operations to analytics with a dashboard-heavy portfolio.",
    highlight: "Used SQL and Power BI projects to explain business impact clearly."
  },
  {
    name: "Asha",
    role: "Product Designer",
    outcome: "Turned freelance work into a full-time design role.",
    highlight: "Portfolio critiques helped her present design rationale with confidence."
  },
  {
    name: "Harish",
    role: "Full Stack Developer",
    outcome: "Landed a mid-level role after modernizing his backend project work.",
    highlight: "Mock interviews and architecture breakdowns improved his depth quickly."
  }
];

export const events = [
  {
    title: "Frontend Career Weekend",
    date: "Apr 28",
    format: "Live online",
    description: "Panel on frontend hiring, portfolios, and case study storytelling."
  },
  {
    title: "Data Portfolio Review Day",
    date: "May 03",
    format: "Mentor critique room",
    description: "Bring dashboards and analyses for feedback from analytics leaders."
  },
  {
    title: "AI Product Demo Night",
    date: "May 10",
    format: "Community showcase",
    description: "Explore LLM experiments and mini AI products built by learners."
  }
];

export const blogPosts = [
  {
    title: "How to build a frontend portfolio that recruiters remember",
    category: "Career Growth",
    summary: "A practical framework for moving from practice projects to polished case studies."
  },
  {
    title: "Choosing between full stack, data, and UI/UX when you are starting out",
    category: "Learning Paths",
    summary: "Questions to ask yourself before picking a long-form upskilling track."
  },
  {
    title: "What live cohorts do better than self-paced libraries",
    category: "Edtech",
    summary: "Why rhythm, feedback, and peer energy matter more than volume of lessons."
  }
];

export const helpTopics = [
  "Course access and recordings",
  "Installments and payment support",
  "Mentor sessions and office hours",
  "Portfolio review requests",
  "Certificate and verification",
  "Job support and referral week"
];

export const footerGroups = [
  {
    title: "Programs",
    links: [
      { label: "Courses", href: "/courses" },
      { label: "Bootcamps", href: "/bootcamps" },
      { label: "Learning Paths", href: "/learning-paths" },
      { label: "Admissions", href: "/admissions" }
    ]
  },
  {
    title: "Career",
    links: [
      { label: "Success Stories", href: "/success-stories" },
      { label: "Career Services", href: "/career-services" },
      { label: "Hiring Partners", href: "/hiring-partners" },
      { label: "Enterprise", href: "/enterprise" }
    ]
  },
  {
    title: "Explore",
    links: [
      { label: "Community", href: "/community" },
      { label: "Events", href: "/events" },
      { label: "Blog", href: "/blog" },
      { label: "Help Center", href: "/help-center" }
    ]
  }
];

export const siteRoutes = [
  { label: "Home", href: "/" },
  { label: "Courses", href: "/courses" },
  { label: "Bootcamps", href: "/bootcamps" },
  { label: "Learning Paths", href: "/learning-paths" },
  ...programs.map((item) => ({ label: item.title, href: item.href })),
  { label: "Pricing", href: "/pricing" },
  { label: "Mentors", href: "/mentors" },
  { label: "Success Stories", href: "/success-stories" },
  { label: "Career Services", href: "/career-services" },
  { label: "Hiring Partners", href: "/hiring-partners" },
  { label: "Community", href: "/community" },
  { label: "Events", href: "/events" },
  { label: "Blog", href: "/blog" },
  { label: "Help Center", href: "/help-center" },
  { label: "Contact", href: "/contact" },
  { label: "Admissions", href: "/admissions" },
  { label: "Enterprise", href: "/enterprise" },
  { label: "Scholarships", href: "/scholarships" },
  { label: "Dashboard Preview", href: "/dashboard-preview" }
];
