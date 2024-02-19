import { Blocks, GanttChartSquare, Gem } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { useTranslations } from 'next-intl';

// const servicesData = [
//     {
//         icon: <GanttChartSquare size={72} strokeWidth={0.8} />,
//         title: 'Web Design',
//         description: 'Professional web design focuses on creating a seamless and enjoyable user experience. This includes easy navigation, clear call-to-action buttons, and visually appealing layouts.'
//     },
//     {
//         icon: <Blocks size={72} strokeWidth={0.8} />,
//         title: 'Web Development',
//         description: 'With web development, the possibilities are endless. Create websites, web applications, e-commerce platforms, and more, tailored to specific needs and preferences.'
//     },
//     {
//         icon: <Gem size={72} strokeWidth={0.8} />,
//         title: 'Content Creator',
//         description: 'Successful content creators can turn others passion into a source of income through sponsorships, brand collaborations, or ad revenue.'
//     },
// ]

const Services = () => {

    const t = useTranslations('MyServices');

    return (
        <section className="mt-20 mb-12 xl:mb-36">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 xl:mb-24 text-center mx-auto">{t('subheading')}</h2>
                <div className="grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24">
                    {/* {servicesData.map((item, index) => {
                        return (
                            <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative" key={index}>
                                <CardHeader className="text-primary absolute -top-[60px]">
                                    <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center">{item.icon}</div>
                                </CardHeader>
                                <CardContent className="text-center">
                                    <CardTitle className="mt-6 md:mt-0 mb-4">{item.title}</CardTitle>
                                    <CardDescription className="text-lg">
                                        {item.description}
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        )
                    })} */}
                    <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative">
                        <CardHeader className="text-primary absolute -top-[60px]">
                            <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center"><GanttChartSquare size={72} strokeWidth={0.8} /></div>
                        </CardHeader>
                        <CardContent className="text-center">
                            <CardTitle className="mt-6 md:mt-0 mb-4">Web Design</CardTitle>
                            <CardDescription className="text-lg">
                            {t('services1')}
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative">
                        <CardHeader className="text-primary absolute -top-[60px]">
                            <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center"><Blocks size={72} strokeWidth={0.8} /></div>
                        </CardHeader>
                        <CardContent className="text-center">
                            <CardTitle className="mt-6 md:mt-0 mb-4">Web Development</CardTitle>
                            <CardDescription className="text-lg">
                            {t('services2')}
                            </CardDescription>
                        </CardContent>
                    </Card>
                    <Card className="w-full max-w-[424px] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative">
                        <CardHeader className="text-primary absolute -top-[60px]">
                            <div className="w-[140px] h-[80px] bg-white dark:bg-background flex justify-center items-center"><Gem size={72} strokeWidth={0.8} /></div>
                        </CardHeader>
                        <CardContent className="text-center">
                            <CardTitle className="mt-6 md:mt-0 mb-4">Content Creator</CardTitle>
                            <CardDescription className="text-lg">
                            {t('services3')}
                            </CardDescription>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

export default Services;