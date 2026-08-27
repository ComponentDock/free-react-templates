// fallow-ignore-file unused-file
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders copyright year and Component Dock link', () => {
    render(<Footer />)
    const year = new Date().getFullYear()
    expect(screen.getByText(new RegExp(`©\\s*${year}\\s*Crinkle`))).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'More templates at Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })

  it('styles the link with brand color and hover effects', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'More templates at Component Dock' })
    expect(link.className).toContain('text-brand')
    expect(link.className).toContain('hover:text-black')
    expect(link.className).toContain('hover:underline')
  })
})
