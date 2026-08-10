import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { footerSocials, madeWithText, socialLabels } from '../data'

describe('Footer', () => {
  it('renders the logo, the copyright bar with a pulsing heart and the Colorlib link', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Rivulet footer logo' })).toBeInTheDocument()
    const year = new Date().getFullYear()
    expect(
      screen.getByText(new RegExp(`© ${year} ${madeWithText.replace('|', '\\|')}`)),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Colorlib' })).toHaveAttribute(
      'href',
      'https://colorlib.com',
    )
  })

  it('renders all social brand links', () => {
    render(<Footer />)
    for (const name of footerSocials) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
  })

  it('renders a back-to-top control', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Back to top' })).toBeInTheDocument()
  })
})
