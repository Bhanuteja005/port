import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { FaCode } from "react-icons/fa6";
import { TbBrandFunimation } from "react-icons/tb";
import { useInView } from "react-intersection-observer";
import { skillsFun, skillsWork } from "../../utils";
import SectionHeader from "../ui/SectionHeader";
import StackSkills from "../ui/StackSkills";

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
                        Hey there! I'm Bhanu Teja, a full-stack &amp; AI engineer based in Hyderabad. I build production software end-to-end — from React/Next.js frontends to Node.js and Python backends — with a growing focus on shipping AI-powered products.
                    </p>

                    <div className="pb-3">
                        Over the past year I've built production systems across several teams — an AI voice-calling agent for hospitals at{' '}
                        <span className="text-secondary">Nyra AI</span>, a unified social platform at{' '}
                        <span className="text-secondary">Novalink Solutions</span>, and an AI-powered food-authenticity verification system at{' '}
                        <span className="text-secondary">Altibbe Health</span> — while also building and running my own SaaS products,{' '}
                        <span className="text-secondary">LeadGen</span> and{' '}
                        <span className="text-secondary">InstantScale</span>.
                    </div>

                    <div className="pb-3">
                        Outside of code, I play Basketball and Table Tennis.
                    </div>

                    <div className="pb-3">
                        Always open to new challenges and collaborations — if you're building something interesting, let's connect.
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