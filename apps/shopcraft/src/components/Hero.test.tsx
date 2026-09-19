import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('renders heading and CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Flat 75% Off')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent(/It's Happening.*this Season!/s)
    expect(screen.getByRole('link', { name: 'Purchase Now' })).toHaveAttribute('href', '#shop')
  })
})
