import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /An Inspiring Built Space/i })).toBeInTheDocument()
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/Where design meets craftsmanship/)).toBeInTheDocument()
  })

  it('renders a CTA button linking to projects', () => {
    render(<Hero />)
    const link = screen.getByRole('link', { name: /View Projects/i })
    expect(link).toHaveAttribute('href', '#projects')
  })

  it('has a background image', () => {
    render(<Hero />)
    const section = screen
      .getByRole('heading', { name: /An Inspiring Built Space/i })
      .closest('section')!
    expect(section.style.backgroundImage).toContain('timber-hero')
  })
})
