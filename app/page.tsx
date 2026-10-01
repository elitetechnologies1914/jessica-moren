import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import SecSlidesPinning from "@/components/SecSlidesPinning";
// import BrandSection from "@/components/brand";
import Chapter from "@/components/chapter";
import BrandAva from "@/components/brandAva";
import Letter from "@/components/letter";
import BookDetail from "@/components/bookDetail";
import Author from "@/components/author";
import Testimonial from "@/components/testimonial";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Video from "@/components/youtube";
// vercel deploy
export default function Home() {
return (
  <>
    <Header />
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
    <Footer />
  </>
);
}
