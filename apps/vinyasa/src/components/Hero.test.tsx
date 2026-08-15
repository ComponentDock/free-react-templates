import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from './Hero'

describe('Hero', () => {
  it('shows the brand label, headline with brand-colored accent, and member CTA', () => {
    render(<Hero />)
    expect(screen.getByText('Vinyasa')).toBeInTheDocument()
    const heading = screen.getByRole('heading', { level: 1 })
    expect(heading).toHaveTextContent('to Shape your body')
    expect(heading.querySelector('span')).toHaveTextContent('Shape')
    expect(screen.getByRole('link', { name: 'Become a Member' })).toBeInTheDocument()
  })
})
