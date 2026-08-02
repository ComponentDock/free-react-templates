import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('shows the site name, tagline, and social links', () => {
    render(<Footer />)
    expect(screen.getByText('Drift')).toBeInTheDocument()
    expect(screen.getByText(/you've drifted off course/i)).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', 'https://github.com')
    expect(screen.getByRole('link', { name: 'X' })).toHaveAttribute('href', 'https://x.com')
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', 'https://linkedin.com')
  })
})
