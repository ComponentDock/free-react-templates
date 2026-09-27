import { BookingForm } from './BookingForm'

export function BookingCard() {
  return (
    <div className="mx-auto w-full max-w-[1150px] overflow-hidden rounded-2xl shadow-[0px_10px_10px_rgba(0,0,0,0.05)] lg:flex">
      {/* Image side */}
      <div className="relative hidden w-[58.33%] lg:block">
        <img
          src="https://picsum.photos/seed/regpulse-dinner/800/600"
          alt="People enjoying dinner together"
          className="h-full w-full rounded-l-2xl object-cover"
        />
      </div>

      {/* Mobile image */}
      <div className="relative block lg:hidden">
        <img
          src="https://picsum.photos/seed/regpulse-dinner/800/400"
          alt="People enjoying dinner together"
          className="h-64 w-full object-cover"
        />
      </div>

      {/* Form side */}
      <div className="w-full bg-form-bg p-8 sm:p-10 lg:w-[41.67%] lg:rounded-r-2xl lg:rounded-bl-none">
        <BookingForm />
      </div>
    </div>
  )
}
