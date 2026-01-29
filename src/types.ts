export type User = {
    id: number
    name: string
    email: string
    phone: string
    company: UserCompany
    address: UserAddress
}

export type UserCompany = {
    name: string
    catchPhrase: string
    bs: string
}

export type UserAddress = {
    city: string
    street: string
    suite: string
    zipcode: string
    geo: UserAddressGeo
}

export type UserAddressGeo = {
    lat: string
    lng: string
}
