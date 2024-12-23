type UserRoleType = 'developer' | 'mod' | 'admin' | 'kol'
type UserFilterByType = 'thumb-up' | 'exp' | 'country'

export type UserType = {
  tg: string
  role: UserRoleType
  logo: string
  banner: string
  description: string
  x: string
  site?: string
  exp: number
  from?: string
  rate?: UserRateType
}

export type UserFormType = {
  tg: string
  role: UserRoleType
  description: string
  x: string
  site?: string
  exp: number
  from?: string
}

export type UserRateType = {
  thumb_up: number
  label?: string
}

export type UserFilterType = {
  tg: string
  role: UserRoleType
  filter_by: UserFilterByType
}
