import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { FOOTER_LINKS, FOOTER_SERVICES, SOCIALS } from '../data'

describe('Footer', () => {
  it('renders four widget columns with links and contact lines', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: /About Flexly/ })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()

    for (const link of FOOTER_LINKS) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
    for (const service of FOOTER_SERVICES) {
      expect(screen.getByRole('link', { name: service })).toBeInTheDocument()
    }
    for (const { label } of SOCIALS) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
  })

  it('computes mailto and tel hrefs at runtime from display strings', () => {
    render(<Footer />)

    const email = screen.getByRole('link', { name: 'info@flexly.example' })
    expect(email).toHaveAttribute('href', 'mailto:info@flexly.example')

    const phone = screen.getByRole('link', { name: '+1 235 1235 98' })
    expect(phone).toHaveAttribute('href', 'tel:+1235123598')
  })

  it('renders the copyright bar with a Component Dock credit', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(footer).toHaveTextContent(`Copyright ©${new Date().getFullYear()}`)
    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
