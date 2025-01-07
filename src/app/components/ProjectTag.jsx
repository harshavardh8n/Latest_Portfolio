import React from "react";

const ProjectTag = ({ name, onClick, isSelected }) => {
  const buttonStyles = isSelected
    ? "bg-primary-500 text-white border-primary-500"
    : "bg-transparent text-[#ADB7BE] border-slate-600 hover:border-white hover:text-white";

  return (
    <button
      className={`${buttonStyles} rounded-full border-2 px-4 sm:px-6 py-2 text-base sm:text-lg font-medium transition-all duration-200 ease-in-out`}
      onClick={() => onClick(name)}
    >
      {name}
    </button>
  );
};

export default ProjectTag;
