import { useTheme } from "@/providers/ThemeProvider";
import { Switch } from "./ui/switch";
import { IconMoon, IconSun } from "./Icons";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex justify-center items-center gap-2 pt-4">
      <IconSun />
      <Switch
        id="airplane-mode"
        checked={theme === "dark"}
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
      />
      <IconMoon />
    </div>
  );
};

export default Header;
