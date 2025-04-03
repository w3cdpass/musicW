import InfiniteCards from "@/components/Cards";
import FeatureCourses from "@/components/FeatureCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen, bg-black/[0.96] antialiased ">
      <HeroSection/>
        <FeatureCourses />
        <InfiniteCards />
        <Footer/>
      </main>
    </>

  );
}
