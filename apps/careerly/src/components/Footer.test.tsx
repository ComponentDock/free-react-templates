import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Careerly logo', () => {
    render(<Footer />)
    expect(screen.getByText('Career')).toBeDefined()
    expect(screen.getByText('ly')).toBeDefined()
  })

  it('renders about text', () => {
    render(<Footer />)
    expect(screen.getByText(/Careerly connects talented professionals/)).toBeDefined()
  })

  it('renders Quick Links section', () => {
    render(<Footer />)
    expect(screen.getByText('Quick Links')).toBeDefined()
    expect(screen.getByText('About Us')).toBeDefined()
    expect(screen.getByText('Contact')).toBeDefined()
  })

  it('renders For Candidates section', () => {
    render(<Footer />)
    expect(screen.getByText('For Candidates')).toBeDefined()
    expect(screen.getByText('Browse Jobs')).toBeDefined()
    expect(screen.getByText('Browse Categories')).toBeDefined()
  })

  it('renders For Employers section', () => {
    render(<Footer />)
    expect(screen.getByText('For Employers')).toBeDefined()
    expect(screen.getByText('Post a Job')).toBeDefined()
    expect(screen.getByText('Browse Candidates')).toBeDefined()
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeDefined()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toBeDefined()
    expect(link.closest('a')).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
