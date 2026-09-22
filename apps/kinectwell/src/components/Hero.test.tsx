import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'
import { describe, expect, it } from 'vitest'

describe('Hero', () => {
  it('renders the hero headline', () => {
    render(<Hero />)
    expect(screen.getByText(/We Help People to Recover from Injuries/)).toBeInTheDocument()
  })

  it('renders the hero eyebrow', () => {
    render(<Hero />)
    expect(screen.getByText('Welcome to Kinectwell')).toBeInTheDocument()
  })

  it('renders the hero description', () => {
    render(<Hero />)
    expect(screen.getByText(/professional physical therapy services/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /make an appointment/i })).toHaveAttribute(
      'href',
      '#appointment',
    )
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByAltText('Physical therapy session')
    expect(img).toHaveAttribute('src', expect.stringContaining('kinectwell-hero'))
  })
})
