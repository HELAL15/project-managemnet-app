'use client';

import LoginForm from '@/components/forms/auth/login/LoginForm';
import { useLoginLogic } from '@/hooks/auth/useLoginLogic';

export default function LoginFormContainer() {
    const { form, onSubmit, isPending } = useLoginLogic();

    return <LoginForm form={form} isPending={isPending} onSubmit={onSubmit} />;
}
