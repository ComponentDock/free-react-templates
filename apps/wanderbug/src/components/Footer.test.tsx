import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the four footer columns, social marks and contact details', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveAttribute('id', 'contact')
    expect(footer).toHaveClass('gradient-footer')

    expect(screen.getByRole('heading', { level: 4, name: 'Navigation' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 4, name: 'Contact Us' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Blog' })).toHaveAttribute('href', '#instagram')
    expect(screen.getAllByRole('link', { name: 'Blackforest' })[0]).toHaveAttribute(
      'href',
      '#events',
    )
    expect(screen.getByText('76/A, Green Lane, Dhanmondi, NYC')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'demomail89@gmail.com' })).toHaveAttribute(
      'href',
      'mailto:demomail89@gmail.com',
    )
    expect(screen.getByRole('link', { name: '+10 (78) 738-9083' })).toHaveAttribute(
      'href',
      'tel:+10787389083',
    )
  })

  it('draws four social links with accessible names', () => {
    render(<Footer />)

    const socials = ['Twitter', 'Facebook', 'Linkedin', 'Pinterest']
    socials.forEach((label) => {
      const link = screen.getByRole('link', { name: label })
      expect(link).toHaveAttribute('href', '#contact')
      expect(link.querySelector('svg')).not.toBeNull()
    })
  })

  it('credits Component Dock in the copyright line', () => {
    render(<Footer />)

    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(dock).toHaveAttribute('rel', 'noopener noreferrer')
    expect(screen.getByText(/All rights reserved/)).toBeInTheDocument()
    expect(
      screen.getByText(new RegExp(`Copyright © ${new Date().getFullYear()}`)),
    ).toBeInTheDocument()
  })
})
