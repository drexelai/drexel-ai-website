import { ReactNode } from 'react';

type GridItem = {
  title: ReactNode;
  description: ReactNode;
  image: string;
};

type GridProps = {
  items: GridItem[];
};

export const Grid = ({ items }: GridProps) => {
  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, i) => (
        <GridCard item={item} key={i} />
      ))}
    </div>
  );
};

type GridCardProps = {
  item: GridItem;
};

const GridCard = ({ item }: GridCardProps) => {
  return (
    <div className="group h-full flex flex-col justify-end gap-4 p-6 sm:p-8 rounded-3xl bg-white border border-gray-100 dark:shadow-none dark:border-gray-700 dark:bg-gray-800 bg-opacity-50 shadow-2xl shadow-gray-600/10">
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={item.image}
          alt="art cover"
          loading="lazy"
          className="h-64 w-full object-cover object-top transition duration-500 group-hover:scale-105"
        />
      </div>
      <h3 className="flex-1 text-2xl font-semibold text-gray-800 dark:text-white">{item.title}</h3>
      <div className="flex-initial text-gray-600 dark:text-gray-300">{item.description}</div>
    </div>
  );
};
