import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { footerLegalLinks, footerSocials, socialLabels } from '../data'

describe('Footer', () => {
  it('renders the four social icon links with aria-labels', () => {
    render(<Footer />)
    for (const social of footerSocials) {
      expect(screen.getAllByRole('link', { name: socialLabels[social] }).length).toBeGreaterThan(0)
    }
  })

  it('renders the copyright line with the current year', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`© ${year}`))).toBeInTheDocument()
    expect(screen.getByText(/made with/i)).toBeInTheDocument()
  })

  it('renders the legal links', () => {
    render(<Footer />)
    for (const link of footerLegalLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
  })
})
