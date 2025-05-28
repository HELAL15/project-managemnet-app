'use client';

import { navLinks } from '@/constants';

import NavLink from '../ui/NavLink';
import { useTranslations } from 'next-intl';

const NavLinks = () => {
    const t = useTranslations('nav');

    return (
        <>
            {navLinks.map((link) => (
                <li key={link.id}>
                    <NavLink href={link.href} title={t(link.title)} />
                </li>
            ))}
        </>
    );
};

export default NavLinks;
