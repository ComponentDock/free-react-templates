import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { footerWidgetColumns, socials } from '../data'

describe('Footer', () => {
  it('renders the accent CTA heading, widget columns, social icons and legal links', () => {
    render(<Footer />)

    expect(screen.getByRole('heading', { name: 'Newsprint Magazine' })).toBeInTheDocument()
    for (const column of footerWidgetColumns) {
      expect(screen.getByRole('heading', { name: column.heading })).toBeInTheDocument()
      for (const link of column.links) {
        // Terms/Privacy also appear in the copyright bar — at least the
        // widget copy must exist.
        expect(screen.getAllByRole('link', { name: link }).length).toBeGreaterThanOrEqual(1)
      }
    }
    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
    // "Terms & Conditions" and "Privacy Policy" appear both as widget links
    // and in the copyright bar.
    expect(screen.getAllByRole('link', { name: 'Terms & Conditions' })).toHaveLength(2)
    expect(screen.getAllByRole('link', { name: 'Privacy Policy' })).toHaveLength(2)
  })

  it('renders the copyright line with the current year', () => {
    render(<Footer />)

    expect(
      screen.getByText(`Copyright © ${new Date().getFullYear()} All rights reserved`),
    ).toBeInTheDocument()
  })
})
