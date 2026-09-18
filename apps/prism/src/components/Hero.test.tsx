import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtitle, CTA button, and hero image', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Sleek and Clean/)

    expect(screen.getByText(/Living in today's metropolitan world/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /Creative agency hero/i })).toBeInTheDocument()
  })
})
