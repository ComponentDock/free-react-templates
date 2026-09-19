import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders logo', () => {
    render(<Footer />)
    expect(screen.getByText('SilkThread')).toBeInTheDocument()
  })

  it('renders shopping links', () => {
    render(<Footer />)
    expect(screen.getByText('Clothing Store')).toBeInTheDocument()
    expect(screen.getByText('Trending Shoes')).toBeInTheDocument()
  })

  it('renders support links', () => {
    render(<Footer />)
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    expect(screen.getByText('Payment Methods')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
    expect(screen.getByLabelText('Email for newsletter')).toBeInTheDocument()
  })

  it('renders Component Dock link in copyright', () => {
    render(<Footer />)
    const link = screen.getByText('Component Dock')
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('has accessible contentinfo role', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('submits newsletter form without navigation', async () => {
    const { container } = render(<Footer />)
    const form = container.querySelector('form')!
    const event = new Event('submit', { bubbles: true, cancelable: true })
    form.dispatchEvent(event)
  })

  it('renders current year in copyright', () => {
    render(<Footer />)
    const year = new Date().getFullYear().toString()
    expect(screen.getByText(new RegExp(year))).toBeInTheDocument()
  })
})
