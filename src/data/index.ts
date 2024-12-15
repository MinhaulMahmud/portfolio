import { Project, Education, Experience, Skill, Certification, Award, Volunteer, Interest } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: 'Contact Management Application',
    description: 'A full-stack application for managing contacts with CRUD operations.',
    technologies: ['LARAVEL', 'SQL' ,'Bootstrap'],
    githubUrl: 'https://github.com/MinhaulMahmud/contact_app.git',
    image: 'src/assets/Contact.png',
  },
  {
    id: 2,
    title: 'Task Management Application',
    description: 'A productivity tool for organizing and tracking tasks.',
    technologies: ['LARAVEL', 'SQL' ,'Bootstrap', 'Vue.js'],
    githubUrl: 'https://github.com/MinhaulMahmud/Task-Management-App.git',
    image: 'src/assets/Task.png',
  },
  {
    id: 3,
    title: 'Excel File Editor',
    description: 'Desktop application for editing CSV and Excel files.',
    technologies: ['Python', 'Tkinter', 'Pandas'],
    githubUrl: 'https://github.com/MinhaulMahmud/CSV-Editor-using-python-TKINTER.git',
    image: 'src/assets/Excel.png',
  },
  {
    id: 4,
    title: 'Spectacles Detection',
    description: 'Computer vision application for detecting glasses using face recognition.',
    technologies: ['Python', 'OpenCV', 'MTCNN'],
    githubUrl: 'https://github.com/MinhaulMahmud/glass_det-with-MTCNN.git',
    image: 'src/assets/Spectacles.png',

  },
  {
    id: 5,
    title: 'License Plate Detection',
    description: 'Custom object detection system for license plates and car windows.',
    technologies: ['YOLOv8', 'Python', 'OpenCV'],
    githubUrl: 'https://github.com/MinhaulMahmud/Licenseplate_and_car_window_detection_using_YOLOv8m-seg.git',
    image: 'src/assets/License.png'  },
  {
    id: 6,
    title: 'OMR Sheet Evaluation',
    description: 'Detection and evaluation system for OMR sheets.',
    technologies: ['OpenCV', 'EasyOCR', 'Python'],
    githubUrl: 'https://github.com/MinhaulMahmud/OMR_det_opencv.git',
    image: 'src/assets/OMR.png',
  }
];

export const education: Education[] = [
  {
    id: 1,
    degree: 'B.Sc. in Computer Science & Engineering',
    institution: 'Premier University',
    year: '2024',
    location: 'Chattogram, Bangladesh',
  },
  {
    id: 2,
    degree: 'HSC',
    institution: 'Govt. Chattogram Biggan College',
    year: '2019',
    location: 'Chattogram, Bangladesh',
  },
  {
    id: 3,
    degree: 'SSC',
    institution: 'Bakalia High School',
    year: '2016',
    location: 'Chattogram, Bangladesh',
  },
  // {
  //   id: 4,
  //   degree: 'JSC',
  //   institution: 'Bakalia High School',
  //   year: '2013',
  //   location: 'Chattogram, Bangladesh',
  // },
  // {
  //   id: 5,
  //   degree: 'PSC',
  //   institution: 'Wapda Colony Primary School',
  //   year: '2010',
  //   location: 'Chattogram, Bangladesh',
  // }
];

export const experiences: Experience[] = [
  {
    id: 1,
    title: 'Cloud Computing Seminar',
    organization: 'Tech Community',
    date: '2023',
    description: 'Attended a comprehensive seminar on Cloud Computing with Kubernetes.',
    type: 'seminar'
  },
  {
    id: 2,
    title: 'Chattogram Metro Rail Survey',
    organization: 'KOICA & TPA',
    date: '2024- Running',
    description: 'Participated in Stated Preference and Household surveys for the Metro Rail project.',
    type: 'research'
  },
  {
    id: 3,
    title: 'Sports Tournament Management',
    organization: 'University Sports Committee',
    date: '2022-2023',
    description: 'Organized and managed multiple football and cricket tournaments.',
    type: 'leadership'
  }
];

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Web Development with PHP & Laravel',
    issuer: 'Ostad Limited',
    date: '2024',
    // url: 'https://example.com/cert1',
  },
  {
    id: 2,
    title: 'Machine Learning Specialization',
    issuer: 'Coursera',
    date: '2023',
    // url: 'https://example.com/cert2',
  }
];

export const volunteer: Volunteer[] = [
  {
    id: 1,
    organization: 'Tech for Education',
    role: 'Programming Mentor',
    period: '2022',
    description: 'Teaching programming fundamentals to underprivileged students.',
  },
  {
    id: 2,
    organization: 'Local Developer Community',
    role: 'Event Organizer',
    period: '2021 - 2023',
    description: 'Organizing workshops and meetups for local developers.',
  }
];