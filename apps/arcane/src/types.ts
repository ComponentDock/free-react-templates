export interface PersonalInfo {
  fullName: string
  email: string
  phone: string
}

export interface BookingDetails {
  date: string
  timeSlot: string
  serviceType: string
  notes: string
}

export type FormData = PersonalInfo & BookingDetails

export interface StepErrors {
  [key: string]: string
}
