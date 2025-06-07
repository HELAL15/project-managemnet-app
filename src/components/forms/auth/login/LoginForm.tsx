import Link from 'next/link';

import FormInput from '@/components/common/FormInput';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/card';
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
            <Card className='mx-4 w-[90%] p-4 md:mx-6 md:w-[450px] md:p-6'>
                <div className='space-y-2 text-center'>
                    <h1 className='text-center text-3xl font-bold'>login</h1>
                    <p className='text-muted-foreground text-sm'>welcome back , login to your account</p>
                </div>
                <FormProvider {...form}>
                    <form onSubmit={handleSubmit(onSubmit)} className='space-y-6'>
                        <FormInput name='email' placeholder='a**@gmail.com' label='email' />
                        <div className='space-y-2'>
                            <FormInput type='password' name='password' placeholder='********' label='password' />
                            <Link
                                className='text-muted-foreground hover:text-foreground block text-end text-sm underline duration-300'
                                href={'/forget-password'}>
                                forget your password?
                            </Link>
                        </div>

                        <Button size={'lg'} type='submit' disabled={isPending} className='w-full'>
                            {isPending ? 'loading' : 'login'}
                        </Button>
                        <p className='text-muted-foreground text-center text-sm'>
                            dont have an account?{' '}
                            <Link href={'/register'} className='text-white underline duration-300'>
                                sign up
                            </Link>{' '}
                        </p>
                        <div className='text-muted-foreground flex items-center gap-2'>
                            <span className='bg-muted h-px flex-1' />
                            <span className='text-sm'>or</span>
                            <span className='bg-muted h-px flex-1' />
                        </div>
                        <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                            <Button
                                variant={'outline'}
                                size={'lg'}
                                type='button'
                                disabled={isPending}
                                className='w-full'>
                                <i>
                                    <FcGoogle />
                                </i>
                                login with google
                            </Button>
                            <Button
                                variant={'outline'}
                                size={'lg'}
                                type='button'
                                disabled={isPending}
                                className='w-full'>
                                <i>
                                    <FaGithub />
                                </i>
                                login with github
                            </Button>
                        </div>
                    </form>
                </FormProvider>
            </Card>
        </>
    );
};

export default LoginForm;
