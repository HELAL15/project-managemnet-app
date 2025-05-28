import React, { ReactNode } from 'react';

import { ThemeProvider } from 'next-themes';

import '@/app/globals.css';
import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';

import { NextIntlClientProvider } from 'next-intl';
import NextTopLoader from 'nextjs-toploader';

const AppProvider = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <ThemeProvider attribute='class'>
                <NextIntlClientProvider>
                    <Header />
                    {children}
                    <Footer />
                    <NextTopLoader
                        color='oklch(55.4% .046 251.412)
'
                        height={2}
                    />
                </NextIntlClientProvider>
            </ThemeProvider>
        </>
    );
};

export default AppProvider;
