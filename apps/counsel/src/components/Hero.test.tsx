import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and CTA button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Finest And Strongest Law Firm/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /More About Us/i })).toBeInTheDocument()
  })

  it('renders the background image with an accessible name', () => {
    render(<Hero />)
    expect(screen.getByRole('img', { name: /Law office/i })).toHaveAttribute(
      'src',
      expect.stringContaining('picsum.photos'),
    )
  })
})
