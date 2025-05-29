import Link from 'next/link';

import { Button } from '../ui/Button';
import UserDropdown from '../user/UserDropdown';

const Header = () => {
    return (
        <header className='bg-background/95 supports-[backdrop-filter]:bg-background/60 border-b-secondary text-foreground sticky top-0 z-50 border-b py-3 antialiased backdrop-blur'>
            <div className='container flex w-full items-center justify-between gap-6'>
                <Link href={'/'} className='text-xl font-bold md:text-2xl lg:text-3xl'>
                    HELAL
                </Link>

                <div className='flex items-center gap-4 lg:gap-6'>
                    <UserDropdown />
                    <Button className='px-8 max-lg:order-1 max-lg:hidden'>
                        <Link href={'/login'}>login</Link>
                    </Button>
                </div>
            </div>
        </header>
    );
};

export default Header;
