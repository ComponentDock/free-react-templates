import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading text', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Our lives in praising God')
  })

  it('renders subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/Join our community in worship/)).toBeInTheDocument()
  })

  it('renders CTA button with correct href', () => {
    render(<Hero />)
    const cta = screen.getByRole('link', { name: /discover more/i })
    expect(cta).toHaveAttribute('href', '#about')
  })

  it('renders background image', () => {
    const { container } = render(<Hero />)
    const bg = container.querySelector('.bg-cover')
    expect(bg).toBeInTheDocument()
  })
})
