import Form from "../../../components/Form"
import { MailIcon, PhoneCall } from "lucide-react"
import Link from "next/link"
import { RiWhatsappLine } from "react-icons/ri"
import { useTranslations } from 'next-intl';

const Contact = () => {

  const t = useTranslations('Contact');

  return (
    <section className='min-h-screen pt-12'>
      <div className="container mx-auto">
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-x-4 text-primary text-lg mb-4">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              Say Hello 👋
            </div>
            <h1 className="h1 max-w-md mb-8">{t('subheading')}</h1>
            <p className="subtitle max-w-[400px]">{t('desc')}</p>
          </div>
          {/* illustrations */}
          <div className="hidden xl:flex w-full bg-contact_ilustr_light dark:bg-contact_ilustr_dark bg-contain bg-top bg-no-repeat">

          </div>
        </div>
        {/* text & form */}
        <div className="grid xl:grid-cols-2 mb-24 xl:mb-32">
          <div className="flex flex-col gap-y-4 xl:gap-y-14 mb-12 xl:mb-24 text-base xl:text-lg">
            <div className="flex items-center gap-x-8">
              <MailIcon size={18} className="text-primary" />
              <div><a href="mailto:lukaszgorka@hotmail.com">lukaszgorka@hotmail.com</a></div>
            </div>
            <div className="flex items-center gap-x-8">
              <PhoneCall size={18} className="text-primary" />
              <div><a href="tel:+48692712">692-712-014</a></div>
            </div>
            <div className="flex items-center gap-x-8">
              <RiWhatsappLine size={20} className="text-primary" />
              <Link href="https://wa.me/48692712014">WhatsApp</Link>
            </div>
          </div>
          <Form />
        </div>
      </div>
    </section>
  )
}

export default Contact;