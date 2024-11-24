"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
  {
    num: "01",
    category: "Robotique",
    title: "projet 1",
    description:
      "Conception et développement d'un robot logistique intelligent qui analyse le terrain afin de générer de manière autonome des itinéraires optimaux pour une livraison efficace et précise des articles.",
    stack: [{ name: "RaspberryPi" }, { name: "LEGO Mindstorm EV3" }, { name: "Python" }],
    image: "/assets/work/Project 1.jpg",
  },
  {
    num: "02",
    category: "Hardware",
    title: "projet 2",
    description:
      "Mise au point d'un système de détection d'obstacles à courte portée inspiré d'un radar et conçu pour fournir une aide à la mobilité fiable aux personnes malvoyantes.",
    stack: [{ name: "Arduino" }, { name: "Python" }],
    image: "/assets/work/Project 2.jpg",
  },
  {
    num: "03",
    category: "Hardware",
    title: "projet 3",
    description:
      "Mise au point d'un dispositif de lévitation ultrasonique qui permet à plusieurs sphères de mousse plastique de flotter de manière stable dans l'air lorsqu'elles sont activées.",
    stack: [{ name: "Altium Designer" }, { name: "Soudure" }],
    image: "/assets/work/Project 3.jpg",
  },
  {
    num: "04",
    category: "Hardware",
    title: "projet 4",
    description:
      "Conception et développement d'un bracelet intelligent doté d'un affichage de l'heure, d'une surveillance de la fréquence cardiaque, d'une détection de la température, d'un suivi des pas et d'alertes de détection de chute. Ce dispositif portable intègre de multiples fonctionnalités de santé et de sécurité afin de promouvoir le bien-être de l'utilisateur et de fournir un retour d'information en temps réel sur les activités quotidiennes et les urgences potentielles.",
    stack: [{ name: "Altium Designer" }, { name: "Soudure" },{ name: "STM 32" },{ name: "C" }],
    image: "/assets/work/Project 4.jpg",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;
    // update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline-hover">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-orange-400 transition-all duration-500 capitalize">
              projet {project.category} 
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-orange-400">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-orange-400 hover:bg-orange-400-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
