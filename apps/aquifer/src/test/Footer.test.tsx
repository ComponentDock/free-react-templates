import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, describe, expect, it, vi } from 'vitest'
import { Footer } from '../components/Footer'
import { CONTACT, FOOTER_COMPANY, FOOTER_SERVICES, FOOTER_SUPPORT } from '../data'

afterEach(() => {
  vi.useRealTimers()
  vi.unstubAllGlobals()
})

describe('Footer', () => {
  it('renders the brand block, the three columns and the newsletter', () => {
    render(<Footer />)

    expect(screen.getByRole('img', { name: 'Aquifer Leak Detection' })).toBeInTheDocument()
    expect(screen.getByText(CONTACT.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: CONTACT.email })).toHaveAttribute(
      'href',
      `mailto:${CONTACT.email}`,
    )

    FOOTER_SERVICES.forEach((label) => {
      expect(screen.getByText(label)).toBeInTheDocument()
    })
    FOOTER_COMPANY.forEach((link) => {
      expect(screen.getByRole('link', { name: link.label })).toHaveAttribute('href', link.target)
    })
    expect(screen.getByRole('heading', { level: 3, name: 'Stay Updated' })).toBeInTheDocument()
  })

  it('renders labels without a destination as text instead of a dead anchor', () => {
    render(<Footer />)

    expect(document.querySelectorAll('a[href="#"]')).toHaveLength(0)

    const privacy = FOOTER_SUPPORT.find((link) => link.label === 'Privacy')
    expect(privacy?.target).toBeNull()
    expect(screen.queryByRole('link', { name: 'Privacy' })).not.toBeInTheDocument()
    expect(screen.getByText('Privacy')).toBeInTheDocument()
    expect(screen.getByText('Terms')).toBeInTheDocument()
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument()
    expect(screen.getByText('Terms of Service')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', '#contact')
  })

  it('points every social tile at a real external destination', () => {
    render(<Footer />)

    const social = screen.getAllByRole('link', { name: /^Aquifer on / })
    expect(social).toHaveLength(3)
    social.forEach((link) => {
      expect(link.getAttribute('href')).toMatch(/^https:\/\//)
      expect(link).toHaveAttribute('rel', 'noreferrer')
    })
  })

  it('carries the house Component Dock credit in the legal bar', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'Made with Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByText('© 2026 Aquifer Leak Detection. All rights reserved.')).toBeVisible()
  })

  it('rejects an empty newsletter submit without navigating', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('This field is required')).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toHaveAttribute('aria-invalid', 'true')
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('rejects a malformed address and clears the error on correction', async () => {
    const user = userEvent.setup()
    render(<Footer />)
    const field = screen.getByLabelText('Email address')

    await user.type(field, 'sam@example')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(field).toHaveAttribute('aria-describedby', 'footer-newsletter-error')
    expect(field).toHaveClass('border-red-500')

    await user.type(field, '.com')

    expect(screen.queryByText('Please enter a valid email address')).toBeNull()
    expect(field).not.toHaveAttribute('aria-invalid', 'true')
  })

  it('subscribes a valid address, clears the field and shows the toast', async () => {
    const user = userEvent.setup()
    render(<Footer />)

    await user.type(screen.getByLabelText('Email address'), 'marta@example.com')
    await user.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByLabelText('Email address')).toHaveValue('')
    expect(screen.getByRole('status')).toHaveTextContent(
      'Subscribed — check your inbox to confirm.',
    )
  })

  it('keeps every column inside its own list', () => {
    render(<Footer />)

    const services = screen.getByRole('heading', { level: 3, name: 'Services' }).parentElement
    expect(within(services as HTMLElement).getAllByRole('listitem')).toHaveLength(
      FOOTER_SERVICES.length,
    )
    const company = screen.getByRole('heading', { level: 3, name: 'Company' }).parentElement
    expect(within(company as HTMLElement).getAllByRole('listitem')).toHaveLength(
      FOOTER_COMPANY.length,
    )
    const support = screen.getByRole('heading', { level: 3, name: 'Support' }).parentElement
    expect(within(support as HTMLElement).getAllByRole('listitem')).toHaveLength(
      FOOTER_SUPPORT.length,
    )
  })
})
