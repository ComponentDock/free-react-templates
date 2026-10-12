import { Camera, MessageCircle, Rss, Send } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import type { ChannelMark } from '../lib/site'

/**
 * The glyph each channel circle wears. `lucide-react` carries no brand marks, so the four
 * channels use the library's own generic glyphs — a speech bubble, a camera, a broadcast
 * wave and a paper plane — one per channel, drawn at 18px and marked decorative because
 * the circle's own accessible name carries the channel.
 */
const MARKS: Record<ChannelMark, LucideIcon> = {
  chatter: MessageCircle,
  frames: Camera,
  broadcast: Rss,
  bulletins: Send,
}

export interface ChannelGlyphProps {
  mark: ChannelMark
}

export function ChannelGlyph({ mark }: ChannelGlyphProps) {
  const Icon = MARKS[mark]

  return <Icon aria-hidden="true" size={18} />
}
