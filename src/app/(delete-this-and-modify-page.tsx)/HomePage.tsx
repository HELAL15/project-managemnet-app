import { FC } from 'react';

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

import { useTranslations } from 'next-intl';

const HomePage: FC = () => {
    const t = useTranslations();

    return (
        <>
            <main>
                <section>
                    <div className='container'>
                        <Accordion type='single' collapsible className='w-full'>
                            <AccordionItem value='item-1'>
                                <AccordionTrigger>Is it accessible?</AccordionTrigger>
                                <AccordionContent>Yes. It adheres to the WAI-ARIA design pattern.</AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-2'>
                                <AccordionTrigger>Is it styled?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. It comes with default styles that matches the other components&apos; aesthetic.
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value='item-3'>
                                <AccordionTrigger>Is it animated?</AccordionTrigger>
                                <AccordionContent>
                                    Yes. Its animated by default, but you can disable it if you prefer.
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </section>
                <section>
                    <div className='container'>
                        <div className='grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4'>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Create project</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus animi veritatis
                                    repellendus culpa laudantium dolore illo harum quam hic eius, quasi numquam.
                                    Molestias ea minima est quod eius minus aperiam.
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Create project</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus animi veritatis
                                    repellendus culpa laudantium dolore illo harum quam hic eius, quasi numquam.
                                    Molestias ea minima est quod eius minus aperiam.
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Create project</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus animi veritatis
                                    repellendus culpa laudantium dolore illo harum quam hic eius, quasi numquam.
                                    Molestias ea minima est quod eius minus aperiam.
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Create project</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus animi veritatis
                                    repellendus culpa laudantium dolore illo harum quam hic eius, quasi numquam.
                                    Molestias ea minima est quod eius minus aperiam.
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
};

export default HomePage;
