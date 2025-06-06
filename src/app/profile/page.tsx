'use client';

import { useUserSession } from '@/hooks/auth/useUserSession';

const Page = () => {
    const session = useUserSession();
    const email = session?.user?.email;
    const id = session?.user?.id;

    return (
        <main className='p-4'>
            <h1 className='text-2xl font-bold'>ملف المستخدم</h1>
            <p>البريد الإلكتروني: {email}</p>
            <p>الـ UID: {id}</p>
        </main>
    );
};

export default Page;
