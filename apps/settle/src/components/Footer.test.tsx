import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { COPYRIGHT, FOOTER_COLUMNS } from '../data'

describe('Footer', () => {
  it('renders the five link columns and the copyright bar', () => {
    const { container } = render(<Footer />)

    for (const column of FOOTER_COLUMNS) {
      expect(screen.getByRole('heading', { level: 2, name: column.title })).toBeInTheDocument()
      for (const link of column.links) {
        // "Features" duplicates "Quick Links", so some labels appear twice.
        expect(screen.getAllByText(link).length).toBeGreaterThanOrEqual(1)
      }
    }

    expect(screen.getByText(COPYRIGHT)).toBeInTheDocument()

    // Features duplicates Quick Links (source quirk).
    const quickLinks = FOOTER_COLUMNS[1]!.links
    expect(container.querySelectorAll('a[href="#footer"]').length).toBeGreaterThanOrEqual(
      quickLinks.length + 1,
    )
  })

  it('renders three social links and the newsletter form with validation', () => {
    render(<Footer />)

    for (const social of ['github', 'x', 'linkedin']) {
      expect(screen.getByRole('link', { name: social })).toBeInTheDocument()
    }

    const input = screen.getByRole('textbox', { name: 'Email address' })
    expect(input).toHaveAttribute('placeholder', 'Enter email address')

    fireEvent.change(input, { target: { value: 'bad-email' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('alert')).toHaveTextContent('Please enter a valid email address.')

    fireEvent.change(input, { target: { value: 'shopper@example.com' } })
    fireEvent.click(screen.getByRole('button', { name: 'Subscribe' }))
    expect(screen.getByRole('status')).toHaveTextContent('Thank you for subscribing!')
    expect(screen.queryByRole('textbox')).not.toBeInTheDocument()
  })
})
