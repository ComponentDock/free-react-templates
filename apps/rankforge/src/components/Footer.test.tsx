import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the logo, address, Quick Links, Support, Core Features, social icons, and copyright', () => {
    render(<Footer />)

    expect(screen.getByRole('link', { name: 'RankForge' })).toBeInTheDocument()
    expect(screen.getByText(/123 Street, New York/)).toBeInTheDocument()
    expect(screen.getByText(/info@rankforge.com/)).toBeInTheDocument()

    expect(screen.getByRole('heading', { name: 'Quick Links' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Support' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Core Features' })).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'GitHub' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'X' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toBeInTheDocument()

    expect(
      screen.getByText(new RegExp(`© ${new Date().getFullYear()} RankForge`)),
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: 'Component Dock' })).toHaveAttribute(
      'href',
      'https://www.componentdock.com/',
    )
  })
})
