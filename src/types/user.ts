import { RateType } from "./rate";

export type UserType = {
    name: string;
    role: string;
    logo: string;
    banner: string;
    description: string;
    tg: string;
    x: string;
    site?: string;
    exp: number;
    from?: string;
    rate?: RateType
}

export type UserFormType = {
    name: string;
    role: string;
    detail: string;
    tg: string;
    x: string;
    site?: string;
    exp: number;
    from?: string;
};