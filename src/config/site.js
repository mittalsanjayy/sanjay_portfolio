/**
 * ============================================================
 *  SINGLE SOURCE OF TRUTH FOR THE WHOLE PORTFOLIO
 *  Edit this file to change text, links, skills, projects and
 *  the learning journey. No component needs to be touched.
 * ============================================================
 *
 *  Honesty rules built into this file:
 *   - Skill levels:  "learned" | "familiar" | "project" | "practicing"
 *   - Feature status: "implemented" | "partial" | "planned"
 *   - Project links are hidden automatically when left as ""
 *     or when they still contain "YOUR-".
 */

// ---------- Profile -----------------------------------------------------
export const profile = {
  name: "Sanjay Mittal",
  wordmark: "Sanjay Mittal",
  headline:
    "Aspiring Python Full Stack Developer | Cloud Engineering Enthusiast",
  shortRole: "Python Full Stack & AWS Cloud Learner",
  heroTitle:
    "Building practical software. Exploring the cloud. Turning ideas into applications.",
  heroText:
    "I’m Sanjay Mittal, based in Bengaluru, India, developing my Python full-stack skills while studying AWS cloud computing and infrastructure. I enjoy building practical applications, exploring backend technologies, and learning how services such as EC2, S3, IAM, and VPC support modern software.",
  photo: "/images/profile.jpg",
  photoAlt: "Sanjay Mittal, Python full-stack developer and cloud engineering enthusiast",
};

// ---------- Links -------------------------------------------------------
export const links = {
  github: "https://github.com/mittalsanjayy",
  linkedin: "https://www.linkedin.com/in/sanjay-mittal-a3a592385/",
  email: "sanjaymittal.p2032005@gmail.com",
};

// ---------- Résumé ------------------------------------------------------
export const resume = {
  file: "/Sanjay_mittal_resume.pdf",
  downloadName: "Sanjay_mittal_resume.pdf",
};

// ---------- Contact form ------------------------------------------------
export const contact = {
  emailServiceId: import.meta.env.VITE_EMAILJS_SERVICE_ID ?? "",
  emailTemplateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? "",
  emailPublicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? "",
  cooldownSeconds: 30,
};

// ---------- About -------------------------------------------------------
export const about = {
  paragraphs: [
    "I’m Sanjay Mittal, based in Bengaluru, India, developing skills in Python full-stack development and AWS cloud computing. I enjoy building practical applications, exploring backend technologies, and learning how cloud infrastructure supports modern software.",
    "I hold a Bachelor of Computer Applications (BCA) from New Horizon College, Bengaluru, with a CGPA of 8.06. My current studies include Python, backend development, REST APIs, SQL, AWS services, and cloud infrastructure.",
    "I’m actively building projects that strengthen my understanding of full-stack workflows and application development while studying AWS services such as EC2, S3, IAM, and VPC. I continue to improve through hands-on practice and structured learning.",
  ],
  facts: [
    { label: "Education", value: "Bachelor of Computer Applications (BCA)" },
    { label: "College", value: "New Horizon College, Bengaluru" },
    { label: "CGPA", value: "8.06" },
    { label: "Focus", value: "Python, backend development, REST APIs, SQL" },
    { label: "Technical focus", value: "AWS, cloud computing, Generative AI" },
  ],
};

// ---------- Skills ------------------------------------------------------
export const skillLevels = {
  learned: { label: "Learned", hint: "Studied and understand the fundamentals" },
  familiar: { label: "Familiar", hint: "Understand at a basic level" },
  project: { label: "Used in a Project", hint: "Applied in a project I built" },
  practicing: { label: "Practicing", hint: "Currently practising hands-on" },
};

export const skillCategories = [
  {
    id: "cloud-fundamentals",
    title: "Cloud computing",
    icon: "cloud",
    summary: "Cloud concepts and AWS infrastructure fundamentals.",
    skills: [
      { name: "Cloud fundamentals", level: "learned" },
      { name: "IaaS, PaaS and SaaS", level: "learned" },
      { name: "Public, private and hybrid cloud", level: "learned" },
      { name: "AWS global infrastructure", level: "learned" },
      { name: "AWS Regions and Availability Zones", level: "learned" },
      { name: "Shared responsibility model", level: "learned" },
    ],
  },
  {
    id: "aws-core",
    title: "AWS core services",
    icon: "cloud",
    summary: "Familiarity with core AWS compute, storage, networking and monitoring services.",
    skills: [
      { name: "Amazon EC2", level: "learned" },
      { name: "Amazon Machine Images (AMIs)", level: "learned" },
      { name: "Amazon EBS", level: "learned" },
      { name: "Amazon S3", level: "learned" },
      { name: "AWS IAM", level: "learned" },
      { name: "Amazon VPC", level: "learned" },
      { name: "Subnets and route tables", level: "learned" },
      { name: "Internet Gateway and NAT Gateway", level: "learned" },
      { name: "Security Groups and network ACLs (NACLs)", level: "learned" },
      { name: "Amazon RDS", level: "learned" },
      { name: "Amazon DynamoDB", level: "learned" },
      { name: "Elastic Load Balancing (ELB)", level: "learned" },
      { name: "Application Load Balancer (ALB)", level: "learned" },
      { name: "Network Load Balancer (NLB)", level: "learned" },
      { name: "Classic Load Balancer (CLB)", level: "learned" },
      { name: "Auto Scaling", level: "learned" },
      { name: "Amazon CloudWatch", level: "learned" },
      { name: "AWS CloudTrail", level: "learned" },
    ],
  },
  {
    id: "aws-additional",
    title: "AWS additional services",
    icon: "cloud",
    summary: "Additional AWS services covered in my studies.",
    skills: [
      { name: "Amazon Route 53", level: "learned" },
      { name: "Amazon CloudFront", level: "learned" },
      { name: "AWS Lambda", level: "learned" },
      { name: "Amazon API Gateway", level: "learned" },
      { name: "Amazon SQS", level: "learned" },
      { name: "Amazon SNS", level: "learned" },
      { name: "Amazon SES", level: "learned" },
      { name: "Amazon EFS", level: "learned" },
      { name: "AWS Systems Manager", level: "learned" },
    ],
  },
  {
    id: "devops",
    title: "DevOps and deployment",
    icon: "layers",
    summary: "Tools and services covered in my DevOps and deployment studies.",
    skills: [
      { name: "Git", level: "familiar" },
      { name: "GitHub", level: "familiar" },
      { name: "Docker", level: "familiar" },
      { name: "CI/CD fundamentals", level: "familiar" },
      { name: "Terraform", level: "familiar" },
      { name: "Amazon ECR", level: "learned" },
      { name: "Amazon ECS", level: "learned" },
      { name: "Amazon EKS", level: "learned" },
      { name: "AWS CloudFormation", level: "learned" },
      { name: "AWS Elastic Beanstalk", level: "learned" },
      { name: "Application deployment fundamentals", level: "learned" },
    ],
  },
  {
    id: "backend",
    title: "Python and backend development",
    icon: "server",
    summary: "Programming, API and application integration fundamentals.",
    skills: [
      { name: "Python", level: "familiar" },
      { name: "Backend development fundamentals", level: "learned" },
      { name: "REST API fundamentals", level: "learned" },
      { name: "API concepts", level: "learned" },
      { name: "Database integration", level: "project" },
    ],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "database",
    summary: "Database concepts and working with relational data.",
    skills: [
      { name: "SQL", level: "learned" },
      { name: "MySQL", level: "learned" },
      { name: "Database fundamentals", level: "learned" },
      { name: "Queries", level: "familiar" },
      { name: "CRUD operations", level: "familiar" },
    ],
  },
  {
    id: "web-development",
    title: "Web development",
    icon: "code",
    summary: "Languages used in my web project work.",
    skills: [
      { name: "HTML", level: "project" },
      { name: "CSS", level: "project" },
      { name: "JavaScript", level: "project" },
      { name: "PHP", level: "project" },
    ],
  },
  {
    id: "additional-topics",
    title: "Additional topics",
    icon: "sparkles",
    summary: "Existing areas of study retained with an honest foundational label.",
    skills: [
      { name: "Generative AI", level: "familiar" },
      { name: "Full-stack development fundamentals", level: "familiar" },
    ],
  },
];

// ---------- Projects ----------------------------------------------------
export const projects = [
  {
    id: "mittal-bags",
    title: "MITTALBAGS",
    status: "In development",
    placeholder: "store",
    image: "",
    imageAlt: "Screenshot of the MITTALBAGS project",
    summary:
      "A luxury bag e-commerce website built with PHP, MySQL, HTML, CSS, and JavaScript.",
    problem:
      "Small retail brands need a clear and appealing online presence without relying on a complex or expensive platform.",
    solution:
      "A PHP and MySQL web application designed to present products, support customer browsing, and provide a structured admin workflow for product management and offers.",
    stack: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    features: [
      { label: "User login", status: "partial" },
      { label: "Product catalogue", status: "implemented" },
      { label: "Product purchasing workflow", status: "partial" },
      { label: "Offers and promotions", status: "partial" },
      { label: "Admin panel", status: "partial" },
    ],
    links: { github: "https://github.com/mittalsanjayy/mittal-ecommerce-bags", demo: "" },
  },
  {
    id: "petverse-ai",
    title: "PetVerse AI",
    status: "Concept",
    placeholder: "calendar",
    image: "",
    imageAlt: "Screenshot of the Petverse AI project",
    summary:
      "An AI-based veterinary appointment management system featuring appointment scheduling, a medicine-related chatbox, and video-call functionality.",
    problem:
      "Pet owners often need a simple, central place to schedule visits and find the right veterinary support quickly.",
    solution:
      "Project concept covering appointment scheduling, medicine-related chat, and video calls. Implementation and deployment have not been verified.",
    stack: ["AI", "Veterinary appointments", "Medicine-related chatbox", "Video calls"],
    features: [
      { label: "Veterinary appointment scheduling", status: "planned" },
      { label: "Medicine-related chat assistance", status: "planned" },
      { label: "Video consultation functionality", status: "planned" },
    ],
    links: { github: "https://github.com/mittalsanjayy/petverse-ai-veterinary", demo: "" },
  },
  {
    id: "aws-cloud-learning",
    title: "AWS Cloud Learning Projects",
    status: "Learning project",
    placeholder: "cloud",
    image: "",
    imageAlt: "Architecture or dashboard image for the AWS cloud learning project",
    summary:
      "A collection of practical cloud exercises exploring compute, storage, access management, networking, monitoring, and web hosting using AWS.",
    problem:
      "Cloud services are easier to understand when they are used in practical, hands-on scenarios from instance setup through monitoring and access control.",
    solution:
      "Exploring AWS concepts through real-world exercises that cover EC2, S3, IAM, VPC, monitoring, and web hosting fundamentals.",
    stack: ["EC2", "S3", "IAM", "VPC", "CloudWatch"],
    features: [
      { label: "EC2 instance setup", status: "partial" },
      { label: "S3 storage and static website hosting", status: "partial" },
      { label: "IAM roles and permissions", status: "partial" },
      { label: "CloudWatch monitoring", status: "partial" },
      { label: "VPC and security groups", status: "partial" },
      { label: "Load balancing and DNS fundamentals", status: "partial" },
    ],
    links: { github: "", demo: "" },
  },
];

// ---------- Journey -----------------------------------------------------
export const journey = [
  {
    title: "Bachelor of Computer Applications (BCA)",
    status: "completed",
    period: "New Horizon College, Bengaluru",
    description:
      "Completed a BCA degree with a CGPA of 8.06, building a strong foundation in programming, computer science, and database fundamentals.",
  },
  {
    title: "Full Stack Development Intern, Excpert Technologies Private Limited",
    status: "completed",
    period: "27 January 2026 - 10 March 2026",
    description:
      "Worked on frontend and backend development, gained exposure to database integration, and developed a clearer understanding of how different parts of a web application connect and work together.",
  },
  {
    title: "Python full-stack development",
    status: "current",
    period: "",
    description:
      "Developing my Python, backend architecture, REST API, database, and full-stack application skills.",
  },
  {
    title: "AWS and cloud computing",
    status: "current",
    period: "",
    description:
      "Studying AWS cloud infrastructure and services including EC2, S3, IAM, VPC, CloudWatch, and security groups.",
  },
  {
    title: "Hands-on project development",
    status: "current",
    period: "",
    description:
      "Building practical applications to strengthen my skills in full-stack development, integration, and product thinking.",
  },
  {
    title: "Generative AI and deployment",
    status: "upcoming",
    period: "",
    description:
      "Preparing to explore deployment workflows, DevOps fundamentals, and practical integrations of Generative AI into useful applications.",
  },
];

// ---------- What I'm exploring -------------------------------------------
export const exploring = [
  {
    icon: "layers",
    title: "Full-stack applications",
    text: "Connecting front-end interfaces, back-end logic, and database workflows into a single working product.",
  },
  {
    icon: "server",
    title: "Backend APIs and databases",
    text: "Designing clean API patterns and understanding how data flows across an application.",
  },
  {
    icon: "rocket",
    title: "Deploying to AWS",
    text: "Learning how applications move from local development into real cloud environments.",
  },
  {
    icon: "activity",
    title: "Cloud monitoring and infrastructure",
    text: "Studying observability, resource health, and the basics of running reliable services.",
  },
  {
    icon: "brain",
    title: "AI in useful applications",
    text: "Exploring practical ways to integrate Generative AI into real-world software solutions.",
  },
];

// ---------- Navigation ---------------------------------------------------
export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "contact", label: "Contact" },
];
