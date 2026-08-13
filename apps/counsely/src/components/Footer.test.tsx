import { describe, it, expect } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import { Footer } from './Footer'
import { brand, contact, practiceAreasLinks } from '../data'

describe('Footer', () => {
  it('renders the brand with the gold tagline', () => {
    render(<Footer />)
    expect(
      screen.getByRole('heading', { level: 2, name: new RegExp(brand.name) }),
    ).toHaveTextContent(brand.tagline)
  })

  it('renders three circular social links', () => {
    render(<Footer />)
    for (const name of ['twitter', 'facebook', 'instagram']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('lists all eight practice areas with arrow icons', () => {
    render(<Footer />)
    const nav = screen.getByRole('navigation', { name: 'Practice areas' })
    for (const label of practiceAreasLinks) {
      expect(within(nav).getByRole('link', { name: new RegExp(label) })).toBeInTheDocument()
    }
  })

  it('shows the contact block with a runtime-built phone link', () => {
    render(<Footer />)
    expect(screen.getByText(contact.address)).toBeInTheDocument()
    const phone = screen.getByRole('link', { name: contact.phone })
    expect(phone).toHaveAttribute('href', 'tel:' + contact.phone.replace(/[^\d+]/g, ''))
    const mail = screen.getByRole('link', { name: contact.email })
    expect(mail).toHaveAttribute('href', 'mailto:' + contact.email)
  })

  it('shows the business hours columns', () => {
    render(<Footer />)
    expect(screen.getByText('Opening Days:')).toBeInTheDocument()
    expect(screen.getByText(contact.openingDays[0])).toBeInTheDocument()
    expect(screen.getByText(contact.openingDays[1])).toBeInTheDocument()
    expect(screen.getByText('Vacations:')).toBeInTheDocument()
    expect(screen.getByText(contact.vacations[0])).toBeInTheDocument()
    expect(screen.getByText(contact.vacations[1])).toBeInTheDocument()
  })

  it('links the copyright bar to Component Dock', () => {
    render(<Footer />)
    expect(screen.getByText(/© 2026 Counsely/)).toBeInTheDocument()
    const dock = screen.getByRole('link', { name: /Component Dock/ })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
