import { Grid } from '../common/Grid';

type Research = {
  title: string;
  category: string;
  image: string;
  url: string;
  year: number;
};

type ResearchListProps = {
  researches: Research[];
};

export const ResearchList = ({ researches }: ResearchListProps) => {
  return (
    <Grid
      items={researches.map((research) => ({
        title: `${research.title} ${research.year}`,
        description: <ResearchDescription research={research} />,
        image: research.image,
      }))}
    />
  );
};

type ResearchDescriptionProps = {
  research: Research;
};

const ResearchDescription = ({ research }: ResearchDescriptionProps) => {
  return (
    <>
      <p>{research.category}</p>
      <a className="flex-initial inline-block" href={research.url}>
        <span className="text-info dark:text-blue-300">Github</span>
      </a>
    </>
  );
};
