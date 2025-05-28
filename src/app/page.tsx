import { Metadata } from 'next';

import HomePage from '@/app/(delete-this-and-modify-page.tsx)/HomePage';

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
            <HomePage />
        </>
    );
};

export default Page;
