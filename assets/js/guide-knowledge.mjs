// Keep answers grounded in the public resume; do not add confidential or unconfirmed details.
export const topics = [
  {
    id: 'overview', label: 'About Suprabhat', question: 'Tell me about Suprabhat.',
    keywords: [['who is suprabhat', 9], ['about suprabhat', 9], ['about yourself', 8], ['introduce yourself', 8], ['summary', 5], ['background', 5]],
    answer: 'Suprabhat Kumar is a Software Engineer at Microsoft in Noida, India. His work spans distributed cloud systems, Windows platform modernization, and AI-assisted developer tools. Before Microsoft, he worked at BlogVault and interned in conversational AI at IIT Patna. He holds a B.Tech in Computer Science from NIT Patna.',
    links: [{ label: 'Explore his journey', href: '#about' }, { label: 'Download resume', href: 'assets/Suprabhat_Kumar_Resume.pdf' }]
  },
  {
    id: 'microsoft', label: 'Microsoft role', question: 'What does he work on at Microsoft?',
    keywords: [['microsoft', 4], ['current role', 8], ['current job', 8], ['current company', 8], ['work now', 8], ['working now', 8], ['employer', 6]],
    answer: 'Suprabhat has been a Software Engineer at Microsoft since January 2022, working on Azure cloud services and Windows OS. His contributions include cross-region Redis infrastructure, AI-powered verification with CraftGuard, modernizing Windows shell surfaces, production telemetry, and repository remediation automation.',
    links: [{ label: 'View Microsoft case studies', href: '#work' }]
  },
  {
    id: 'experience', label: 'Career journey', question: 'Walk me through his work experience.',
    keywords: [['work experience', 9], ['professional experience', 9], ['years of experience', 9], ['experience', 2], ['career', 6], ['employment', 6], ['previous roles', 8], ['past jobs', 8]],
    answer: 'His journey: Microsoft, Software Engineer (Jan 2022-present); BlogVault, Software Engineer in backend and distributed storage (Jan-Dec 2021); and IIT Patna, Software Engineering Intern in conversational AI (May-Jul 2020). He studied Computer Science at NIT Patna from 2017 to 2021.',
    links: [{ label: 'View the career timeline', href: '#about' }]
  },
  {
    id: 'cloud', label: 'Cloud systems', question: 'Tell me about his distributed systems work.',
    keywords: [['redis', 9], ['etcd', 9], ['postgresql', 8], ['postgres', 8], ['distributed systems', 9], ['distributed infrastructure', 9], ['caching', 7], ['geo redundancy', 9], ['leader election', 8], ['failover', 7], ['cloud', 5], ['database', 5], ['databases', 5]],
    answer: 'At Microsoft, Suprabhat architected asynchronous Redis geo-redundancy across cloud regions for an enterprise workload of 10M+ daily reads with sub-millisecond latency. He integrated Etcd leader election, coordination, and service discovery for automated failover, and deployed containerized PostgreSQL with high-availability replication and write-optimized indexing.',
    links: [{ label: 'Read the infrastructure case study', href: '#project-cloud' }]
  },
  {
    id: 'craftguard', label: 'CraftGuard', question: 'What is CraftGuard?',
    keywords: [['craftguard', 10], ['craft guard', 10], ['design review', 9], ['design audits', 9], ['wcag', 9], ['computer vision', 7], ['rag', 6], ['azure ai foundry', 8], ['ai verification', 9], ['accessibility review', 8]],
    answer: 'CraftGuard is an AI-powered systems verification project at Microsoft. Suprabhat designed an asynchronous pipeline combining Azure AI Foundry LLM reasoning over RAG with computer vision heuristics for WCAG and WinUI 3 design review. It pairs a FastAPI backend with a native C# Windows client and reduced manual design audits by 40-60%.',
    links: [{ label: 'Explore CraftGuard', href: '#project-ai' }]
  },
  {
    id: 'ai', label: 'AI & developer tools', question: 'What is his experience with AI?',
    keywords: [['ai', 5], ['artificial intelligence', 9], ['llm', 8], ['llms', 8], ['ai experience', 9], ['machine learning', 7], ['developer workflows', 8], ['github copilot', 10], ['copilot', 8], ['mcp', 8], ['cursor', 8]],
    answer: 'His AI work includes CraftGuard, which combines LLM reasoning over RAG with computer vision for design verification, and a PyTorch conversational dialogue engine built during his IIT Patna internship. At Microsoft, he also standardized developer workflows using Cursor and GitHub Copilot, with MCP integrations, structured prompt guardrails, and problem decomposition.',
    links: [{ label: 'Explore CraftGuard', href: '#project-ai' }, { label: 'View his career journey', href: '#about' }]
  },
  {
    id: 'windows', label: 'Windows engineering', question: 'What has he built for Windows?',
    keywords: [['windows', 8], ['winui', 8], ['winui 3', 9], ['win32', 8], ['winrt', 8], ['comctl32', 9], ['shell', 6], ['copy dialog', 9], ['file properties', 9], ['dark mode', 8], ['telemetry', 8], ['native desktop', 8]],
    answer: 'Suprabhat modernized Windows shell surfaces including File Properties, Copy Dialog, and Confirmation Dialog from legacy Comctl32 to WinUI 3. His work includes native dark mode, touch accessibility, and volume device routing. He also built C#/.NET and C++ production telemetry to track reliability and performance across staged rollout rings and millions of active endpoints.',
    links: [{ label: 'View the Windows case study', href: '#project-windows' }]
  },
  {
    id: 'automation', label: 'Engineering automation', question: 'Tell me about his automation work.',
    keywords: [['automation', 8], ['remediation', 9], ['dependencies', 8], ['dependency', 8], ['repositories', 6], ['production repos', 9], ['azure devops', 8], ['ado', 8], ['ci cd', 7], ['pipelines', 5], ['security drift', 9]],
    answer: 'Suprabhat engineered an event-driven remediation platform using FastAPI and Azure DevOps Pipelines. It continuously audits 100+ production repositories, identifying and patching vulnerable dependencies and security drift. He also standardized AI-assisted development practices using MCP integrations, structured prompt guardrails, and problem-decomposition workflows.',
    links: [{ label: 'Explore the automation platform', href: '#project-automation' }]
  },
  {
    id: 'secrets', label: 'Azure identity & secrets', question: 'What is his experience with Azure security?',
    keywords: [['key vault', 10], ['secrets', 8], ['managed identity', 10], ['credentials', 8], ['csi driver', 10], ['azure security', 9], ['aks', 5], ['kubernetes', 5]],
    answer: 'At Microsoft, Suprabhat replaced hardcoded credentials and static keys by integrating Azure Key Vault Secrets Store CSI Driver with User-Assigned Managed Identity on AKS. He established unified Azure CLI workflows across local development and cloud runtimes.',
    links: [{ label: 'Explore his cloud work', href: '#work' }]
  },
  {
    id: 'blogvault', label: 'BlogVault', question: 'What did he do at BlogVault?',
    keywords: [['blogvault', 10], ['blog vault', 10], ['wordpress', 9], ['ruby', 7], ['rails', 7], ['php', 7], ['asset optimization', 9], ['page loading', 8], ['origin server', 8]],
    answer: 'At BlogVault (Jan-Dec 2021), Suprabhat built backend microservices and asset optimization engines using Ruby on Rails and PHP/MySQL. His work improved page loading speeds by 25% and reduced origin server load by 35%, with edge caching, asset aggregation, and database/Redis optimizations for multi-tenant backup pipelines.',
    links: [{ label: 'Read his experience', href: '#about' }]
  },
  {
    id: 'internship', label: 'Conversational AI research', question: 'Tell me about his IIT Patna internship.',
    keywords: [['iit patna', 10], ['internship', 8], ['intern', 6], ['conversational ai', 9], ['dialogue', 8], ['shopping intents', 9], ['pytorch', 6]],
    answer: 'During his Software Engineering internship at IIT Patna (May-Jul 2020), Suprabhat developed a task-oriented conversational dialogue engine in PyTorch. It parsed shopping intents and slot constraints, queried inventory through database hooks, and synthesized context-grounded responses.',
    links: [{ label: 'View his career journey', href: '#about' }]
  },
  {
    id: 'education', label: 'Education', question: 'Where did he study?',
    keywords: [['education', 9], ['nit patna', 10], ['college', 8], ['university', 8], ['degree', 8], ['cgpa', 9], ['graduated', 7], ['study', 6], ['studied', 6], ['academic', 7]],
    answer: 'Suprabhat earned a Bachelor of Technology in Computer Science and Engineering from the National Institute of Technology, Patna, from 2017 to 2021. His CGPA was 8.66/10.',
    links: [{ label: 'View education and experience', href: '#about' }]
  },
  {
    id: 'achievements', label: 'Achievements', question: 'What are his achievements?',
    keywords: [['achievements', 9], ['awards', 7], ['honors', 7], ['codeforces', 10], ['competitive programming', 10], ['rating', 6], ['algorithmic', 7], ['800', 6], ['hackathon', 5], ['national finalist', 8]],
    answer: 'Suprabhat has a peak Codeforces rating of 1700+ and has solved 800+ algorithmic problems. He was a Smart India Hackathon 2020 national finalist among 10,000+ engineering teams. At Microsoft, he has owned Tier-1 Windows feature release cycles from native development through staged retail rollout rings.',
    links: [{ label: 'Explore his background', href: '#about' }]
  },
  {
    id: 'skills', label: 'Technical skills', question: 'What technologies does he use?',
    keywords: [['skills', 9], ['technologies', 9], ['tech stack', 10], ['programming languages', 10], ['languages', 6], ['python', 7], ['fastapi', 5], ['cpp', 7], ['csharp', 7], ['dotnet', 7], ['golang', 7], ['sql', 6], ['docker', 5], ['technical strengths', 9]],
    answer: 'His public resume lists Python/FastAPI, C++, C#/.NET Core, SQL, Bash, and Go; Redis, Etcd, PostgreSQL, Docker, and Kubernetes/AKS; Azure, Key Vault, and CI/CD; plus WinUI 3, Win32/WinRT, Azure AI Foundry, RAG, PyTorch, and computer vision. Skills not listed here are not confirmed by this guide.',
    links: [{ label: 'See the toolkit', href: '#about' }, { label: 'Download full resume', href: 'assets/Suprabhat_Kumar_Resume.pdf' }]
  },
  {
    id: 'projects', label: 'Selected projects', question: 'What projects should I explore?',
    keywords: [['projects', 6], ['project', 4], ['portfolio', 5], ['selected work', 9], ['case studies', 9], ['best work', 9], ['what has he built', 4]],
    answer: 'Start with four professional case studies: cross-region cloud infrastructure, CraftGuard AI verification, Windows platform modernization, and repository remediation automation. For public source code, explore his Sanskriti Android application and RAX-based data encryption project. Professional case studies are public resume summaries, not internal source code.',
    links: [{ label: 'Browse selected work', href: '#work' }, { label: 'Visit GitHub', href: 'https://github.com/suprabhatkr' }]
  },
  {
    id: 'sanskriti', label: 'Sanskriti', question: 'What is the Sanskriti project?',
    keywords: [['sanskriti', 10], ['android', 8], ['monuments', 8], ['monument', 8], ['tourism', 8], ['indian culture', 9], ['smart india hackathon', 8], ['sih', 6]],
    answer: 'Sanskriti is an Android application built during Smart India Hackathon 2020. It explores Indian culture through multilingual content and text-to-speech, supports hotel and cab discovery, and recognizes monuments using image recognition.',
    links: [{ label: 'Explore the public repository', href: 'https://github.com/sihnitp/BC76_TimeTraveller_RKGIT' }]
  },
  {
    id: 'encryption', label: 'Data encryption', question: 'Tell me about the encryption project.',
    keywords: [['encryption', 10], ['rax', 10], ['encrypt', 8], ['cryptography', 7]],
    answer: 'His public Data Encryption project explores encrypting text data using a RAX-based encryption model. The repository is available on GitHub. This is a personal exploration; the guide does not claim that it is a production-audited cryptographic system.',
    links: [{ label: 'View the encryption repository', href: 'https://github.com/suprabhatkr/EncryptionProject' }]
  },
  {
    id: 'contact', label: 'Contact', question: 'How can I contact him?',
    keywords: [['contact', 9], ['email', 9], ['reach out', 9], ['connect', 7], ['get in touch', 10], ['hire', 7], ['recruiter', 6], ['interview', 6]],
    answer: 'You can reach Suprabhat at jnvsuprabh@gmail.com or connect with him on LinkedIn. For a role or engineering opportunity, share the team, scope, and what you would like to discuss. Availability and hiring preferences are best confirmed directly with him.',
    links: [{ label: 'Send an email', href: 'mailto:jnvsuprabh@gmail.com' }, { label: 'Connect on LinkedIn', href: 'https://www.linkedin.com/in/suprabhat-kumar' }]
  },
  {
    id: 'resume', label: 'Resume', question: 'Where can I download his resume?',
    keywords: [['resume', 10], ['cv', 10], ['curriculum vitae', 10]],
    answer: 'You can download Suprabhat Kumar\'s resume below. It includes his Microsoft, BlogVault, and IIT Patna experience, technical skills, education, and achievements.',
    links: [{ label: 'Download resume (PDF)', href: 'assets/Suprabhat_Kumar_Resume.pdf' }]
  },
  {
    id: 'github', label: 'GitHub', question: 'Where can I see his GitHub?',
    keywords: [['github', 10], ['source code', 7], ['public code', 8], ['repositories link', 9]],
    answer: 'His GitHub profile is github.com/suprabhatkr. You can explore his public repositories there. Microsoft internal source code and confidential implementation details are not shared.',
    links: [{ label: 'Visit GitHub', href: 'https://github.com/suprabhatkr' }]
  },
  {
    id: 'linkedin', label: 'LinkedIn', question: 'What is his LinkedIn profile?',
    keywords: [['linkedin', 10], ['linked in', 10]],
    answer: 'You can connect with Suprabhat on LinkedIn at linkedin.com/in/suprabhat-kumar.',
    links: [{ label: 'Open LinkedIn', href: 'https://www.linkedin.com/in/suprabhat-kumar' }]
  },
  {
    id: 'location', label: 'Location', question: 'Where is he based?',
    keywords: [['location', 8], ['based', 7], ['noida', 9], ['where does he live', 9], ['where are you', 8]],
    answer: 'Suprabhat is based in Noida, India. Please contact him directly to discuss location requirements, remote work, or relocation; this guide does not have confirmed preferences.',
    links: [{ label: 'Get in touch', href: '#contact' }]
  }
];

export const suggestedTopics = ['microsoft', 'cloud', 'craftguard', 'skills', 'resume', 'contact'];

export function normalizeQuestion(value) {
  return value.normalize('NFKD').replace(/\p{M}/gu, '').toLowerCase()
    .replace(/c\+\+/g, ' cpp ').replace(/c#/g, ' csharp ').replace(/\.net\b/g, ' dotnet ')
    .replace(/[^a-z0-9]+/g, ' ').trim().replace(/\s+/g, ' ');
}

function oneEditApart(left, right) {
  if (Math.abs(left.length - right.length) > 1) return false;
  let a = 0;
  let b = 0;
  while (a < left.length && b < right.length && left[a] === right[b]) { a++; b++; }
  if (left.length === right.length) {
    return left.slice(a + 1) === right.slice(b + 1)
      || (left[a] === right[b + 1] && left[a + 1] === right[b] && left.slice(a + 2) === right.slice(b + 2));
  }
  return left.length > right.length ? left.slice(a + 1) === right.slice(b) : left.slice(a) === right.slice(b + 1);
}

export function answerQuestion(question) {
  if (typeof question !== 'string') throw new TypeError('The portfolio guide expects a text question.');
  if (!question.trim()) return { kind: 'empty', text: 'Please enter a question about Suprabhat.' };
  if (question.length > 300) return { kind: 'empty', text: 'Please keep your question to 300 characters or fewer.' };
  const normalized = normalizeQuestion(question);
  const padded = ` ${normalized} `;
  if (/\b(salary|compensation|availability|available|notice period|start date|relocation|remote work|phone|mobile number|home address|postal address|residential address|street address|age|married|family)\b/.test(normalized)) {
    return { kind: 'unknown', text: 'I do not have confirmed details about availability, compensation, work preferences, or private personal information. Please ask Suprabhat directly.', topics: ['contact', 'resume'] };
  }
  if (/^(who are you|what are you|are you ai|is this ai|how do you work)$/.test(normalized)) {
    return { kind: 'suggest', text: 'I am a lightweight portfolio guide, not Suprabhat or a generative AI model. I match questions to curated public resume answers, entirely in your browser. I do not send or save chat data.', topics: suggestedTopics };
  }
  if (/^(hi|hello|hey|good morning|good evening|good afternoon|thanks|thank you)$/.test(normalized)) {
    return { kind: 'suggest', text: 'Happy to help! I can guide you through Suprabhat\'s public experience, projects, skills, and contact details. Pick a topic or ask a question.', topics: suggestedTopics };
  }
  const scored = topics.map(topic => ({
    topic,
    score: topic.keywords.reduce((score, [phrase, weight]) => score + (padded.includes(` ${phrase} `) ? (normalized === phrase ? Math.max(4, weight) : weight) : 0), 0)
  }));
  if (!scored.some(result => result.score >= 4)) {
    const words = normalized.split(' ').filter(word => word.length >= 6);
    for (const result of scored) {
      if (result.topic.keywords.some(([phrase, weight]) => weight >= 4 && !phrase.includes(' ') && phrase.length >= 6
        && words.some(word => word !== phrase && word[0] === phrase[0] && oneEditApart(word, phrase)))) result.score = 4;
    }
  }
  scored.sort((left, right) => right.score - left.score);
  const matches = scored.filter(result => result.score >= 4);
  if (!matches.length) return {
    kind: 'unknown',
    text: 'I could not confidently match that to Suprabhat\'s public information. Try a topic below, rephrase your question, or contact him directly. I use curated answers, not a generative AI model.',
    topics: ['projects', 'skills', 'contact']
  };
  if (matches.length > 1 && matches[0].score - matches[1].score < 3) return {
    kind: 'clarify', text: 'That could relate to a few topics. Which would you like to explore?',
    topics: matches.slice(0, 3).map(result => result.topic.id)
  };
  return { kind: 'answer', topic: matches[0].topic };
}
