import type { Bilingual, PortfolioData } from './types.ts';

/**
 * Single source of truth for all portfolio content, in English and Arabic.
 * Extracted from the CV ("Sari Alsulami - Data Science"). Nothing is invented:
 * where the CV gives no detail (a problem statement, a repository, a demo)
 * the field is omitted or left empty and the UI adapts.
 *
 * Figures (10+, 25+, 93% …) appear only where the CV states them.
 */
export const content: Bilingual<PortfolioData> = {
  personal: {
    name: { en: 'Sari Owaid Alsulami', ar: 'ساري عويض السلمي' },
    shortName: { en: 'Sari Alsulami', ar: 'ساري السلمي' },
    /** The name in the other language, shown under the name in the hero. */
    altName: { en: 'ساري عويض السلمي', ar: 'Sari Owaid Alsulami' },
    initials: 'SA',
    title: { en: 'Data Analyst & AI Systems Engineer', ar: 'محلل بيانات ومهندس أنظمة ذكاء اصطناعي' },
    headline: { en: 'Building intelligent systems and turning data into strategic decisions.', ar: 'أبني أنظمة ذكية، وأحوّل البيانات إلى قرارات استراتيجية.' },
    location: { en: 'Saudi Arabia', ar: 'المملكة العربية السعودية' },
    email: 'sarialsulami@gmail.com',
    phone: '+966 54 934 4220',
    summary: {
      en: 'Specialized in Machine Learning, Natural Language Processing (NLP), and process automation. Experienced in architecting platforms, building RAG systems, and designing automated solutions that eliminate manual work and support decision-making across government and enterprise sectors.',
      ar: 'متخصص في تعلم الآلة ومعالجة اللغات الطبيعية وأتمتة العمليات، مع خبرة عملية في بناء المنصات المتكاملة وتطوير أنظمة RAG وتصميم حلول مؤتمتة تلغي العمل اليدوي وتدعم اتخاذ القرار في القطاعات الحكومية والمؤسسية.',
    },
    linkedin: 'https://www.linkedin.com/in/sari-alsulami',
    github: 'https://github.com/Mr-Sari',
    resume: 'assets/Sari-Owaid-Alsulami-Resume.pdf',
    languages: [
      { name: { en: 'Arabic', ar: 'العربية' }, level: { en: 'Native', ar: 'اللغة الأم' } },
      { name: { en: 'English', ar: 'الإنجليزية' } },
    ],
  },

  /** Real figures from the CV, each with its source. */
  heroStats: [
    {
      value: '23K+',
      label: { en: 'Images processed', ar: 'صورة تمت معالجتها' },
      source: { en: 'Computer Vision Systems', ar: 'أنظمة الرؤية الحاسوبية' },
    },
    {
      value: '3+',
      label: { en: 'End-to-end automations', ar: 'أنظمة أتمتة متكاملة' },
      source: { en: 'Zero Manual Work', ar: 'ألغت العمل اليدوي' },
    },
    {
      value: '10+',
      label: { en: 'Performance dashboards', ar: 'لوحات قياس أداء' },
      source: { en: 'Power BI & SQL', ar: 'Power BI & SQL' },
    },
    {
      value: { en: '1st', ar: 'المركز الأول' },
      label: { en: 'Excellence Award', ar: 'جائزة التميز' },
      source: { en: 'AI Solutions', ar: 'حلول الذكاء الاصطناعي' },
    },
  ],

  about: {
    paragraphs: [
      {
        en: 'Currently working as a Data Analyst & AI Systems Engineer at Holy Makkah Municipality, leading the development of the Marefa Plus platform and building strategic performance dashboards. Previously automated executive reporting at Saudi Ground Services, and started my career in data engineering at the National Center for Meteorology.',
        ar: 'أعمل حاليًا محلل بيانات ومهندس أنظمة ذكاء اصطناعي في أمانة العاصمة المقدسة؛ حيث أقود تطوير منصة معرفة بلس وأبني لوحات قياس الأداء الاستراتيجية. وسبق ذلك عملي في أتمتة التقارير التنفيذية لدى الخدمات الأرضية السعودية، وبداياتي في هندسة البيانات بالمركز الوطني للأرصاد.',
      },
      {
        en: 'Graduated with a Bachelor’s degree in Data Science with honors from the University of Jeddah. Focused on combining advanced analytics with process automation to reduce manual operational tasks and support sound strategic decisions.',
        ar: 'خريج بكالوريوس علم البيانات بمرتبة الشرف من جامعة جدة. ينصب تركيزي على دمج التحليل المتقدم مع أتمتة العمليات، لتقليل الجهد اليدوي وتسريع اتخاذ القرارات الموثوقة.',
      },
      {
        en: 'Experienced in machine learning models and NLP, with hands-on work in RAG systems and computer vision solutions that processed over 23,000 images with high accuracy. Dedicated to applying modern technical tools to create practical solutions that save time and deliver real organizational value.',
        ar: 'لدي خبرة تطبيقية في نماذج تعلم الآلة ومعالجة اللغات الطبيعية، شملت بناء أنظمة RAG وحلول رؤية حاسوبية عالجت أكثر من 23 ألف صورة بدقة عالية، بهدف تقديم حلول عملية تختصر الوقت وتخدم أهداف العمل مباشرة.',
      },
    ],
    chain: [
      {
        title: { en: 'Data Engineering & Analytics', ar: 'هندسة البيانات والتحليل' },
        description: {
          en: 'Building data pipelines and advanced analysis using Python, SQL, and DuckDB.',
          ar: 'بناء خطوط البيانات والتحليل المتقدم باستخدام Python وSQL وDuckDB.',
        },
        icon: 'sql',
      },
      {
        title: { en: 'Platforms & Automation', ar: 'تطوير المنصات والأتمتة' },
        description: {
          en: 'Developing full-stack web solutions and automating workflows using Next.js and Django.',
          ar: 'تطوير حلول ويب متكاملة وأتمتة مسارات العمل باستخدام Next.js وDjango.',
        },
        icon: 'workflow',
      },
      {
        title: { en: 'Strategic BI', ar: 'ذكاء الأعمال الاستراتيجي' },
        description: {
          en: 'Building automated Power BI dashboards that guide executive decisions.',
          ar: 'بناء لوحات Power BI تفاعلية ومؤتمتة لدعم القرارات التنفيذية.',
        },
        icon: 'dashboard',
      },
      {
        title: { en: 'Generative AI', ar: 'الذكاء الاصطناعي التوليدي' },
        description: {
          en: 'Developing AI agents, RAG systems, LLM applications, and computer vision.',
          ar: 'تطوير وكلاء الذكاء الاصطناعي وأنظمة RAG وتطبيقات النماذج اللغوية والرؤية الحاسوبية.',
        },
        icon: 'sparkles',
      },
    ],
  },

  experience: [
    {
      id: 'makkah-municipality',
      company: { en: 'Holy Makkah Municipality', ar: 'أمانة العاصمة المقدسة' },
      role: { en: 'Data Analyst', ar: 'محلل بيانات' },
      location: { en: 'Makkah', ar: 'مكة المكرمة' },
      start: '2025-12',
      end: null,
      sector: { en: 'Government', ar: 'قطاع حكومي' },
      stage: { en: 'Platform Engineering & Data Analytics', ar: 'هندسة المنصات وتحليل البيانات' },
      summary: {
        en: 'Platform engineering, workflow automation, and strategic performance dashboards.',
        ar: 'هندسة المنصات، أتمتة مسارات العمل، وتصميم لوحات قياس الأداء الاستراتيجية.',
      },
      achievements: [
        {
          en: 'Engineered and developed the integrated "Marefa Plus" platform (Next.js, Django) to centralize enterprise workflows.',
          ar: 'هندسة وتطوير منصة معرفة بلس المتكاملة (Next.js, Django) لمركزة سير العمل المؤسسي.',
        },
        {
          en: 'Designed 10+ Power BI dashboards tracking 25+ KPIs, optimizing SQL queries via Toad to eliminate manual reporting.',
          ar: 'تصميم أكثر من 10 لوحات قياس أداء (Power BI) تتابع 25+ مؤشراً، وتحسين استعلامات SQL عبر Toad لإنهاء إعداد التقارير اليدوية.',
        },
        {
          en: 'Analyzed core metrics for digital transformation measurement to elevate organizational digital maturity.',
          ar: 'تحليل المؤشرات الأساسية لقياس التحول الرقمي بهدف رفع مستوى النضج الرقمي للمنظمة.',
        },
        {
          en: 'Automated key operational workflows (achievements tracking, tickets, user management) reducing manual overhead.',
          ar: 'أتمتة مسارات العمل الرئيسية (مثل تتبع الإنجازات، البلاغات، وإدارة المستخدمين) لتقليل الجهد التشغيلي اليدوي.',
        },
      ],
      technologies: ['Next.js', 'Django', 'Power BI', 'SQL', 'Python', 'Process Automation'],
    },
    {
      id: 'sgs',
      company: { en: 'Saudi Ground Services (SGS)', ar: 'الشركة السعودية للخدمات الأرضية (SGS)' },
      role: { en: 'Data Analyst (Tamheer)', ar: 'محلل بيانات (برنامج تمهير)' },
      location: { en: 'Jeddah', ar: 'جدة' },
      start: '2025-10',
      end: '2025-12',
      employmentType: { en: 'Tamheer program', ar: 'برنامج تمهير' },
      sector: { en: 'Aviation services', ar: 'خدمات الطيران' },
      stage: { en: 'Business Intelligence & Analytics', ar: 'ذكاء الأعمال والتحليل' },
      summary: {
        en: 'Operational reporting automation and decision support.',
        ar: 'أتمتة التقارير التشغيلية ودعم اتخاذ القرار.',
      },
      achievements: [
        {
          en: 'Engineered 15+ automated dashboards (SAP/BI), streamlining operational reporting workflows.',
          ar: 'هندسة أكثر من 15 لوحة معلومات مؤتمتة (SAP/BI)، مما ساهم في تسريع سير عمل التقارير التشغيلية.',
        },
        {
          en: 'Prepared and delivered 20+ data-driven executive reports to support strategic decisions.',
          ar: 'إعداد وتسليم أكثر من 20 تقريراً تنفيذياً مدعوماً بالبيانات لدعم القرارات الاستراتيجية.',
        },
      ],
      technologies: ['SAP', 'Power BI', 'Data Analytics', 'Executive Reporting'],
    },
    {
      id: 'ncm',
      company: { en: 'National Center for Meteorology (NCM)', ar: 'المركز الوطني للأرصاد (NCM)' },
      role: { en: 'Data Engineer Intern', ar: 'متدرب هندسة بيانات' },
      location: { en: 'Jeddah', ar: 'جدة' },
      start: '2024-06',
      end: '2024-08',
      employmentType: { en: 'Internship', ar: 'تدريب تعاوني' },
      sector: { en: 'Government', ar: 'قطاع حكومي' },
      stage: { en: 'Data Engineering', ar: 'هندسة البيانات' },
      summary: {
        en: 'Data pipeline construction and automated processing.',
        ar: 'بناء خطوط البيانات (Pipelines) وأتمتة المعالجة.',
      },
      achievements: [
        {
          en: 'Automated data processing pipelines with Python and optimized DuckDB queries, accelerating retrieval and eliminating manual tasks.',
          ar: 'أتمتة خطوط معالجة البيانات باستخدام Python وتحسين استعلامات DuckDB، مما سرّع استرجاع البيانات وألغى المهام اليدوية.',
        },
        {
          en: 'Developed an automated ICAO message classification system and standardized deployment environments with Docker and Git.',
          ar: 'تطوير نظام آلي لتصنيف رسائل (ICAO) وتوحيد بيئات النشر البرمجية باستخدام Docker و Git.',
        },
      ],
      technologies: ['Python', 'DuckDB', 'Docker', 'Git', 'Data Pipelines'],
    },
  ],

  projectCategories: [
    { id: 'full-stack', label: { en: 'Full-Stack & Platforms', ar: 'المنصات والحلول المتكاملة' } },
    { id: 'ai', label: { en: 'AI & ML', ar: 'الذكاء الاصطناعي' } },
    { id: 'data-engineering', label: { en: 'Data Engineering & Automation', ar: 'هندسة البيانات والأتمتة' } },
    { id: 'analytics', label: { en: 'BI & Dashboards', ar: 'ذكاء الأعمال' } },
    { id: 'data-science', label: { en: 'Data Science', ar: 'علم البيانات' } },
  ],

  projects: [
    {
      id: 'smart-observer-eye',
      title: { en: 'Smart Observer Eye', ar: 'عين الرقيب الذكي' },
      shortDescription: {
        en: 'Award-winning AI solution driving visitor engagement at the Hajj Expo 2026.',
        ar: 'حلول ذكاء اصطناعي تفاعلية حصدت المركز الأول ورفعت مستوى تفاعل الزوار في معرض الحج 2026.',
      },
      context: { en: 'Holy Makkah Municipality', ar: 'أمانة العاصمة المقدسة' },
      kind: 'professional',
      start: '2026-10',
      end: '2026-11',
      categories: ['ai'],
      visual: 'vision',
      technologies: ['Computer Vision', 'Interactive AI', 'Real-time Processing'],
      highlights: [
        { en: '1st Place Pavilion Award', ar: 'جائزة المركز الأول' },
        { en: 'Interactive visitor experience', ar: 'تجربة تفاعلية للزوار' },
      ],
      brief: {
        problem: { en: 'The municipality needed a standout technological showcase to engage visitors at the Hajj Expo.', ar: 'الأمانة كانت بحاجة إلى عرض تقني بارز لجذب الزوار في معرض الحج.' },
        approach: { en: 'Co-developed an interactive computer vision and AI system to analyze and engage with live environments.', ar: 'المشاركة في تطوير نظام تفاعلي يعتمد على الرؤية الحاسوبية والذكاء الاصطناعي للتفاعل المباشر.' },
        result: { en: 'Secured the 1st place Comprehensive Excellence Award among large pavilions.', ar: 'حصد جائزة التميز الشامل بالمركز الأول على مستوى الأجنحة الكبرى.' },
      },
      metrics: [
        { value: '1st', label: { en: 'Place Excellence Award', ar: 'المركز الأول للتميز' } },
      ],
      overview: {
        en: 'An interactive AI exhibition system that tracks and engages visitors in real-time.',
        ar: 'نظام ذكاء اصطناعي تفاعلي يتتبع الزوار ويتفاعل معهم في الوقت الفعلي داخل المعرض.',
      },
      solution: {
        en: 'Integrated real-time computer vision models with an interactive display to showcase the municipality’s smart city capabilities.',
        ar: 'دمج نماذج الرؤية الحاسوبية المباشرة مع شاشات عرض تفاعلية لإبراز قدرات الأمانة في المدن الذكية.',
      },
      methodology: [
        { en: 'Live video stream processing', ar: 'معالجة تدفق الفيديو المباشر' },
        { en: 'Interactive AI model deployment', ar: 'نشر نماذج ذكاء اصطناعي تفاعلية' },
        { en: 'On-site system integration', ar: 'التكامل التقني داخل أرض المعرض' },
      ],
      impact: [{ en: 'Won the Comprehensive Excellence Award.', ar: 'الفوز بجائزة التميز الشامل.' }],
      githubUrl: '',
      demoUrl: '',
    },
    {
      id: 'interactive-expo-website',
      title: { en: 'Interactive Expo Website', ar: 'الموقع التفاعلي للمؤتمر' },
      shortDescription: {
        en: 'A dynamic web platform showcasing municipal digital solutions and interactive services at the Hajj Expo.',
        ar: 'منصة ويب ديناميكية لعرض الحلول الرقمية والخدمات التفاعلية للأمانة في معرض الحج.',
      },
      context: { en: 'Holy Makkah Municipality', ar: 'أمانة العاصمة المقدسة' },
      kind: 'professional',
      start: '2026-10',
      end: '2026-11',
      categories: ['full-stack'],
      visual: 'platform',
      technologies: ['Next.js', 'React', 'UI/UX'],
      highlights: [
        { en: 'High user retention', ar: 'معدل بقاء عالٍ للمستخدمين' },
        { en: 'Seamless digital showcase', ar: 'استعراض رقمي سلس' },
      ],
      brief: {
        problem: { en: 'Complex municipal services needed to be presented simply and interactively to a diverse exhibition audience.', ar: 'الخدمات البلدية المعقدة كانت تحتاج لعرض مبسط وتفاعلي لجمهور المعرض المتنوع.' },
        approach: { en: 'Built a responsive, highly interactive web platform focusing on visual storytelling and quick access.', ar: 'بناء منصة ويب متجاوبة وعالية التفاعل تركز على السرد البصري والوصول السريع.' },
        result: { en: 'Created a digital hub that effectively communicated the municipality’s technological leap.', ar: 'توفير مركز رقمي نجح في إيصال النقلة التقنية للأمانة بفعالية.' },
      },
      metrics: [],
      overview: {
        en: 'The digital front-end experience for visitors at the Hajj Conference and Exhibition.',
        ar: 'الواجهة الرقمية الأساسية لتجربة الزوار في مؤتمر ومعرض خدمات الحج والعمرة.'
      },
      solution: {
        en: 'Designed and developed an interactive site using modern front-end frameworks to guide visitors through digital municipal services seamlessly.',
        ar: 'تصميم وتطوير موقع تفاعلي بأحدث تقنيات الويب لتوجيه الزوار عبر الخدمات البلدية الرقمية بسلاسة.'
      },
      methodology: [
        { en: 'Interactive UI component design', ar: 'تصميم واجهات مستخدم تفاعلية' },
        { en: 'Responsive web development', ar: 'تطوير ويب متجاوب' },
        { en: 'Digital service mapping', ar: 'هيكلة وعرض الخدمات الرقمية' },
      ],
      impact: [{ en: 'Enhanced visitor engagement and supported the award-winning booth experience.', ar: 'تعزيز تفاعل الزوار ودعم تجربة الجناح الفائز بالمركز الأول.' }],
      githubUrl: '',
      demoUrl: '',
    },
    {
      id: 'achievements-pipeline',
      title: { en: 'Achievements Tracking Automation', ar: 'أتمتة تتبع الإنجازات' },
      shortDescription: {
        en: 'Automated data pipeline to track and process organizational achievements, eliminating manual entry.',
        ar: 'مسار بيانات مؤتمت لتتبع ومعالجة الإنجازات المؤسسية، مما أنهى الحاجة للإدخال اليدوي.'
      },
      context: { en: 'Holy Makkah Municipality', ar: 'أمانة العاصمة المقدسة' },
      kind: 'professional',
      start: '2026-08',
      end: '2026-10',
      categories: ['data-engineering'],
      visual: 'pipeline',
      technologies: ['Python', 'SQL', 'Git'],
      highlights: [
        { en: 'Zero manual data entry', ar: 'إنهاء إدخال البيانات اليدوي' },
        { en: 'Executive reporting integration', ar: 'التكامل مع التقارير التنفيذية' },
      ],
      brief: {
        problem: { en: 'Consolidating achievements across departments required slow, error-prone manual entry.', ar: 'جمع الإنجازات من مختلف الأقسام كان يتطلب إدخالاً يدوياً بطيئاً ومعرضاً للأخطاء.' },
        approach: { en: 'Developed a Python-based automation pipeline linked with Git for version control and deployment.', ar: 'تطوير مسار أتمتة بـ Python مرتبط بـ Git لإدارة الإصدارات والنشر.' },
        result: { en: 'Streamlined executive reporting workflows and ensured 100% data consistency.', ar: 'تسريع مسارات التقارير التنفيذية وضمان اتساق البيانات بنسبة 100%.' },
      },
      metrics: [],
      overview: {
        en: 'A back-end automation system capturing and formatting organizational milestones.',
        ar: 'نظام أتمتة خلفي (Back-end) يلتقط وينسق الإنجازات المؤسسية.'
      },
      solution: {
        en: 'Replaced manual spreadsheets with a scripted pipeline that automatically tracks and routes achievements to reporting dashboards.',
        ar: 'استبدال الجداول اليدوية بمسار برمجي يتتبع ويوجه الإنجازات آلياً إلى لوحات التقارير.'
      },
      methodology: [
        { en: 'Python data extraction scripts', ar: 'نصوص Python لاستخراج البيانات' },
        { en: 'Database insertion logic', ar: 'منطق الإدراج في قواعد البيانات' },
        { en: 'Version control via Git', ar: 'إدارة الإصدارات عبر Git' },
      ],
      impact: [{ en: 'Saved hours of manual operational work weekly.', ar: 'توفير ساعات من العمل التشغيلي اليدوي أسبوعياً.' }],
      githubUrl: 'https://github.com/Mr-Sari/khaleej-achievements-automation.git',
      demoUrl: '',
    },
    {
      id: 'incident-automator',
      title: { en: 'Incident Report Automator', ar: 'أتمتة تقارير البلاغات' },
      shortDescription: {
        en: 'A Python system that parses, processes, and routes municipal incident reports to reduce response times.',
        ar: 'نظام بـ Python يحلل ويعالج ويوجه تقارير البلاغات البلدية لتقليل أوقات الاستجابة.'
      },
      context: { en: 'Holy Makkah Municipality', ar: 'أمانة العاصمة المقدسة' },
      kind: 'professional',
      start: '2026-06',
      end: '2026-08',
      categories: ['data-engineering'],
      visual: 'pipeline',
      technologies: ['Python', 'Regex', 'Data Parsing'],
      highlights: [
        { en: 'Faster incident routing', ar: 'توجيه أسرع للبلاغات' },
        { en: 'Reduced operational overhead', ar: 'تقليل الجهد التشغيلي' },
      ],
      brief: {
        problem: { en: 'Incident reports were delayed due to manual routing and sorting between departments.', ar: 'تقارير البلاغات كانت تتأخر بسبب الفرز والتوجيه اليدوي بين الأقسام.' },
        approach: { en: 'Engineered a text-parsing Python script to automatically classify and route incoming reports.', ar: 'هندسة نظام بـ Python لتحليل النصوص وتصنيف وتوجيه البلاغات الواردة آلياً.' },
        result: { en: 'Lowered operational overhead and accelerated cross-department response times.', ar: 'تقليل الجهد التشغيلي وتسريع أوقات الاستجابة بين الأقسام.' },
      },
      metrics: [],
      overview: {
        en: 'An intelligent routing engine for municipal incident management.',
        ar: 'محرك توجيه ذكي لإدارة البلاغات البلدية.'
      },
      solution: {
        en: 'Wrote parsing logic to extract key information from unstructured incident reports, ensuring automatic delivery to the correct channels.',
        ar: 'كتابة منطق برمجي لاستخراج المعلومات الأساسية من البلاغات غير المهيكلة، لضمان وصولها التلقائي للقنوات الصحيحة.'
      },
      methodology: [
        { en: 'Unstructured data parsing', ar: 'تحليل البيانات غير المهيكلة' },
        { en: 'Automated classification rules', ar: 'قواعد تصنيف آلية' },
        { en: 'Departmental routing integration', ar: 'التكامل مع مسارات توجيه الأقسام' },
      ],
      impact: [{ en: 'Improved operational efficiency in incident management.', ar: 'رفع الكفاءة التشغيلية في إدارة البلاغات.' }],
      githubUrl: '',
      demoUrl: '',
    },
    {
      id: 'username-mapper',
      title: { en: 'Username Mapper Utility', ar: 'أداة مطابقة المستخدمين' },
      shortDescription: {
        en: 'A mapping utility to automate cross-platform user identity management and data consistency.',
        ar: 'أداة برمجيّة لأتمتة إدارة هويات المستخدمين عبر المنصات وضمان اتساق البيانات.'
      },
      context: { en: 'Holy Makkah Municipality', ar: 'أمانة العاصمة المقدسة' },
      kind: 'professional',
      start: '2026-04',
      end: '2026-06',
      categories: ['data-engineering'],
      visual: 'pipeline',
      technologies: ['Python', 'SQL', 'Identity Management'],
      highlights: [
        { en: 'Cross-platform alignment', ar: 'توافق عبر المنصات' },
        { en: 'Data consistency', ar: 'اتساق البيانات' },
      ],
      brief: {
        problem: { en: 'Mismatched user identities across different enterprise systems caused data fragmentation.', ar: 'اختلاف هويات المستخدمين عبر أنظمة المؤسسة المختلفة تسبب في تشتت البيانات.' },
        approach: { en: 'Created a centralized utility script to map and resolve discrepancies in user records.', ar: 'إنشاء أداة مركزية لمطابقة وحل التباينات في سجلات المستخدمين.' },
        result: { en: 'Ensured a unified data view by eliminating manual cross-referencing.', ar: 'ضمان رؤية موحدة للبيانات عبر إلغاء المطابقة اليدوية.' },
      },
      metrics: [],
      overview: {
        en: 'A data governance tool solving user identity fragmentation.',
        ar: 'أداة لحوكمة البيانات تحل مشكلة تشتت هويات المستخدمين.'
      },
      solution: {
        en: 'Developed an automated pipeline that aligns user databases across platforms, creating a single source of truth for user activities.',
        ar: 'تطوير مسار مؤتمت يطابق قواعد بيانات المستخدمين عبر المنصات، لتوفير مصدر موثوق ووحيد لنشاطاتهم.'
      },
      methodology: [
        { en: 'Database cross-referencing', ar: 'المطابقة بين قواعد البيانات' },
        { en: 'Identity resolution algorithms', ar: 'خوارزميات توحيد الهويات' },
        { en: 'Automated data cleaning', ar: 'تنظيف آلي للبيانات' },
      ],
      impact: [{ en: 'Saved time and prevented data reporting errors.', ar: 'توفير الوقت ومنع أخطاء تقارير البيانات.' }],
      githubUrl: '',
      demoUrl: '',
    },
    {
      id: 'rag-qa',
      title: { en: 'RAG Q&A System', ar: 'نظام أسئلة وأجوبة RAG' },
      shortDescription: {
        en: 'Answers questions over documents with source-grounded LLM responses, through a Gradio chatbot.',
        ar: 'يجيب عن الأسئلة من المستندات بإجابات موثّقة المصدر عبر واجهة محادثة Gradio.',
      },
      context: { en: 'Personal project', ar: 'مشروع شخصي' },
      kind: 'personal',
      start: '2026-05',
      end: '2026-06',
      categories: ['ai'],
      visual: 'rag',
      technologies: ['LangChain', 'ChromaDB', 'OpenAI', 'Gradio', 'Python'],
      highlights: [
        { en: 'Semantic retrieval', ar: 'استرجاع دلالي' },
        { en: 'Source-grounded answers', ar: 'إجابات موثّقة المصدر' },
      ],
      brief: {
        problem: { en: 'Answers buried in long documents are slow to find — and hard to trust without a source.', ar: 'الإجابات داخل المستندات الطويلة يصعب الوصول إليها، ويصعب الوثوق بها دون مصدر.' },
        approach: { en: 'Documents chunked into ChromaDB; LangChain retrieves the relevant passages to ground the LLM.', ar: 'تُقسَّم المستندات وتُخزَّن في ChromaDB، ويسترجع LangChain المقاطع المناسبة لتُبنى عليها الإجابة.' },
        result: { en: 'A Gradio chatbot whose answers cite their source documents.', ar: 'محادثة عبر Gradio، كل إجابة فيها موثّقة بمصدرها.' },
      },
      metrics: [],
      overview: {
        en: 'An end-to-end retrieval-augmented generation system, from document ingestion to an interactive chatbot.',
        ar: 'نظام RAG متكامل من إدخال المستندات حتى واجهة المحادثة التفاعلية.',
      },
      solution: {
        en: 'Documents are chunked and stored in a vector database; retrieved passages ground the LLM so each answer cites its sources.',
        ar: 'تُقسَّم المستندات وتُخزَّن في قاعدة بيانات متجهية، ثم تُبنى إجابات النموذج على المقاطع المسترجعة مع ذكر مصادرها.',
      },
      methodology: [
        { en: 'Document ingestion and chunking', ar: 'إدخال المستندات وتقسيمها' },
        { en: 'OpenAI embeddings stored in ChromaDB', ar: 'تضمينات OpenAI مخزّنة في ChromaDB' },
        { en: 'Semantic retrieval with LangChain', ar: 'استرجاع دلالي عبر LangChain' },
        { en: 'Source-grounded LLM answers', ar: 'إجابات مستندة إلى المصادر' },
        { en: 'Interactive Gradio chatbot', ar: 'واجهة محادثة تفاعلية عبر Gradio' },
      ],
      githubUrl: 'https://github.com/Mr-Sari/Retrieval-Augmented-Generation-RAG-Q-A-System',
      demoUrl: '',
    },
    {
      id: 'resume-ai-assistant',
      title: { en: 'Resume AI Assistant', ar: 'مساعد السيرة الذاتية بالذكاء الاصطناعي' },
      shortDescription: {
        en: 'Matches a resume to a job, analyzes skill gaps, and generates an ATS-optimized resume and tailored cover letter.',
        ar: 'يطابق السيرة الذاتية مع الوظيفة، ويحلّل فجوات المهارات، ويولّد سيرة متوافقة مع ATS وخطاب تقديم مخصصًا.',
      },
      context: { en: 'Personal project', ar: 'مشروع شخصي' },
      kind: 'personal',
      start: '2026-03',
      end: '2026-04',
      categories: ['ai'],
      visual: 'resume',
      technologies: ['OpenAI API', 'Claude API', 'Pydantic', 'Python'],
      highlights: [
        { en: 'Skill-gap analysis', ar: 'تحليل فجوات المهارات' },
        { en: 'End-to-end pipeline', ar: 'خط معالجة متكامل' },
      ],
      brief: {
        problem: { en: 'Tailoring a resume and cover letter to every job posting is slow, manual work.', ar: 'مواءمة السيرة الذاتية وخطاب التقديم مع كل وظيفة عمل يدوي يستهلك الوقت.' },
        approach: { en: 'A structured LLM pipeline with Pydantic-validated outputs for skill extraction and gap analysis.', ar: 'خط معالجة بنماذج لغوية، مخرجاته منظّمة ومتحقَّق منها عبر Pydantic، لاستخراج المهارات وتحليل الفجوات.' },
        result: { en: 'Gap analysis, an ATS-optimized resume and a tailored cover letter in one run.', ar: 'تحليل للفجوات، وسيرة متوافقة مع ATS، وخطاب تقديم مخصص، في تشغيل واحد.' },
      },
      metrics: [],
      overview: {
        en: 'An LLM assistant for resume–job matching and optimization, unified in one pipeline (run_resume_rocket).',
        ar: 'مساعد مبني على النماذج اللغوية لمطابقة السيرة مع الوظيفة وتحسينها، في خط معالجة واحد اسمه run_resume_rocket.',
      },
      solution: {
        en: 'Structured LLM outputs validated with Pydantic drive skill extraction, gap analysis and job alignment, then resume rewriting and cover-letter generation.',
        ar: 'مخرجات منظّمة يتم التحقق منها عبر Pydantic تقود استخراج المهارات وتحليل الفجوات والمواءمة مع الوظيفة، ثم إعادة صياغة السيرة وكتابة خطاب التقديم.',
      },
      methodology: [
        { en: 'Structured outputs with Pydantic', ar: 'مخرجات منظّمة عبر Pydantic' },
        { en: 'Skill extraction, gap analysis, job alignment', ar: 'استخراج المهارات وتحليل الفجوات والمواءمة مع الوظيفة' },
        { en: 'ATS-optimized resume rewriting', ar: 'إعادة صياغة السيرة لتتوافق مع ATS' },
        { en: 'Cover letters tailored to each job', ar: 'خطاب تقديم مخصص لكل وظيفة' },
      ],
      githubUrl: 'https://github.com/Mr-Sari/Resume-AI-Assistant',
      demoUrl: '',
    },
    {
      id: 'kpi-dashboards',
      title: { en: 'KPI Dashboards & Reporting Automation', ar: 'لوحات مؤشرات الأداء وأتمتة التقارير' },
      shortDescription: {
        en: 'Power BI dashboards that automate KPI reporting, built on SQL views optimized in Toad.',
        ar: 'لوحات Power BI تؤتمت تقارير مؤشرات الأداء، مبنية على عروض SQL محسّنة عبر Toad.',
      },
      context: { en: 'Holy Makkah Municipality', ar: 'أمانة العاصمة المقدسة' },
      kind: 'professional',
      start: '2025-12',
      end: 'Present',
      categories: ['analytics'],
      visual: 'dashboard',
      technologies: ['Power BI', 'SQL', 'Toad'],
      highlights: [
        { en: 'Automated KPI reporting', ar: 'تقارير مؤشرات آلية' },
        { en: 'Optimized SQL data views', ar: 'عروض SQL محسّنة' },
      ],
      brief: {
        problem: { en: 'KPI reporting relied on manual effort.', ar: 'تقارير مؤشرات الأداء كانت تعتمد على جهد يدوي.' },
        approach: { en: 'Database views and optimized SQL in Toad, feeding Power BI dashboards built around the KPIs.', ar: 'عروض قواعد بيانات واستعلامات SQL محسّنة عبر Toad، تغذّي لوحات Power BI مبنية حول المؤشرات.' },
        result: { en: '10+ dashboards tracking 25+ KPIs, with reporting automated.', ar: 'أكثر من 10 لوحات تتابع أكثر من 25 مؤشرًا، والتقارير أصبحت آلية.' },
      },
      metrics: [
        { value: '10+', label: { en: 'Power BI dashboards', ar: 'لوحة Power BI' } },
        { value: '25+', label: { en: 'KPIs tracked', ar: 'مؤشر أداء' } },
      ],
      overview: { en: 'A suite of Power BI dashboards that automates KPI reporting.', ar: 'مجموعة لوحات Power BI تؤتمت تقارير مؤشرات الأداء.' },
      problem: { en: 'Reporting relied on manual effort.', ar: 'اعتماد التقارير على جهد يدوي.' },
      solution: {
        en: 'Database views and optimized queries in Toad and SQL feed Power BI dashboards designed around the organization’s KPIs.',
        ar: 'عروض قواعد بيانات واستعلامات محسّنة عبر Toad وSQL تغذّي لوحات Power BI مصممة حول مؤشرات الأداء.',
      },
      methodology: [
        { en: 'Database views and query optimization (Toad, SQL)', ar: 'عروض قواعد البيانات وتحسين الاستعلامات عبر Toad وSQL' },
        { en: 'Data extraction and analysis for Power BI', ar: 'استخراج البيانات وتحليلها لـ Power BI' },
        { en: 'KPI-driven dashboard design', ar: 'تصميم لوحات حول مؤشرات الأداء' },
      ],
      impact: [{ en: 'Automated reporting and reduced manual effort.', ar: 'أتمتة التقارير وتقليل الجهد اليدوي.' }],
      githubUrl: '',
      demoUrl: '',
    },
    {
      id: 'maarefah-plus',
      title: { en: 'Maarefah Plus Platform', ar: 'منصة معرفة بلس' },
      shortDescription: {
        en: 'Internal knowledge platform centralizing access across teams, built with Python and SQLite.',
        ar: 'منصة معرفية داخلية تمركز الوصول إلى المعرفة بين الفرق، مبنية بـ Python وSQLite.',
      },
      context: { en: 'Holy Makkah Municipality', ar: 'أمانة العاصمة المقدسة' },
      kind: 'professional',
      start: '2025-12',
      end: 'Present',
      categories: ['data-engineering'],
      visual: 'platform',
      technologies: ['Python', 'SQLite', { en: 'Full-stack web', ar: 'تطوير ويب متكامل' }],
      highlights: [{ en: 'Cross-team knowledge hub', ar: 'مرجع معرفي موحّد' }],
      brief: {
        problem: { en: 'Knowledge was scattered across teams.', ar: 'المعرفة كانت موزعة بين الفرق.' },
        approach: { en: 'A Python and SQLite platform with a full-stack web interface.', ar: 'منصة بـ Python وSQLite بواجهة ويب متكاملة.' },
        result: { en: 'One central place for knowledge, and better collaboration.', ar: 'مرجع واحد للمعرفة، وتعاون أسهل بين الفرق.' },
      },
      metrics: [],
      overview: { en: 'A centralized knowledge platform for municipality teams.', ar: 'منصة معرفية مركزية لفرق الأمانة.' },
      problem: {
        en: 'Knowledge access was not centralized, limiting collaboration across teams.',
        ar: 'الوصول إلى المعرفة لم يكن مركزيًا، مما حدّ من التعاون بين الفرق.',
      },
      solution: {
        en: 'A Python and SQLite platform with a full-stack web interface as one place to find knowledge.',
        ar: 'منصة بـ Python وSQLite وواجهة ويب متكاملة كمرجع واحد للمعرفة.',
      },
      methodology: [
        { en: 'Python application layer', ar: 'طبقة تطبيق بـ Python' },
        { en: 'SQLite storage', ar: 'تخزين في SQLite' },
        { en: 'Full-stack web interface', ar: 'واجهة ويب متكاملة' },
      ],
      impact: [{ en: 'Centralized knowledge access and better collaboration.', ar: 'مركزة الوصول إلى المعرفة وتحسين التعاون.' }],
      githubUrl: '',
      demoUrl: '',
    },
    {
      id: 'sgs-reporting',
      title: { en: 'Automated Executive Reporting', ar: 'التقارير التنفيذية الآلية' },
      shortDescription: {
        en: 'Automated dashboards and executive reports from business and operational analysis on SAP data.',
        ar: 'لوحات آلية وتقارير تنفيذية من تحليل الأعمال والعمليات على بيانات SAP.',
      },
      context: { en: 'Saudi Ground Services', ar: 'الشركة السعودية للخدمات الأرضية' },
      kind: 'professional',
      start: '2025-10',
      end: '2025-12',
      categories: ['analytics'],
      visual: 'reporting',
      technologies: ['SAP', { en: 'BI tools', ar: 'أدوات BI' }],
      highlights: [{ en: 'Executive-level reporting', ar: 'تقارير للإدارة التنفيذية' }],
      brief: {
        problem: { en: 'Business and operational data in SAP needed to reach leadership as clear reporting.', ar: 'بيانات الأعمال والعمليات في SAP كانت تحتاج أن تصل إلى الإدارة بتقارير واضحة.' },
        approach: { en: 'Automated dashboards and reporting on SAP and BI tools, built with cross-functional teams.', ar: 'لوحات وتقارير مؤتمتة عبر SAP وأدوات BI، بالتعاون مع فرق متعددة التخصصات.' },
        result: { en: '15+ automated dashboards and 20+ executive reports.', ar: 'أكثر من 15 لوحة مؤتمتة وأكثر من 20 تقريرًا تنفيذيًا.' },
      },
      metrics: [
        { value: '15+', label: { en: 'Automated dashboards', ar: 'لوحة مؤتمتة' } },
        { value: '20+', label: { en: 'Executive reports', ar: 'تقرير تنفيذي' } },
      ],
      overview: {
        en: 'Automated dashboards and executive reporting for business and operations.',
        ar: 'لوحات آلية وتقارير تنفيذية لتحليل الأعمال والعمليات.',
      },
      solution: {
        en: 'Automated dashboards and reporting solutions on SAP and BI tools, built with cross-functional teams.',
        ar: 'لوحات وحلول تقارير آلية عبر SAP وأدوات BI بالتعاون مع فرق متعددة التخصصات.',
      },
      methodology: [
        { en: 'Business and operational analysis', ar: 'تحليل الأعمال والعمليات' },
        { en: 'Automated dashboards on SAP data', ar: 'لوحات آلية على بيانات SAP' },
        { en: 'Executive reports for leadership', ar: 'تقارير تنفيذية للإدارة' },
      ],
      githubUrl: '',
      demoUrl: '',
    },
    {
      id: 'car-damage',
      title: { en: 'Car Damage Analysis Pipeline', ar: 'نظام تحليل أضرار المركبات' },
      shortDescription: {
        en: 'Detects damage, grades severity and identifies the part, then estimates cost and generates PDF reports.',
        ar: 'يكتشف الضرر ويصنّف شدته ويحدد القطعة، ثم يقدّر التكلفة ويولّد تقارير PDF.',
      },
      context: { en: 'Graduation project · University of Jeddah', ar: 'مشروع التخرج · جامعة جدة' },
      kind: 'graduation',
      start: '2024-10',
      end: '2025-01',
      categories: ['ai'],
      visual: 'vision',
      technologies: ['YOLOv8', 'EfficientNetB0', 'OpenCV', 'Pandas', 'Streamlit'],
      highlights: [
        { en: '23K+ image dataset', ar: 'بيانات +23K صورة' },
        { en: 'Rule-based cost estimator', ar: 'مقدِّر تكلفة بالقواعد' },
      ],
      brief: {
        problem: { en: 'Assessing vehicle damage — what, how severe, which part, what cost — takes several manual steps.', ar: 'تقييم ضرر المركبة، نوعه وشدته والقطعة وتكلفته، يمر بعدة خطوات يدوية.' },
        approach: { en: 'YOLOv8 and EfficientNetB0 models on 23,000+ processed images, combined by a rule-based cost estimator.', ar: 'نماذج YOLOv8 وEfficientNetB0 على أكثر من 23 ألف صورة، يجمع مخرجاتها مقدِّر تكلفة قائم على القواعد.' },
        result: { en: 'One workflow from an uploaded photo to a PDF damage report.', ar: 'من صورة واحدة إلى تقرير أضرار PDF في مسار واحد.' },
      },
      metrics: [
        { value: '81%', label: { en: 'Damage detection', ar: 'اكتشاف الضرر' } },
        { value: '93%', label: { en: 'Severity classification', ar: 'تصنيف الشدة' } },
        { value: '100%', label: { en: 'Part identification', ar: 'تحديد القطعة' } },
        { value: '21', label: { en: 'Car parts covered', ar: 'قطعة مركبة' } },
        { value: '23K+', label: { en: 'Images processed', ar: 'صورة معالجة' } },
      ],
      overview: {
        en: 'A unified platform for damage detection, severity grading, part identification and repair-cost estimation, delivered as a Streamlit app.',
        ar: 'منصة موحّدة لاكتشاف الضرر وتصنيف شدته وتحديد القطعة وتقدير تكلفة الإصلاح، عبر تطبيق Streamlit.',
      },
      solution: {
        en: 'YOLOv8 and EfficientNetB0 models handle detection, severity and part identification; a rule-based estimator combines their outputs.',
        ar: 'نماذج YOLOv8 وEfficientNetB0 للاكتشاف والشدة وتحديد القطعة، ومقدِّر قائم على القواعد يجمع مخرجاتها.',
      },
      methodology: [
        { en: 'Processed 23,000+ images with OpenCV and Pandas', ar: 'معالجة أكثر من 23,000 صورة عبر OpenCV وPandas' },
        { en: 'Trained YOLOv8 and EfficientNetB0 models', ar: 'تدريب نماذج YOLOv8 وEfficientNetB0' },
        { en: 'Rule-based cost estimator over all model outputs', ar: 'مقدِّر تكلفة قائم على القواعد يدمج مخرجات النماذج' },
        { en: 'Streamlit app with automated PDF reports', ar: 'تطبيق Streamlit مع تقارير PDF آلية' },
      ],
      impact: [{ en: 'One workflow from uploaded image to PDF report.', ar: 'مسار واحد من الصورة حتى تقرير PDF.' }],
      githubUrl: 'https://github.com/Mr-Sari/Car-Damage-Analysis-Pipeline',
      demoUrl: '',
    },
    {
      id: 'weather-automation',
      title: { en: 'Weather Report Automation', ar: 'أتمتة تقارير الطقس' },
      shortDescription: {
        en: 'Python automation of hourly weather reports, with DuckDB query tuning and Docker environments.',
        ar: 'أتمتة تقارير الطقس الساعية بـ Python، مع تحسين استعلامات DuckDB وبيئات Docker.',
      },
      context: { en: 'National Center of Meteorology', ar: 'المركز الوطني للأرصاد' },
      kind: 'professional',
      start: '2024-06',
      end: '2024-08',
      categories: ['data-engineering'],
      visual: 'pipeline',
      technologies: ['Python', 'Pandas', 'Regex', 'DuckDB', 'Docker'],
      highlights: [{ en: 'Zero manual entry', ar: 'بلا إدخال يدوي' }],
      brief: {
        problem: { en: 'Hourly weather reports were entered by hand.', ar: 'تقارير الطقس كانت تُدخل يدويًا كل ساعة.' },
        approach: { en: 'Reports parsed with Pandas and Regex; SQL tuned in DuckDB; Docker for consistent environments.', ar: 'تحليل التقارير بـ Pandas وRegex، وتحسين SQL في DuckDB، وDocker لتوحيد البيئات.' },
        result: { en: 'Manual entry eliminated and database performance improved.', ar: 'انتهى الإدخال اليدوي وتحسّن أداء قاعدة البيانات.' },
      },
      metrics: [],
      overview: { en: 'Automated processing of hourly weather reports.', ar: 'أتمتة معالجة تقارير الطقس الساعية.' },
      problem: { en: 'Hourly weather reports were entered manually.', ar: 'كانت تقارير الطقس الساعية تُدخل يدويًا.' },
      solution: {
        en: 'Reports parsed with Pandas and Regex, queries optimized in DuckDB, environments standardized with Docker and Git.',
        ar: 'تحليل التقارير عبر Pandas وRegex، وتحسين الاستعلامات في DuckDB، وتوحيد البيئات عبر Docker وGit.',
      },
      methodology: [
        { en: 'Report parsing (Regex, Pandas)', ar: 'تحليل التقارير عبر Regex وPandas' },
        { en: 'SQL optimization in DuckDB', ar: 'تحسين SQL في DuckDB' },
        { en: 'Docker and Git', ar: 'Docker وGit' },
      ],
      impact: [
        { en: 'Eliminated manual entry.', ar: 'إلغاء الإدخال اليدوي.' },
        { en: 'Improved database performance.', ar: 'تحسين أداء قاعدة البيانات.' },
      ],
      githubUrl: '',
      demoUrl: '',
    },
    {
      id: 'icao-classification',
      title: { en: 'ICAO Message Classification', ar: 'تصنيف رسائل ICAO' },
      shortDescription: {
        en: 'Classifies flight-arrival ICAO messages using time-series analysis.',
        ar: 'تصنيف رسائل ICAO لوصول الرحلات باستخدام تحليل السلاسل الزمنية.',
      },
      context: { en: 'National Center of Meteorology', ar: 'المركز الوطني للأرصاد' },
      kind: 'professional',
      start: '2024-06',
      end: '2024-08',
      categories: ['data-science'],
      visual: 'timeseries',
      technologies: ['Python', 'Pandas', { en: 'Time-series analysis', ar: 'السلاسل الزمنية' }],
      highlights: [{ en: 'Time-series classification', ar: 'تصنيف بالسلاسل الزمنية' }],
      brief: {
        problem: { en: 'Flight-arrival ICAO messages needed to be classified automatically.', ar: 'رسائل ICAO الخاصة بوصول الرحلات كانت تحتاج إلى تصنيف آلي.' },
        approach: { en: 'Time-series analysis of ICAO messages with Python and Pandas.', ar: 'تحليل السلاسل الزمنية لرسائل ICAO بـ Python وPandas.' },
        result: { en: 'A classification system for flight-arrival messages.', ar: 'نظام يصنّف رسائل وصول الرحلات.' },
      },
      metrics: [],
      overview: { en: 'A system that classifies ICAO messages for flight arrivals.', ar: 'نظام يصنّف رسائل ICAO الخاصة بوصول الرحلات.' },
      solution: {
        en: 'Time-series analysis applied to classify ICAO messages related to flight arrivals.',
        ar: 'تطبيق تحليل السلاسل الزمنية لتصنيف رسائل ICAO المتعلقة بوصول الرحلات.',
      },
      methodology: [
        { en: 'Time-series analysis of ICAO messages', ar: 'تحليل السلاسل الزمنية لرسائل ICAO' },
        { en: 'Flight-arrival classification', ar: 'تصنيف رسائل الوصول' },
      ],
      githubUrl: '',
      demoUrl: '',
    },
  ],

  skillCategories: [
    {
      id: 'ai',
      label: { en: 'AI & Machine Learning', ar: 'الذكاء الاصطناعي وتعلم الآلة' },
      description: { en: 'Building LLMs and computer vision systems', ar: 'بناء النماذج اللغوية وأنظمة الرؤية الحاسوبية' },
      primary: true,
    },
    {
      id: 'data-engineering',
      label: { en: 'Data Analytics & Engineering', ar: 'تحليل وهندسة البيانات' },
      description: { en: 'Building pipelines and database analysis', ar: 'بناء خطوط المعالجة وتحليل قواعد البيانات' },
    },
    {
      id: 'platform-devops',
      label: { en: 'Platform Development & DevOps', ar: 'تطوير المنصات و DevOps' },
      description: { en: 'Frontend engineering and application deployment', ar: 'هندسة الواجهات ونشر التطبيقات' },
    },
    {
      id: 'bi',
      label: { en: 'Business Intelligence (BI)', ar: 'ذكاء الأعمال (BI)' },
      description: { en: 'Automated reporting and executive dashboards', ar: 'أتمتة التقارير ولوحات القياس' },
    },
  ],

  skills: [
    { name: 'LLMs', icon: 'bot', category: 'ai' },
    { name: 'RAG Systems', icon: 'search', category: 'ai' },
    { name: 'NLP', icon: 'message', category: 'ai' },
    { name: 'Computer Vision', icon: 'eye', category: 'ai' },

    { name: 'Python', icon: 'python', category: 'data-engineering' },
    { name: 'SQL', icon: 'sql', category: 'data-engineering' },
    { name: 'DuckDB', icon: 'duckdb', category: 'data-engineering' },
    { name: 'ETL Pipelines', icon: 'workflow', category: 'data-engineering' },

    { name: 'Next.js', icon: 'nextjs', category: 'platform-devops' },
    { name: 'Django', icon: 'django', category: 'platform-devops' },
    { name: 'Docker', icon: 'docker', category: 'platform-devops' },
    { name: 'Git', icon: 'git', category: 'platform-devops' },

    { name: 'Power BI', icon: 'powerbi', category: 'bi' },
    { name: 'Data Visualization', icon: 'dashboard', category: 'bi' },
    { name: 'DAX', icon: 'sigma', category: 'bi' },
  ],

  /** Other tools from the CV and roles, listed without emphasis. */
  tools: [
    'LangChain',
    'ChromaDB',
    'YOLOv8',
    'OpenCV',
    'Streamlit',
    'Gradio',
    'Pandas',
    'TypeScript',
  ],

  softSkills: [
    { en: 'Process Automation', ar: 'أتمتة العمليات (Process Automation)' },
    { en: 'Complex Problem Solving', ar: 'حل المشكلات المعقدة' },
    { en: 'Analytical Thinking', ar: 'التفكير التحليلي' },
    { en: 'Strategic Direction', ar: 'التوجيه الاستراتيجي' },
  ],

  education: [
    {
      id: 'uj-bsc',
      degree: { en: 'Bachelor of Data Science', ar: 'بكالوريوس علم البيانات' },
      institution: { en: 'University of Jeddah', ar: 'جامعة جدة' },
      college: { en: 'College of Computer Science and Engineering', ar: 'كلية علوم وهندسة الحاسب' },
      location: { en: 'Jeddah', ar: 'جدة' },
      start: '2020-08',
      end: '2025-01',
      gpa: { value: 4.43, scale: 5 },
      honors: { en: 'Second Class Honors', ar: 'مرتبة الشرف الثانية' },
      coursework: [
        { en: 'Machine Learning', ar: 'تعلم الآلة' },
        { en: 'Data Mining', ar: 'التنقيب في البيانات' },
        { en: 'Big Data Analytics', ar: 'تحليلات البيانات الضخمة' },
        { en: 'Database Systems', ar: 'نظم قواعد البيانات' },
        { en: 'Cloud Computing', ar: 'الحوسبة السحابية' },
        { en: 'NLP', ar: 'معالجة اللغة الطبيعية' },
      ],
    },
  ],

  certifications: [
    {
      id: 'nvidia-rag',
      name: { en: 'Building RAG Agents with LLMs', ar: 'Building RAG Agents with LLMs' },
      issuer: 'NVIDIA',
      issuerIcon: 'nvidia',
      date: '2026-09',
      category: { en: 'Generative AI', ar: 'الذكاء الاصطناعي التوليدي' },
    },
    {
      id: 'nvidia-agentic',
      name: { en: 'Building Agentic AI Applications with LLMs', ar: 'Building Agentic AI Applications with LLMs' },
      issuer: 'NVIDIA',
      issuerIcon: 'nvidia',
      date: '2026-09',
      category: { en: 'AI Engineering', ar: 'هندسة الذكاء الاصطناعي' },
    },
    {
      id: 'dlai-nlp',
      name: { en: 'Natural Language Processing Specialization', ar: 'Natural Language Processing Specialization' },
      issuer: 'DeepLearning.AI',
      issuerIcon: 'deeplearningai',
      date: '2024-02',
      category: { en: 'Machine Learning', ar: 'تعلم الآلة' },
    },
    {
      id: 'google-ada',
      name: {
        en: 'Google Advanced Data Analytics Professional Certificate',
        ar: 'Google Advanced Data Analytics Professional Certificate',
      },
      issuer: 'Google',
      issuerIcon: 'google',
      date: '2024-02',
      category: { en: 'Data Engineering', ar: 'هندسة البيانات' },
    },
    {
      id: 'ibm-genai-software',
      name: { en: 'Generative AI in Software Development', ar: 'Generative AI in Software Development' },
      issuer: 'IBM',
      issuerIcon: 'ibm',
      date: '2025-02',
      category: { en: 'Platform Development', ar: 'تطوير المنصات' },
    },
  ],

  seo: {
    title: { en: 'Sari Alsulami — Data Analyst & AI Systems Engineer', ar: 'ساري السلمي — محلل بيانات ومهندس أنظمة ذكاء اصطناعي' },
    description: {
      en: 'Portfolio of Sari Owaid Alsulami, a Data Analyst & AI Systems Engineer in Saudi Arabia: AI, process automation, data science, and full-stack solutions.',
      ar: 'ملف أعمال ساري عويض السلمي، محلل بيانات ومهندس أنظمة ذكاء اصطناعي في المملكة العربية السعودية: ذكاء اصطناعي، أتمتة العمليات، علم البيانات وحلول Full-Stack.',
    },
    keywords: [
      'Sari Alsulami',
      'Data Analyst',
      'Business Intelligence',
      'Power BI',
      'SQL',
      'Python',
      'Excel',
      'Data Science',
      'Data Engineering',
      'Machine Learning',
      'LLM',
      'RAG',
      'Saudi Arabia',
      'محلل بيانات',
      'ذكاء الأعمال',
    ],
  },
};
