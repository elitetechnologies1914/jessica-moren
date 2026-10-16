import Header from "@/components/header";
import HeroSection from "@/components/heroSection";
import SecSlidesPinning from "@/components/SecSlidesPinning";
import Chapter from "@/components/chapter";
import BrandAva from "@/components/brandAva";
import Letter from "@/components/letter";
import BookDetail from "@/components/bookDetail";
import Author from "@/components/author";
import Testimonial from "@/components/testimonial";
import CTA from "@/components/cta";
import Footer from "@/components/footer";
import Video from "@/components/youtube";
// import AuthorImageSection from "@/components/authorImageSection";
export default function Home() {
return (
  <>
    <Header />
    <main id="main-content">
      <HeroSection />
      <BrandAva />
      {/* <AuthorImageSection /> */}
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
