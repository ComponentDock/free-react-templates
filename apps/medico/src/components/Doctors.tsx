import { doctorImageAlt, doctors, doctorsHeading, doctorsSubtitle, socialNames } from '../data'
import { SocialIcons } from './SocialIcons'

export function Doctors() {
  return (
    <section id="doctors" className="bg-white pb-24 pt-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="mb-14 text-center">
          <h2 className="font-serif text-4xl font-bold text-heading sm:text-5xl">
            {doctorsHeading}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm font-medium capitalize text-muted">
            {doctorsSubtitle}
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {doctors.map((doctor) => (
            <article key={doctor.seed} className="group">
              <div className="relative overflow-hidden rounded-t-[5px]">
                <img
                  src={`https://picsum.photos/seed/${doctor.seed}/360/420`}
                  alt={doctorImageAlt(doctor.name)}
                  loading="lazy"
                  className="aspect-[6/7] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-end justify-center bg-black/0 pb-6 opacity-0 transition-opacity duration-300 group-hover:bg-black/20 group-hover:opacity-100">
                  <SocialIcons
                    names={socialNames}
                    className="gap-2"
                    iconClassName="h-8 w-8 border-white/80 text-white"
                  />
                </div>
              </div>
              <div className="rounded-b-[5px] bg-section px-4 pb-5 pt-4 text-center">
                <h3 className="font-serif text-lg font-semibold text-heading">{doctor.name}</h3>
                <p className="mt-1 text-sm text-muted">{doctor.specialty}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
