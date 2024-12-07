import { themeToBorderMap } from "../constants";
import { useTheme } from "../context/ThemeContext";

const useBorder = () => {
  const { theme } = useTheme();
  const borderClass = themeToBorderMap[theme] || "border-default";

  return borderClass;
};

export default useBorder;
