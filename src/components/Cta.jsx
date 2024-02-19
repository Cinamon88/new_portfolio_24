import Link from "next/link";
import { Button } from "./ui/button";

import { useTranslations } from 'next-intl';


const Cta = () => {

  const t = useTranslations('Cta');

  return (
    <section className="py-24 bg-tertiary dark:bg-secondary/40">
        <div className="container mx-auto">
            <div className="flex flex-col items-center">
                <h2 className="h3 max-w-xl text-center mb-8">{t('subheading')}</h2>
                <Link href='/contact'>
                    <Button>{t('button')}</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Cta;