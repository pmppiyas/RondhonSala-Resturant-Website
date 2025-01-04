import React from "react";

export default function SectionTitle({ heading, subheading }) {
  return (
    <div className=" max-w-max mx-auto text-center pb-6">
      <p className="text-red-400 pb-2 italic">--- {subheading} ---</p>
      <h2 className="text-3xl font-medium border-y-4 py-2 border-gray-400 uppercase">
        {heading}
      </h2>
    </div>
  );
}
