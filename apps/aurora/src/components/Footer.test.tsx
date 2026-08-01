import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, tagline, and social links', () => {
    render(<Footer />)

    expect(screen.getByText('Aurora')).toBeInTheDocument()
    expect(screen.getByText(/crafting digital experiences/i)).toBeInTheDocument()

    const github = screen.getByRole('link', { name: 'GitHub' })
    expect(github).toHaveAttribute('href', 'https://github.com')
    expect(github).toHaveAttribute('target', '_blank')
    expect(github).toHaveAttribute('rel', 'noreferrer')

    expect(screen.getByRole('link', { name: 'X' })).toHaveAttribute('href', 'https://x.com')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://linkedin.com')
  })
})
