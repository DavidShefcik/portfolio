import { SectionDOMId } from "@constants/sectionDOMIds";
import Section from "./BaseSection";

export default function UpstairsSection() {
  return (
    <Section
      backgroundColor="bg-upstairs-purple"
      sectionDOMId={SectionDOMId.UPSTAIRS}
    >
      <p>Test</p>
    </Section>
  );
}
