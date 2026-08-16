import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { footerInfo } from '../data'

describe('Footer', () => {
  it('shows navigation links, contact details, and the support CTA', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: /giveback/i })).toHaveAttribute('href', '#home')
    for (const label of footerInfo.navigation) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByText(footerInfo.address)).toBeInTheDocument()
    expect(screen.getByText(footerInfo.phone)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: footerInfo.email })).toHaveAttribute(
      'href',
      `mailto:${footerInfo.email}`,
    )
    expect(screen.getByRole('link', { name: footerInfo.supportCta })).toHaveAttribute(
      'href',
      '#home',
    )
  })

  it('shows social links and the Component Dock attribution', () => {
    render(<Footer />)
    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    const dock = screen.getByRole('link', { name: 'Component Dock' })
    expect(dock).toHaveAttribute('href', 'https://www.componentdock.com/')
  })
})
