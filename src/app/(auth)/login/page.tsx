import { Metadata } from 'next';

import LoginForm from '@/components/login/LoginForm';
import BluredCircles from '@/components/ui/BluredCircles';

export const metadata: Metadata = {
    title: 'login - websiteName'
};

const Page = () => {
    return (
        <>
            <main>
                <BluredCircles />
                <section className='relative z-10 my-12 lg:my-20'>
                    <div className='container grid h-full place-items-center space-y-8'>
                        <h1 className='text-center text-3xl font-bold'>login</h1>
                        <LoginForm />
                    </div>
                </section>
            </main>
        </>
    );
};

export default Page;
