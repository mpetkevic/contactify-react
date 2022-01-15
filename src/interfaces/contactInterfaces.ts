export interface Contact{
    name: string,
    surname: string,
    id: string,
    isActive: Boolean,
    city: string,
    email: string,
    phone: string
}

export interface ContactsFilter {
    name: string,
    city: string | null,
    isActive: Boolean
}
