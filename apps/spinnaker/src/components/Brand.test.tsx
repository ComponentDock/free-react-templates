import { render, screen } from '@testing-library/react'
import { Brand } from './Brand'
import { SITE_NAME } from '../lib/site'
import { brandClass } from '../lib/styles'

describe('Brand — the wordmark at the bar’s left edge', () => {
  it('reads the app’s own name, in the design’s own white, back to the top of the page', () => {
    render(<Brand />)

    const brand = screen.getByTestId('brand')

    expect(brand).toHaveTextContent(SITE_NAME)
    expect(brand).toHaveAttribute('href', '#top')
    expect(brand).toHaveAccessibleName(SITE_NAME)
    expect(brand.tagName).toBe('A')
  })

  it('wears the design’s 20px uppercase white and the hover and focus affordances it lacks', () => {
    render(<Brand />)

    const brand = screen.getByTestId('brand')

    expect(brand.className).toBe(brandClass)
    expect(brand.className).toContain('text-[20px]')
    expect(brand.className).toContain('uppercase')
    expect(brand.className).toContain('text-white')
    expect(brand.className).toContain('hover:text-accent')
    expect(brand.className).toContain('focus-visible:outline-2')
  })
})
