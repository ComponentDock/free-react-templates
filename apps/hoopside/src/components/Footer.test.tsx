import { describe, expect, it, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders contact information', () => {
    render(<Footer />)
    expect(screen.getByText('Get in Touch')).toBeInTheDocument()
    expect(screen.getByText('92-94 High St, Oxford OX1 4BJ, England')).toBeInTheDocument()
    expect(screen.getByText('+44 1865 799599')).toBeInTheDocument()
    expect(screen.getByText('Hoopside.support@gmail.com')).toBeInTheDocument()
  })

  it('renders latest news', () => {
    render(<Footer />)
    expect(screen.getByText('Latest News')).toBeInTheDocument()
    expect(screen.getByText('Costa Caribe Wins Championship Title')).toBeInTheDocument()
    expect(screen.getByText('New Season Ticket Packages Available')).toBeInTheDocument()
  })

  it('renders newsletter form', () => {
    render(<Footer />)
    expect(screen.getByText('Subscribe Newsletter')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Your email address')).toBeInTheDocument()
    expect(screen.getByText('Subscribe')).toBeInTheDocument()
  })

  it('prevents default form submission', () => {
    const { container } = render(<Footer />)
    const form = container.querySelector('form')!
    const spy = vi.spyOn(Event.prototype, 'preventDefault')
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }))
    expect(spy).toHaveBeenCalled()
    spy.mockRestore()
  })

  it('renders copyright and Component Dock link', () => {
    render(<Footer />)
    expect(screen.getByText(/2025 Hoopside/)).toBeInTheDocument()
    const dockLink = screen.getByText('Component Dock')
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
