import { SectionDOMId } from "@constants/sectionDOMIds";
import Section from "./BaseSection";

export default function WazameSection() {
  return (
    <Section
      backgroundColor="bg-wazame-green"
      sectionDOMId={SectionDOMId.WAZAME}
    >
      <p className="text-white">Wazame</p>
    </Section>
  );
}
