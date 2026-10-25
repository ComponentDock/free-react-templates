import { fireEvent, render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import {
  ADDRESS,
  COMPONENTDOCK_HREF,
  DISPATCH_EMAIL,
  FOOTER_COLUMNS,
  NEWSLETTER_CONFIRMATION,
  PHONE_HREF,
} from '../content'

describe('Footer', () => {
  it('renders the brand block with the address, phone and mailbox', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(within(footer).getByText(ADDRESS)).toBeInTheDocument()
    expect(within(footer).getByRole('link', { name: '(555) 060-0600' })).toHaveAttribute(
      'href',
      PHONE_HREF,
    )
    expect(within(footer).getByRole('link', { name: DISPATCH_EMAIL })).toHaveAttribute(
      'href',
      `mailto:${DISPATCH_EMAIL}`,
    )
    expect(within(footer).getByText('STOKE')).toHaveClass('text-white')
  })

  it('renders the three link columns in the reference order', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    for (const column of FOOTER_COLUMNS) {
      expect(within(footer).getAllByText(column.heading).length).toBeGreaterThan(0)
      for (const link of column.links) {
        expect(within(footer).getAllByRole('link', { name: link.label }).length).toBeGreaterThan(0)
      }
    }
  })

  it('gives the social tiles real external destinations', () => {
    render(<Footer />)
    const facebook = screen.getByRole('link', { name: 'Facebook' })
    expect(facebook).toHaveAttribute('href', 'https://www.facebook.com/')
    expect(facebook).toHaveAttribute('rel', 'noreferrer')
    expect(facebook.querySelector('svg path')?.getAttribute('d')).not.toBe('')
    expect(screen.getByRole('link', { name: 'Instagram' }).querySelector('path')?.getAttribute('d')).not.toBe('')
    expect(screen.getByRole('link', { name: 'LinkedIn' }).querySelector('path')?.getAttribute('d')).not.toBe('')
  })

  it('confirms a newsletter submission without navigating', () => {
    render(<Footer />)
    const email = screen.getByLabelText('Email address')
    expect(email).toHaveAttribute('type', 'email')
    expect(email).toBeRequired()

    fireEvent.change(email, { target: { value: 'neighbour@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))

    expect(screen.getByRole('status')).toHaveTextContent(NEWSLETTER_CONFIRMATION)
    expect(screen.queryByLabelText('Email address')).toBeNull()
  })

  it('links the house credit to Component Dock and closes with the legal bar', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      COMPONENTDOCK_HREF,
    )
    expect(
      screen.getByText('© 2026 Stoke Heating & Cooling. All rights reserved.'),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toHaveAttribute('href', '#contact')
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toHaveAttribute(
      'href',
      '#contact',
    )
  })
})
