import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from '../components/Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('minima')).toBeInTheDocument()
  })

  it('renders Community links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Community' })).toBeInTheDocument()
    expect(screen.getByText('Projects')).toBeInTheDocument()
    expect(screen.getByText('Team')).toBeInTheDocument()
    expect(screen.getByText('Reviews')).toBeInTheDocument()
    expect(screen.getByText('FAQs')).toBeInTheDocument()
  })

  it('renders About Us links', () => {
    render(<Footer />)
    const aboutHeadings = screen.getAllByRole('heading', { name: 'About Us' })
    expect(aboutHeadings.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Our Story')).toBeInTheDocument()
    expect(screen.getByText('Meet the team')).toBeInTheDocument()
  })

  it('renders Company links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Company' })).toBeInTheDocument()
    expect(screen.getByText('Press')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText(/203 fake st/i)).toBeInTheDocument()
    expect(screen.getByText('+1 239 239 2921')).toBeInTheDocument()
    expect(screen.getByText('info@minima.com')).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social media icons', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByRole('link')
    const socials = socialLinks.filter((link) => {
      const label = link.getAttribute('aria-label')
      return label && ['Twitter', 'Facebook', 'Instagram'].includes(label)
    })
    expect(socials.length).toBe(3)
  })

  it('has a footer element', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
