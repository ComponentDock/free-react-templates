import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { BrandIcon } from './BrandIcon'
import { CHANNELS } from '../lib/site'

describe('BrandIcon — the strip’s four marks', () => {
  it('draws one filled path per channel, hidden from the accessibility tree', () => {
    for (const channel of CHANNELS) {
      const { container, unmount } = render(<BrandIcon name={channel.name} className="size-4" />)

      const svg = container.querySelector('svg') as SVGSVGElement

      expect(svg).toHaveAttribute('viewBox', '0 0 24 24')
      expect(svg).toHaveAttribute('fill', 'currentColor')
      expect(svg).toHaveAttribute('aria-hidden', 'true')
      expect(svg.getAttribute('class')).toBe('size-4')
      expect(svg.querySelectorAll('path')).toHaveLength(1)
      expect(svg.querySelector('path')?.getAttribute('d')).toBeTruthy()

      unmount()
    }
  })

  it('gives every channel a mark of its own', () => {
    const paths = CHANNELS.map((channel) => {
      const { container, unmount } = render(<BrandIcon name={channel.name} className="size-4" />)
      const path = container.querySelector('path')?.getAttribute('d')

      unmount()

      return path
    })

    expect(new Set(paths).size).toBe(CHANNELS.length)
  })

  it('paints in the colour of the tile it sits in, so a hover can tint it', async () => {
    const user = userEvent.setup()

    render(
      <a href="#channel-x" aria-label="X" className="text-white hover:text-accent">
        <BrandIcon name="x" className="size-4" />
      </a>,
    )

    const tile = screen.getByRole('link', { name: 'X' })

    await user.hover(tile)

    expect(tile.className).toContain('hover:text-accent')
    expect(tile.querySelector('svg')).toHaveAttribute('fill', 'currentColor')
  })
})
