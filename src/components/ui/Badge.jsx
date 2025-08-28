const Badge = ({ children, color = "blue" }) => {
  const colorMap = {
    blue: "bg-blue-50 text-blue-700 dark:bg-blue-400/10 dark:text-blue-300",
    green:
      "bg-green-50 text-green-700 dark:bg-green-400/10 dark:text-green-300",
    purple:
      "bg-purple-50 text-purple-700 dark:bg-purple-400/10 dark:text-purple-300",
    orange:
      "bg-orange-50 text-orange-700 dark:bg-orange-400/10 dark:text-orange-300",
    pink: "bg-pink-50 text-pink-700 dark:bg-pink-400/10 dark:text-pink-300",
    gray: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300",
    yellow:
      "bg-yellow-50 text-yellow-700 dark:bg-yellow-400/10 dark:text-yellow-300",
    red: "bg-red-50 text-red-700 dark:bg-red-400/10 dark:text-red-300",
    black: "bg-slate-100 text-black dark:bg-slate-800 dark:text-white",

    // Tambahan baru
    indigo:
      "bg-indigo-50 text-indigo-700 dark:bg-indigo-400/10 dark:text-indigo-300",
    rose: "bg-rose-50 text-rose-700 dark:bg-rose-400/10 dark:text-rose-300",
    emerald:
      "bg-emerald-50 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-300",
  };

  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded-lg text-xs font-medium ${colorMap[color]}`}
    >
      {children}
    </span>
  );
};
export default Badge;
