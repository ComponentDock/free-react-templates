import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the heading and subtitle', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { name: /Fitness & Sport/i })).toBeInTheDocument()
    expect(screen.getByText('Join Us Now')).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: /Get Started/i })).toHaveAttribute('href', '#pricing')
  })
})
