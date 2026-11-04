export const projects = [
  {
    id: 'tutorfind', number: '01', name: 'TutorFind', type: 'Application', status: 'Academic project', year: '2025',
    summary: 'A multi-user tutoring platform concept that connects students with tutors and gives prospective tutors a way to apply.',
    description: 'TutorFind was developed as an academic project. The Android client was built in Java, with an ASP.NET / .NET Framework backend and a MySQL database managed through SQL Server Management Studio tooling in the development workflow.',
    stack: ['Java', 'Android Studio', 'ASP.NET', '.NET Framework', 'MySQL'],
    features: ['Student-facing tutor discovery flow', 'Application path for users who want to become tutors', 'Database-backed application structure'],
    challenge: 'A key development challenge involved resolving database connectivity. I worked through driver dependencies and connection-string configuration to get the application communicating with its database.',
    learning: 'The project strengthened my understanding of how a mobile client, server-side application and relational database fit together.'
  },
  {
    id: 'vhutali', number: '02', name: 'Vhutali Publishing House', type: 'Website', status: 'Personal project', year: '2026',
    summary: 'A multi-page website concept for a publishing brand, with book catalogue, service information and contact pathways.',
    description: 'A responsive business website built with HTML, CSS and JavaScript. The experience is organised around the publishing brand, its books and its services, with clear navigation and enquiry pathways.',
    stack: ['HTML', 'CSS', 'JavaScript', 'Responsive design'],
    features: ['Multi-page information architecture', 'Book catalogue presentation', 'Responsive navigation', 'Contact and enquiry pathways'],
    challenge: 'The focus was to create a coherent brand experience across multiple pages while keeping navigation understandable on smaller screens.',
    learning: 'This project gave me practical experience translating a business identity into a structured, responsive web presence.'
  },
  {
    id: 'taskflow', number: '03', name: 'TaskFlow', type: 'Interface', status: 'Frontend prototype', year: '2025',
    summary: 'A static project-management dashboard exploring how key work information can be presented in one place.',
    description: 'TaskFlow is a frontend dashboard prototype built with HTML and CSS. It explores a project overview with summary statistics, deadlines, an active-projects table, activity feed and task list. It is a visual prototype, not a connected project-management product.',
    stack: ['HTML', 'CSS', 'Dashboard UI'],
    features: ['Overview statistics', 'Project and deadline layout', 'Activity feed concept', 'Task list presentation'],
    challenge: 'The main design challenge was arranging several information types into a dashboard that remains scannable instead of feeling crowded.',
    learning: 'The work developed my understanding of layout hierarchy, reusable visual patterns and dashboard information density.'
  },
  {
    id: 'medicare', number: '04', name: 'MediCare', type: 'Interface', status: 'Concept / prototype', year: '2025',
    summary: 'A healthcare interface concept centred on patient information and appointment-management workflows.',
    description: 'MediCare is presented here as an interface concept for healthcare appointment and patient-management workflows. Implementation details and connected services should be confirmed before presenting it as a fully operational application.',
    stack: ['UI design', 'Web interface'],
    features: ['Patient information interface concept', 'Appointment workflow concept', 'Healthcare-oriented information layout'],
    challenge: 'The design problem is to make essential patient and appointment information easy to locate without overwhelming the user.',
    learning: 'The concept encouraged me to think about clarity, consistency and the importance of careful information presentation in service interfaces.'
  },
  {
    id: 'web-foundations', number: '05', name: 'Responsive Web Project', type: 'Website', status: 'Academic project', year: '2023–2024',
    summary: 'An early web-development project using HTML, CSS and Bootstrap, alongside introductory React component concepts.',
    description: 'A second-year web development project focused on responsive page structure and styling. It formed part of my progression from foundational frontend development towards component-based interfaces.',
    stack: ['HTML', 'CSS', 'Bootstrap', 'React fundamentals'],
    features: ['Responsive page layout', 'Bootstrap-based styling', 'Introduction to component thinking'],
    challenge: 'The project required translating page requirements into a layout that could adapt across screen sizes.',
    learning: 'It established a foundation in semantic markup, responsive styling and the value of breaking interfaces into manageable pieces.'
  }
]

export const skillGroups = [
  { title: 'Languages', items: ['Java', 'C#', 'JavaScript', 'Python', 'SQL', 'HTML', 'CSS', 'R'] },
  { title: 'Frameworks & web', items: ['React.js', 'ASP.NET', '.NET Framework', 'Bootstrap'] },
  { title: 'Data & tools', items: ['MySQL', 'SQL Server Management Studio', 'Git', 'Android Studio', 'Visual Studio', 'VS Code'] },
  { title: 'Professional toolkit', items: ['Microsoft Excel', 'Microsoft Word', 'PowerPoint', 'Technical communication', 'Problem solving'] }
]

export const certifications = [
  { name: 'Microsoft Certified: Power BI Data Analyst Associate', issuer: 'Microsoft', note: 'Credential title supplied for portfolio draft; verify current credential status and exact badge URL.' },
  { name: 'Microsoft Certified: Azure AI Engineer Associate', issuer: 'Microsoft', note: 'Credential title supplied for portfolio draft; verify current credential status and exact badge URL.' },
  { name: 'Microsoft Certified: DevOps Engineer Expert', issuer: 'Microsoft', note: 'Credential title supplied for portfolio draft; verify current credential status and exact badge URL.' },
  { name: 'AZ-305 — Designing Microsoft Azure Infrastructure Solutions', issuer: 'Microsoft', note: 'AZ-305 is an exam designation. Confirm whether you hold the associated certification before publishing this as a credential.' },
  { name: 'Google Cybersecurity Certificate', issuer: 'Google / Coursera', note: 'Add certificate verification link when available.' },
  { name: 'Introduction to Cybersecurity', issuer: 'Cisco Networking Academy', note: 'Add certificate verification link when available.' },
  { name: 'NDG Linux Unhatched', issuer: 'Cisco Networking Academy', note: 'Add certificate verification link when available.' },
  { name: 'Introduction to IoT', issuer: 'Cisco Networking Academy', note: 'Add certificate verification link when available.' }
]
