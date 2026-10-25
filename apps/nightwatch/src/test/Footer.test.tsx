import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Contact } from '../components/Contact'
import { Footer } from '../components/Footer'
import { CONTACT, FOOTER, site } from '../content'

describe('Contact', () => {
  it('closes on the amber band with a white CTA and a phone outline', () => {
    const { container } = render(<Contact />)

    expect(container.querySelector('#contact')).toHaveClass('bg-primary-700')
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('text-white')
    expect(screen.getByText(CONTACT.lead)).toHaveClass('text-primary-100', 'max-w-xl')

    const primary = screen.getByRole('link', { name: CONTACT.primary })
    expect(primary).toHaveAttribute('href', '#proposal')
    expect(primary).toHaveClass('bg-white', 'text-primary-700', 'px-8', 'py-4')

    const secondary = screen.getByRole('link', { name: CONTACT.secondary })
    expect(secondary).toHaveAttribute('href', 'tel:+15550500500')
    expect(secondary).toHaveClass('border-2', 'border-white/40')
    expect(secondary.querySelector('svg')).toBeTruthy()
  })
})

describe('Footer', () => {
  it('renders the brand, three link columns and the legal bar', () => {
    const { container } = render(<Footer />)
    const footer = container.querySelector('footer') as HTMLElement

    expect(footer).toHaveClass('bg-gray-900', 'pt-16', 'lg:pt-24')
    expect(footer).toHaveTextContent(FOOTER.blurb)
    expect(footer).toHaveTextContent(site.address)
    expect(screen.getByRole('link', { name: site.phone })).toHaveAttribute('href', site.phoneHref)
    expect(screen.getByRole('link', { name: site.email })).toHaveAttribute(
      'href',
      `mailto:${site.email}`,
    )

    FOOTER.columns.forEach((column) => {
      expect(screen.getByRole('heading', { name: column.title })).toHaveClass(
        'text-sm',
        'uppercase',
        'text-white',
      )
      column.links.forEach((link) => {
        expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.href)
      })
    })

    expect(screen.getByText(FOOTER.copyright)).toHaveClass('text-gray-500')
    FOOTER.legal.forEach((link) => {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    })
  })

  it('links Component Dock and leaves no bare hash behind', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('link', { name: /Component Dock/ })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(container.querySelectorAll('a[href="#"]')).toHaveLength(0)
  })

  it('validates the newsletter and confirms a subscribe in place', () => {
    render(<Footer />)
    const field = screen.getByLabelText('Email address')
    const submit = screen.getByRole('button', { name: FOOTER.newsletterCta })

    fireEvent.change(field, { target: { value: 'not-an-email' } })
    fireEvent.click(submit)
    expect(screen.getByText('That email address does not look complete.')).toBeInTheDocument()

    fireEvent.change(field, { target: { value: 'ops@example.com' } })
    fireEvent.click(submit)
    expect(
      screen.getByText('Subscribed. Seasonal reminders only, and one click to leave.'),
    ).toBeInTheDocument()
    expect(field).toHaveValue('')
  })
})
