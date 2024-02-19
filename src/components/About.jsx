import { Briefcase, Calendar, GraduationCap, HomeIcon, MailIcon, PhoneCall, User2 } from "lucide-react";
import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import { useTranslations } from 'next-intl';

// const infoData = [
//     {
//         icon: <User2 size={20} />,
//         text: 'Łukasz Górka',
//     },
//     {
//         icon: <PhoneCall size={20} />,
//         text: '+48 692 712 014',
//     },
//     {
//         icon: <MailIcon size={20} />,
//         text: 'lukaszgorka@hotmail.com',
//     },
//     {
//         icon: <Calendar size={20} />,
//         text: 'Born in 1988',
//     },
//     {
//         icon: <GraduationCap size={20} />,
//         text: 'Kodilla Bootcamp Full Stack ',
//     },
//     {
//         icon: <HomeIcon size={20} />,
//         text: 'Poland',
//     },
// ];

const qualificationData = [
    {
        title: 'education',
        data: [
            {
                university: 'Kodilla Online School',
                qualification: 'Full Stack Developer +',
                years: '2022 - 2023'
            },
            {
                university: 'University of Economics',
                qualification: 'Bachelor of Marketing',
                years: '2009 - 2012'
            }
        ]
    },
    {
        title: 'experience',
        data: [
            {
                company: 'Own Business',
                role: 'Junior Full Stack Developer',
                years: '2023 - until now'
            }
        ]
    }
];

const skillData = [
    {
        title: 'skills',
        data: [
            {
                name: 'HTML, CSS, Tailwind CSS',
            },
            {
                name: 'Front-end Development',
            },
            {
                name: 'JavaScript, React, NextJS',
            },
            {
                name: 'Back-end Development',
            },
        ]
    },
    {
        title: 'tools',
        data: [
            {
                imgPath: '/about/vscode.svg',
            },
            {
                imgPath: '/about/github-mark.svg',
            },
            {
                imgPath: '/about/npm.svg',
            },
            {
                imgPath: '/about/tailwind.svg',
            },
        ]
    },
]

const About = () => {

    const getData = (arr, title) => {
        return arr.find((item) => item.title === title)
    };

    const t = useTranslations('About');

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
                    {t('subheading')}
                </h2>
                <div className="flex flex-col xl:flex-row">
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg
                            containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative'
                            imgSrc='/about/developer.png'
                        />
                    </div>
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value='personal'>{t('tab1')}</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value='qualification'>{t('tab2')}</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value='skills'>{t('tab3')}</TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">{t('personal')}</h3>
                                        <p className="subtitle max-w-xl mx-auto xl:mx-0">
                                            {t('personal-desc')}
                                        </p>
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {/* {infoData.map((item, index) => {
                                                return (
                                                    <div className="flex items-center gap-x-4 mx-auto xl:mx-0" key={index}>
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                )
                                            })} */}
                                            <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                                                <div className="text-primary"><User2 size={20} /></div>
                                                <div>Łukasz Górka</div>
                                            </div>
                                            <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                                                <div className="text-primary"><PhoneCall size={20} /></div>
                                                <div>+48 692 712 014</div>
                                            </div>
                                            <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                                                <div className="text-primary"><MailIcon size={20} /></div>
                                                <div>lukaszgorka@hotmail.com</div>
                                            </div>
                                            <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                                                <div className="text-primary"><Calendar size={20} /></div>
                                                <div>{t('born')}</div>
                                            </div>
                                            <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                                                <div className="text-primary"><GraduationCap size={20} /></div>
                                                <div>Kodilla Bootcamp Full Stack</div>
                                            </div>
                                            <div className="flex items-center gap-x-4 mx-auto xl:mx-0">
                                                <div className="text-primary"><HomeIcon size={20} /></div>
                                                <div>{t('country')}</div>
                                            </div>
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">{t('language-skill')}</div>
                                            <div className="border-b border-border"></div>
                                            <div>{t('language')}</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualification">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">
                                            {t('experience-sub')}
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-y-8">
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {t('experience')}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8">
                                                    {getData(qualificationData, 'experience').data.map(
                                                        (item, index) => {
                                                            const { role } = item;
                                                            return (
                                                                <div className="flex gap-x-8 group" key={index}>
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">

                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {t('company')}
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-4">{role}</div>
                                                                        <div className="text-base font-medium">{t('year_company')}</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    )}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-y-6">
                                                <div className="flex gap-x-4 items-center text-[22px] text-primary">
                                                    <GraduationCap size={28} />
                                                    <h4 className="capitalize font-medium">
                                                        {t('education')}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-y-8 ">
                                                    {/* {getData(qualificationData, 'education').data.map(
                                                        (item, index) => {
                                                            const { university, qualification, years } = item;
                                                            return (
                                                                <div className="flex gap-x-8 group" key={index}>
                                                                    <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                                        <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">

                                                                        </div>
                                                                    </div>
                                                                    <div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {university}
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                        <div className="text-base font-medium">{years}</div>
                                                                        <div className="font-semibold text-xl leading-none mb-2">
                                                                            {university}
                                                                        </div>
                                                                        <div className="text-lg leading-none text-muted-foreground mb-4">{qualification}</div>
                                                                        <div className="text-base font-medium">{years}</div>
                                                                    </div>
                                                                </div>
                                                            )
                                                        }
                                                    )} */}
                                                    <div className="flex gap-x-8 group">
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl leading-none mb-2">
                                                                {t('university1')}
                                                            </div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-4">{t('qualification1')}</div>
                                                            <div className="text-base font-medium">{t('years1')}</div>
                                                        </div>
                                                    </div>
                                                    <div className="flex gap-x-8 group">
                                                        <div className="h-[84px] w-[1px] bg-border relative ml-2">
                                                            <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500">
                                                            </div>
                                                        </div>
                                                        <div>
                                                            <div className="font-semibold text-xl leading-none mb-2">
                                                                {t('university2')}
                                                            </div>
                                                            <div className="text-lg leading-none text-muted-foreground mb-4">{t('qualification2')}</div>
                                                            <div className="text-base font-medium">{t('years2')}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">
                                    <div className="text-center xl:text-left ">
                                        <h3 className="h3 mb-8">{t('skills-sub')}</h3>
                                        <div className="mb-16">
                                            <h4 className="text-xl font-semibold mb-2">
                                                {t('skills')}
                                            </h4>
                                            <div className="border-b border-border mb-4"></div>
                                            <div>
                                                {getData(skillData, 'skills').data.map(
                                                    (item, index) => {
                                                        const { name } = item;
                                                        return (
                                                            <div className="w-2/4 text-center xl:text-left mx-auto xl:mx-0" key={index}>
                                                                <div className="font-medium">{name}</div>
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-semibold mb-2 xl:text-left">
                                                {t('tools')}
                                            </h4>
                                            <div className="border-b border-border mb-4"></div>
                                            <div className="flex gap-x-8 justify-center xl:justify-start items-center">
                                                {getData(skillData, 'tools').data.map(
                                                    (item, index) => {
                                                        const { imgPath } = item;
                                                        return (
                                                            <div key={index}>
                                                                <Image src={imgPath} width={48} height={48} alt='tool icon' priority />
                                                            </div>
                                                        )
                                                    }
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;