import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Get fit with us')
    expect(screen.getByText(/Pilates, Yoga, Fitness, Spinning/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Join Now' })).toBeInTheDocument()
  })

  it('renders the video play link', () => {
    render(<Hero />)
    expect(screen.getByText('See Workout Video')).toBeInTheDocument()
  })
})
