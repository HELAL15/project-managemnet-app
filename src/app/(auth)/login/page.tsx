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

                <section className='relative z-10 my-12 grid h-full place-items-center space-y-8 lg:my-12'>
                    <LoginFormContainer />
                </section>
            </main>
        </>
    );
};

export default Page;
