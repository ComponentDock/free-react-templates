import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { Footer } from '../components/Footer'
import { BRAND, FOOTER_COLUMNS, SOCIAL } from '../data'

describe('Footer', () => {
  it('carries the brand block with the light wordmark and the contact details', () => {
    render(<Footer />)

    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText('Kettle')).toHaveClass('text-white')
    expect(within(footer).getByText(BRAND.address)).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: BRAND.phone })).toHaveAttribute(
      'href',
      'tel:5550900900',
    )
    expect(within(footer).getByRole('link', { name: BRAND.email })).toHaveAttribute(
      'href',
      'mailto:office@kettle.example',
    )
  })

  it('links the three social tiles to real destinations', () => {
    render(<Footer />)

    SOCIAL.forEach((social) => {
      const link = screen.getByRole('link', { name: social.label })
      expect(link).toHaveAttribute('href', social.href)
      expect(link).toHaveAttribute('rel', 'noreferrer')
      expect(link).toHaveAttribute('target', '_blank')
    })
  })

  it('renders the three link columns and disables the pages that do not exist', () => {
    render(<Footer />)

    FOOTER_COLUMNS.forEach((column) => {
      expect(screen.getByRole('heading', { name: column.head })).toHaveClass('uppercase')
      column.links.forEach((label) => {
        expect(screen.getAllByText(label).length).toBeGreaterThan(0)
      })
    })

    expect(screen.getByText('Privacy')).toHaveAttribute('aria-disabled', 'true')
    expect(screen.getByText('Terms')).toHaveAttribute('aria-disabled', 'true')
    expect(screen.getByRole('link', { name: 'Service areas' })).toHaveAttribute('href', '#areas')
    expect(screen.getByRole('link', { name: 'Repairs' })).toHaveAttribute('href', '#options')
  })

  it('credits Component Dock in the legal bar', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(screen.getByText(/© 2026 Kettle Water Heaters/)).toBeInTheDocument()
  })

  it('validates the newsletter address before confirming', async () => {
    render(<Footer />)
    const email = screen.getByLabelText('Email address')

    await userEvent.type(email, 'nope')
    await userEvent.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByText('Please enter a valid email address')).toBeInTheDocument()
    expect(email).toHaveAttribute('aria-invalid', 'true')
    expect(email).toHaveAttribute('aria-describedby', 'newsletter-error')
    expect(screen.queryByRole('status')).toBeNull()
  })

  it('requires the address, then clears the field and confirms', async () => {
    render(<Footer />)
    const email = screen.getByLabelText('Email address')

    await userEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByText('This field is required')).toBeInTheDocument()

    await userEvent.type(email, 'reader@example.com')
    await userEvent.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(
      'Subscribed — seasonal reminders, nothing else.',
    )
    expect(email).toHaveValue('')
    expect(screen.queryByText('This field is required')).toBeNull()
  })
})
