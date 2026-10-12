import { render, screen } from '@testing-library/react'
import { BAND_HEADING, BAND_HEADING_ID, PRIMARY_NAV_LABEL } from '../lib/site'
import { Band } from './Band'

describe('Band — the page opening band and the bar it wraps', () => {
  it('gives the heading seven ems of air above it and the bar the same below', () => {
    render(<Band />)

    const band = screen.getByTestId('band')

    expect(band.tagName).toBe('SECTION')
    expect(band.className).toContain('py-28')
    expect(band).toHaveAttribute('aria-labelledby', BAND_HEADING_ID)
  })

  it('carries the bar itself, so its own padding closes the composition', () => {
    render(<Band />)

    const band = screen.getByTestId('band')

    expect(band.lastElementChild).toBe(screen.getByTestId('bar'))
    expect(screen.getByTestId('bar').tagName).toBe('NAV')
    expect(screen.getByTestId('bar')).toHaveAttribute('aria-label', PRIMARY_NAV_LABEL)
  })

  it('centres its own heading in a half width column', () => {
    render(<Band />)

    const heading = screen.getByRole('heading', { level: 2, name: BAND_HEADING })

    expect(heading).toHaveAttribute('id', BAND_HEADING_ID)
    expect(heading.className).toContain('text-[28px]')
    expect(heading.className).toContain('leading-[1.5]')
    expect(heading.className).toContain('text-black')
    expect(heading.className).toContain('text-center')
    expect(heading.className).toContain('mb-2')

    const column = heading.parentElement as HTMLElement

    expect(column.className).toContain('md:max-w-[50%]')
    expect(column.className).toContain('md:flex-[0_0_50%]')
    expect(column.className).toContain('mb-12')

    const row = column.parentElement as HTMLElement

    expect(row.className).toContain('justify-center')
    expect(row.className).toContain('-mx-[15px]')
  })
})
