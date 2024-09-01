"use client";

import {BsArrowDownRight} from 'react-icons/bs';
import Link from "next/link";

const services = [
    {
        num:'01',
        title:'Web Development',
        description:'As a front-end developer, I create responsive and visually appealing websites using HTML, CSS, and JavaScript. I focus on clean, efficient code to ensure your site is optimized for performance across all devices.',
        href: ""
    },
    {
      num:'02',
      title:'Framework',
      description:'I’m skilled in modern frameworks like Tailwind CSS, Bootstrap, and React.js, which allows me to design dynamic and interactive user interfaces. My goal is to make your website not just functional, but engaging.',
      href: ""
  },
  {
    num:'03',
    title:'Server Rendered',
    description:'Using Next.js, I build fast, server-rendered websites that enhance user experience and improve SEO. This ensures your site not only looks great but also performs exceptionally well.',
    href: ""
},
{
  num:'04',
  title:'Website Responsive....',
  description:'Whether you need a full website or a landing page, I bring together the best tools and practices to create a strong online presence that helps you stand out.',
  href: ""
},
  ];

import { motion } from "framer-motion";

const Services = () => {
  return <section className="min-h-[80vh] flex flex-col justify-center py-16 xl:py-2">
    <div className="container mx-auto">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1, transition:{ delay:2.4, duration: 0.4, ease: "easeIn" },
    }}
    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
    >
      {services.map((services, index) => {
        return <div key={index} className="flex-1 flex flex-col justify-center gap-6 group">
          <div className="w-full flex justify-between items-center">
            <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{services.num}</div>
            <Link href={services.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
            <BsArrowDownRight className="text-primary text-3xl" />
            </Link>
          </div>
          <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{services.title}</h2>
          <p className="text-white/60">{services.description}</p>
          <div className="border-b border-white/20 w-full"></div>
        </div>
      })}
      </motion.div>
    </div>
  </section>;
};

export default Services;