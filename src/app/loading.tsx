/**
 * ==> Component
 */
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'loading - websiteName'
};

const loading = () => {
    return (
        <>
            <section className='flex min-h-[65vh] items-center justify-center'>
                <span className='border-foreground h-16 w-16 animate-spin rounded-full border-4 border-t-transparent' />
            </section>
        </>
    );
};

export default loading;
