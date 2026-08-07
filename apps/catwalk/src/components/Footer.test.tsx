import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the three link columns and the questions block', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'About Me' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Popular Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()

    const popular = screen.getByRole('heading', { name: 'Popular Links' }).parentElement!
    for (const label of ['Finding Agency', 'Types of Modeling', 'Freelance', 'Search Models']) {
      expect(within(popular).getByRole('link', { name: label })).toBeInTheDocument()
    }

    const quick = screen.getByRole('heading', { name: 'Quick Links' }).parentElement!
    for (const label of ['About Us', 'Models', 'Blog', 'Terms & Conditions', 'FAQ']) {
      expect(within(quick).getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows the contact details from the original template', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St\. Mountain View/)).toBeInTheDocument()
    expect(screen.getByText(/San Francisco, California, USA/)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'info@yourdomain.com' })).toHaveAttribute(
      'href',
      'mailto:info@yourdomain.com',
    )
  })

  it('renders the copyright line and social links', () => {
    render(<Footer />)
    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument()
    for (const label of ['Facebook', 'Twitter', 'Dribbble', 'Behance']) {
      expect(screen.getByRole('link', { name: label })).toHaveAttribute('target', '_blank')
    }
  })
})
