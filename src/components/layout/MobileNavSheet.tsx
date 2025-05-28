'use client';

import LanguageSwitcher from '@/components/common/LanguageSwitcher';
import useRouteChange from '@/hooks/useRouteChange';

import NavLinks from '../common/NavLinks';
import ThemeSwitch from '../common/ThemeSwitch';
import { Button } from '../ui/Button';
import { Sheet, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet';
import { HiBars2 } from 'react-icons/hi2';

const MobileNavSheet = () => {
    const { isOpen, setIsOpen } = useRouteChange();

    return (
        <>
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
                <SheetTrigger asChild>
                    <Button className='!bg-transparent !px-0' variant={'ghost'}>
                        <i className='cursor-pointer'>
                            <HiBars2 className='size-[unset] text-4xl' />
                        </i>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetTitle>nextjs folder-structure</SheetTitle>
                    </SheetHeader>

                    <ul className='flex flex-col gap-4 px-6 text-2xl'>
                        <NavLinks />
                    </ul>
                    <SheetDescription></SheetDescription>

                    <SheetFooter>
                        <div className='flex items-center justify-center gap-2'>
                            <ThemeSwitch />
                            <LanguageSwitcher />
                        </div>
                    </SheetFooter>
                </SheetContent>
            </Sheet>
        </>
    );
};

export default MobileNavSheet;
