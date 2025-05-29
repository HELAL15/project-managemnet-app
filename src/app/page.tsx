import { Metadata } from 'next';

import Landing from '@/components/home/Landing';

/**
 * The main page component that renders the HomePage component.
 *
 * @returns {JSX.Element} The rendered HomePage component.
 */

export const metadata: Metadata = {
    title: 'home - websiteName'
};

const Page = () => {
    return (
        <>
            <main>
                <Landing />
            </main>
        </>
    );
};

export default Page;
