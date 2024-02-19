'use client'

import Link from 'next/link'
import { RiLinkedinFill, RiGithubFill, RiFacebookFill } from 'react-icons/ri'

const icons = [
    {
        path: 'https://www.linkedin.com/in/%C5%82ukasz-g%C3%B3rka-534697151/',
        name: <RiLinkedinFill />
    },
    {
        path: 'https://github.com/Cinamon88',
        name: <RiGithubFill />
    },
    {
        path: 'https://www.facebook.com/profile.php?id=61551858456248',
        name: <RiFacebookFill />
    },
]

const Socials = ({containerStyles, iconsStyles}) => {
  return (
    <div className={`${containerStyles}`}>
        {icons.map((icon, index) => {
            return (
                <Link href={icon.path} key={index}>
                    <div className={`${iconsStyles}`}>{icon.name}</div>
                </Link>
            )
        })}
    </div>
  )
}

export default Socials