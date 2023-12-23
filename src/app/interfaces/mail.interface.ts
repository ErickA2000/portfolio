export interface Body {
    name: string;
    company?: string;
    email: string;
    message: string;
}

export interface ResponseMail {
    next: string;
    ok: boolean;
}