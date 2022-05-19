import React from "react";

const Badge = ({ children }) => {
  const colorKey = {
    Fashion: "bg-blue-200/70 text-blue-500",
    Sports: "bg-red-200/70 text-red-500",
    Games: "bg-violet-200/70 text-violet-500",
    Music: "bg-amber-200/70 text-amber-500",
    Travel: "bg-pink-200/70 text-pink-500",
    Foods: "bg-emerald-200/70 text-emerald-500",
    Tech: "bg-slate-200/70 text-slate-500",
  };
  return (
    <div className={`block py-0.5 px-3 rounded-xl ${colorKey[children]} `}>
      <span className={`text-sm`}>{children}</span>
    </div>
  );
};

export default Badge;
