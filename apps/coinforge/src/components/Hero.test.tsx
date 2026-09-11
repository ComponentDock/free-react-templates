import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('displays heading and CTA buttons', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', {
        name: /Fast Growing ICO Agency/i,
      }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Register for the ICO' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Download Whitepaper' })).toBeInTheDocument()
  })
})
