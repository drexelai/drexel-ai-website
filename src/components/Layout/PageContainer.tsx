import { ReactNode } from 'react';

type PageContainerProps = {
  children: ReactNode;
};

export const PageContainer = ({ children }: PageContainerProps) => {
  return <main className="space-y-40 pt-20 mb-40 w-full">{children}</main>;
};
