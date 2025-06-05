import Link from 'next/link';

import FormInput from '@/components/common/FormInput';
import { Button } from '@/components/ui/Button';
import { LoginSchemaType } from '@/validations/loginSchema';

import { FormProvider } from 'react-hook-form';
import type { SubmitHandler, UseFormReturn } from 'react-hook-form';
import { FaGithub } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';

type LoginFormProps = {
    form: UseFormReturn<LoginSchemaType>;
    onSubmit: SubmitHandler<LoginSchemaType>;
    isPending?: boolean;
};

const LoginForm = ({ form, onSubmit, isPending }: LoginFormProps) => {
    const { handleSubmit } = form;

    return (
        <>
            <FormProvider {...form}>
                <form onSubmit={handleSubmit(onSubmit)} className='w-[90%] space-y-5 md:w-[400px]'>
                    <FormInput name='email' placeholder='a**@gmail.com' label='email' />
                    <div className='space-y-2'>
                        <FormInput type='password' name='password' placeholder='********' label='password' />
                        <Link
                            className='text-muted-foreground hover:text-foreground block text-end text-sm duration-300'
                            href={'/forget-password'}>
                            forget your password?
                        </Link>
                    </div>

                    <Button size={'lg'} type='submit' disabled={isPending} className='w-full'>
                        {isPending ? 'loading' : 'login'}
                    </Button>
                    <div className='text-muted-foreground flex items-center gap-2'>
                        <span className='bg-muted h-px flex-1' />
                        <span className='text-sm'>or</span>
                        <span className='bg-muted h-px flex-1' />
                    </div>

                    <Button variant={'outline'} size={'lg'} type='button' disabled={isPending} className='w-full'>
                        <i>
                            <FcGoogle />
                        </i>
                        login with google
                    </Button>
                    <Button variant={'outline'} size={'lg'} type='button' disabled={isPending} className='w-full'>
                        <i>
                            <FaGithub />
                        </i>
                        login with github
                    </Button>
                </form>
            </FormProvider>
        </>
    );
};

export default LoginForm;
