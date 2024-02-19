'use client';
import { IoLanguageOutline } from "react-icons/io5";
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';

export default function LocalSwitcher({iconsStyles}) {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
        const nextLocale = e.target.value;
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };
    return (
        <div className="flex flex-row items-center">
            <div className={`${iconsStyles}`}>
                <IoLanguageOutline />
            </div>
                <select
                    defaultValue={localActive}
                    className='bg-background border-none py-2 cursor-pointer'
                    onChange={onSelectChange}
                    disabled={isPending}
                >
                    <option value='en'>EN</option>
                    <option value='pl'>PL</option>
                </select>
        </div>

    );
}