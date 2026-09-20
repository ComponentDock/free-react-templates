import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and subtext', () => {
    render(<Hero />)
    expect(screen.getByText(/gathering of innovation/i)).toBeInTheDocument()
    expect(screen.getByText(/join 500\+ industry leaders/i)).toBeInTheDocument()
  })

  it('renders CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /get your ticket/i })).toHaveAttribute('href', '#cta')
  })

  it('fills viewport height', () => {
    const { container } = render(<Hero />)
    const section = container.querySelector('section')
    expect(section).toHaveClass('h-screen')
  })
})
