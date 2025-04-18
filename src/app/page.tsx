import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Education from '@/components/Education';
import ScrollProgress from '@/components/ScrollProgress';
import AnimatedSection from '@/components/AnimatedSection';

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <Hero />
      <AnimatedSection id="about">
        <About />
      </AnimatedSection>
      <AnimatedSection id="education">
        <Education />
      </AnimatedSection>
      <AnimatedSection id="projects">
        <Projects />
      </AnimatedSection>
      <AnimatedSection id="contact">
        <Contact />
      </AnimatedSection>
      <Footer />
    </>
  );
}
