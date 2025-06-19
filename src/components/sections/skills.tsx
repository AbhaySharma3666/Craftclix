import { TECHNOLOGIES } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TechDetails from '@/components/data-display/tech-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';


import WebIcon from '@mui/icons-material/Web';
import AndroidIcon from '@mui/icons-material/Android';
import MovieIcon from '@mui/icons-material/Movie';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

type IconKey = 'web' | 'android' | 'movie' | 'trending_up';

// Typed icon map
const iconMap: Record<IconKey, JSX.Element> = {
  web: <WebIcon sx={{ fontSize: 48, color: '#4b5563', mb: 2 }} />,
  android: <AndroidIcon sx={{ fontSize: 48, color: '#4b5563', mb: 2 }} />,
  movie: <MovieIcon sx={{ fontSize: 48, color: '#4b5563', mb: 2 }} />,
  trending_up: <TrendingUpIcon sx={{ fontSize: 48, color: '#4b5563', mb: 2 }} />,
};

// Cards now use typed keys
const cards: { label: string; icon: IconKey }[] = [
  { label: 'webdep', icon: 'web' },
  { label: 'andriod', icon: 'android' },
  { label: 'videoediting', icon: 'movie' },
  { label: 'SEO', icon: 'trending_up' },
];

const SkillsSection = () => {
  return (
    <Container>
      <div className="flex flex-col items-center">
        <div className="self-center">
          <Tag label="Services" />
        </div>
      </div>

      {/* Cards container */}
      <div className="mt-8 flex flex-wrap justify-center gap-6">
        {cards.map(({ label, icon }) => (
          <div
            key={label}
            className="flex flex-col items-center justify-center bg-white rounded-lg shadow-md px-6 py-8 w-44 hover:shadow-lg transition-shadow duration-300 cursor-default"
            role="region"
            aria-label={`${label} skill card`}
          >
            {/* Material icon */}
            <span className="material-icons text-indigo-600 text-5xl mb-4 select-none" aria-hidden="true">
              {iconMap[icon]}
            </span>
            <span className="text-lg font-semibold text-gray-800 capitalize select-none">{label}</span>
          </div>
        ))}
      </div>

      {/* <div className="grid grid-cols-3 gap-y-4 md:grid-cols-6 md:gap-y-8 lg:grid-cols-8 lg:gap-y-12">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div> */}

      {/* <div className="flex overflow-x-auto space-x-6 py-4">
        {TECHNOLOGIES.map((technology, index) => (
          <TechDetails {...technology} key={index} />
        ))}
      </div> */}
      <div className="flex flex-col items-center gap-4">
        <Typography variant="subtitle" className="max-w-xl text-center">
          Key skills, tools, and technologies mastered by our team:
        </Typography>
      </div>
      

      <div className="relative overflow-hidden w-full py-4">
        <div className="flex animate-scroll space-x-6">
          {TECHNOLOGIES.concat(TECHNOLOGIES).map((technology, index) => (
            <TechDetails {...technology} key={index} />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default SkillsSection;
