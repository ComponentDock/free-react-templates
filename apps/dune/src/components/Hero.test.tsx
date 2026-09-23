import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and description', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Travel More To Discover Yourself/i }),
    ).toBeInTheDocument()
  })

  it('renders the Get Started CTA button', () => {
    render(<Hero />)
    expect(screen.getByText('Get Started')).toBeInTheDocument()
  })

  it('renders the hero image', () => {
    render(<Hero />)
    const img = screen.getByAltText(/scenic travel destination/i)
    expect(img).toBeInTheDocument()
  })
})
