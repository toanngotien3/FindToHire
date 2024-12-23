import { UserFormType } from '@/types'
import * as yup from 'yup'

export const user_form_schema: yup.ObjectSchema<UserFormType> = yup
  .object()
  .shape({
    tg: yup.string().required('Telegram is required').url('Invalid URL'),
    role: yup
      .string()
      .oneOf(
        ['developer', 'mod', 'admin', 'kol'],
        'Role must be one of: developer, mod, admin, kol'
      )
      .required('Role is required'),
    description: yup.string().required('Detail is required'),
    x: yup.string().required('X (Twitter) is required').url('Invalid URL'),
    site: yup.string().url('Invalid URL'),
    exp: yup.number().required('Exp is required'),
    from: yup.string(),
  })
