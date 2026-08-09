import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the amber footer with the About column and four social links', () => {
    const { container } = render(<Footer />)

    expect(container.firstElementChild).toHaveClass('bg-footer')
    expect(screen.getByRole('heading', { level: 3, name: 'About Kraft' })).toBeInTheDocument()
    expect(
      screen.getByText(/Lorem ipsum dolor sit amet, consectetur adipiscing elit\. Alias/),
    ).toBeInTheDocument()

    for (const network of ['Twitter', 'Facebook', 'LinkedIn', 'Instagram']) {
      expect(screen.getByRole('link', { name: `Kraft on ${network}` })).toBeInTheDocument()
    }
  })

  it('renders the Contact Info rows with icons', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Contact Info' })).toBeInTheDocument()
    expect(screen.getByText('Address:')).toBeInTheDocument()
    expect(screen.getByText(/34 Street Name, City Name Here, United States/)).toBeInTheDocument()
    expect(screen.getByText('Telephone:')).toBeInTheDocument()
    expect(screen.getByText(/\+1 242 4942 290/)).toBeInTheDocument()
    expect(screen.getByText('Email:')).toBeInTheDocument()
    expect(screen.getByText(/info@yourdomain\.com/)).toBeInTheDocument()
  })

  it('renders the Quick Links column', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { level: 3, name: 'Quick Links' })).toBeInTheDocument()
    for (const label of ['About', 'Terms of Use', 'Disclaimers', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the repo-standard bottom credit bar', () => {
    render(<Footer />)

    expect(
      screen.getByText(`© ${new Date().getFullYear()} Kraft — Free React Template`),
    ).toBeInTheDocument()
  })
})
