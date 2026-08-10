import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { copyrightText, creditText, newsletterHeading, socialLabels, socialLinks } from '../data'

describe('Footer', () => {
  it('renders the newsletter, social links and copyright bar', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: newsletterHeading })).toBeInTheDocument()
    for (const name of socialLinks) {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    }
    expect(screen.getByText(copyrightText)).toBeInTheDocument()
    expect(screen.getByText(creditText)).toBeInTheDocument()
  })
})
