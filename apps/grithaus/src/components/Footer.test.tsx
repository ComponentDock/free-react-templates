import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { contact, creditHref, creditLabel, footerClasses, socials, testimonials } from '../data'

describe('Footer', () => {
  it('renders the four widgets, six social links and six classes', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByRole('heading', { level: 4, name: 'testimonials' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { level: 4, name: 'Classes' })).toBeInTheDocument()
    expect(within(footer).getByRole('heading', { level: 4, name: 'Contact' })).toBeInTheDocument()

    const socialList = screen.getByRole('list', { name: 'Social links' })
    expect(within(socialList).getAllByRole('link')).toHaveLength(socials.length)

    for (const name of footerClasses) {
      expect(within(footer).getByRole('link', { name })).toHaveAttribute('href', '#services')
    }
    expect(within(footer).getByText(contact.address)).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: contact.phone })).toHaveAttribute(
      'href',
      'tel:+53345795332453',
    )
    expect(within(footer).getByRole('link', { name: contact.email })).toHaveAttribute(
      'href',
      `mailto:${contact.email}`,
    )
    expect(within(footer).getByText(testimonials[0].author)).toBeInTheDocument()
  })

  it('credits Component Dock on the bottom line', () => {
    render(<Footer />)
    const credit = screen.getByRole('link', { name: creditLabel })
    expect(credit).toHaveAttribute('href', creditHref)
    expect(credit.closest('footer')).not.toBeNull()
  })
})
