import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@free-react-templates/ui'
import { FacebookIcon, InstagramIcon, TwitterIcon } from './BrandIcons'
import { ShowcaseSection } from './section'

const DROPDOWN_ITEMS = ['Action', 'Another action', 'Something else here']

const SOCIAL_LINKS = [
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Twitter', Icon: TwitterIcon },
  { label: 'Instagram', Icon: InstagramIcon },
]

const NAV_PREVIEWS = [
  {
    id: 'primary',
    brand: 'Primary Color',
    className: 'bg-primary-500 text-heading',
    dropdown: false,
  },
  {
    id: 'info',
    brand: 'Info Color',
    className: 'bg-info text-white',
    dropdown: true,
    social: true,
  },
  {
    id: 'danger',
    brand: 'Danger Color',
    className: 'bg-danger text-white',
    dropdown: true,
    separated: true,
  },
  {
    id: 'transparent',
    brand: 'Transparent',
    className: 'bg-cover bg-center text-white',
    dropdown: true,
    backdrop: true,
  },
] as const

/** Four navbar demos in the kit palette, the last one over a photo backdrop. */
export function NavigationsShowcase() {
  const [openPreview, setOpenPreview] = useState<string | null>(null)

  return (
    <ShowcaseSection id="navigations" title="Navigations">
      <div className="space-y-4">
        {NAV_PREVIEWS.map((preview) => (
          <nav
            key={preview.id}
            aria-label={`${preview.brand} navigation`}
            className={cn(
              'relative flex flex-wrap items-center justify-between gap-6 px-5 py-4',
              preview.className,
            )}
            style={
              'backdrop' in preview && preview.backdrop
                ? { backgroundImage: 'url(https://picsum.photos/seed/sorbet-navbg/1600/400)' }
                : undefined
            }
          >
            <span className="text-lg">{preview.brand}</span>
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <a href="#navigations" aria-current="page" className="underline">
                Discover (current)
              </a>
              <a href="#navigations" className="hover:underline">
                Profile
              </a>
              <a href="#navigations" className="hover:underline">
                Settings
              </a>

              {preview.dropdown && (
                <div className="relative">
                  <button
                    type="button"
                    aria-haspopup="true"
                    aria-expanded={openPreview === preview.id}
                    onClick={() => setOpenPreview(openPreview === preview.id ? null : preview.id)}
                    className="flex cursor-pointer items-center gap-1"
                  >
                    Menu
                    <ChevronDown className="h-3 w-3" aria-hidden="true" />
                  </button>
                  {openPreview === preview.id && (
                    <div className="absolute right-0 top-full z-20 mt-2 w-56 rounded bg-white py-2 text-body shadow-menu">
                      <p className="px-4 py-1 text-xs uppercase tracking-wide text-heading/60">
                        Dropdown header
                      </p>
                      {DROPDOWN_ITEMS.map((item) => (
                        <a
                          key={`${preview.id}-${item}`}
                          href="#navigations"
                          className="block px-4 py-2 text-sm hover:bg-light"
                        >
                          {item}
                        </a>
                      ))}
                      {'separated' in preview && preview.separated && (
                        <>
                          <a
                            href="#navigations"
                            className="block border-t border-gray-200 px-4 py-2 text-sm hover:bg-light"
                          >
                            Separated link
                          </a>
                          <a href="#navigations" className="block px-4 py-2 text-sm hover:bg-light">
                            One more separated link
                          </a>
                        </>
                      )}
                    </div>
                  )}
                </div>
              )}

              {'social' in preview && preview.social && (
                <div className="flex items-center gap-3">
                  {SOCIAL_LINKS.map(({ label, Icon }) => (
                    <a key={label} href="#navigations" aria-label={`${label} navigation link`}>
                      <Icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>
        ))}
      </div>
    </ShowcaseSection>
  )
}
