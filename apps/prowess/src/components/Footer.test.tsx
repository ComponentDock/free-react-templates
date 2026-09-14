import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Prowess brand name', () => {
    render(<Footer />)
    expect(screen.getByText('Prowess')).toBeInTheDocument()
  })

  it('renders the copyright text', () => {
    render(<Footer />)
    expect(screen.getByText(/©.*Prowess Fitness\. All rights reserved/)).toBeInTheDocument()
  })

  it('renders a link to Component Dock', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: /component dock/i })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders the Navigation heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()
  })

  it('renders navigation links', () => {
    render(<Footer />)
    for (const label of ['Home', 'About', 'Programs', 'Pricing', 'Contact']) {
      const links = screen.getAllByText(label)
      expect(links.length).toBeGreaterThanOrEqual(1)
    }
  })

  it('renders the Working Hours heading', () => {
    render(<Footer />)
    expect(screen.getByRole('heading', { name: 'Working Hours' })).toBeInTheDocument()
  })

  it('renders working hours', () => {
    render(<Footer />)
    expect(screen.getByText('Mon - Fri')).toBeInTheDocument()
    expect(screen.getByText('6.00 AM - 10.00 PM')).toBeInTheDocument()
    expect(screen.getByText('Saturday')).toBeInTheDocument()
    expect(screen.getByText('8.00 AM - 6.00 PM')).toBeInTheDocument()
    expect(screen.getByText('Sunday')).toBeInTheDocument()
    expect(screen.getByText('8.00 AM - 2.00 PM')).toBeInTheDocument()
  })

  it('renders social media links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Youtube' })).toBeInTheDocument()
  })

  it('renders the footer landmark', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })

  it('renders the description text', () => {
    render(<Footer />)
    expect(screen.getByText(/push beyond your limits/i)).toBeInTheDocument()
  })
})
