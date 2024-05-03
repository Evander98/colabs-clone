import { BottomSection } from "../components/BottomSection";
import { BlogSection } from "../features/homepage/components/BlogSection";
import { CommunitySection } from "../features/homepage/components/CommunitySection";
import { HeroSection } from "../features/homepage/components/HeroSection";
import { PrinciplesSection } from "../features/homepage/components/PrinciplesSection";
import { ServicesSection } from "../features/homepage/components/ServicesSection";

export const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <ServicesSection />
      <PrinciplesSection />
      <BlogSection />
      <CommunitySection />
      <BottomSection imageUrl="https://colabs.yourcreative.com.au/wp-content/uploads/2024/03/CoLabs-IWD-22-scaled-e1711597962490.jpg" />
    </div>
  );
};
