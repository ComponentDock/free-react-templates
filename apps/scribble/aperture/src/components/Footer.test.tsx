import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footerCopyright, siteName, socialLinks } from '../data'

describe('Footer', () => {
  it('renders the site name, copyright line, and social links', () => {
    render(<Footer />)
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: siteName })).toHaveAttribute('href', '#home')
    expect(screen.getByText(new RegExp(footerCopyright))).toBeInTheDocument()
    for (const link of socialLinks) {
      expect(screen.getByRole('link', { name: link.label })).toBeInTheDocument()
    }
  })
})
