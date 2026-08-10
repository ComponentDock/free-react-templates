import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { brandName, colorlibLabel, creditBrand, creditPrefix, footerSocials } from '../data'

describe('Footer', () => {
  it('shows the Colorlib link, centered logo and social links', () => {
    render(<Footer />)
    const footer = screen.getByRole('contentinfo')
    expect(footer).toBeInTheDocument()
    expect(screen.getByRole('link', { name: colorlibLabel })).toHaveAttribute(
      'href',
      'https://colorlib.com',
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
