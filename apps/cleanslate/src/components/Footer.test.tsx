import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { describe, it, expect } from 'vitest'

describe('Footer', () => {
  it('renders brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Clean')).toBeInTheDocument()
    expect(screen.getByText('Slate')).toBeInTheDocument()
  })

  it('renders quick links', () => {
    render(<Footer />)
    const links = ['Home', 'About', 'Services', 'Works', 'Blog', 'Contact']
    for (const link of links) {
      expect(screen.getByText(link)).toBeInTheDocument()
    }
  })

  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText(/203 Fake St/)).toBeInTheDocument()
    expect(screen.getByText(/\+ \(123\) 456 7890/)).toBeInTheDocument()
    expect(screen.getByText(/info@domain\.com/)).toBeInTheDocument()
  })

  it('renders Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByLabelText('Facebook')).toBeInTheDocument()
    expect(screen.getByLabelText('Twitter')).toBeInTheDocument()
    expect(screen.getByLabelText('Instagram')).toBeInTheDocument()
  })

  it('renders latest news section', () => {
    render(<Footer />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(screen.getByText('Benefits of Professional Office Cleaning')).toBeInTheDocument()
  })
})
