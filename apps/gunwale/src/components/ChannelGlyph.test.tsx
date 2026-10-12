import { render } from '@testing-library/react'
import { ChannelGlyph } from './ChannelGlyph'
import { CHANNELS } from '../lib/site'
import type { ChannelMark } from '../lib/site'

const MARKS: ChannelMark[] = ['chatter', 'frames', 'broadcast', 'bulletins']

describe('ChannelGlyph — one glyph per channel', () => {
  it('draws a decorative glyph for every mark the model declares', () => {
    for (const mark of MARKS) {
      const { container, unmount } = render(<ChannelGlyph mark={mark} />)
      const glyph = container.querySelector('svg')

      expect(glyph).not.toBeNull()
      expect(glyph).toHaveAttribute('aria-hidden', 'true')
      expect(glyph).toHaveAttribute('width', '18')

      unmount()
    }
  })

  it('covers every mark the channels actually use', () => {
    expect(new Set(CHANNELS.map((channel) => channel.mark))).toEqual(new Set(MARKS))
  })
})
