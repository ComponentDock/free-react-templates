import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Reputation, Respect, Result',
    )
  })

  it('renders the subtitle', () => {
    render(<Hero />)
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
  })

  it('renders the CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('link', { name: 'Request a Quote' })).toBeInTheDocument()
  })

  it('has a background image style', () => {
    render(<Hero />)
    const section = document.getElementById('home-section')
    expect(section).toBeTruthy()
    expect(section!.style.backgroundImage).toContain('picsum.photos')
  })
})
