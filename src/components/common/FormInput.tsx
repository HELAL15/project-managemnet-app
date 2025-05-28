import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '../ui/form';
import { Input } from '../ui/input';
import type { Control } from 'react-hook-form';

interface IProps {
    control: Control;
    name: string;
    label?: string;
    placeholder?: string;
    className?: string;
    type?: string;
}

const FormInput = ({ control, name, placeholder, label, type }: IProps) => {
    return (
        <>
            <FormField
                control={control}
                name={name as string}
                render={({ field }) => (
                    <FormItem>
                        {label && <FormLabel>{label}</FormLabel>}
                        <FormControl>
                            <Input className='!py-5' type={type} placeholder={placeholder} {...field} />
                        </FormControl>
                        <FormMessage />
                    </FormItem>
                )}
            />
        </>
    );
};

export default FormInput;
