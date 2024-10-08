import Link from 'next/link'
import { RiArrowDownSLine, RiBriefcase4Fill, RiTeamFill, RiTodoFill } from 'react-icons/ri'
import { Button } from './ui/button'
import { Download, Send } from 'lucide-react'
import Socials from './Socials'
import DevImg from './DevImg'
import Badge from './Badge'
import { useTranslations } from 'next-intl';


const Hero = () => {

    const t = useTranslations('Hero');

    return <section className='py-12 xl:py-24 h-[100vh] xl:pt-16 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover'>
        <div className='container mx-auto'>
            <div className='flex justify-between gap-x-8'>
                <div className='flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left'>
                    <div className='text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]'>{t('subtitle')}</div>
                    <h1 className='h2 mb-4'>{t('heading')}</h1>
                    <p className='subtitle max-w-[490px] mx-auto xl:mx-0'>{t('desc')}</p>
                    <div className='flex flex-col gap-y-3 md:flex-row gap-x-3 mx-auto xl:mx-0 mb-12'>
                        <Link href="/contact">
                            <Button className="gap-x-2">
                                {t('button1')} <Send size={18} />
                            </Button>
                        </Link>
                        <Link href="/cv_en.pdf" locale={false}>
                            <Button variant="secondary" className="gap-x-2 text-sm" >
                            {t('button2')} <Download size={18} />
                            </Button>
                        </Link>
                        <Link href="/cv_pl.pdf" locale={false}>
                            <Button variant="secondary" className="gap-x-2 text-sm" >
                            {t('button3')} <Download size={18} />
                            </Button>
                        </Link>
                    </div>
                    <Socials containerStyles='flex gap-x-6 mx-auto xl:mx-0' iconsStyles='text-foreground text-[22px] hover:text-primary transition-all' />
                </div>
                <div className='hidden xl:flex relative'>
                    <Badge
                        containerStyles='absolute top-[24%] -left-[6rem]'
                        icon={<RiBriefcase4Fill />}
                        endCountNum={2}
                        badgeText={t('badge1')}
                    />
                    <Badge
                        containerStyles='absolute top-[87%] left-[3rem]'
                        icon={<RiTodoFill />}
                        endCountNum={10}
                        // endCountText='k'
                        badgeText={t('badge2')}
                    />
                    <Badge
                        containerStyles='absolute top-[55%] -right-4'
                        icon={<RiTeamFill />}
                        endCountNum={1}
                        // endCountText='k'
                        badgeText={t('badge3')}
                    />
                    <div className='bg-hero_shape2_light dark:bg-hero_shape2_dark w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2'></div>
                    <DevImg containerStyles='bg-hero_shape w-[510px] h-[462px] bg-no-repeat relative bg-bottom' imgSrc='/hero/developer.png' />
                </div>
            </div>
            <div className='hidden md:flex absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce'>
                <RiArrowDownSLine className="text-3xl text-primary" />
            </div>
        </div>
    </section>
}

export default Hero