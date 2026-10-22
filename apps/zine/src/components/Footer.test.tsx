import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { brandName, creditBrand, creditLabel, creditPrefix, footerSocials } from '../data'

describe('Footer', () => {
  it('shows the Component Dock link, centered logo and social links', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(screen.getByRole('link', { name: creditLabel })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
    expect(screen.getByText(brandName)).toBeInTheDocument()
    for (const name of footerSocials) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('shows the copyright line with the current year and credit', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`${brandName} © ${year}\\.`))).toBeInTheDocument()
    expect(screen.getByText(new RegExp(`${creditPrefix}.*${creditBrand}`, 's'))).toBeInTheDocument()
  })
})
