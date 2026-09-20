import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name in heading', () => {
    render(<Footer />)
    const heading = screen.getByRole('heading', { level: 3 })
    expect(heading).toHaveTextContent(/Uni.*well/)
  })

  it('renders quick links', () => {
    render(<Footer />)
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Courses')).toBeInTheDocument()
    expect(screen.getByText('Instructors')).toBeInTheDocument()
    expect(screen.getByText('Events')).toBeInTheDocument()
    // Contact appears both as a quick link and as a section heading
    expect(screen.getAllByText('Contact').length).toBeGreaterThanOrEqual(1)
  })

  it('renders category links', () => {
    render(<Footer />)
    expect(screen.getByText('Web Development')).toBeInTheDocument()
    expect(screen.getByText('Mobile Development')).toBeInTheDocument()
    expect(screen.getByText('Data Science')).toBeInTheDocument()
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('123 Education Ave, Learning City, LC 10001')).toBeInTheDocument()
    expect(screen.getByText('001-1234-88888')).toBeInTheDocument()
    expect(screen.getByText('info@uniwell.edu')).toBeInTheDocument()
  })

  it('renders Component Dock link in bottom bar', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('renders copyright with current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year} Uniwell`))).toBeInTheDocument()
  })
})
