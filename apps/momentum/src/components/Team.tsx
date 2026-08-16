import { teamMembers } from '../data'

export function Team() {
  return (
    <div className="pt-24 pb-28">
      <div className="text-center">
        <span className="text-[11px] font-bold tracking-[.1rem] text-white/70 uppercase">Team</span>
        <h2 className="mt-2 text-5xl leading-none font-bold text-white md:text-[80px]">
          Meet our team
        </h2>
      </div>
      <div className="mx-auto mt-16 grid max-w-4xl gap-12 md:grid-cols-2">
        {teamMembers.map((member) => (
          <div key={member.name} className="text-center">
            <img
              src={member.image}
              alt={member.name}
              loading="lazy"
              className="mx-auto w-full max-w-[320px] rounded-lg object-cover"
            />
            <h3 className="mt-8 text-[30px] font-bold text-white">{member.name}</h3>
            <p className="mt-1 text-sm text-white/30">{member.position}</p>
            <p className="mt-4 text-sm leading-relaxed text-white/50">{member.bio}</p>
            <a
              href="#newsletter"
              className="mt-6 inline-block rounded-full bg-gradient-to-r from-brand to-brand-pink px-8 py-3 text-xs font-bold tracking-[.2rem] text-white uppercase shadow-[inset_0_0_0_2px_#111] transition-opacity hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand"
            >
              Read bio
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
