'use client';

import { TechDetails } from '@/lib/types';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import ImageWrapper from '@/components/data-display/image-wrapper';


const TechDetails = ({ url, logo, darkModeLogo, label }: TechDetails) => {
  return (
    <div className="flex flex-col items-center min-w-[80px]"> {/* Change flex direction */}
      <Link noCustomization href={url} externalLink>
        <ImageWrapper
          src={logo}
          srcForDarkMode={darkModeLogo}
          alt={label}
          className="transition-transform duration-300 md:hover:scale-110 w-8 h-8" // Resize image size here
        />
      </Link>
      <Typography variant="body1" className="text-sm md:text-base">
        {label}
      </Typography>
    </div>
  );
};

export default TechDetails;
