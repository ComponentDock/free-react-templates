import { render, screen } from '@testing-library/react'
import { Band } from './Band'
import { BAND_HEADING, BAND_HEADING_ID, PRIMARY_NAV_LABEL, SITE_NAME, SOCIAL_LABEL } from '../lib/site'

describe('Band — the 112px opening the chrome sits in', () => {
  it('stacks the heading, the white strip and the bar in the design own order', () => {
    render(<Band />)

    const band = screen.getByTestId('band')

    expect(band.className).toContain('py-28')

    const heading = screen.getByRole('heading', { level: 2 })

    expect(heading).toHaveAttribute('id', BAND_HEADING_ID)
    expect(heading.textContent).toBe(BAND_HEADING)
    expect(heading.className).toContain('text-[28px]')
    expect(heading.className).toContain('text-center')
    expect(heading.className).toContain('text-black')

    const [strip, bar] = Array.from(band.children).slice(-2)

    expect(strip).toBe(screen.getByTestId('brand-strip'))
    expect(bar).toBe(screen.getByTestId('bar'))
    expect(band.lastElementChild).toBe(bar)

    expect(screen.getByRole('link', { name: SITE_NAME })).toBeInTheDocument()
    expect(screen.getByRole('list', { name: SOCIAL_LABEL })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: PRIMARY_NAV_LABEL })).toBeInTheDocument()
  })

  it('keeps the heading column half the container from 768px up', () => {
    render(<Band />)

    const column = screen.getByRole('heading', { level: 2 }).parentElement!

    expect(column.className).toContain('md:flex-[0_0_50%]')
    expect(column.className).toContain('mb-12')
  })
})
