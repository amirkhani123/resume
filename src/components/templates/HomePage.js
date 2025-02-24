
import AboutMe from "../modules/AboutMe";
import Profile from "../modules/Profile";
import Projects from "../modules/Projects";
import Skills from "../modules/Skills";

function HomePage() {
  return (
    <div className="dark:text-second font-vazir">
        <Profile />
        <AboutMe />
        <Skills />
        <Projects />
    </div>
  );
}

export default HomePage;
