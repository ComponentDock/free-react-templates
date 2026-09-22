import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, subtitle and CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /What hurts today makes you stronger/i }),
    ).toBeInTheDocument()
    expect(screen.getByText('Welcome to Fitnest')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Discover More/i })).toBeInTheDocument()
  })

  it('renders the hero section with background image', () => {
    render(<Hero />)
    const heroSection = document.getElementById('home')
    expect(heroSection).toBeInTheDocument()
  })
})
