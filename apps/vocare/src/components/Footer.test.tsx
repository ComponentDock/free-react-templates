import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand column with about text and social icons', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Vocare Jobboard' })).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    for (const label of ['Twitter', 'Facebook', 'Instagram']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('renders the three link columns with their entries', () => {
    render(<Footer />)
    expect(screen.getByRole('navigation', { name: 'Employers' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Candidate' })).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Account' })).toBeInTheDocument()
    for (const link of [
      'Browse Candidates',
      'Post a Job',
      'Employer Listing',
      'Browse Jobs',
      'Submit Resume',
      'My Account',
      'Create Account',
    ]) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })

  it('renders the contact widget', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(screen.getByText(/203 Fake St. Mountain View/)).toBeInTheDocument()
    expect(screen.getByText('+2 392 3929 210')).toBeInTheDocument()
    expect(screen.getByText('info@yourdomain.com')).toBeInTheDocument()
  })

  it('links the copyright credit to Component Dock', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`Copyright ©${year} All rights reserved`)),
    ).toBeInTheDocument()
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
