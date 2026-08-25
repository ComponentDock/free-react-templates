import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('Contact')).toBeInTheDocument()
    expect(screen.getByText(/43 Raymouth Rd/)).toBeInTheDocument()
  })

  it('renders phone numbers and email', () => {
    render(<Footer />)
    const phones = screen.getAllByText('+1(123)-456-7890')
    expect(phones.length).toBe(2)
    expect(screen.getByText('info@mydomain.com')).toBeInTheDocument()
  })

  it('renders Sources column', () => {
    render(<Footer />)
    expect(screen.getByText('Sources')).toBeInTheDocument()
    const aboutLinks = screen.getAllByText('About us')
    expect(aboutLinks.length).toBeGreaterThanOrEqual(1)
    expect(screen.getByText('Services')).toBeInTheDocument()
  })

  it('renders Links column', () => {
    render(<Footer />)
    expect(screen.getByText('Links')).toBeInTheDocument()
    expect(screen.getByText('Our Vision')).toBeInTheDocument()
  })

  it('renders social icons', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
  })

  it('renders copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${year}.*Lawguard`))).toBeInTheDocument()
  })

  it('renders Component Dock attribution', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })
})
