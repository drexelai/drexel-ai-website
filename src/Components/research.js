//Component for Research Page

const Research = (props) => {
  return (
    <div>
      <h1 className="text-2xl font-bold font-merriweather pt-8 pb-4">Research</h1>
      <p className="text-lg pb-4">Our research projects are listed below:</p>
      <div className="grid grid-cols-1 gap-4">
        {props.data.portfolio.research.map((project) => (
          <div key={project.title} className="border rounded p-4">
            <h2 className="text-xl font-bold">{project.title}</h2>
            <p className="text-md">{project.category}</p>
            <p className="text-md">{project.year}</p>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Research;
