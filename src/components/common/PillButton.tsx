import { ButtonHTMLAttributes, ReactNode } from 'react';

type PillButtonProps = {
  children: ReactNode;
  primaryColor?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export const PillButton = ({ children, primaryColor, ...attributes }: PillButtonProps) => {
  return (
    <button
      className={`${
        primaryColor
          ? 'before:bg-primary'
          : 'before:bg-secondary/30 dark:before:border-gray-700 dark:before:bg-gray-800'
      } relative flex h-11 w-full items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max`}
      {...attributes}
    >
      <span className={`relative text-base font-semibold text-black ${!primaryColor && 'dark:text-white'}`}>
        {children}
      </span>
    </button>
  );
};
