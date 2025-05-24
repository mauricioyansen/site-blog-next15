import {
  CTA,
  CustomerStorySection,
  FeatureSection,
  HeroSection,
  SupportSection,
} from "./sections";

export const LandingPage = () => {
  return (
    <article className="flex flex-col gap-10 md:gap-20">
      <HeroSection />
      <FeatureSection />
      <SupportSection />
      <CustomerStorySection />
      <CTA />
    </article>
  );
};
