import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FounderSection from '@/components/FounderSection';
import AdmissionSection from '@/components/AdmissionSection';
import InstagramShowcaseSection from '@/components/InstagramShowcaseSection';
import AdmissionFormSection from '@/components/AdmissionFormSection';
import LocationSection from '@/components/LocationSection';
import FloatingCTA from '@/components/FloatingCTA';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0c0507] text-[#fcf8f2] flex flex-col relative">
      <Navbar />
      <HeroSection />
      <FounderSection />
      <AdmissionSection />
      <InstagramShowcaseSection />
      <AdmissionFormSection />
      <LocationSection />
      <FloatingCTA />
    </main>
  );
}
