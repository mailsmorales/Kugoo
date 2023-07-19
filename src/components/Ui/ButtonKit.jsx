import React from "react";

export const ButtonKit = ({ name }) => {
  return (
    <div className="px-8 py-3 bg-purple text-white font-normal text-xs rounded-md cursor-pointer border-purple hover:border-purple-200 ease-in duration-300 hover:bg-purple-200">
      {name}
    </div>
  );
};
