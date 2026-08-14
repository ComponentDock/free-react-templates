import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, explore links, socials and copyright bar', () => {
    render(<Footer />)

    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Gallery' })).toHaveAttribute('href', '#home')

    for (const label of ['Home', 'Portfolio', 'About', 'Contact']) {
      expect(screen.getByRole('link', { name: label })).toBeInTheDocument()
    }

    for (const label of ['GitHub', 'X', 'LinkedIn']) {
      const social = screen.getByRole('link', { name: label })
      expect(social).toHaveAttribute('target', '_blank')
      expect(social).toHaveAttribute('rel', 'noreferrer')
    }

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} Gallery`)),
    ).toBeInTheDocument()
  })

  it('credits Component Dock with a link in the copyright bar', () => {
    render(<Footer />)

    const credit = screen.getByRole('link', { name: 'Component Dock' })
    expect(credit).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(credit).toHaveTextContent('Component Dock')
  })
})
