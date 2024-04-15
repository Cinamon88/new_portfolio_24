'use client';

import Link from "next/link";
import { Button } from "./ui/button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/pagination';

import ProjectCard from "./ProjectCard";
import { useTranslations } from 'next-intl';


const Work = () => {

    const t = useTranslations('Work');

    const projectData = [
        {
            image: '/work/5.png',
            category: 'fullstack',
            name: `${t('project_name5')}`,
            description: `${t('project_desc5')}`,
            link: 'https://www.bwearing.pl/',
            github: '/',
        },
        {
            image: '/work/1.png',
            category: 'fullstack',
            name: `${t('project_name1')}`,
            description: `${t('project_desc1')}`,
            link: 'https://www.ecopudelka.pl/',
            github: '/',
        },
        {
            image: '/work/2.png',
            category: 'react js',
            name: `${t('project_name2')}`,
            description: `${t('project_desc2')}`,
            link: 'https://3dportfolio-liard.vercel.app/',
            github: 'https://github.com/Cinamon88/my_portfolio',
        },
        {
            image: '/work/3.png',
            category: 'team projects',
            name: `${t('project_name3')}`,
            description: `${t('project_desc3')}`,
            link: 'https://furnitureshop.cinamon88.repl.co',
            github: 'https://github.com/Cinamon88/FurnitureShop',
        },
        {
            image: '/work/4.png',
            category: 'next js',
            name: `${t('project_name4')}`,
            description: `${t('project_desc4')}`,
            link: 'https://ecopudelka-ecommerce.vercel.app/',
            github: '/',
        },
        // {
        //     image: '/work/3.png',
        //     category: 'fullstack',
        //     name: '',
        //     description: 'Lorem ipsum',
        //     link: '/',
        //     github: '/',
        // },
    ]

    return (
        <section className="relative mt-20 mb-12 xl:mb-48">
            <div className="container mx-auto">
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">{t('subheading')}</h2>
                    <p className="subtitle mb-8">
                        {t('desc')}
                    </p>
                    <Link href="/projects">
                        <Button>{t('button')}</Button>
                    </Link>
                </div>
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper
                        className="h-[560px] md:h-[500px]"
                        slidesPerView={1}
                        breakpoints={{
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