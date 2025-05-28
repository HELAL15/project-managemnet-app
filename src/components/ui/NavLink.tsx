'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

interface IProps {
    href: string;
    title: string;
}

const NavLink = ({ href, title }: IProps) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} title={title} className={cn(isActive ? 'text-slate-400' : '')}>
            {title}
        </Link>
    );
};

export default NavLink;
