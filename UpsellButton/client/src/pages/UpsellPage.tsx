import UrgencyBanner from "@/components/UrgencyBanner";
import ProgressSection from "@/components/ProgressSection";
import MainUpsellSection from "@/components/MainUpsellSection";
import ThankYouSection from "@/components/ThankYouSection";
import SocialProofSection from "@/components/SocialProofSection";
import FinalCTASection from "@/components/FinalCTASection";

export default function UpsellPage() {
  return (
    <div className="min-h-screen bg-background">
      <UrgencyBanner />
      <ThankYouSection />
      <ProgressSection />
      <MainUpsellSection />
      <SocialProofSection />
      <FinalCTASection />
    </div>
  );
}
