import React from "react";

interface PageTitleProps {
  title: string;
}

const PageTitle = ({ title }: PageTitleProps) => {
  return (
    <div className="flex w-full flex-row items-center justify-center">
      <h1 className="text-primary font-[poppins] text-3xl font-bold">
        {title}
      </h1>
    </div>
  );
};

export default PageTitle;
