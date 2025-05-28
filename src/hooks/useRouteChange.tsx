'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

const useRouteChange = () => {
    const router = usePathname();
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const toggle = () => setIsOpen((prev) => !prev);
    const close = () => setIsOpen(false);
    const open = () => setIsOpen(true);
    useEffect(() => {
        if (isOpen) {
            close();
        } else if (!isOpen) {
            close();
        }
    }, [router]);

    return { isOpen, setIsOpen, open, close, toggle };
};

export default useRouteChange;
