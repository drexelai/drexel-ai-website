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
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, i) => (
        <ProjectCard project={project} key={i} />
      ))}
    </div>
  );
};

type ProjectCardProps = {
  project: Project;
};

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="group h-full flex flex-col justify-end gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={project.image}
          alt="art cover"
          loading="lazy"
          className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="flex-1 text-2xl font-semibold text-gray-800 dark:text-white">
        {project.title} {project.year}
      </h3>
      <p className="flex-initial text-gray-600 dark:text-gray-300">{project.category}</p>
      <a className="flex-initial inline-block" href={project.url}>
        <span className="text-info dark:text-blue-300">Github</span>
      </a>
    </div>
  );
};
