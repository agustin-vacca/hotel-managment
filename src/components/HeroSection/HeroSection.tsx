'use client'

import ClientComponent from "./ClientComponent";
import { sectionImagesHome, headingHome } from "./ServerComponent";

const HeroSection = () => {
  return (
    <ClientComponent sectionImagesHome={sectionImagesHome} headingHome={headingHome} />
  );
};

export default HeroSection;
