'use client'

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast } from 'react-hot-toast'
import { useTranslations } from 'next-intl';


const Form = () => {

    const t = useTranslations('Contact');

    const [data, setData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const sendEmail = async (e) => {
        e.preventDefault();
        const response = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        if(response.status === 200) {
            setData({})
            toast.success(`${t('toast')}`)
        }
    }

    // const formRef = useRef();
    // const [form, setForm] = useState({
    //     name: "",
    //     email: "",
    //     message: "",
    // });

    // const [loading, setLoading] = useState(false);

    // const handleChange = (e) => {
    //     const { target } = e;
    //     const { name, value } = target;

    //     setForm({
    //         ...form,
    //         [name]: value,
    //     });
    // };

    // const currentForm = {
    //     from_name: form.name,
    //     to_name: "Lucas",
    //     from_email: form.email,
    //     to_email: "woocash.box@gmail.com",
    //     message: form.message,
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     setLoading(true);

    //     emailjs
    //         .sendForm(
    //             process.env.NEXT_PUBLIC_SERVICE_ID,
    //             process.env.NEXT_PUBLIC_TEMPLATE_ID,
    //             currentForm,
    //             process.env.NEXT_PUBLIC_PUBLIC_KEY
    //         )
    //         .then(
    //             () => {
    //                 setLoading(false);
    //                 alert("Thank you. I will get back to you as soon as possible.");

    //                 setForm({
    //                     name: "",
    //                     email: "",
    //                     message: "",
    //                 });
    //             },
    //             (error) => {
    //                 setLoading(false);
    //                 console.error(error);

    //                 alert("Ahh, something went wrong. Please try again.");
    //             }
    //         );
    // };

    return (
        <form
            // ref={formRef}
            // onSubmit={handleSubmit}
            className="flex flex-col gap-y-4"
        >
            <div className="relative flex items-center">
                <Input
                    type="name"
                    id="name"
                    placeholder={t('form_name')}
                    required
                    // name='name'
                    // value={form.name}
                    // onChange={handleChange}
                />
                <User className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    required
                    // name='email'
                    // value={form.email}
                    // onChange={handleChange}
                />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Textarea
                    type="text"
                    id="message"
                    placeholder={t('form_message')}
                    required
                    // name='message'
                    // value={form.message}
                    // onChange={handleChange}
                />
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button
                // type='submit'
                onClick={sendEmail}
                className="flex items-center gap-x-1 max-w-[166px] text-white"
            >
                {t('button')}
                <ArrowRightIcon size={20} />
            </Button>
        </form>
    )
}

export default Form;