import { useTheme } from "@/providers/ThemeProvider";
import { Switch } from "./ui/switch";
import { IconMoon, IconSun } from "./Icons";
import { useEffect } from "react";

const Header = () => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const favicon = document.getElementById("favicon");
    favicon.setAttribute("href", `/logo-${theme}.svg`);
  }, [theme]);

  return (
    <div className="flex justify-center items-center gap-2 pt-4">
      <IconSun />
      <Switch
        id="airplane-mode"
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
        className="cursor-pointer"
      />
      <IconMoon />
    </div>
  );
};

export default Header;
