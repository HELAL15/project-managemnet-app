import { useRouter } from 'next/navigation';

import { loginDefaultValues } from '@/constants/formDefaults';
import useCookie from '@/hooks/useCookies';
import { createClient } from '@/utils/supabase/client';
import loginSchema from '@/validations/loginSchema';
import { zodResolver } from '@hookform/resolvers/zod';

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

    const supabase = createClient();
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
                router.refresh();
            } else {
                toast.error('No token received from Supabase.');
            }
        } catch (err: unknown) {
            const errorMessage = err instanceof Error ? err.message : 'Login failed';
            toast.error(errorMessage);
        }
    };

    return { form, onSubmit, isPending: form.formState.isSubmitting };
}
