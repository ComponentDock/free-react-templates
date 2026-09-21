import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MapContact } from './MapContact'

describe('MapContact', () => {
  it('renders city name', () => {
    render(<MapContact />)
    expect(screen.getByText('Brooklyn, NY')).toBeInTheDocument()
  })

  it('renders address', () => {
    render(<MapContact />)
    expect(screen.getByText('123 Sweet Street, Brooklyn, NY 11201')).toBeInTheDocument()
  })

  it('renders email link', () => {
    render(<MapContact />)
    const emailLink = screen.getByText('hello@batterly.com')
    expect(emailLink).toBeInTheDocument()
    expect(emailLink.closest('a')).toHaveAttribute('href', 'mailto:hello@batterly.com')
  })

  it('renders phone link', () => {
    render(<MapContact />)
    const phoneLink = screen.getByText('+1 (555) 234-5678')
    expect(phoneLink).toBeInTheDocument()
    expect(phoneLink.closest('a')).toHaveAttribute('href', 'tel:+1 (555) 234-5678')
  })

  it('renders map iframe', () => {
    render(<MapContact />)
    const iframe = screen.getByTitle('Batterly location')
    expect(iframe).toBeInTheDocument()
  })
})
