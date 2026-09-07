export interface FormData {
  fullName: string
  email: string
  phone: string
  buildingNumber: string
  street: string
  town: string
  zipCode: string
  cardHolderName: string
  cardNumber: string
  cvc: string
  expiration: string
}

export const INITIAL_DATA: FormData = {
  fullName: '',
  email: '',
  phone: '',
  buildingNumber: '',
  street: '',
  town: '',
  zipCode: '',
  cardHolderName: '',
  cardNumber: '',
  cvc: '',
  expiration: '',
}
