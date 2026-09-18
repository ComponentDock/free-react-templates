import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders about section with logo', () => {
    render(<Footer />)
    expect(screen.getByText('roof')).toBeInTheDocument()
    expect(screen.getByText('mark')).toBeInTheDocument()
  })

  it('renders about description', () => {
    render(<Footer />)
    expect(screen.getByText(/We are the best real estate agency/)).toBeInTheDocument()
  })

  it('renders social icons', () => {
    const { container } = render(<Footer />)
    const svgs = container.querySelectorAll('svg')
    expect(svgs.length).toBeGreaterThanOrEqual(5)
  })

  it('renders Submit Listing button', () => {
    render(<Footer />)
    expect(screen.getByText('Submit Listing')).toBeInTheDocument()
  })

  it('renders Information column', () => {
    render(<Footer />)
    expect(screen.getByText('Information')).toBeInTheDocument()
    expect(screen.getByText('(123) 456 789')).toBeInTheDocument()
    expect(screen.getByText('123 Some Address, Country')).toBeInTheDocument()
    expect(screen.getByText('info@roofmark.com')).toBeInTheDocument()
  })

  it('renders Useful Links column', () => {
    render(<Footer />)
    expect(screen.getByText('Useful Links')).toBeInTheDocument()
    expect(screen.getByText('Home')).toBeInTheDocument()
    expect(screen.getByText('About')).toBeInTheDocument()
    expect(screen.getByText('Listings')).toBeInTheDocument()
    expect(screen.getByText('News')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders Property Types column', () => {
    render(<Footer />)
    expect(screen.getByText('Property Types')).toBeInTheDocument()
    expect(screen.getByText('House')).toBeInTheDocument()
    expect(screen.getByText('Apartment')).toBeInTheDocument()
    expect(screen.getByText('Villa')).toBeInTheDocument()
    expect(screen.getByText('Office')).toBeInTheDocument()
    expect(screen.getByText('Building')).toBeInTheDocument()
  })

  it('renders featured property image and price', () => {
    render(<Footer />)
    expect(screen.getByAltText('Featured property')).toBeInTheDocument()
    expect(screen.getByText('$1,200')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders Built by text', () => {
    render(<Footer />)
    expect(screen.getByText('Built by')).toBeInTheDocument()
  })

  it('handles Submit Listing click', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const btn = screen.getByText('Submit Listing')
    btn.addEventListener('click', (e) => e.preventDefault(), { once: true })
    await user.click(btn)
  })
})
