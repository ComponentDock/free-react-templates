import { FacebookIcon, TwitterIcon, YoutubeIcon, PinterestIcon, RssIcon } from './social-icons'

const networks = [
  {
    icon: FacebookIcon,
    platform: 'Facebook',
    count: '983',
    action: 'Likes',
    subtext: 'Like our page',
  },
  {
    icon: TwitterIcon,
    platform: 'Twitter',
    count: '983',
    action: 'Followers',
    subtext: 'Follow Us',
  },
  {
    icon: YoutubeIcon,
    platform: 'YouTube',
    count: '9835',
    action: 'Subscribers',
    subtext: 'Subscribe',
  },
  {
    icon: PinterestIcon,
    platform: 'Pinterest',
    count: '36958',
    action: 'Followers',
    subtext: 'Follow Us',
  },
  { icon: RssIcon, platform: 'RSS', count: '', action: 'Subscribe', subtext: 'Subscribe' },
]

export function SocialNetworks() {
  return (
    <div className="mb-8">
      <h2 className="text-xl font-heading font-medium text-heading mb-6 border-l-4 border-brand pl-4">
        Social Networks
      </h2>
      <ul className="space-y-0">
        {networks.map(({ icon: Icon, platform, count, action, subtext }) => (
          <li key={platform} className="border-b border-gray-100 last:border-0">
            <a
              href="#"
              className="flex items-center justify-between py-3 px-2 hover:bg-section-bg transition-colors group"
            >
              <span className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-gray-400 group-hover:text-brand transition-colors" />
                <span className="text-sm text-heading font-heading">
                  {count && <strong>{count}</strong>}
                  {action}
                </span>
              </span>
              <span className="text-xs text-body">{subtext}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
