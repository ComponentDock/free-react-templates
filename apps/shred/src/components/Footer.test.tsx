import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { FOOTER_CONTACT, FOOTER_LINKS, FOOTER_SERVICES, BRAND } from '../data'

describe('Footer', () => {
  it('renders the black footer with four columns', () => {
    render(<Footer />)

    const footer = document.querySelector('footer')!
    expect(footer).toHaveClass('bg-ink')

    expect(
      screen.getByRole('heading', { level: 3, name: new RegExp(`About ${BRAND}`) }),
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Services' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Have a Questions?' })).toBeInTheDocument()
  })

  it('renders the link and service columns with their entries', () => {
    render(<Footer />)

    for (const link of FOOTER_LINKS) {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
    }
    for (const service of FOOTER_SERVICES) {
      expect(screen.getByText(service)).toBeInTheDocument()
    }
  })

  it('renders the contact widget with address, phone and email', () => {
    render(<Footer />)

    expect(screen.getByText(FOOTER_CONTACT.address)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_CONTACT.phone)).toBeInTheDocument()
    expect(screen.getByText(FOOTER_CONTACT.email)).toBeInTheDocument()
  })

  it('renders the copyright row with the Component Dock credit link', () => {
    render(<Footer />)

    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`Copyright © ${year} All rights reserved`)),
    ).toBeInTheDocument()

    const credit = screen.getByRole('link', { name: /Component Dock/ })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
  })

  it('renders circular social icon links', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Twitter' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Instagram' })).toBeInTheDocument()
  })
})
