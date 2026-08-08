import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand wordmark, blurb and contact details', () => {
    render(<Footer />)

    expect(within(screen.getByRole('contentinfo')).getByText('Jobfield')).toBeInTheDocument()
    expect(screen.getByText(/Connect with your next career opportunity/)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: '(555) 492-3847' })).toHaveAttribute(
      'href',
      'tel:+15554923847',
    )
    expect(screen.getByRole('link', { name: 'hello@jobfield.com' })).toHaveAttribute(
      'href',
      'mailto:hello@jobfield.com',
    )
    expect(screen.getByText('200 Tech Boulevard, San Francisco, CA 94105')).toBeInTheDocument()
  })

  it('renders the four social icon links', () => {
    render(<Footer />)

    for (const label of [
      'Jobfield on X',
      'Jobfield on LinkedIn',
      'Jobfield on Facebook',
      'Jobfield on Instagram',
    ]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the four link columns with their links', () => {
    render(<Footer />)

    for (const title of ['For Job Seekers', 'For Employers', 'Resources', 'Company']) {
      expect(screen.getByRole('heading', { level: 3, name: title })).toBeInTheDocument()
    }

    for (const link of [
      'Browse Jobs',
      'Companies',
      'Career Tips',
      'Salary Guide',
      'Post a Job',
      'Pricing',
      'For Employers',
      'Hiring Resources',
      'Blog',
      'About Us',
      'Features',
      'About',
      'Contact',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    expect(screen.getAllByRole('link', { name: 'Style Guide' }).length).toBeGreaterThanOrEqual(1)
  })

  it('renders the bottom bar with copyright and legal links', () => {
    render(<Footer />)

    expect(screen.getByText(/© 2026 Jobfield/)).toBeInTheDocument()
    expect(screen.getAllByRole('link', { name: 'Privacy Policy' }).length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByRole('link', { name: 'Terms of Service' }).length).toBeGreaterThanOrEqual(
      1,
    )
    expect(screen.getAllByRole('link', { name: 'Style Guide' }).length).toBeGreaterThanOrEqual(1)
  })
})
