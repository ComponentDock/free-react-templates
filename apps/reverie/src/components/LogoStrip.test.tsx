import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { LogoStrip } from './LogoStrip'
import { LOGO_STRIP_LABEL, VENDORS } from '../lib/site'
import { logoStripClass, logoTrackClass } from '../lib/styles'

describe('LogoStrip', () => {
  it('shows the ten vendor wordmarks once each to a reader', () => {
    const { container } = render(<LogoStrip />)

    expect(screen.getByRole('group', { name: LOGO_STRIP_LABEL })).toBeInTheDocument()
    expect(container.querySelectorAll('li')).toHaveLength(VENDORS.length * 2)
    expect(container.querySelectorAll('li:not([aria-hidden])')).toHaveLength(VENDORS.length)
    expect(
      [...container.querySelectorAll('li:not([aria-hidden])')].map((item) => item.textContent),
    ).toEqual([...VENDORS])
  })

  it('drifts the track and pauses it while the visitor hovers the band', () => {
    const { container } = render(<LogoStrip />)
    const track = container.querySelector('ul') as HTMLElement

    expect(container.firstElementChild).toHaveClass(logoStripClass)
    expect(track).toHaveClass(logoTrackClass)
    expect(logoTrackClass).toContain('marquee-track')
    expect(logoTrackClass).toContain('group-hover:[animation-play-state:paused]')
  })
})
