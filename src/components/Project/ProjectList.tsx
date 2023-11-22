import { Grid } from '../common/Grid';

type Project = {
  title: string;
  category: string;
  image: string;
  url: string;
  year: number;
};

type ProjectListProps = {
  projects: Project[];
};

export const ProjectList = ({ projects }: ProjectListProps) => {
  return (
    <Grid
      items={projects.map((project) => ({
        title: `${project.title} (${project.year})`,
        description: <ProjectDescription project={project} />,
        image: project.image,
      }))}
    />
  );
};

type ProjectDescriptionProps = {
  project: Project;
};

const ProjectDescription = ({ project }: ProjectDescriptionProps) => {
  return (
    <>
      <p>{project.category}</p>
      <a className="flex-initial inline-block" href={project.url} target='_blank'>
        <span className="text-info dark:text-blue-300">Github</span>
      </a>
    </>
  );
};
