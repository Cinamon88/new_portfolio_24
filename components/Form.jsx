'use client'

import { ArrowRightIcon, MailIcon, MessageSquare, User } from "lucide-react"
import { Input } from "./ui/input"
import { Textarea } from "./ui/textarea"
import { Button } from "./ui/button"
import { useState } from "react"
import { toast } from 'react-hot-toast'


const Form = () => {
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
            toast.success(`Your message was sent successfully`)
        }
    }

    return (
        <form className="flex flex-col gap-y-4">
            <div className="relative flex items-center">
                <Input type="name" id="name" placeholder="Name" />
                <User className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Input type="email" id="email" placeholder="Email" />
                <MailIcon className="absolute right-6" size={20} />
            </div>
            <div className="relative flex items-center">
                <Textarea type="text" id="message" placeholder="Your Message Here." />
                <MessageSquare className="absolute top-4 right-6" size={20} />
            </div>
            <Button
                onClick={sendEmail}
                className="flex items-center gap-x-1 max-w-[166px] text-white"
            >
                Let's Talk
                <ArrowRightIcon size={20} />
            </Button>
        </form>
    )
}

export default Form