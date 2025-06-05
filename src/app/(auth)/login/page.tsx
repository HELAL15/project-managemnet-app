import { Metadata } from 'next';

import BluredCircles from '@/components/ui/BluredCircles';

import LoginFormContainer from './LoginFormContainer';

export const metadata: Metadata = {
    title: 'login - websiteName'
};

const Page = () => {
    return (
        <>
            <main>
                <BluredCircles />
                <section className='relative z-10 my-12 grid h-full place-items-center space-y-8 lg:my-20'>
                    <div className='space-y-2'>
                        <h1 className='text-center text-3xl font-bold'>login</h1>
                        <p className='text-muted-foreground text-sm'>welcome back , login to your account</p>
                    </div>
                    <LoginFormContainer />
                </section>
            </main>
        </>
    );
};

export default Page;
