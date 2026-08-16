import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the brand logo with a blurb', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Pristine home' })).toBeInTheDocument()
    expect(screen.getByText(/professional cleaning company/i)).toBeInTheDocument()
  })

  it('shows Navigation, Services and Contact Us columns', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    for (const label of ['Home', 'About', 'Services', 'Projects', 'Blog', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    for (const label of [
      'Residential cleaning',
      'Commercial cleaning',
      'Window cleaning',
      'Building cleaning',
    ]) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('shows contact details with an address, email and phone', () => {
    render(<Footer />)
    expect(screen.getByText(/Green Lane, Kings Garden/i)).toBeInTheDocument()
    expect(screen.getByText('hello@pristine.example')).toBeInTheDocument()
    expect(screen.getByText('10 (23) 267 3562')).toBeInTheDocument()
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)
    const dockLink = screen.getByRole('link', { name: /Component Dock/i })
    expect(dockLink).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
