import { useRouter } from 'next/navigation';

import { loginDefaultValues } from '@/constants/formDefaults';
import useCookie from '@/hooks/useCookies';
import { supabase } from '@/lib/supabaseClient';
import loginSchema from '@/validations/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';

import usePost from '../usePost';
import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import { toast } from 'sonner';

export function useLoginLogic() {
    const router = useRouter();
    const { setCookie } = useCookie('sb-access-token', '');

    const form = useForm({
        resolver: zodResolver(loginSchema),
        mode: 'onChange',
        defaultValues: loginDefaultValues
    });

    const { mutate, isPending } = usePost({
        endpoint: 'admin/login',
        onSuccess(data) {
            const token = data?.data?.access_token;
            setCookie(token, {
                path: '/',
                secure: false,
                sameSite: 'strict'
            });
            router.push('/');
        }
    });

    // const onSubmit = async (data: FieldValues) => {
    //     mutate(data);
    // };

    const onSubmit = async (values: FieldValues) => {
        const { email, password } = values;

        try {
            const { data, error } = await supabase.auth.signInWithPassword({
                email,
                password
            });

            if (error) {
                toast.error(error.message);
                return;
            }

            const token = data?.session?.access_token;
            if (token) {
                setCookie(token, {
                    path: '/',

                    secure: true,
                    sameSite: 'strict'
                });

                toast.success('Login successful');
                router.push('/');
            } else {
                toast.error('No token received from Supabase.');
            }
        } catch (err: any) {
            toast.error(err.message || 'Login failed');
        }
    };

    return { form, onSubmit, isPending: form.formState.isSubmitting };
}
