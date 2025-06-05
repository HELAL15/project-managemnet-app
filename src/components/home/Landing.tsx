'use client';

import Image from 'next/image';
import Link from 'next/link';

import { useTheme } from 'next-themes';

import BluredCircles from '@/components/ui/BluredCircles';
import { Button } from '@/components/ui/Button';

import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ArrowRight, CheckCircle } from 'lucide-react';

const Landing = () => {
    const features = ['intuitive kanban board', 'real-time collaboration', 'custom workflow', 'advanced task tracking'];

    const { theme } = useTheme();

    return (
        <>
            <BluredCircles />
            <section className='relative z-10 py-20'>
                <div className='container flex flex-col items-center justify-center gap-6'>
                    <h1 className='flex flex-col space-y-1 text-center font-bold'>
                        <span className='text-3xl md:text-4xl lg:text-5xl'>organize your work,</span>
                        <span className='text-2xl md:text-3xl lg:text-4xl'>one task at a time</span>
                    </h1>
                    <p className='text-foreground/60 text-center text-base md:max-w-[600px] md:text-lg'>
                        good beyoned basic to do list, offering a more comprehensive task management experience.
                    </p>
                    <nav className='-items-center flex gap-4'>
                        <Button>
                            <Link className='flex items-center gap-2' href='/register'>
                                <span>Get Started</span>
                                <ArrowRight className='size-4' />
                            </Link>
                        </Button>
                        <Button variant='outline'>
                            <Link className='flex items-center gap-2' href='/login'>
                                sign in
                            </Link>
                        </Button>
                    </nav>
                    <ul className='features text-foreground/60 gap-4 space-y-4 md:columns-2'>
                        {features.map((feature) => (
                            <li key={feature} className='flex items-center gap-2 px-3 md:px-5'>
                                <CheckCircle className='size-4 text-green-500' />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <Image
                        draggable={false}
                        key={theme}
                        src={theme === 'light' ? '/images/projex-light.png' : '/images/projex-dark.png'}
                        alt='hero-image'
                        width={1300}
                        height={1300}
                    />
                </div>
            </section>
            <section>
                <div className='container'>
                    <div className='grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3'>
                        <Card>
                            <CardContent className='space-y-4'>
                                <Image src='/images/projex-light.png' alt='hero-image' width={1300} height={1300} />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className='space-y-4'>
                                <Image src='/images/projex-light.png' alt='hero-image' width={1300} height={1300} />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardContent className='space-y-4'>
                                <Image src='/images/projex-light.png' alt='hero-image' width={1300} height={1300} />
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Landing;
