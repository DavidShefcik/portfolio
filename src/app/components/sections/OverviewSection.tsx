import Section from "./BaseSection";

export default function OverviewSection() {
  return (
    <Section backgroundColor="bg-dark" shouldCoverScreen>
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-white">Macbook</p>
      </div>
    </Section>
  );
}
