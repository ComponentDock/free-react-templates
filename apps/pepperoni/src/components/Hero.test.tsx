import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the hero heading and CTA button', () => {
    render(<Hero />)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Italian Cuisine/i)
    expect(screen.getByRole('link', { name: /Order Now/i })).toHaveAttribute('href', '#menu')
  })
})
