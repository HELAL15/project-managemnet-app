import { ReactNode } from 'react';

import { cn } from '@/lib/utils';

import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import { type Control, useFormContext } from 'react-hook-form';

interface IProps {
    control?: Control;
    name: string;
    label?: string;
    placeholder?: string;
    className?: string;
    type?: string;
    cx?: string;
    description?: ReactNode;
}

const FormInput = ({ name, placeholder, label, type, cx, description }: IProps) => {
    const { control } = useFormContext();

    return (
        <>
            <FormField
                control={control}
                name={name as string}
                render={({ field }) => (
                    <FormItem>
                        {label && <FormLabel>{label}</FormLabel>}
                        <FormControl>
                            <Input className={cn('!py-5', cx)} type={type} placeholder={placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                        {description && <FormDescription>{description}</FormDescription>}
                    </FormItem>
                )}
            />
        </>
    );
};

export default FormInput;
