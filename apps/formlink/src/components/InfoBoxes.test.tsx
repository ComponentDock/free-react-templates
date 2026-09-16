import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { InfoBoxes } from './InfoBoxes'

describe('InfoBoxes', () => {
  it('renders four info items with address and phone', () => {
    render(<InfoBoxes />)
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
    expect(screen.getByText(/\+ 1235 2355 98/)).toBeInTheDocument()
  })

  it('renders email and website links', () => {
    render(<InfoBoxes />)
    const emailLink = screen.getByRole('link', { name: /info@yoursite\.com/ })
    expect(emailLink).toHaveAttribute('href', 'mailto:info@yoursite.com')
    const webLink = screen.getByRole('link', { name: /^yoursite\.com$/ })
    expect(webLink).toHaveAttribute('href', '#')
  })

  it('renders phone link with tel href', () => {
    render(<InfoBoxes />)
    const link = screen.getByRole('link', { name: /\+ 1235 2355 98/ })
    expect(link).toHaveAttribute('href', 'tel:+1235235598')
  })

  it('renders icon containers', () => {
    const { container } = render(<InfoBoxes />)
    const icons = container.querySelectorAll('.lucide')
    expect(icons.length).toBe(4)
  })
})
