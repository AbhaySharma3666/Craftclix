'use client';
import { useEffect, useRef, useState } from 'react';

import { TESTIMONIALS } from '@/lib/data';
import Tag from '@/components/data-display/tag';
import TestimonialDetails from '@/components/data-display/testimonial-details';
import Typography from '@/components/general/typography';
import Container from '@/components/layout/container';

// import Slider from "react-slick";



const SCROLL_DELAY = 5000; // 5 seconds

const TestimonialsSection = () => {

  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!containerRef.current) return;

      const container = containerRef.current;
      const card = container.querySelector('[data-card]');
      if (!card) return;

      const cardWidth = card.clientWidth + 48; // includes Tailwind gap (12 => 48px)
      const visibleCards = Math.floor(container.offsetWidth / cardWidth);
      const totalCards = TESTIMONIALS.length;

      let newIndex = currentIndex + visibleCards;
      if (newIndex >= totalCards) newIndex = 0;

      container.scrollTo({
        left: newIndex * cardWidth,
        behavior: 'smooth',
      });

      setCurrentIndex(newIndex);
    }, SCROLL_DELAY);

    return () => clearInterval(interval);
  }, [currentIndex]);


  return (
    <Container id="testimonials" className="bg-gray-50">
      <div className="flex flex-col items-center gap-4">
        <div className="self-center">
          <Tag label="Testimonials" />
        </div>
        <Typography variant="subtitle" className="max-w-xl text-center">
          Here are some of the kind words and feedback we&apos;ve received from those we&apos;ve worked with:
        </Typography>
      </div>

      {/* <div className="flex gap-12 max-md:flex-col md:max-lg:flex-wrap">
        {TESTIMONIALS?.map((testimonial, index) => (
          <TestimonialDetails key={index} {...testimonial} />
        ))}
      </div> */}

      <div className="overflow-hidden">
        <div
          ref={containerRef}
          className="flex gap-12 overflow-x-auto scroll-smooth no-scrollbar py-6 "
        >
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={index}
              data-card
              className="shrink-0 w-full sm:w-full md:w-[50%] lg:w-[30%] "
            >
              <TestimonialDetails {...testimonial} />
            </div>
          ))}
        </div>
      </div>


    </Container>
  );
};

export default TestimonialsSection;
