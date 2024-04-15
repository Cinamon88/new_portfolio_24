'use client'

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules"

import 'swiper/css';
import 'swiper/css/pagination';
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import Image from "next/image";
import { useTranslations } from 'next-intl';


const Reviews = () => {

    const t = useTranslations('Reviews');

    const reviewsData = [
        {
            // avatar: '/reviews/avatar-1.png',
            name: `${t('name1')}`,
            project: 'https://www.bwearing.pl',
            review: `${t('review1')}`,
        },
        // {
        //     avatar: '/reviews/avatar-2.png',
        //     name: 'Richard Thompson',
        //     job: 'Chef',
        //     review: 'Lorem Ipsum',
        // },
        // {
        //     avatar: '/reviews/avatar-3.png',
        //     name: 'Richard Thompson',
        //     job: 'Chef',
        //     review: 'Lorem Ipsum',
        // },
        // {
        //     avatar: '/reviews/avatar-4.png',
        //     name: 'Richard Thompson',
        //     job: 'Chef',
        //     review: 'Lorem Ipsum',
        // },
        // {
        //     avatar: '/reviews/avatar-5.png',
        //     name: 'Richard Thompson',
        //     job: 'Chef',
        //     review: 'Lorem Ipsum',
        // },
        // {
        //     avatar: '/reviews/avatar-6.png',
        //     name: 'Richard Thompson',
        //     job: 'Chef',
        //     review: 'Lorem Ipsum',
        // },
    ]

    return (
        <section className="relative mt-20 mb-12 xl:mb-48">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 text-center mx-auto">{t('subheading')}</h2>
                {/* <h2 className="h4 text-center mb-10 md:mb-20">{t('desc')}</h2> */}
                <Swiper
                className="h-[350px]"
                slidesPerView={1}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    
                    1400: {
                        slidesPerView: 3,
                    },
                }}
                spaceBetween={30}
                modules={[Pagination]}
                pagination={{ clickable: true }} 
            >
                {reviewsData.map((person, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                                <CardHeader className="p-0 mb-10">
                                    <div className="flex items-center gap-x-4">
                                        {/* <Image 
                                            src={person.avatar}
                                            width={70}
                                            height={70}
                                            alt="avatar"
                                            priority
                                        /> */}
                                        <div className="flex flex-col">
                                            <CardTitle>
                                                {person.name}
                                            </CardTitle>
                                            <p>
                                                {person.project}
                                            </p>
                                        </div>
                                    </div>
                                    <CardDescription className="text-lg text-muted-foreground">
                                        {person.review}
                                    </CardDescription>
                                </CardHeader> 
                            </Card>
                        </SwiperSlide>
                    )
                    })}
            </Swiper>
            </div>
        </section>
    )
}

export default Reviews