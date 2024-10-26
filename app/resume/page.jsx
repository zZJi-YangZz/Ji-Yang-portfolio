"use client";

import { FaJava, FaPython, FaConfluence} from "react-icons/fa";
import { SiTailwindcss, SiKnexdotjs, SiAltiumdesigner, SiArduino, SiStmicroelectronics, SiMicrosoft, SiRaspberrypi, SiCplusplus, SiGnubash  } from "react-icons/si";
import { GiSolderingIron } from "react-icons/gi";
import { VscDebug } from "react-icons/vsc";

// about data
const about = {
  title: "About me",
  description:
    "Possesses extensive internship experience, robust theoretical and practical skills, and excels in teamwork and complex problem-solving.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ji Yang Zhang",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+1) 514-561-8687",
    },
    {
      fieldName: "Experience",
      fieldValue: "14 months",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Canadian",
    },
    {
      fieldName: "Email",
      fieldValue: "ji.y.zhang@mail.mcgill.ca",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, French, Mandarin",
    },
  ],
};

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    " My diverse internship experiences across different countries, companies, and departments have provided me with a broad perspective and the expertise to tackle new challenges and seamlessly integrate into new teams.",
  items: [
    {
      company: "e2ip Technologies",
      position: "Certification & Reliability Intern",
      duration: "Aug.2024 - Apr.2025",
    },
    {
      company: "Solik Info Inc",
      position: "Hardware Product Assembler",
      duration: "May.2024 - Aug.2025",
    },
    {
      company: "BDE Technology Inc. (Texas Instruments Authorized Partner)",
      position: "Hardware Intern",
      duration: "May 2023 -  Aug.2023",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Committed to continuous learning and applying knowledge to develop technologies that enhance quality of life.",
  items: [
    {
      institution: "McGill University",
      degree: "Electrical Engineering Honours Program",
      duration: "Aug.2022 - Dec.2026",
    },
    {
      institution: "Marianopolis College",
      degree: "Pure Science DEC",
      duration: "Aug.2020 - May.2022",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Possesses extensive hands-on experience and solid knowledge in both software and hardware.",
  skillList: [
    {
      icon: <FaJava />,
      name: "Java",
    },
    {
      icon: <FaPython />,
      name: "Python",
    },
    {
      icon: <SiCplusplus />,
      name: "C++",
    },
    {
      icon: <SiGnubash />,
      name: "Bash",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind.css",
    },
    {
      icon: <SiKnexdotjs />,
      name: "Next.js",
    },
    {
      icon: <SiAltiumdesigner />,
      name: "Altium Designer",
    },
    {
      icon: <SiArduino />,
      name: "Arduino",
    },
    {
      icon: <SiRaspberrypi />,
      name: "Raspberry Pi",
    },
    {
      icon: <SiStmicroelectronics />,
      name: "STM 32",
    },
    {
      icon: <GiSolderingIron />,
      name: "Surface Mounting",
    },
    {
      icon: <FaConfluence />,
      name: "Confluence",
    },
    {
      icon: <SiMicrosoft />,
      name: "Microsoft Office",
    },
    {
      icon: <VscDebug />,
      name: "Debugging & Testing",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[220px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[8px] h-[8px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[200px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.skillList.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-sm">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
