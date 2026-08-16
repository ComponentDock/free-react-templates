import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { address, footerLinks, phoneDisplay, phoneHref, socials } from '../data'

describe('Footer', () => {
  it('renders the contact column, brand column and navigation column', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Contact Us' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Navigation' })).toBeInTheDocument()

    const phone = screen.getByRole('link', { name: phoneDisplay })
    expect(phone).toHaveAttribute('href', phoneHref)
    expect(screen.getByText(address)).toBeInTheDocument()

    expect(screen.getByText('Beanery')).toBeInTheDocument()
    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }

    for (const link of footerLinks) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
  })

  it('credits Component Dock in the copyright bar', () => {
    render(<Footer />)
    expect(screen.getByText(/Copyright ©/)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
