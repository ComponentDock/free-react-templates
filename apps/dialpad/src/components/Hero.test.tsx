import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and description', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Efficiency Booster/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/We deliver exceptional call center solutions/i)).toBeInTheDocument()
  })

  it('shows the subtitle and CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Discover the Colorful World')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Discover Now/i })).toBeInTheDocument()
  })
})
