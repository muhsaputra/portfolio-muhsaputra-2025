import React, { createContext, useCallback, useContext, useState } from "react";

const TabsContext = createContext(null);

export function Tabs({
  defaultValue,
  value: valueProp,
  onValueChange,
  children,
  className = "",
}) {
  const [value, setValue] = useState(valueProp ?? defaultValue);

  const setActiveTab = useCallback(
    (val) => {
      setValue(val);
      onValueChange?.(val);
    },
    [onValueChange]
  );

  return (
    <TabsContext.Provider value={{ value, setActiveTab }}>
      <div className={`w-full ${className}`}>{children}</div>
    </TabsContext.Provider>
  );
}

export function TabsList({ children, className = "" }) {
  return (
    <div
      className={`flex gap-2 border-b border-neutral-200 dark:border-neutral-800 ${className}`}
    >
      {children}
    </div>
  );
}

export function TabsTrigger({ value, children, className = "" }) {
  const { value: active, setActiveTab } = useContext(TabsContext);
  const isActive = active === value;

  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 text-sm font-medium rounded-t-lg transition-colors
        ${
          isActive
            ? "text-blue-600 border-b-2 border-blue-600"
            : "text-neutral-500 hover:text-neutral-800 dark:hover:text-neutral-200"
        }
        ${className}`}
    >
      {children}
    </button>
  );
}

export function TabsContent({ value, children, className = "" }) {
  const { value: active } = useContext(TabsContext);
  if (active !== value) return null;

  return <div className={`mt-4 ${className}`}>{children}</div>;
}
