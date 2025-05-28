import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

import LangSwitcher from '../common/LanguageSwitcher';
import { Button } from '../ui/Button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '../ui/dropdown-menu';
import { LogOutIcon } from 'lucide-react';

const UserDropdown = () => {
    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Image
                        src={'/images/DUMMY_USER.jpeg'}
                        alt='user'
                        width={36}
                        height={36}
                        className='!size-9 cursor-pointer rounded-full object-cover'
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent className='bg-background w-[200px]'>
                    <DropdownMenuLabel>
                        <p className='text-sm font-medium'>{'John Doe'}</p>
                        <p className='text-xs text-gray-500'>{'john.doe@example.com'}</p>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Link href={'/profile'} className='w-full'>
                            profile
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={'/projects'} className='w-full'>
                            projects
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Link href={'/settings'} className='w-full'>
                            settings
                        </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <LangSwitcher />
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem>
                        <Button className='h-6 text-red-400 hover:bg-transparent hover:text-red-400' variant={'ghost'}>
                            <LogOutIcon className='size-4 text-red-400 hover:text-red-400' />
                            logout
                        </Button>
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default UserDropdown;
