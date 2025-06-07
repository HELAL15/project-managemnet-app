'use client';

import Link from 'next/link';

import { useUserSession } from '@/hooks/auth/useUserSession';

import { Button } from '../ui/Button';
import UserDropdown from '../user/UserDropdown';

const ProfileAndLogin = () => {
    const session = useUserSession();

    return (
        <div className='flex items-center gap-4 lg:gap-6'>
            {session ? (
                <UserDropdown />
            ) : (
                <Button className='px-8'>
                    <Link href={'/login'}>login</Link>
                </Button>
            )}
        </div>
    );
};

export default ProfileAndLogin;
