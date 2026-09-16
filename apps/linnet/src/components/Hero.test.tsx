import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline and CTA', () => {
    render(<Hero />)
    expect(
      screen.getByRole('heading', { name: /We Provide Creative Business Solutions/i }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Contact Now/i })).toBeInTheDocument()
  })
})
