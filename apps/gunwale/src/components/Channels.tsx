import { CHANNELS, SOCIAL_LABEL } from '../lib/site'
import { channelLinkClass, channelListClass } from '../lib/styles'
import { ChannelGlyph } from './ChannelGlyph'

/**
 * The four channel circles on the brand strip: 40px hairline rings with their glyphs
 * centred inside them, right-aligned in the strip's second half and pinned to its top
 * (level with the wordmark's first line), each carrying the design's own 4px of space
 * after it. The design's four are dead `href="#"` anchors whose glyphs never paint — no
 * icon font is loaded — so every one here is a real destination that renders an icon.
 */
export function Channels() {
  return (
    <ul aria-label={SOCIAL_LABEL} className={channelListClass} data-testid="channels">
      {CHANNELS.map((channel) => (
        <li key={channel.label}>
          <a href={channel.href} aria-label={channel.label} className={channelLinkClass}>
            <ChannelGlyph mark={channel.mark} />
          </a>
        </li>
      ))}
    </ul>
  )
}
