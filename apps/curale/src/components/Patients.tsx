import { patients } from '../data'
import { AppointmentForm } from './AppointmentForm'

/** Patient area: section heading, two testimonial cards with round
 *  avatars overlapping the card's top edge, and the appointment form on
 *  the right — matching the source's col-5/offset-1 split. */
export function Patients() {
  return (
    <section id="contact" className="bg-white py-[130px]">
      <div className="mx-auto max-w-6xl px-4">
        <div className="mb-20 text-center">
          <h2 className="text-[30px] font-bold text-ink md:text-[36px]">Patient are saying</h2>
          <p className="mx-auto mt-4 max-w-2xl text-[15px] leading-relaxed text-body">
            Green above he cattle god saw day multiply under fill in the cattle fowl a all, living,
            tree word link available in the service for subdue fruit.
          </p>
        </div>
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="flex flex-col gap-10 lg:col-span-2">
            {patients.map((patient) => (
              <article
                key={patient.name}
                className="mt-[90px] bg-surface p-10 pb-5 pl-10 pr-10 transition-all duration-500 hover:bg-white hover:shadow-[0_5px_20px_rgba(0,0,0,0.1)] md:pr-20"
              >
                <img
                  src={patient.image}
                  alt=""
                  loading="lazy"
                  className="-mt-[130px] mb-6 h-[100px] w-[100px] rounded-full object-cover"
                />
                <h3 className="text-[18px] font-bold uppercase text-ink">{patient.name}</h3>
                <h5 className="mt-1 text-[15px] font-medium capitalize text-brand">
                  {patient.role}
                </h5>
                <p className="pt-3 text-[15px] leading-relaxed text-body">{patient.quote}</p>
              </article>
            ))}
          </div>
          <div className="self-center lg:col-span-3 lg:pl-8">
            <AppointmentForm />
          </div>
        </div>
      </div>
    </section>
  )
}
