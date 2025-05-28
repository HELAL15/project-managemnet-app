import * as z from 'zod';

  const formSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  name: z.string().min(1, { message: 'Name is required' }),
  message: z.string().min(1, { message: 'Name is required' })
});


export default formSchema