'use client';

import Link from 'next/link';

import FormInput from '@/components/common/FormInput';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Form } from '@/components/ui/form';
import formSchema from '@/validations/contactSchema';
import { zodResolver } from '@hookform/resolvers/zod';

import { useForm } from 'react-hook-form';
import type { FieldValues } from 'react-hook-form';
import { FaDiscord, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';

const page = () => {
    const formObject: FieldValues = {
        resolver: zodResolver(formSchema),
        mode: 'onChange',
        defaultValues: {
            email: '',
            name: '',
            message: ''
        }
    };
    const form = useForm<FieldValues>(formObject);
    const { formState, control, handleSubmit } = form;

    const onSubmit = (data: FieldValues) => {
        console.log(data);
    };

    return (
        <>
            <main>
                <section>
                    <div className='container space-y-8'>
                        <h1 className='text-center text-3xl font-bold md:text-4xl'>get in touch with us us</h1>

                        <div className='grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4'>
                            <div className='col-span-1 md:col-span-2 lg:col-span-3'>
                                <iframe
                                    className='min-h-[400px] w-full rounded-lg'
                                    src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54693.86900575036!2d31.37408491977539!3d31.043886453679868!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79dd4295c80e9%3A0x29c566a018cecb77!2z2KzYp9mF2LnYqSDYp9mE2YXZhti12YjYsdip!5e0!3m2!1sar!2seg!4v1747304193274!5m2!1sar!2seg'
                                    loading='lazy'
                                    referrerPolicy='no-referrer-when-downgrade'></iframe>
                            </div>
                            <Card className='flex flex-col justify-between'>
                                <CardContent className='space-y-6'>
                                    <article>
                                        <h2 className='text-sm text-zinc-400'>address</h2>
                                        <p>egypt , Gharbia , mahalla</p>
                                    </article>
                                    <article>
                                        <h2 className='text-sm text-zinc-400'>email</h2>
                                        <p>
                                            <Link href='mailto:1ahmedhelal1@gmail.com'>1ahmedhelal1@gmail.com</Link>
                                        </p>
                                    </article>
                                    <article>
                                        <h2 className='text-sm text-zinc-400'>phone</h2>
                                        <p>
                                            <Link href='tel:+201551610991'>+201551610991</Link>
                                        </p>
                                    </article>
                                </CardContent>
                                <CardFooter className='flex items-center justify-center gap-4'>
                                    <Link href='#'>
                                        <i className='hover:text-foreground text-3xl text-zinc-400 duration-300'>
                                            <FaFacebook />
                                        </i>
                                    </Link>
                                    <Link href='#'>
                                        <i className='hover:text-foreground text-3xl text-zinc-400 duration-300'>
                                            <FaTwitter />
                                        </i>
                                    </Link>
                                    <Link href='#'>
                                        <i className='hover:text-foreground text-3xl text-zinc-400 duration-300'>
                                            <FaInstagram />
                                        </i>
                                    </Link>
                                    <Link href='#'>
                                        <i className='hover:text-foreground text-3xl text-zinc-400 duration-300'>
                                            <FaDiscord />
                                        </i>
                                    </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </section>
                <section>
                    <div className='container space-y-8'>
                        <h2 className='text-center text-3xl font-bold md:text-4xl'>contact us</h2>
                        <Form {...form}>
                            <form onSubmit={handleSubmit(onSubmit)} className='mx-auto w-full space-y-6 md:w-[600px]'>
                                <FormInput
                                    label='name'
                                    name='name'
                                    type='text'
                                    placeholder='enter your name'
                                    control={control}
                                />
                                <FormInput
                                    label='email'
                                    name='email'
                                    type='email'
                                    placeholder='enter your email'
                                    control={control}
                                />
                                <FormInput
                                    label='message'
                                    name='message'
                                    type='textarea'
                                    placeholder='enter your message'
                                    control={control}
                                />

                                <Button type='submit'>{formState.isSubmitting ? 'loading' : 'login'}</Button>
                            </form>
                        </Form>
                    </div>
                </section>
            </main>
        </>
    );
};

export default page;
