import { cn } from '@free-react-templates/ui'

interface ProfileSidebarProps {
  className?: string
}

const PROFILE = {
  name: 'Dan Williams',
  photos: 892,
  followers: '56k',
  bio: 'Passionate photographer capturing the beauty of everyday moments. Specializing in street photography, landscapes, and portraiture.',
  tags: ['nature', 'portrait', 'urban', 'travel', 'street'],
  activity: 'Professional Photographer',
  location: 'New York, USA',
}

const FAV_PROFILES = [
  { name: 'Alice', image: 'https://picsum.photos/seed/fav1/64/64' },
  { name: 'Bob', image: 'https://picsum.photos/seed/fav2/64/64' },
  { name: 'Carol', image: 'https://picsum.photos/seed/fav3/64/64' },
  { name: 'Dave', image: 'https://picsum.photos/seed/fav4/64/64' },
  { name: 'Eve', image: 'https://picsum.photos/seed/fav5/64/64' },
]

export function ProfileSidebar({ className }: ProfileSidebarProps) {
  return (
    <aside
      className={cn(
        'w-full shrink-0 bg-surface p-6 lg:w-[300px]',
        'border-b lg:border-b-0 lg:border-r border-border',
        className,
      )}
      aria-label="Profile sidebar"
    >
      <img
        src="https://picsum.photos/seed/profile/200/200"
        alt={`${PROFILE.name} profile photo`}
        className="mb-4 h-[200px] w-[200px] object-cover"
      />

      <div className="mb-3 flex items-center gap-2">
        <h2 className="text-lg font-bold text-ink">{PROFILE.name}</h2>
        <span
          className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-brand"
          aria-label="Verified"
        >
          <svg className="h-3 w-3 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            />
          </svg>
        </span>
      </div>

      <p className="mb-4 text-sm text-muted">
        {PROFILE.photos} Photos · {PROFILE.followers} Followers
      </p>

      <p className="mb-4 text-sm leading-relaxed text-ink/80">{PROFILE.bio}</p>

      <div className="mb-3">
        <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">
          Favourite Tags
        </h3>
        <p className="text-sm text-ink/70">{PROFILE.tags.join(', ')}</p>
      </div>

      <div className="mb-3">
        <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">Activity</h3>
        <p className="text-sm text-ink/70">{PROFILE.activity}</p>
      </div>

      <div className="mb-4">
        <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-muted">Location</h3>
        <p className="text-sm text-ink/70">{PROFILE.location}</p>
      </div>

      <div>
        <h3 className="mb-2 text-xs font-semibold uppercase tracking-wider text-muted">
          Fav Profiles
        </h3>
        <div className="flex gap-2">
          {FAV_PROFILES.map((p) => (
            <a
              key={p.name}
              href={`#${p.name.toLowerCase()}`}
              aria-label={`View ${p.name}'s profile`}
            >
              <img
                src={p.image}
                alt={p.name}
                className="h-8 w-8 rounded-full border border-border object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </aside>
  )
}
