import { welcomeImage } from '../data'

export function Welcome() {
  return (
    <section id="about" className="bg-white py-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <img
          src={welcomeImage}
          alt="Attendees networking at the Rally event"
          className="w-full rounded-md object-cover"
        />
        <div>
          <h2 className="font-display text-3xl font-bold text-heading md:text-4xl">
            Welcome to Rally
          </h2>
          <p className="mt-6 leading-relaxed text-muted">
            inappropriate behavior is often laughed off as “boys will be boys,” women face higher
            conduct standards especially in the workplace. That’s why it’s crucial that, as women,
            our behavior on the job is beyond reproach.
          </p>
          <p className="mt-4 leading-relaxed text-muted">
            Rally brings together founders, operators and technologists for three days of keynotes,
            workshops and honest conversations about building digital business.
          </p>
          <a
            href="#speakers"
            className="mt-8 inline-block rounded bg-[linear-gradient(to_right,#2c28b1_0%,#9b5cf6_51%,#2c28b1_100%)] bg-[length:200%_auto] px-8 py-3 text-[13px] font-medium uppercase tracking-wide text-white transition-[background-position] duration-300 hover:bg-[position:right_center]"
          >
            View More Details
          </a>
        </div>
      </div>
    </section>
  )
}
