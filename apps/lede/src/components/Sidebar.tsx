import { adLabel, imgUrl } from '../data'
import { EditorsPick } from './EditorsPick'
import { MostPopular } from './MostPopular'
import { Newsletter } from './Newsletter'
import { SocialNetworks } from './SocialNetworks'

export function Sidebar() {
  return (
    <aside aria-label="Sidebar" className="mt-10 lg:mt-0">
      <EditorsPick />
      <div className="mb-7">
        <a
          href="#ad"
          aria-label={adLabel}
          className="block h-[250px] w-full bg-page transition-colors hover:bg-page/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500/60"
        >
          <img
            src={imgUrl('lede-side-ad', 300, 250)}
            alt={adLabel}
            className="h-full w-full object-cover"
          />
        </a>
      </div>
      <Newsletter />
      <MostPopular />
      <SocialNetworks />
    </aside>
  )
}
