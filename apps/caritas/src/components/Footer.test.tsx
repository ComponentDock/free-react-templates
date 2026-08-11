import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import {
  FOOTER_CAUSES_LINKS,
  FOOTER_TAGLINE,
  NEWSLETTER_BUTTON,
  NEWSLETTER_TITLE,
  WORKING_HOURS,
} from '../data'

describe('Footer', () => {
  it('renders the 4-column layout: brand + hours + socials, causes, gallery, newsletter', () => {
    const { container } = render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Caritas' })).toBeInTheDocument()
    expect(screen.getByText(FOOTER_TAGLINE)).toBeInTheDocument()

    // Working hours.
    expect(screen.getByRole('heading', { name: 'Working Hours' })).toBeInTheDocument()
    for (const row of WORKING_HOURS) {
      expect(screen.getByText(row.days)).toBeInTheDocument()
      expect(screen.getByText(row.hours)).toBeInTheDocument()
    }

    // Social icons (inline SVG brands + Globe substitute).
    for (const label of ['Facebook', 'Twitter', 'Globe', 'Linkedin']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    // Causes links column.
    expect(screen.getByRole('heading', { name: 'Causes' })).toBeInTheDocument()
    for (const label of FOOTER_CAUSES_LINKS) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    // Gallery grid — 8 seeded thumbs (decorative, no img role).
    expect(screen.getByRole('heading', { name: 'Our Gallery' })).toBeInTheDocument()
    const thumbs = container.querySelectorAll('ul li img')
    expect(thumbs).toHaveLength(8)
    expect(thumbs[0]?.getAttribute('src')).toContain('caritas-gallery-1')

    // Newsletter.
    expect(screen.getByRole('heading', { name: NEWSLETTER_TITLE })).toBeInTheDocument()
    expect(screen.getByLabelText('Email address')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: NEWSLETTER_BUTTON })).toBeInTheDocument()
  })

  it('shows inline validation for empty and invalid emails', () => {
    render(<Footer />)

    const input = screen.getByLabelText('Email address')

    // Empty submit → error.
    fireEvent.click(screen.getByRole('button', { name: NEWSLETTER_BUTTON }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)
    expect(input).toHaveAttribute('aria-invalid', 'true')

    // Invalid submit → error persists.
    fireEvent.change(input, { target: { value: 'not-an-email' } })
    fireEvent.click(screen.getByRole('button', { name: NEWSLETTER_BUTTON }))
    expect(screen.getByRole('alert')).toHaveTextContent(/valid email/i)

    // Valid submit → success message, form swapped out.
    fireEvent.change(input, { target: { value: 'donor@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: NEWSLETTER_BUTTON }))
    expect(screen.getByRole('status')).toHaveTextContent(/Thank you for subscribing/i)
    expect(screen.queryByLabelText('Email address')).not.toBeInTheDocument()
  })
})
