import { useContext } from "react";
import { themeContext } from "./themeContext";
import { languageContext } from "./languageContext";

export const Navbar = () => {
  // get theme and lanauge contexts here
  const { theme, setTheme } = useContext(themeContext);
  const { language } = useContext(languageContext);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <div className="navbar">
      <span>Dialecto</span>
      <div className="right">
        {/* add eventListerner to it also change the content of the button based on the theme */}
        <button onClick={() => toggleTheme()}>
          {theme === "light" ? "Dark theme" : "Light theme"}
        </button>
        <span>{/* Show active language here */ language}</span>
      </div>
    </div>
  );
};
