import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the site name, quick links, and contact column', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: /Mane/ })).toHaveAttribute('href', '#home')
    expect(screen.getByRole('heading', { name: 'Information' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Have a Questions?' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toHaveAttribute('href', '#home')
  })

  it('shows social links for GitHub, X, and LinkedIn', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()
  })
})
