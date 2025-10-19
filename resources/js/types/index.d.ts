export interface Auth {
    user: User;
}

export interface SharedData {
    name: string;
    quote: { message: string; author: string };
    auth: Auth;
    [key: string]: unknown;
}

export interface User {
    id: number;
    name: string;
    email: string;
    avatar?: string;
    email_verified_at: string | null;
    created_at: string;
    updated_at: string;
    [key: string]: unknown; // This allows for additional properties...
}

export interface Seller {
    id: number;
    name: string;
    email: string;
}

export interface Sale {
    id: number;
    amount: number;
    date: Date;
    seller: Seller;
}

export interface Rule {
    id: number;
    name: string;
    percentage: number;
    min_amount: number;
}
