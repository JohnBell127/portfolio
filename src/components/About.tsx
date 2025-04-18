'use client';

import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { FaReact, FaNodeJs, FaGitAlt, FaPython, FaDocker } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs, SiMongodb, SiFigma } from 'react-icons/si';

const skills = [
  { name: 'React', Icon: FaReact, color: '#61DAFB' },
  { name: 'TypeScript', Icon: SiTypescript, color: '#3178C6' },
  { name: 'Next.js', Icon: SiNextdotjs, color: '#000000' },
  { name: 'Python', Icon: FaPython, color: '#3776AB' },
  { name: 'Node.js', Icon: FaNodeJs, color: '#339933' },
  { name: 'MongoDB', Icon: SiMongodb, color: '#47A248' },
  { name: 'Docker', Icon: FaDocker, color: '#2496ED' },
  { name: 'UI/UX Design', Icon: SiFigma, color: '#F24E1E' },
  { name: 'Git', Icon: FaGitAlt, color: '#F05032' },
  { name: 'Tailwind CSS', Icon: SiTailwindcss, color: '#38B2AC' },
];

export default function About() {
  const skillsRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = skillsRef.current;
    if (!container) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const boxes = Array.from(container.querySelectorAll('.skill-box'));
        boxes.forEach((box, i) =>
          box.classList.add(`delay-${i * 100}`, 'animate-fade-up')
        );
        observer.unobserve(container);
      },
      { threshold: 0.2 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // pixels per frame

    const scroll = () => {
      if (scrollContainer) {
        scrollAmount += scrollSpeed;
        if (scrollAmount >= scrollContainer.scrollHeight - scrollContainer.clientHeight) {
          scrollAmount = 0;
        }
        scrollContainer.scrollTop = scrollAmount;
      }
      requestAnimationFrame(scroll);
    };

    const animationFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* ——— Left: Photo & Bio ——— */}
          <div className="text-center lg:text-left space-y-8">
            <div className="relative w-48 h-48 mx-auto lg:mx-0 mb-2">
              <Image
                src="/me.jpg"
                alt="Portrait of John Bell"
                fill
                className="rounded-full object-cover border-4 border-indigo-100 shadow-lg"
              />
            </div>
            <h2 className="text-4xl font-bold text-gray-900">About Me</h2>
            <div className="space-y-4 text-lg text-gray-600">
              <p>
                I'm a Software Developer with a passion for creating elegant solutions to complex problems.
                I enjoy working across the full stack, from backend systems to user interfaces,
                always striving to build robust and scalable applications.
              </p>
              <p>
                My approach combines technical expertise with a focus on clean, maintainable code and
                user-centric design. I believe in building software that not only works flawlessly
                but also provides an exceptional experience for its users.
              </p>
            </div>
            <div className="flex justify-center lg:justify-start gap-4 pt-2">
              <a
                href="/resume.pdf"
                download
                className="inline-block bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors duration-300 font-medium"
              >
                Download Resume
              </a>
              <a
                href="#projects"
                className="inline-flex items-center text-indigo-600 underline-offset-2 hover:text-indigo-800 transition-colors duration-300"
              >
                See Projects
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          {/* ——— Right: Skills Grid ——— */}
          <div ref={skillsRef} className="relative">
            <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center lg:text-left">
              Technical Skills
            </h3>
            <div 
              ref={scrollContainerRef}
              className="grid grid-cols-2 sm:grid-cols-3 gap-6 h-[400px] overflow-hidden relative"
            >
              {skills.map(({ name, Icon, color }) => (
                <div
                  key={name}
                  className="skill-box opacity-0 transform translate-y-6 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center h-14 w-14 rounded-md bg-opacity-10 mb-4 mx-auto" style={{ backgroundColor: `${color}20` }}>
                    <Icon className="h-8 w-8" style={{ color }} aria-hidden="true" />
                  </div>
                  <h4 className="text-center text-gray-800 font-medium">{name}</h4>
                </div>
              ))}
              {/* Duplicate skills for seamless scrolling */}
              {skills.map(({ name, Icon, color }) => (
                <div
                  key={`${name}-duplicate`}
                  className="skill-box opacity-0 transform translate-y-6 bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100"
                >
                  <div className="flex items-center justify-center h-14 w-14 rounded-md bg-opacity-10 mb-4 mx-auto" style={{ backgroundColor: `${color}20` }}>
                    <Icon className="h-8 w-8" style={{ color }} aria-hidden="true" />
                  </div>
                  <h4 className="text-center text-gray-800 font-medium">{name}</h4>
                </div>
              ))}
            </div>
            <div className="absolute inset-x-0 bottom-0 h-8 bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>
      </div>

      {/* ——— Animation styles ——— */}
      <style jsx global>{`
        @keyframes fade-up {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: fade-up 0.5s ease-out forwards;
        }
        /* Generate delay utilities: */
        ${[...Array(skills.length)].map(
          (_, i) => `.delay-${i * 100} { animation-delay: ${i * 100}ms; }`
        ).join('\n')}
      `}</style>
    </section>
  );
}
