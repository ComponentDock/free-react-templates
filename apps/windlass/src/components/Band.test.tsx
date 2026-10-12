import { render, screen } from '@testing-library/react'
import { Band } from './Band'
import { BAND_HEADING, BAND_HEADING_ID } from '../lib/site'

describe('Band — the heading the card lands under', () => {
  it('carries the design’s 112px of air over the grey page', () => {
    render(<Band />)

    const band = screen.getByTestId('band')

    expect(band.tagName).toBe('SECTION')
    expect(band.className).toContain('py-28')
  })

  it('centres one 28px heading in its own container, in a column that halves from 768px', () => {
    render(<Band />)

    const band = screen.getByTestId('band')
    const column = screen.getByRole('heading', { level: 2 })

    expect(column).toHaveAttribute('id', BAND_HEADING_ID)
    expect(column.textContent).toBe(BAND_HEADING)
    expect(column.className).toContain('text-[28px]')
    expect(column.className).toContain('mb-2')
    expect(column.parentElement?.className).toContain('mb-12')
    expect(column.parentElement?.className).toContain('md:flex-[0_0_50%]')

    const headingContainer = band.children[0] as HTMLElement
    const cardContainer = band.children[1] as HTMLElement

    expect(headingContainer).toContainElement(column)
    expect(cardContainer).toContainElement(screen.getByTestId('bar'))
  })
})
