import { SectionDOMId } from "@constants/sectionDOMIds";
import Section from "./BaseSection";

export default function OverviewSection() {
  return (
    <Section
      backgroundColor="bg-dark"
      shouldCoverScreen
      sectionDOMId={SectionDOMId.OVERVIEW}
    >
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-white">Macbook</p>
      </div>
    </Section>
  );
}
