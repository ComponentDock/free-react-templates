import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays welcome heading', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Welcome to Compassion')
  })

  it('displays CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: /request a prayer/i })).toBeInTheDocument()
  })

  it('displays subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/A place of faith/)).toBeInTheDocument()
  })

  it('renders with background image style', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')!
    expect(section.style.backgroundImage).toContain('compassion-hero')
  })
})
