import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ContactCard } from './ContactCard'

describe('ContactCard', () => {
  it('renders the Contact Us heading', () => {
    render(<ContactCard />)
    expect(screen.getByRole('heading', { name: /contact us/i })).toBeInTheDocument()
  })

  it('renders the map placeholder div', () => {
    const { container } = render(<ContactCard />)
    const mapDiv = container.querySelector('[aria-hidden="true"]')
    expect(mapDiv).toBeInTheDocument()
    expect(mapDiv).toHaveStyle({
      backgroundImage: expect.stringContaining('picsum.photos'),
    })
  })

  it('renders info boxes with addresses and links', () => {
    render(<ContactCard />)
    expect(screen.getByText(/198 West 21th Street/)).toBeInTheDocument()
    const phoneLink = screen.getByRole('link', { name: /\+ 1235 2355 98/ })
    expect(phoneLink).toHaveAttribute('href', 'tel:+1235235598')
    const emailLink = screen.getByRole('link', { name: /info@yoursite\.com/ })
    expect(emailLink).toHaveAttribute('href', 'mailto:info@yoursite.com')
    const webLink = screen.getByRole('link', { name: /^yoursite\.com$/ })
    expect(webLink).toHaveAttribute('href', '#')
  })
})
