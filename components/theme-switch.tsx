import { Switch } from "@headlessui/react";
import { MoonIcon, SunIcon } from "@heroicons/react/outline";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const dark = theme === "dark" ? true : false;
  const [enabled, setEnabled] = useState(dark);
  const handleChange = (nextChecked: boolean) => {
    setEnabled(nextChecked);
  };
  useEffect(() => setEnabled(false), []);
  useEffect(() => {
    setTheme(enabled ? "dark" : "light");
  }, [enabled, setTheme]);

  return (
      <>
      <SunIcon className="h-5"/>
    <Switch
      checked={enabled}
      onChange={handleChange}
      className={`${
        enabled ? "bg-gray-700" : "bg-yellow-400"
      } mx-1 relative inline-flex items-center h-6 rounded-full w-11 dark:`}
    >
      <span className="sr-only">Enable notifications</span>
      <span
        className={`${
          enabled ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full`}
      />
    </Switch>
    <MoonIcon className="h-5"/>
    </>
  );
}
