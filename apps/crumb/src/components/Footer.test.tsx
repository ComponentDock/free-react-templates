import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'
import { footerCredit, footerCopyright, socialLabels, socialLinks } from '../data'

describe('Footer', () => {
  it('shows labeled social links and the copyright bar', () => {
    render(<Footer />)

    socialLinks.forEach((name) => {
      expect(screen.getByRole('link', { name: socialLabels[name] })).toBeInTheDocument()
    })

    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`Copyright © ${year}`))).toBeInTheDocument()
    expect(screen.getByText(footerCopyright, { exact: false })).toBeInTheDocument()
    expect(screen.getByText(footerCredit, { exact: false })).toBeInTheDocument()
  })
})
