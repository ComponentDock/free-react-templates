import { render, screen } from '@testing-library/react'
import { SocialRow } from './SocialRow'
import { CHANNELS, SOCIAL_LABEL } from '../lib/site'
import { circleClass, socialListClass } from '../lib/styles'

describe('SocialRow — the four circles on the chrome row', () => {
  it('stands four circles, each a real destination with its own accessible name', () => {
    render(<SocialRow />)

    const list = screen.getByRole('list', { name: SOCIAL_LABEL })

    expect(list.className).toBe(socialListClass)
    expect(list.children).toHaveLength(CHANNELS.length)

    for (const channel of CHANNELS) {
      const circle = screen.getByRole('link', { name: channel.label })

      expect(circle).toHaveAttribute('href', channel.href)
      expect(circle.querySelector('svg')?.querySelector('path')).not.toBeNull()
    }
  })

  it('draws each circle as a 40px ring with no fill until it is hovered', () => {
    render(<SocialRow />)

    const circle = screen.getByRole('link', { name: CHANNELS[0]!.label })

    expect(circle.className).toBe(circleClass)
    expect(circle.className).toContain('size-[40px]')
    expect(circle.className).toContain('rounded-full')
    expect(circle.className).toContain('border-circle')
    expect(circle.className).toContain('items-center')
    expect(circle.className).toContain('justify-center')
    expect(circle.className).toContain('mr-[4px]')
    expect(circle.className).toContain('hover:bg-accent')
    expect(circle.className).toContain('hover:border-accent')
    expect(circle.className).toContain('hover:text-white')
    expect(circle.className).not.toContain('bg-circle')
  })

  it('hangs its circles from the top of the row rather than centring them in it', () => {
    render(<SocialRow />)

    expect(screen.getByRole('list', { name: SOCIAL_LABEL }).className).toContain('items-start')
  })
})
