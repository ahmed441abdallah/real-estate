"use client";
import SponsorSlider from './_components/SponsorSlider'
import HelpMenu from './_components/HelpMenu'
import Hero from './_components/Hero'
import AnimatedSection from './_components/AnimatedSection'
import Subscribe from './_components/Subscribe'
import Stats from './_components/Stats'
import Gallery from './_components/Gallery'
import Divider from './_components/Divider'
import Blog from './_components/Blog'
export default function Home() {
  return (
    <main>
      <Hero />
      <AnimatedSection />
      <Blog />
      <SponsorSlider />
      <Gallery />
      <Stats />
      <Divider />
      <Subscribe />
      <HelpMenu />
    </main>
  );
}
