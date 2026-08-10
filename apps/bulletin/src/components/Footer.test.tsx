import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'
import { brandEnd, brandStart, copyrightText, footerNavLinks, socials } from '../data'

describe('Footer', () => {
  it('shows the centered wordmark over the hairline, footer nav and social icons', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: `${brandStart}${brandEnd}` })).toBeInTheDocument()
    for (const link of footerNavLinks) {
      expect(screen.getByRole('link', { name: link })).toBeInTheDocument()
    }
    for (const social of socials) {
      expect(screen.getByRole('link', { name: social.label })).toBeInTheDocument()
    }
    expect(screen.getByText(new RegExp(copyrightText.replace('♥', '.*')))).toBeInTheDocument()
  })
})
