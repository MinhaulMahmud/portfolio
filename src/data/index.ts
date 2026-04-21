import { Project, Education, Experience, Certification, Research } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Safar Al Barakah Website',
    description: 'Business website with Google Maps API for location services and a one-click WhatsApp messaging system for rapid sales generation.',
    technologies: ['Next.js', 'React', 'Google Maps API', 'WhatsApp Integration'],
    liveUrl: 'https://www.safaralbarakah.com',
    featured: true,
  },
  {
    id: 2,
    title: 'Nextep — Premium Furniture & Events',
    description: 'Full-stack e-commerce platform for furniture and event management with product catalog, service booking system, and responsive design.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Radix UI'],
    liveUrl: 'https://www.nextepbd.com',
    featured: true,
  },
  {
    id: 3,
    title: 'ALAAZ ALSAH Restaurant POS System',
    description: 'Full POS with customer ordering, admin dashboard, sales analytics, inventory tracking, role-based access & CSRF protection.',
    technologies: ['Laravel', 'SQLite/MySQL', 'Blade', 'Tailwind CSS', 'JavaScript'],
    githubUrl: 'https://github.com/MinhaulMahmud/RestaurantPOS',
  },
  {
    id: 4,
    title: 'Car Rentals Platform',
    description: 'Multi-role car rental platform (Customer, Owner, Fleet Provider, Admin) with role dashboards, car CRUD, and booking/cost calculation.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Blade', 'Bootstrap', 'Tailwind CSS'],
    githubUrl: 'https://github.com/MinhaulMahmud/Car-Rental-App.git',
  },
  {
    id: 5,
    title: 'License Plate & Car Window Detection',
    description: 'Custom object detection system for license plates and car windows using instance segmentation.',
    technologies: ['YOLOv8m-seg', 'Python', 'OpenCV', 'NumPy', 'Ultralytics'],
    githubUrl: 'https://github.com/MinhaulMahmud/Licenseplate_and_car_window_detection_using_YOLOv8m-seg.git',
    image: './License.png',
  },
  {
    id: 6,
    title: 'Spectacles Detection using Face Recognition',
    description: 'Detects and classifies faces with spectacles using MTCNN and ML algorithms.',
    technologies: ['Python', 'OpenCV', 'MTCNN', 'Scikit-learn'],
    githubUrl: 'https://github.com/MinhaulMahmud/glass_det-with-MTCNN.git',
    image: './Spectacles.png',
  },
  {
    id: 7,
    title: 'OMR Sheet Detection & Evaluation',
    description: 'Automated system for OMR sheet detection and mark evaluation using computer vision.',
    technologies: ['Python', 'OpenCV', 'rembg', 'EasyOCR'],
    githubUrl: 'https://github.com/MinhaulMahmud/OMR_det_opencv.git',
    image: './OMR.png',
  },
  {
    id: 8,
    title: 'Contact Management Application',
    description: 'A full-stack application for managing contacts with CRUD operations.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    githubUrl: 'https://github.com/MinhaulMahmud/contact_app.git',
    image: './Contact.png',
  },
  {
    id: 9,
    title: 'Laravel REST API JWT Authentication',
    description: 'Explored JWT token-based authentication and implemented REST API integration in a Laravel project.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'JWT', 'Firebase JWT'],
    githubUrl: 'https://github.com/MinhaulMahmud/Laravel-REST-API-JWT-Authentication',
  },
  {
    id: 10,
    title: 'Task Management Application',
    description: 'A productivity tool for organizing and tracking tasks.',
    technologies: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    githubUrl: 'https://github.com/MinhaulMahmud/Task-Management-App.git',
    image: './Task.png',
  },
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Premier University',
    year: '2025',
    location: 'Chattogram, Bangladesh',
  },
  {
    id: 2,
    degree: 'Higher Secondary School Certificate (HSC)',
    institution: 'Chattogram Biggan Collage',
    year: '2019',
    location: 'Chattogram, Bangladesh',
  },
  {
    id: 3,
    degree: 'Secondary School Certificate (SSC)',
    institution: 'Bakalia High School',
    year: '2016',
    location: 'Chattogram, Bangladesh',
  },
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Senior Executive – IT',
    company: 'Safar Al Barakah, Chattogram',
    duration: 'July 2025 – November 2025',
    responsibilities: [
      'Built, updated, and maintained the company website',
      'Managed online ticketing systems, ensuring smooth operations',
      'Maintained and organized client data for efficient access and security',
      'Analyzed client data to support business decision-making',
    ],
  },
  {
    id: 2,
    title: 'Executive Operations',
    company: 'Asprinning Bangladesh, Chattogram',
    duration: 'January 2025 – May 2025',
    responsibilities: [
      'Maintained and managed student portal operations',
      'Handled documentation and digital record management',
      'Provided technical support and computer device troubleshooting',
      'Assisted in IT infrastructure maintenance',
    ],
  },
  {
    id: 3,
    title: 'Field Survey Specialist',
    company: 'Transport Professionals Alliance (TPA), Chattogram',
    duration: 'September 2024 – November 2024',
    responsibilities: [
      'Surveyed over 300 households across Chattogram with a 95% response rate',
      'Analyzed and documented transportation patterns of 700+ residents',
      'Contributed key insights that influenced Metro Rail project planning',
    ],
  },
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Web Development with PHP & Laravel',
    issuer: 'Ostad Limited',
    date: '2024',
    description: 'Mastered Laravel architecture, web terminology, HTML, CSS, and responsive web design. Developed strong backend skills with the Laravel framework.',
  },
  {
    id: 2,
    title: 'Data Analysis with Python & Pandas',
    issuer: 'Coursera — University of Michigan',
    date: '2023',
    description: 'Mastered Python libraries (NumPy, Pandas, Matplotlib) for data manipulation and visualization. Completed advanced projects like sales trend analysis.',
  },
];

export const research: Research[] = [
  {
    id: 1,
    title: 'Sport Sentiment Analysis of Twitter(X) Posts And YouTube Comments Using Machine Learning Algorithm',
    type: 'publication',
    venue: 'IEEE — QPAIN 2025',
    doi: '10.1109/QPAIN66474.2025.11171758',
    link: 'https://ieeexplore.ieee.org/document/11171758',
    focus: 'Natural Language Processing (NLP)',
    year: '2025',
  },
  {
    id: 2,
    title: 'Enhancing Network Intrusion Detection with Ensemble Learning',
    type: 'paid',
    link: 'https://www.linkedin.com/posts/minhazul-mahmud_networksecurity-cybersecurity-intrusiondetection-activity-7327913740648009728-A-N5/',
    focus: 'Network Security & Cybersecurity',
    year: '2025',
  },
];