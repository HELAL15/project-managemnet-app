import Link from 'next/link';

import ProfileAndLogin from '../user/ProfileAndLogin';

const Header = () => {
    return (
        <header className='bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b-secondary text-foreground sticky top-0 z-50 border-b py-3 antialiased backdrop-blur'>
            <div className='container flex w-full items-center justify-between gap-6'>
                <Link href={'/'} className='text-xl font-bold md:text-2xl lg:text-3xl'>
                    HELAL
                </Link>

                <ProfileAndLogin />
            </div>
        </header>
    );
};

export default Header;
