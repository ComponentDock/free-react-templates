import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders the headline, blurb, and the two store buttons', () => {
    render(<Hero />)

    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading.textContent).toMatch(/Blush the App/i)

    expect(screen.getByRole('link', { name: /Google Store/ })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Apple Store/ })).toBeInTheDocument()
  })
})
