import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from './Footer'

describe('Footer', () => {
  it('renders the Component Dock link', () => {
    render(<Footer />)
    const link = screen.getByRole('link', { name: 'Component Dock' })
    expect(link).toHaveAttribute('href', 'https://www.componentdock.com/')
    expect(link).toHaveAttribute('target', '_blank')
  })

  it('renders copyright with brand name', () => {
    render(<Footer />)
    expect(screen.getByText(/BtnVibe\. All rights/)).toBeInTheDocument()
  })

  it('renders footer navigation links', () => {
    render(<Footer />)
    expect(screen.getByRole('link', { name: 'Showcase' })).toHaveAttribute('href', '#showcase')
    expect(screen.getByRole('link', { name: 'Playground' })).toHaveAttribute('href', '#playground')
  })
})
