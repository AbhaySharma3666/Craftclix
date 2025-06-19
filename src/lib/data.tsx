import { Linkedin, Twitter, Instagram } from 'lucide-react';



import LogoJavascript from '/public/images/logos/icon-javascript.svg';
import LogoTypescript from '/public/images/logos/icon-typescript.svg';
import LogoReact from '/public/images/logos/icon-react.svg';
import LogoNextjs from '/public/images/logos/icon-nextjs.svg';
import LogoNodejs from '/public/images/logos/icon-nodejs.svg';
import LogoExpress from '/public/images/logos/icon-express.svg';
import LogoExpressLight from '/public/images/logos/icon-express-light.svg';
import LogoNest from '/public/images/logos/icon-nest.svg';
import LogoSocket from '/public/images/logos/icon-socket.svg';
import LogoSocketLight from '/public/images/logos/icon-socket-light.svg';
import LogoPostgreSQL from '/public/images/logos/icon-postgresql.svg';
import LogoMongoDB from '/public/images/logos/icon-mongodb.svg';
import LogoSass from '/public/images/logos/icon-sass.svg';
import LogoTailwindcss from '/public/images/logos/icon-tailwindcss.svg';
import LogoFigma from '/public/images/logos/icon-figma.svg';
import LogoCypress from '/public/images/logos/icon-cypress.svg';
import LogoCypressLight from '/public/images/logos/icon-cypress-light.svg';
import LogoStorybook from '/public/images/logos/icon-storybook.svg';
import LogoGit from '/public/images/logos/icon-git.svg';

import LogoUpwork from '/public/images/logos/logo-upwork.svg';
import LogoFree from '/public/images/logos/logo-freelancer.svg';
import LogoFreelight from '/public/images/logos/freelancer-light.png';

import Anon from '/public/images/Anon.png';
import Doctor from '/public/images/Doctor.png';


// import AvatarKrisztian from '/public/images/avatar-krisztian.png';
// import AvatarEugen from '/public/images/avatar-eugen.png';
import AvatarDummy from '/public/images/avatar-dummy.svg';

import {
  ExperienceDetails,
  ProjectDetails,
  TechDetails,
  TestimonialDetails,
} from '@/lib/types';

export const EXTERNAL_LINKS = {
  Insta: 'https://Instagram.com',
  LinkDN: 'https://in.linkedin.com/',
  TWITTER: 'https://twitter.com',
};

export const NAV_LINKS = [
  {
    label: 'About',
    href: '#about',
  },
  {
    label: 'Work',
    href: '#work',
  },
  {
    label: 'Testimonials',
    href: '#testimonials',
  },
  {
    label: 'Contact',
    href: '#contact',
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Linkedin,
    url: 'https://in.linkedin.com/',
  },
  {
    icon: Twitter,
    url: 'https://x.com/',
  },
  {
    icon: Instagram,
    url: 'https://Instagram.com',
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  {
    label: 'Javascript',
    logo: LogoJavascript,
    url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
  },
  {
    label: 'Typescript',
    logo: LogoTypescript,
    url: 'https://www.typescriptlang.org/',
  },
  {
    label: 'React',
    logo: LogoReact,
    url: 'https://react.dev/',
  },
  {
    label: 'Next.js',
    logo: LogoNextjs,
    url: 'https://nextjs.org/',
  },
  {
    label: 'Node.js',
    logo: LogoNodejs,
    url: 'https://nodejs.org/en',
  },
  {
    label: 'Express.js',
    logo: LogoExpress,
    darkModeLogo: LogoExpressLight,
    url: 'https://expressjs.com/',
  },
  {
    label: 'Nest.js',
    logo: LogoNest,
    url: 'https://nestjs.com/',
  },
  {
    label: 'Socket.io',
    logo: LogoSocket,
    darkModeLogo: LogoSocketLight,
    url: 'https://socket.io/',
  },
  {
    label: 'PostgreSQL',
    logo: LogoPostgreSQL,
    url: 'https://www.postgresql.org/',
  },
  {
    label: 'MongoDB',
    logo: LogoMongoDB,
    url: 'https://www.mongodb.com/',
  },
  {
    label: 'Sass/Scss',
    logo: LogoSass,
    url: 'https://sass-lang.com/',
  },
  {
    label: 'Tailwindcss',
    logo: LogoTailwindcss,
    url: 'https://tailwindcss.com/',
  },
  
  {
    label: 'Git',
    logo: LogoGit,
    url: 'https://git-scm.com/',
  },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoFree,
    darkModeLogo: LogoFreelight,
    logoAlt: 'Freelance logo',
    position: 'Freelance & Professional Experience',
    startDate: new Date(2024, 9),
    currentlyWorkHere: true,
    summary: [
      'UI/UX Design',
      'Maintenance & Support',
      'Time & Budget Management',
      'Self-Learning & Adaptability',
    ],
    description:
      'Before officially launching as a software agency, we built our foundation through year of hands-on freelance development work.',
    
  },
  {
    logo: LogoUpwork,
    logoAlt: 'Upworks logo',
    position: 'Team Lead',
    startDate: new Date(2017, 6),
    endDate: new Date(2021, 9),
    summary: [
      'Custom Website Development: Tailored web solutions from portfolios to dynamic platforms, using HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB.',
      'Client Communication: Skilled at translating non-technical client visions into functional digital products.',
      'Agile Workflow: Practiced agile methods, working in small teams or independently to plan sprints and deliver iterative progress.',
      'Project Delivery: Delivered 5+ projects across e-commerce, healthcare, education, real estate, and personal branding.',
    ],
    description:
      ' Key Areas of Freelance Expertise:',
  },
];








export const PROJECTS: ProjectDetails[] = [
  {
    name: 'Anon',
    description:
      'An E-Commerce Website – Anon, this is a fully responsive and modern e-commerce website. This project demonstrates our ability to create elegant front-end user interfaces for commercial businesses, providing a smooth online shopping experience.',
    url: 'https://codewithsadee.github.io/anon-ecommerce-website',
    previewImage: Anon,
    technologies: [
      'React',
      'Javascript',
      'React Bootstrap',
      'Firebase',
      'Express.js',
      'PostgreSQL',
      'Styled Components',
      'Redux',
      'SEO',
    ],
  },
  {
    name: 'DoctorOnCall',
    description:
      'Doctor Appointment Booking System – DoctorOnCall is a dynamic, user-friendly medical appointment booking platform.This project reflects our experience in the health tech domain, combining usability and practicality for real-world needs.',
    url: 'https://doctoroncall-bd.netlify.app',
    previewImage: Doctor,
    technologies: [
      'React',
      'Next.js', 
      'PostgreSQL',
      'Firebase',
      'AWS Amplify',
      'Cypress',
      'Storybook',

      'Tailwindcss',
      'Redux Toolkit',
      'Express.js',
    ],
  },

];

export const TESTIMONIALS: TestimonialDetails[] = [
  {
    personName: 'Dr. B.R.A',
    personAvatar: AvatarDummy,
    title: 'Director – DoctorOnCall',
    testimonial:
      'Stark Infotech brought our doctor appointment system to life with an intuitive, seamless platform. Their team was responsive, skilled, and great to work with.',
  },
  {
    personName: 'K. Sethi',
    personAvatar: AvatarDummy,
    title: 'Founder – Fashna',
    testimonial:
      'Stark Infotech turned our e-com idea into a sleek, user-friendly platform. Fast load time, clean design, and sharp UI/UX boosted user engagement.',
  },
  {
    personName: 'Jay Sharma',
    personAvatar: AvatarDummy,
    title: 'Brand Manager – Urban Threads',
    testimonial:
      'Stark Infotech built a fast, mobile-ready e-com site that fit our vision. Clean layout, smooth flow, and pro work made the user journey better.',
  },
  {
    personName: 'S.A',
    personAvatar: AvatarDummy,
    title: 'Product Lead – ShopWise',
    testimonial:
      'Stark Infotech built our online store with top focus on flow and mobile fit. Easy teamwork helped us move fast—great pick for any online biz.',
  },
  {
    personName: 'Dr. Meera Joshi',
    personAvatar: AvatarDummy,
    title: 'Co-Founder, HealthEase Clinic',
    testimonial:
      'We aimed to simplify patient-doc flow, and Stark Infotech nailed it! Real-time backend + friendly UI = pro work and on-time launch.',
  },
];
