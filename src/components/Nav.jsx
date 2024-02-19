import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslations } from 'next-intl';



const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {

    const t = useTranslations('Nav');

    const links = [
        { path: '/', name: `${t('home')}` },
        { path: '/projects', name: `${t('my_projects')}` },
        { path: '/contact', name: `${t('contact')}` }
    ]

    const path = usePathname();

    return (
        <nav className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <Link href={link.path} key={index} className={`capitalize ${linkStyles}`}>
                        {link.path === path && (
                            <motion.span
                                initial={{ y: '-100%' }}
                                animate={{ y: 0 }}
                                transition={{ type: 'tween' }}
                                layoutId='underline'
                                className={`${underlineStyles}`}
                            >

                            </motion.span>
                        )}
                        {link.name}
                    </Link>
                );
            })}
        </nav>
    )
}

export default Nav;