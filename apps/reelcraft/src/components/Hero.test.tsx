import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the subtitle, heading, and CTA button', () => {
    render(<Hero />)
    expect(screen.getByText(/For website and video editing/i)).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /Videographer's Portfolio/i })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /See more about us/i })).toBeInTheDocument()
  })

  it('renders pagination dots', () => {
    const { container } = render(<Hero />)
    const dots = container.querySelectorAll('[aria-hidden="true"]')
    expect(dots.length).toBeGreaterThanOrEqual(3)
  })

  it('has the hero section with an ID', () => {
    render(<Hero />)
    expect(document.getElementById('home')).toBeInTheDocument()
  })
})
