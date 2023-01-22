interface Props {
  name: string;
  description: string;
  technologies: string[];
  githubLink?: string;
}

export default function ProjectInfo({
  name,
  description,
  technologies,
  githubLink,
}: Props) {
  return <div>ProjectInfo</div>;
}
