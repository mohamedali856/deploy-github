"use client";

import { motion } from 'framer-motion';
import React, {useState} from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import {BsArrowUpRight, BsGithub} from 'react-icons/bs';
import {Tooltip, TooltipContent, TooltipProvider, TooltipTrigger,} from "@/components/ui/tooltip"
import Link from "next/link";
import Image from "next/image";
import { Description } from '@radix-ui/react-dialog';
import WorkSliderBtns from '@/components/ui/WorkSliderBtns';

const projects = [
  {
    num: '01',
    category: 'frontend',
    title: 'project 1',
    description:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    stack: [
      {name: 'Html 5'},{name: "Css 3"}, {name: 'Javascript'}],
      image: '/assets/work/page1.png',
      live:"https://dashboard-by-med-ali.netlify.app/",
      github:"",
    },
    {
      num: '02',
      category: 'frontend',
      title: 'project 2',
      description:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      stack: [
        {name: 'Html 5'},{name: "Tailwindcss"}, {name: 'Javascript'}],
        image: '/assets/work/CoffeShop.png',
        live:"https://coffee-shop-med-ali.netlify.app/", 
        github:"",
      },
      {
        num: '03',
        category: 'frontend',
        title: 'project 3',
        description:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        stack: [
          {name: 'Html 5'},{name: "Css 3"},],
          image: '/assets/work/page3.png',
          live:"https://website-med-ali.netlify.app/",
          github:"",
        },
        {
          num: '04',
          category: 'frontend',
          title: 'project 3',
          description:'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          stack: [
            {name: 'Html 5'},{name: "Css 3"},],
            image: '/assets/work/page4.png',
            live:"https://kaleidoscopic-axolotl-da1c70.netlify.app/",
            github:"",
          },
];


const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
     const currentIndex = swiper.activeIndex;
     setProject(projects[currentIndex]);
    }

  return (
  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{ delay:2.4, duration: 0.4, ease: "easeIn"},
}}
 className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
  >
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:gap[30px]">
        <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
          <div className="flex flex-col gap-[30px] h-[50%]">
          <div className="text text-8xl leading-none font-extrabold text-transparent text-outline">
            {project.num}
            </div>
            <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">{project.category} project</h2>
            <p className="text-white/60">{project.description}</p>
            <ul className="flex gap-4">
              {project.stack.map((item, index) => {
                return (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && <span className="text-white/60"> | </span>}
                    </li>
                  );
              })}
            </ul>
            <div className="border border-white/20"></div>
            <div className="flex items-center gap-4">
              <Link href={project.live}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsArrowUpRight className="text-white text-3xl group-hover:text-accent"/>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Live project
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
              <Link href={project.github}>
              <TooltipProvider delayDuration={100}>
                <Tooltip>
                  <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                    <BsGithub className="text-white text-3xl group-hover:text-accent" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>
                      Github repository
                    </p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
              </Link>
            </div>
          </div>
          </div>
        <div className="w-full xl:w-[50%]">
          <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] mb-12" onSlideChange={handleSlideChange}>
            {projects.map((project, index) => {
              return <SwiperSlide key={index} className="w-full">
                <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                <div className="relative w-full h-full">
                  <Image src={project.image} fill className="object-cover" alert alt="" />
                </div>
                </div>
              </SwiperSlide>;
            })}
            <h1 className="text-3xl text-accent">Swipe the image left ---</h1>
            </Swiper>
            <h1 className="text-3xl text-accent hidden xl:block">Swipe the image Left ---</h1>
        </div>
      </div>
    </div>
  </motion.section>
  );
};

export default Work;