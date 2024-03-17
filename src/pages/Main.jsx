import About from "../components/sections/About";
import Featured from "../components/sections/Blog";
import Contact from "../components/sections/Contact";
import Hero from "../components/sections/Hero";
import Projects from "../components/sections/Projects";

const Main = () => {
    return (
        <main>
            <Hero />
            <About />
            <Projects />
            <Featured/>
            <Contact />
        </main>
    )
}

export default Main