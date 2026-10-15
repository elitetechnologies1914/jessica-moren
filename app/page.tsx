import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import BrandAva from "@/components/brandAva";
import SecSlidesPinning from "@/components/SecSlidesPinning";
import Chapter from "@/components/chapter";
import Letter from "@/components/letter";
import BookDetail from "@/components/bookDetail";
import Video from "@/components/youtube";
import Author from "@/components/author";
import Testimonial from "@/components/testimonial";
import CTA from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <BrandAva />
        <SecSlidesPinning />
        <Chapter />
        <Letter />
        <BookDetail />
        <Video />
        <Author />
        <Testimonial />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
