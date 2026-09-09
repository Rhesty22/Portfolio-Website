import fishingMinigameVideo from '../assets/videos/Fishing Minigame.mp4';
import fishingMinigameGameplayImage from '../assets/images/Fishing Minigame Gameplay.jpg';
import fishingMinigameGameplaySampleImage from '../assets/images/Fishing Minigame Gameplay sample.jpg';
import fishingMinigameShopImage from '../assets/images/Fishing Minigame Shop.png';
import dinotenVideo from '../assets/videos/Dinoten Gameplay.mp4';
import dinotenIconImage from '../assets/images/Dinoten Change Icon and Name.png';
import dinotenGameplayImage from '../assets/images/Dinoten gameplay.png';
import dinotenHomeImage from '../assets/images/Dinoten Home.png';
export const portfolioData = {
  personal: {
    name: 'Adormeo Rhesty',
    title: 'Studying Game Development',
    description: 'I build fast, scalable web applications from polished frontends to robust backend services and deployment workflows.',
    email: 'adormeorhesty@gmail.com',
    phone: '+63 (917) 000-0000',
    location: 'Philippines',
    role: 'Full Stack Developer',
  },

  projects: [
    {
      id: 4,
      title: 'DINOTEN',
      description: 'Developed a top-down survival game in Unity where players battle enemies, gather resources, and survive escalating challenges.',
      video: dinotenVideo,
      mediaImages: [dinotenGameplayImage, dinotenHomeImage, dinotenIconImage],
      technologies: ['Game Development', 'Unity', 'C#', 'Top-Down Survival'],
      link: '#',
      github: '#',
    },
    {
      id: 5,
      title: 'Fishing Minigame',
      description: 'A fishing minigame developed in Unity with interactive gameplay and timing-based mechanics.',
      video: fishingMinigameVideo,
      mediaImages: [
        fishingMinigameGameplayImage,
        fishingMinigameGameplaySampleImage,
        fishingMinigameShopImage,
      ],
      technologies: ['Unity', 'C#', 'Game Development'],
      link: '#',
      github: '#',
    },
  ],

  experience: [
    {
      id: 1,
      company: 'Tech Company',
      position: 'Senior Full Stack Developer',
      duration: '2023 - Present',
      description: 'Led development of scalable web applications and mentored junior developers',
      technologies: ['React', 'Node.js', 'MongoDB', 'Docker'],
    },
    {
      id: 2,
      company: 'Web Development Studio',
      position: 'Full-Stack Developer',
      duration: '2021 - 2023',
      description: 'Built and maintained multiple client projects with focus on performance and UX',
      technologies: ['Vue.js', 'Express', 'PostgreSQL', 'AWS'],
    },
  ],

  social: {
    github: 'https://github.com/Rhesty22',
    linkedin: 'https://linkedin.com/in/adormeorhesty',
    twitter: 'https://twitter.com/adormeorhesty',
    email: 'adormeorhesty@gmail.com',
  },
};

export default portfolioData;
