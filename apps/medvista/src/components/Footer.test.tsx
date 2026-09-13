import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the brand name', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Medvista' })).toBeInTheDocument()
  })

  it('renders social links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Google' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })

  it('renders Quick Links', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
  })

  it('renders Departments column', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Departments' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Neurology' })).toBeInTheDocument()
  })

  it('renders Opening Hours', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Opening Hours' })).toBeInTheDocument()
    expect(screen.getByText('Monday - Friday')).toBeInTheDocument()
  })

  it('links to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /Component Dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the copyright year', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })

  it('has a parallax background image', () => {
    render(<Footer />)
    const footer = screen.getByTestId('footer')
    expect(footer.style.backgroundImage).toContain('medvista-footer')
  })
})
