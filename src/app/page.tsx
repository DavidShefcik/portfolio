import OverviewSection from "./components/sections/OverviewSection";
import UpstairsSection from "./components/sections/UpstairsSection";
import WazameSection from "./components/sections/WazameSection";
import ContactButton from "./components/ContactButton";
import ContactModal from "./components/ContactModal";

export default function Home() {
  return (
    <div>
      <OverviewSection />
      <UpstairsSection />
      <WazameSection />
      <ContactModal />
      <ContactButton />
    </div>
  );
}
