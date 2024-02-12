'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/pagination';

import ProjectCard from "./ProjectCard";

const projectData = [
    {
        image: '/work/1.png',
        category: 'react js',
        name: 'E-Commerce Shop',
        description: 'Lorem ipsum',
        link: '/',
        github: '/',
    },
    {
        image: '/work/2.png',
        category: 'next js',
        name: '',
        description: 'Lorem ipsum',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'react js',
        name: '',
        description: 'Lorem ipsum',
        link: '/',
        github: '/',
    },
    {
        image: '/work/4.png',
        category: 'next js',
        name: '',
        description: 'Lorem ipsum',
        link: '/',
        github: '/',
    },
    {
        image: '/work/3.png',
        category: 'fullstack',
        name: '',
        description: 'Lorem ipsum',
        link: '/',
        github: '/',
    },
]

const Work = () => {
  return (
    <section className="relative mt-20 mb-12 xl:mb-48">
        <div className="container mx-auto">
            <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                <h2 className="section-title mb-4">Latest Projects</h2>
                <p className="subtitle mb-8">
                    Following projects showcases my skills and experience through examples of my work. 
                    Each project is briefly described with links to code repositories and live demos. 
                    It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                </p>
                <Link href="/projects">
                    <Button>All projects</Button>
                </Link>
            </div>
            <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                <Swiper 
                    className="h-[480px]"
                    slidesPerView={2}
                    breakPoints={{
                        640: {
                            slidesPerView: 2,
                        },
                    }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{ clickable: true }}    
                >
                    {projectData.slice(0, 4).map((project, index) => {
                        return (
                        <SwiperSlide key={index}>
                            <ProjectCard project={project} />
                        </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}

export default Work