import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the hero heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Build Perfect Body Shape/)
    expect(screen.getByRole('link', { name: /Become a Member/i })).toHaveAttribute(
      'href',
      '#contact',
    )
  })

  it('shows the subtitle text', () => {
    render(<Hero />)
    expect(screen.getByText(/With Our Expert Trainers/)).toBeInTheDocument()
  })

  it('shows the video play button', () => {
    render(<Hero />)
    expect(screen.getByRole('button', { name: 'Play video' })).toBeInTheDocument()
  })
})
