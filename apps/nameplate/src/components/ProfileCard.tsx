import type { Profile } from '../content'
import { SocialGlyph } from './icons'

interface ProfileCardProps {
  profile: Profile
}

/**
 * One roster plate: a 5:5.4 portrait window with a floating team tag, the name
 * over a rust role line, and a dashed-topped footer holding three 36px discs
 * and the "Since" stamp. The body grows (`flex-1`) so every card in a row puts
 * its footer on one baseline even when the bios differ in length.
 */
export function ProfileCard({ profile }: ProfileCardProps) {
  return (
    <article className="profile-card group flex w-full flex-col rounded-card border border-line bg-white p-2.5 text-[15px] leading-[1.55] text-ink shadow-[0_1px_2px_rgba(28,25,23,0.04),0_12px_32px_-20px_rgba(28,25,23,0.25)] transition-[transform,box-shadow] duration-300 ease-out hover:-translate-y-1 motion-reduce:hover:translate-y-0 hover:shadow-[0_1px_2px_rgba(28,25,23,0.04),0_24px_44px_-22px_rgba(28,25,23,0.35)] motion-reduce:transition-none">
      <div className="relative aspect-[5/5.4] overflow-hidden rounded-media bg-media">
        <img
          src={profile.photo}
          alt={profile.alt}
          width={600}
          height={720}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-[center_25%] transition-transform duration-[600ms] ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100 motion-reduce:transition-none"
        />
        <span className="absolute bottom-3 left-3 rounded-full bg-white/[0.92] px-3 py-[5px] text-xs font-bold leading-[1.55] tracking-[0.02em] text-ink shadow-[0_4px_12px_rgba(0,0,0,0.12)]">
          {profile.team}
        </span>
      </div>

      <div className="flex-1 px-2.5 pb-1.5 pt-[18px]">
        <h2 className="m-0 text-[19px] font-bold leading-[1.3] tracking-[-0.01em] text-ink">
          {profile.name}
        </h2>
        <p className="mb-2.5 mt-0.5 text-sm font-semibold leading-[1.55] text-accent">{profile.role}</p>
        <p className="m-0 text-sm leading-[1.55] text-muted">{profile.bio}</p>
      </div>

      <footer className="mx-2.5 mb-1.5 mt-3.5 flex items-center justify-between gap-3 border-t border-dashed border-line pt-3.5">
        <ul aria-label={`${profile.name} online`} className="m-0 flex list-none gap-1.5 p-0">
          {profile.links.map((link) => (
            <li key={link.kind}>
              <a
                href={link.href}
                aria-label={link.label}
                className="grid h-9 w-9 place-items-center rounded-full bg-chip text-ink transition-[background-color,color,transform] duration-200 ease-out hover:-translate-y-0.5 motion-reduce:hover:translate-y-0 hover:bg-accent hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none"
              >
                <SocialGlyph kind={link.kind} />
              </a>
            </li>
          ))}
        </ul>
        <span className="whitespace-nowrap text-[12.5px] font-medium text-muted">
          Since {profile.since}
        </span>
      </footer>
    </article>
  )
}
