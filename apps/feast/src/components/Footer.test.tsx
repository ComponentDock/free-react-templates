import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { brandName, footerCopyright, footerCredit, navLinks, tagline } from '../data'

describe('Footer', () => {
  it('renders the brand, tagline and social icons', () => {
    render(<Footer />)

    expect(screen.getByText(brandName)).toBeInTheDocument()
    expect(screen.getByText(tagline)).toBeInTheDocument()

    for (const name of ['Pinterest', 'Facebook', 'Twitter', 'Dribbble', 'Behance', 'LinkedIn']) {
      expect(screen.getByRole('link', { name })).toBeInTheDocument()
    }
  })

  it('renders the nav menu and copyright lines', () => {
    render(<Footer />)

    for (const label of navLinks) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }
    expect(screen.getByText(footerCopyright)).toBeInTheDocument()
    expect(screen.getByText(footerCredit)).toBeInTheDocument()
  })
})
