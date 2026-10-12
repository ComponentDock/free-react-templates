import { render, screen, within } from '@testing-library/react'
import { Band } from './Band'
import { BAND_HEADING, BAND_HEADING_ID, PRIMARY_NAV_LABEL } from '../lib/site'
import {
  bandClass,
  bandColumnClass,
  bandHeadingClass,
  bandRowClass,
  containerClass,
} from '../lib/styles'

describe('Band — the band the page opens on', () => {
  it('opens on the design’s own 112px of air at both ends, over the grey page', () => {
    render(<Band />)

    const band = screen.getByTestId('band')

    expect(band.tagName).toBe('SECTION')
    expect(band.className).toBe(bandClass)
    expect(band.className).toContain('py-28')
    expect(band.className).not.toContain('px-')
    expect(band).toHaveAttribute('aria-labelledby', BAND_HEADING_ID)
  })

  it('centres its own heading in half the page from 768px up', () => {
    render(<Band />)

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toHaveTextContent(BAND_HEADING)
    expect(heading.id).toBe(BAND_HEADING_ID)
    expect(heading.className).toBe(bandHeadingClass)
    expect(heading.className).toContain('text-[28px]')
    expect(heading.parentElement?.className).toBe(bandColumnClass)
    expect(heading.parentElement?.parentElement?.className).toBe(bandRowClass)
  })

  it('holds the heading and the bar in two containers of the very same tier', () => {
    render(<Band />)

    const band = screen.getByTestId('band')
    const shells = Array.from(band.children)

    expect(shells).toHaveLength(2)
    expect(shells[0]?.className).toBe(containerClass)
    expect(shells[1]?.className).toBe(containerClass)

    const shell = screen.getByTestId('bar-shell')

    expect(shell).toContainElement(screen.getByTestId('bar'))
    expect(band.className).not.toContain('max-w')
  })

  it('keeps the bar inset inside the page’s own container, never full-bleed', () => {
    render(<Band />)

    const shell = screen.getByTestId('bar-shell')
    const bar = screen.getByTestId('bar')

    expect(shell.className).toContain('px-[15px]')
    expect(bar.className).toContain('w-full')
    expect(bar.className).not.toContain('max-w-screen')
  })

  it('carries the whole bar, wordmark and all, inside the band', () => {
    render(<Band />)

    const band = screen.getByTestId('band')
    const nav = within(band).getByRole('navigation', { name: PRIMARY_NAV_LABEL })

    expect(nav).toBe(screen.getByTestId('bar'))
    expect(within(band).getByTestId('brand')).toBeInTheDocument()
  })
})
