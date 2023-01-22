export enum ProjectInfoDirection {
  LEFT_CONTENT = "leftContent",
  RIGHT_CONTENT = "rightContent",
}

interface Props {
  name: string;
  description: string;
  technologies: string[];
  direction: ProjectInfoDirection;
  githubLink?: string;
}

export default function ProjectInfo({
  name,
  description,
  technologies,
  direction,
  githubLink,
}: Props) {
  return <div>ProjectInfo</div>;
}
