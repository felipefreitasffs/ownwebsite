import Navbar from '@/components/layout/navbar';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero-section';
import ExperienceSection from '@/components/sections/experience-section';
import EducationSection from '@/components/sections/education-section';
import ArticlesSection from '@/components/sections/articles-section';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <HeroSection />
        <ExperienceSection />
        <EducationSection />
        <ArticlesSection />
      </main>
      <Footer />
    </div>
  );
}
