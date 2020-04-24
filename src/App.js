import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar/Navbar";
import "./App.css";

function App() {
  const [theme, setTheme] = useState(
    () =>
      JSON.parse(localStorage.getItem("demo-app-current-theme-mode")) || "light"
  );

  useEffect(() => {
    localStorage.setItem("demo-app-current-theme-mode", JSON.stringify(theme));
  }, [theme]);

  return (
    <div className={theme === "dark" ? "App dark-mode" : "App light-mode"}>
      <Navbar toggler={setTheme} currentTheme={theme} />
      <div className="content">
        <h1>Theme Switcher App.</h1>
        <h2>Use the toggler to switch.</h2>
        <h2>
          {theme === "light"
            ? "Theme is Light, Ummm I'm not gonna judge your lifestyle mahn."
            : "Achievement Unlocked! You've successfully joined the Dark Army."}{" "}
        </h2>
        <h4>
          Your taste of theme is saved across website and browser tabs. Try
          refreshing page.
        </h4>
        <p>
          This web app is created by{" "}
          <a href="https://github.com/7rajatgupta" target="blank">
            Rajat Gupta
          </a>
          . You can use the code for educational purposes. If you like it, Give
          it a star on{" "}
          <a href="https://github.com/7rajatgupta/ThemeSwitcher" target="blank">
            GitHub
          </a>
          . Over and Out!
        </p>
      </div>
    </div>
  );
}

export default App;
