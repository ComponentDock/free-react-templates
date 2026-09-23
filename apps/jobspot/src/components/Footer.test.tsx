import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByText('JobSpot')).toBeInTheDocument()
  })

  it('renders link columns', () => {
    render(<Footer />)
    expect(screen.getByText('Employers')).toBeInTheDocument()
    expect(screen.getByText('Candidate')).toBeInTheDocument()
    expect(screen.getByText('Account')).toBeInTheDocument()
    expect(screen.getByText('Contact')).toBeInTheDocument()
  })

  it('renders employer links', () => {
    render(<Footer />)
    const cats = screen.getAllByText('Browse Categories')
    expect(cats.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Browse Locations')).toBeInTheDocument()
    const jobs = screen.getAllByText('Browse Jobs')
    expect(jobs.length).toBeGreaterThanOrEqual(1)
  })

  it('renders candidate links', () => {
    render(<Footer />)
    expect(screen.getByText('For Employers')).toBeInTheDocument()
    expect(screen.getByText('Resume Upload')).toBeInTheDocument()
  })

  it('renders account links', () => {
    render(<Footer />)
    expect(screen.getByText('Create Account')).toBeInTheDocument()
    expect(screen.getByText('Sign In')).toBeInTheDocument()
    expect(screen.getByText('My Account')).toBeInTheDocument()
  })

  it('renders contact info', () => {
    render(<Footer />)
    expect(screen.getByText('198 West 21th Street')).toBeInTheDocument()
    expect(screen.getByText('+1 (123) 456-7890')).toBeInTheDocument()
  })

  it('links to componentdock.com', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social icons', () => {
    render(<Footer />)
    const socialLinks = screen.getAllByRole('link', { name: /social/i })
    expect(socialLinks.length).toBe(4)
  })
})
