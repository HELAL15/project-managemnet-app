'use client';

import React from 'react';

import { usePathname, useRouter } from 'next/navigation';

import { Button } from '../ui/Button';
import Cookies from 'js-cookie';
import { useLocale } from 'next-intl';
import { useTopLoader } from 'nextjs-toploader';
import { AiOutlineGlobal } from 'react-icons/ai';

const LangSwitcher = () => {
    const router = useRouter();
    const path = usePathname();
    const loader = useTopLoader();
    const locale = useLocale();
    const localeSetter = locale === 'ar' ? 'en' : 'ar';
    const setLocale = (locale: string) => {
        Cookies.set('locale', locale, { path: '/' });
        router.push(path);
        loader.start();
        router.refresh();
    };

    return (
        <>
            <Button className='h-6 !bg-transparent !px-0' variant={'ghost'} onClick={() => setLocale(localeSetter)}>
                <i>
                    <AiOutlineGlobal />
                </i>
                <span className='uppercase'>{localeSetter}</span>
            </Button>
        </>
    );
};

export default LangSwitcher;
