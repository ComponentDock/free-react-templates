import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, paragraph and appointment button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /brighter dental care/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/Lorem ipsum dolor sit amet/i)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Make an Appointment/i })).toBeInTheDocument()
  })

  it('renders the dental photo placeholder', () => {
    render(<Hero />)
    const img = document.querySelector('img')
    expect(img).toBeTruthy()
    expect(img?.getAttribute('src')).toContain('picsum.photos')
  })

  it('includes the decorative tooth shape', () => {
    render(<Hero />)
    expect(document.querySelector('[data-testid="hero-tooth"]')).toBeInTheDocument()
  })
})
