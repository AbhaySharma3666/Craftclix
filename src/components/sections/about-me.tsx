import Image from 'next/image';

import ArjavFullPose from '/public/images/AJFP.jpeg'; //edit
import Tag from '@/components/data-display/tag';
import Container from '@/components/layout/container';
import Typography from '@/components/general/typography';
import Link from '@/components/navigation/link';
import { EXTERNAL_LINKS } from '@/lib/data';

const AboutMeSection = () => {
  return (
    <Container className="bg-gray-50" id="about">
      <div className="self-center">
        <Tag label="About Us" />
      </div>

      <div className="flex w-full flex-col justify-between gap-12 md:flex-row">
        {/* Image */}
        <div className="flex justify-center md:order-first md:justify-end">
          <div className="relative h-[380px] w-[320px] md:h-[460px] md:w-[380px] lg:h-[520px] lg:w-[440px]">
            <Image
              src={ArjavFullPose} //edit
              alt="Fullpose of Arjav"
              className="absolute z-10 h-[360px] w-[280px] border-8 border-gray-50 max-md:left-5 md:right-0 md:top-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"
              style={{ objectFit: 'cover' }}
            ></Image>
            <div className="absolute h-[360px] w-[320px] border-8 border-transparent bg-gray-200 max-md:top-5 md:bottom-0 md:left-0 md:h-[420px] md:w-[340px] lg:h-[480px] lg:w-[400px]"></div>
          </div>
        </div>

        {/* Content */}
        <div className="flex max-w-xl flex-col gap-6">
          <Typography variant="h3">
            Our Management LEAD Aarjav Jain..
          </Typography>
          

          <Typography>
            I&apos;m passionate about who specialized in web development. 
            I&apos;m enthusiastic about bringing your website and working for 
            developing new websites and creative video editing work. 
            I&apos;m completing all my work with clarity which the user requires 
            and it totally depends on the client&apos;s needs.
          </Typography>
          
          <Typography>
            I began my journey as a web developer in 2024 and since then I 
            continue to create multiple types of designing web page. 
            I love to taking new challenges in my work and I&apos;m very passionate 
            about it or I want to create something new in any my working task.
          </Typography>

          <Typography>
            I love every part of my journey like why I create any of the sites and 
            how I create a web page with use of  multiple language.
            I&apos;m very much a progressive thinker and enjoy to working in web 
            development because every task <br /><br />
            Help me to create new ideas and new skills which any web developer must know.
          </Typography>

          <Typography>
            When I&apos;m not in my developer mode.you can find me in my 
            {' '}<Link noCustomization externalLink withUnderline href={EXTERNAL_LINKS.Insta}>Instagram</Link>{' '}
            account and my 
            {' '}<Link noCustomization externalLink withUnderline href={EXTERNAL_LINKS.LinkDN}>LinkedIn</Link>{' '}
            account.
          </Typography>
        </div>
      </div>
    </Container>
  );
};

export default AboutMeSection;




{/* <Typography>
  I&apos;m a passionate,{' '}
  <Link
    noCustomization
    externalLink
    withUnderline
    href={EXTERNAL_LINKS.FIGMA}
  >
    self-proclaimed designer
  </Link>{' '} 
  who specializes in full stack development (React.js & Node.js). I am
  enthusiastic about bringing the technical and visual aspects of
  digital products to life. User experience, pixel perfect design, and
  writing clear, readable, highly performant code matters to me.
</Typography>
<Typography>
  I began my journey as a web developer in 2015, and since then,
  I&apos;ve continued to grow and evolve as a developer, taking on new
  challenges and learning the latest technologies along the way. Now,
  in my early thirties, 7 years after starting my web development
  journey, I&apos;m building cutting-edge web applications using
  modern technologies such as Next.js, TypeScript, Nestjs,
  Tailwindcss, Supabase and much more.
</Typography>
<Typography>
  I am very much a progressive thinker and enjoy working on products
  end to end, from ideation all the way to development.
</Typography>
<Typography>
  When I&apos;m not in full-on developer mode, you can find me
  hovering around on twitter or on indie hacker, witnessing the
  journey of early startups or enjoying some free time. You can follow
  me on{' '}
  <Link
    noCustomization
    externalLink
    withUnderline
    href={EXTERNAL_LINKS.TWITTER}
  >
    Twitter
  </Link>{' '}
  where I share tech-related bites and build in public, or you can
  follow me on{' '}
  <Link
    noCustomization
    externalLink
    withUnderline
    href={EXTERNAL_LINKS.GITHUB}
  >
    GitHub
  </Link>
  .
</Typography> */}

{/* <Typography>Finally, some quick bits about me.</Typography>
    <div className="flex flex-col gap-2 md:flex-row md:gap-6">
      <ul className="flex list-inside list-disc flex-col gap-2">
        <Typography component="li">
          B.E. in Computer Engineering
        </Typography>
        <Typography component="li">Full time freelancer</Typography>
      </ul>
      <ul className="flex list-inside list-disc flex-col gap-2">
        <Typography component="li">Avid learner</Typography>
        <Typography component="li">Aspiring indie hacker</Typography>
      </ul>
    </div>
    <Typography>
      One last thing, I&apos;m available for freelance work, so feel free
      to reach out and say hello! I promise I don&apos;t bite 😉
</Typography> */}
