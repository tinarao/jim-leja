import React, { PropsWithChildren } from "react";

const PageHead = ({ children }: PropsWithChildren) => {
  return <div>{children}</div>;
};

const Title = ({ children }: PropsWithChildren) => {
  return <h1 className="text-2xl font-medium">{children}</h1>;
};

const Paragraph = ({ children }: PropsWithChildren) => {
  return <p className="text-muted-foreground">{children}</p>;
};

PageHead.Title = Title;
PageHead.Paragraph = Paragraph;

export default PageHead;
