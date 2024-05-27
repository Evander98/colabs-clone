import { BottomSection } from "../components/BottomSection";
import { Hero } from "../components/Hero";
import { WhyColabsSection } from "../features/services/components/WhyColabsSection";

export const Services = () => {
  return (
    <div>
      <Hero
        videoUrl="https://colabs.yourcreative.com.au/wp-content/uploads/2023/06/Lab-Vortex_1.mp4"
        text="Co-Labs gives people a place to experiment and create"
      />
      <WhyColabsSection />
      <BottomSection imageUrl="https://colabs.yourcreative.com.au/wp-content/uploads/2024/03/Co-Labs-Member-2-scaled.jpg" />
    </div>
  );
};
