import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { TbBrandFunimation } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import transition from "../../assets/images/transition.png";
import zoomer from "../../assets/images/zoomer.png";
import { skillsFun, skillsWork } from "../../utils";
import SectionHeader from "../ui/SectionHeader";
import StackSkills from "../ui/StackSkills";
import Tooltip from "../ui/Tooltip";

const About = () => {
    const control = useAnimation();
    const [ref, inView] = useInView();

    const containerVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1, y: 0, transition: { duration: 0.8 }
        },
    };

    useEffect(() => {
        if (inView) {
            control.start("visible");
        } else {
            control.start("hidden");
        }
    }, [control, inView]);

    return (
        <section className="mt-5 max-w-4xl mx-auto md:px-8" id="about">
            <SectionHeader title={"About."} subtitle={"Skills & Journey"} />

            <div className="text-secondary-text md:flex flex-row gap-16 px-4 md:px-0" ref={ref}>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate={control}
                    className="flex-1 text-base">
                    <p className="pb-3">
                        Hey there! I'm P Bhanu Teja, a computer sciene student based in Hyderabad. I specialize in frontend development, particularly using Tailwind CSS, but I'm also comfortable with various tools and adapt to project needs. I also have experience in Backend development.
                    </p>

                    <div className="pb-3">
                        Currently, I work passively for{' '}
                        <Tooltip
                            name={'AIM'}
                            path={'https://aim-mlrit.vercel.app/'}
                            image={transition}
                        />{' '}

                        and contribute to the
                        <span className="text-secondary"> StartUp </span>
                        project at{' '}

                        <Tooltip
                            name={'CloudOpt'}
                            path={'https://vercel.com/bhanu-tejas-projects/cloud-wise-ai'}
                            image={zoomer}
                        />
                    </div>

                    <div className="pb-3">
                        Outside of the world of code, I'm the guy who enjoys playing Basketball and Table Tennis. 
                    </div>

                    <div className="pb-3">
                        I'm looking for new opportunities where I can merge my love for code with my love for learning to solve challenging problems. If you have an opening that you think might be a good fit, let's connect and explore the possibilities!
                    </div>
                </motion.div>

                <div className="flex-1 pt-4 md:pt-0">
                    <StackSkills
                        title={"Use at work"}
                        list={skillsWork}
                        icon={<FaCode color="#6366f1" />} />

                    <StackSkills
                        title={"Use for fun"}
                        list={skillsFun}
                        icon={< TbBrandFunimation color="#6366f1" />} />
                </div>
            </div>
        </section>
    )
}

export default About