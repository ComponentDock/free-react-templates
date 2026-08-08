import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and CTA button', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { level: 1, name: /Experience Interior Design/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Get Started/i })).toBeInTheDocument()
  })
})
