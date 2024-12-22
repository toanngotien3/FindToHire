import { UserFormType } from '@/types';
import * as yup from 'yup';

export const user_form_schema: yup.ObjectSchema<UserFormType> = yup.object().shape({
    name: yup.string().required('Name is required'),
    role: yup.string().required('Role is required'),
    detail: yup.string().required('Detail is required'),
    tg: yup.string().required('Telegram is required').url('Invalid URL'),
    x: yup.string().required('X (Twitter) is required').url('Invalid URL'),
    site: yup.string().url('Invalid URL'),
    exp: yup.number().required("Exp is required"),
    from: yup.string(),
});