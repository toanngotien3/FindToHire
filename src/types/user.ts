type RoleType = 'developer' | 'mod' | 'admin'
type FilterByType = 'thumb-up' | 'exp' | 'country'

export type UserType = {
  tg: string
  role: string
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
  role: string
  detail: string
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
  role: RoleType
  filter_by: FilterByType
}
